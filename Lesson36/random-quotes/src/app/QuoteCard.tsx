"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { H3 } from "@/components/typography/H3";

interface QuoteCardProps {
  quote: string;
  author: string;
  likeCount: number;
  handleLikeQuote: () => Promise<void>;
  handleQuoteIndexUpdate: () => void;
}

export function QuoteCard({
  quote,
  author,
  likeCount,
  handleLikeQuote,
  handleQuoteIndexUpdate,
}: QuoteCardProps) {
  const [isLiking, setIsLiking] = useState(false);

  async function handleLikeClick() {
    if (isLiking) {
      return;
    }

    try {
      setIsLiking(true);
      await handleLikeQuote();
    } finally {
      setIsLiking(false);
    }
  }

  return (
    <Card
      size="lg"
      className="mx-auto w-full max-w-sm border-border bg-card text-card-foreground shadow-lg shadow-foreground/5"
    >
      <CardContent className="flex flex-col gap-5 px-6 py-7 text-center sm:px-8">
        <div className="self-end">
          <Button
            type="button"
            variant="ghost"
            className="text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={handleLikeClick}
            disabled={isLiking}
            aria-label="Like this quote"
            aria-busy={isLiking}
          >
            {isLiking ? "Saving..." : `❤️ ${likeCount}`}
          </Button>
        </div>

        <H3 element="p">{quote}</H3>

        <span className="self-end text-right text-sm font-medium text-muted-foreground">
          - {author}
        </span>

        <div className="mt-2 flex flex-col">
          <Button
            type="button"
            className="w-full shadow-sm transition-transform active:scale-[0.98]"
            onClick={handleQuoteIndexUpdate}
            disabled={isLiking}
          >
            Next Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
