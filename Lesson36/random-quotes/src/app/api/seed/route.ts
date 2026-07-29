import { NextResponse } from "next/server";
import { Collections, getDb } from "@/lib/db";
import { quotes } from "@/quotes";

export async function GET() {
  try {
    const db = await getDb();
    const collection = db.collection(Collections.quotes);

    const existingQuotesCount = await collection.countDocuments();

    if (existingQuotesCount >= quotes.length) {
      return NextResponse.json({
        success: false,
        message: "Quotes have already been seeded.",
      });
    }

    const now = new Date();

    const seedQuotes = quotes.map((quote) => ({
      quote: quote.quote,
      author: quote.author,
      likedBy: 0,
      likeCount: 0,
      adminApproved: true,
      createdAt: now,
      updatedAt: now,
    }));

    await collection.insertMany(seedQuotes);

    return NextResponse.json({
      success: true,
      message: "Quotes have been seeded successfully.",
      insertedCount: seedQuotes.length,
    });
  } catch (error) {
    console.error("Seed error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while seeding quotes.",
        error: error.message,
      },
      { status: 500 },
    );
  }
}
