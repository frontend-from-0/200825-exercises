"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ThemeToggle } from "@/components/ThemeToggle";

const appRoutes = [
  {
    name: "Home",
    url: "/",
    protectedPage: false,
  },
  {
    name: "Liked Quotes",
    url: "/user/quotes/liked",
    protectedPage: true,
  },
];

export function TopNav() {
  const { user, isLoading } = useUser();
  const pathname = usePathname();

  if (isLoading) {
    return null;
  }

  const baseLinkClassName = [
    "flex h-11 w-full items-center justify-center rounded-xl px-3",
    "whitespace-nowrap text-sm font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-ring focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
  ].join(" ");

  function getLinkClassName(url: string) {
    const isActive = pathname === url;

    return [
      baseLinkClassName,
      isActive
        ? "bg-primary text-primary-foreground shadow-sm"
        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
    ].join(" ");
  }

  return (
    <header className="w-full border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-start gap-2 px-4 py-3 sm:items-center sm:px-6">
        <nav
          aria-label="Main navigation"
          className="grid min-w-0 flex-1 grid-cols-2 gap-2 min-[540px]:grid-cols-4"
        >
          {appRoutes.map(({ name, url, protectedPage }) => {
            if (protectedPage && !user) {
              return null;
            }

            return (
              <Link key={name} href={url} className={getLinkClassName(url)}>
                {name}
              </Link>
            );
          })}

          {user ? (
            <>
              <Link
                href="/user/quotes/new"
                className={getLinkClassName("/user/quotes/new")}
              >
                Add a quote
              </Link>

              <a
                href="/auth/logout"
                className={[
                  baseLinkClassName,
                  "text-muted-foreground",
                  "hover:bg-destructive/10 hover:text-destructive",
                ].join(" ")}
              >
                Log out
              </a>
            </>
          ) : (
            <a
              href="/auth/login"
              className={[
                baseLinkClassName,
                "text-muted-foreground",
                "hover:bg-accent hover:text-accent-foreground",
              ].join(" ")}
            >
              Log in
            </a>
          )}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
