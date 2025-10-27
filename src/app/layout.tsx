import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import MobileNav from "@/components/navigation/mobile-nav";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"], // You can adjust or add more
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yousiefaz | Frontend Developer",
  description:
    "Frontend Developer crafting efficient, user-focused web solutions with clean design and smart functionality.",
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
      className="selection:bg-primary selection:text-white"
    >
      <body
        className={cn(
          "relative text-muted-foreground font-sans",
          raleway.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MobileNav />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
