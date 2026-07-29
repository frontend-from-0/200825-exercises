"use client";

import {
  createContext,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

import { Quote } from "@/types/quotes";
import { getRandomNumber } from "@/utils/helper-functions";

interface QuotesContextInterface {
  quotes: Quote[];
  quoteIndex: number;
  currentQuote?: Quote;
  likedQuotes: Quote[];
  isLoading: boolean;
  error: string | null;
  handleQuoteIndexUpdate: () => void;
  handleLikeQuote: () => Promise<void>;
  handleUnlikeQuote: (quoteText: string) => Promise<void>;
}

const InitialQuotesContext: QuotesContextInterface = {
  quotes: [],
  quoteIndex: 0,
  currentQuote: undefined,
  likedQuotes: [],
  isLoading: true,
  error: null,
  handleQuoteIndexUpdate: () => {},
  handleLikeQuote: async () => {},
  handleUnlikeQuote: async () => {},
};

function normalizeQuote(quote: Quote): Quote {
  const likedBy = Array.isArray(quote.likedBy) ? quote.likedBy : [];

  return {
    ...quote,
    likedBy,
    likeCount: likedBy.length,
  };
}

export const QuotesContext =
  createContext<QuotesContextInterface>(InitialQuotesContext);

export function QuotesContextProvider({ children }: { children: ReactNode }) {
  const { user } = useUser();

  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentQuote = quotes[quoteIndex];

  const likedQuotes = useMemo(() => {
    if (!user?.sub) {
      return [];
    }

    return quotes.filter((quote) => quote.likedBy.includes(user.sub));
  }, [quotes, user?.sub]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/quotes");

        if (!response.ok) {
          throw new Error("Failed to load quotes");
        }

        const data = await response.json();

        const normalizedQuotes: Quote[] = data.quotes.map((quote: Quote) =>
          normalizeQuote(quote),
        );

        setQuotes(normalizedQuotes);
        setQuoteIndex(0);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load quotes");

        setQuotes([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  function handleQuoteIndexUpdate() {
    if (quotes.length <= 1) {
      return;
    }

    let nextIndex = quoteIndex;

    while (nextIndex === quoteIndex) {
      nextIndex = getRandomNumber(0, quotes.length - 1);
    }

    setQuoteIndex(nextIndex);
  }

  async function handleLikeQuote() {
    if (!user?.sub || !currentQuote) {
      return;
    }

    if (currentQuote.likedBy.includes(user.sub)) {
      return;
    }

    try {
      setError(null);

      const response = await fetch(`/api/quotes/${currentQuote._id}/like`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "like",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message ?? "Failed to like quote");
      }

      const updatedQuote = normalizeQuote(data.quote as Quote);

      setQuotes((currentQuotes) =>
        currentQuotes.map((quote) =>
          quote._id === updatedQuote._id ? updatedQuote : quote,
        ),
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to like quote");
    }
  }

  async function handleUnlikeQuote(quoteText: string) {
    if (!user?.sub) {
      return;
    }

    const quoteToUnlike = quotes.find((quote) => quote.quote === quoteText);

    if (!quoteToUnlike) {
      return;
    }

    if (!quoteToUnlike.likedBy.includes(user.sub)) {
      return;
    }

    try {
      setError(null);

      const response = await fetch(`/api/quotes/${quoteToUnlike._id}/like`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "unlike",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message ?? "Failed to unlike quote");
      }

      const updatedQuote = normalizeQuote(data.quote as Quote);

      setQuotes((currentQuotes) =>
        currentQuotes.map((quote) =>
          quote._id === updatedQuote._id ? updatedQuote : quote,
        ),
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to unlike quote");
    }
  }

  return (
    <QuotesContext.Provider
      value={{
        quotes,
        quoteIndex,
        currentQuote,
        likedQuotes,
        isLoading,
        error,
        handleQuoteIndexUpdate,
        handleLikeQuote,
        handleUnlikeQuote,
      }}
    >
      {children}
    </QuotesContext.Provider>
  );
}
