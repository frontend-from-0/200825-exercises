import { Collections, getDb } from "@/lib/db";
import { Quote } from "@/types/quotes";

export async function GET() {
  try {
    const db = await getDb();
    const collection = db.collection<Quote>(Collections.quotes);

    const quotes = await collection.find({ adminApproved: true }).toArray();

    const normalizedQuotes = quotes.map((quote) => {
      const likedBy = Array.isArray(quote.likedBy) ? quote.likedBy : [];

      return {
        ...quote,
        _id: quote._id.toString(),
        likedBy,
        likeCount: likedBy.length,
      };
    });

    return Response.json({
      quotes: normalizedQuotes,
    });
  } catch (error) {
    console.error("GET quotes error:", error);

    return Response.json(
      {
        message: "Failed to load quotes.",
        quotes: [],
      },
      {
        status: 500,
      },
    );
  }
}
