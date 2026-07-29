"use client";

import { useContext } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

import { QuotesContext } from "@/app/QuotesContext";
import { QuoteCard } from "@/app/QuoteCard";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const {
    quotes,
    quoteIndex,
    isLoading,
    error,
    handleQuoteIndexUpdate,
    handleLikeQuote,
  } = useContext(QuotesContext);

  const { user, isLoading: isUserLoading } = useUser();

  if (isLoading || isUserLoading) {
    return (
      <main className="flex w-full flex-1 items-center justify-center px-4">
        <p role="status" className="text-sm text-muted-foreground">
          Loading…
        </p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex w-full flex-1 items-center justify-center bg-muted/40 px-4 py-10 sm:px-6">
        <Card className="w-full max-w-md border-border bg-card text-card-foreground shadow-lg">
          <CardContent className="flex flex-col items-center gap-6 px-6 py-9 text-center sm:px-9">
            <div
              aria-hidden="true"
              className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-3xl font-semibold text-primary"
            >
              ❝
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Discover quotes worth remembering
              </h1>

              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Explore inspiring quotes, save your favorites, and build a
                personal collection you can return to anytime.
              </p>
            </div>

            <p className="rounded-xl bg-muted px-4 py-3 text-sm font-medium text-muted-foreground">
              Log in from the navigation menu to get started.
            </p>
          </CardContent>
        </Card>
      </main>
    );
  }

  const currentQuote = quotes[quoteIndex];

  if (!currentQuote) {
    return (
      <main className="flex w-full flex-1 items-center justify-center px-4">
        <p className="text-center text-muted-foreground">
          No quotes yet. Add one or approve quotes in the database.
        </p>
      </main>
    );
  }

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center gap-4 bg-background px-4 py-8 sm:px-6">
      {error && (
        <p
          role="alert"
          className="w-full max-w-sm rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {error}
        </p>
      )}

      <QuoteCard
        handleLikeQuote={handleLikeQuote}
        likeCount={currentQuote.likeCount ?? 0}
        quote={currentQuote.quote}
        author={currentQuote.author}
        handleQuoteIndexUpdate={handleQuoteIndexUpdate}
      />
    </main>
  );
}
