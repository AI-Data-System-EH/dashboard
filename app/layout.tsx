import Nav from "@/components/layout/nav";
import { ThemeProvider } from "@/lib/theme-provider";
import type { Metadata } from "next";
import { Suspense } from "react";
import { inter, pretendard, sfPro } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "heensan",
    description: "IoT Solutions & Intelligent Connectivity",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="kr" className="scroll-smooth">
            <body
                className={`
                    ${sfPro.variable} ${inter.variable} ${pretendard.variable}
                    bg-heensan-gray text-zinc-900
                    dark:bg-zinc-900 dark:text-zinc-100
                `}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <>
                        {/* Background gradient */}
                        <div
                            className="-z-10 fixed h-screen w-full bg-gradient-to-br
                            from-zinc-200 via-off-white to-stone-400
                            dark:from-zinc-950 dark:via-matte-black dark:to-stone-900
                            "
                        />
                        {/* Navigation */}
                        <Suspense fallback="...">
                            <Nav />
                        </Suspense>
                        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
                            {children}
                        </main>
                    </>
                </ThemeProvider>
            </body>
        </html>
    );
}
