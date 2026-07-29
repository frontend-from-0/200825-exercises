import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { QuotesContextProvider } from "@/app/QuotesContext";
import { TopNav } from "@/app/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Random Quotes Application",
  description: "Random Quotes Application 200825",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem("theme");
                const prefersDark = window.matchMedia(
                  "(prefers-color-scheme: dark)"
                ).matches;

                const shouldUseDark =
                  savedTheme === "dark" ||
                  (!savedTheme && prefersDark);

                document.documentElement.classList.toggle(
                  "dark",
                  shouldUseDark
                );
              } catch {}
            `,
          }}
        />
      </head>

      <body className="flex min-h-svh flex-col bg-background text-foreground">
        <QuotesContextProvider>
          <TopNav />
          {children}
        </QuotesContextProvider>
      </body>
    </html>
  );
}
