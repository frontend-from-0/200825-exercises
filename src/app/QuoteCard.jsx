import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { H3 } from "@/components/typography/H3";

export function QuoteCard({
  handleLikeQuote,
  isLiked,
  handleUnlikeQuote,
  quote,
  author,
  handleQuoteIndexUpdate,
  
}) {
  return (
    <Card size="lg" className="mx-auto w-full max-w-sm">
      <CardContent className={"flex flex-col"}>
        <div className="self-end">
          {isLiked ? (
            <Button variant={"icon"} onClick={handleUnlikeQuote}>
              ❤️ Liked
            </Button>
          ) : (
            <Button variant={"icon"} onClick={handleLikeQuote}>
              🤍 Like
            </Button>
          )}
        </div>

        <H3 element="p">"{quote}"</H3>

        <span className="text-md font-semibold text-muted-foreground self-end">
          - {author}
        </span>

        <div className="mt-8 flex flex-col">
          <Button
            variant="default"
            className="w-full"
            onClick={handleQuoteIndexUpdate}
          >
            Next Quote
          </Button> 
        </div>
      </CardContent>
    </Card>
  );
}

{/* I am just trying to fix commit&push problem. That's why i am writing tihs command in here. */}