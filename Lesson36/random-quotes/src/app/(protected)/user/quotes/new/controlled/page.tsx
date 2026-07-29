"use client";

import { useState } from "react";

import { H3 } from "@/components/typography/H3";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Not used very offten in NextJS but may be needed for complex logic, e.g. like prefilling dropdowns with information you pull form API while user is filling the form - User selects country, then you update city dropdown to only show cities in that country

export default function ControlledFormExample() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <main className="flex w-full flex-1 items-center justify-center bg-muted/50 px-4 py-8 sm:px-6">
      <Card className="w-full max-w-lg border-border bg-card text-card-foreground shadow-sm">
        <CardContent className="flex flex-col gap-6 px-5 py-7 sm:px-7">
          <div className="flex flex-col gap-1">
            <H3 element="h1">Controlled Form Example</H3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              The input values are controlled by React state.
            </p>
          </div>

          <form
            className="flex flex-col gap-5"
            onSubmit={(event) => {
              event.preventDefault();

              console.log({
                quote,
                author,
              });
            }}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="quote"
                className="text-sm font-medium text-foreground"
              >
                Quote
              </label>

              <input
                id="quote"
                name="quote"
                type="text"
                value={quote}
                onChange={(event) => {
                  setQuote(event.target.value.toUpperCase());
                }}
                placeholder="Enter a quote"
                required
                className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground shadow-xs outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="author"
                className="text-sm font-medium text-foreground"
              >
                Author
              </label>

              <input
                id="author"
                name="author"
                type="text"
                value={author}
                onChange={(event) => {
                  setAuthor(event.target.value);
                }}
                placeholder="Enter the author"
                required
                className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground shadow-xs outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/20"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={!quote.trim() || !author.trim()}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
