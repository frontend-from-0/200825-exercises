import { Collections, getDb } from "@/lib/db";
import { auth0 } from "@/lib/auth0";
import { ObjectId } from "mongodb";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function PATCH(request: Request, context: RouteContext) {
  try {
    const session = await auth0.getSession();

    if (!session?.user?.sub) {
      return Response.json(
        {
          message: "You must be logged in to update a quote.",
        },
        {
          status: 401,
        },
      );
    }

    const { id } = await context.params;

    if (!ObjectId.isValid(id)) {
      return Response.json(
        {
          message: "Invalid quote ID.",
        },
        {
          status: 400,
        },
      );
    }

    const body = await request.json();
    const action = body.action;

    if (action !== "like" && action !== "unlike") {
      return Response.json(
        {
          message: 'Action must be either "like" or "unlike".',
        },
        {
          status: 400,
        },
      );
    }

    const db = await getDb();
    const quotesCollection = db.collection(Collections.quotes);

    const quoteId = new ObjectId(id);
    const userId = session.user.sub;

    const update =
      action === "like"
        ? { $addToSet: { likedBy: userId } }
        : ({ $pull: { likedBy: userId } } as any);

    const result = await quotesCollection.updateOne(
      {
        _id: quoteId,
        adminApproved: true,
      },
      update,
    );

    if (result.matchedCount === 0) {
      return Response.json(
        {
          message: "Quote not found.",
        },
        {
          status: 404,
        },
      );
    }

    const updatedQuote = await quotesCollection.findOne({
      _id: quoteId,
      adminApproved: true,
    });

    if (!updatedQuote) {
      return Response.json(
        {
          message: "Quote not found.",
        },
        {
          status: 404,
        },
      );
    }

    const likedBy = Array.isArray(updatedQuote.likedBy)
      ? updatedQuote.likedBy
      : [];

    await quotesCollection.updateOne(
      {
        _id: quoteId,
      },
      {
        $set: {
          likeCount: likedBy.length,
          updatedAt: new Date().toISOString(),
        },
      },
    );

    return Response.json({
      success: true,
      quote: {
        ...updatedQuote,
        _id: updatedQuote._id.toString(),
        likedBy,
        likeCount: likedBy.length,
      },
    });
  } catch (error) {
    console.error("Like API error:", error);

    return Response.json(
      {
        message: "Failed to update quote.",
      },
      {
        status: 500,
      },
    );
  }
}
