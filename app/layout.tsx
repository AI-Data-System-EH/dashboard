import type { Metadata } from "next";
import { Borel, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

//#region Font

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["400", "700"],
});

const borel = Borel({
    subsets: ["latin"],
    variable: "--font-borel",
    weight: ["400"],
});

const pretendard = localFont({
    src: "../fonts/PretendardVariable.woff2",
    display: "swap",
    weight: "45 930",
    variable: "--font-pretendard",
});

//#endregion

export const metadata: Metadata = {
    title: "heensan",
    description: "IoT Solutions & Intelligent Connectivity",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="kr">
            <body className={`${inter.variable} ${pretendard.variable} m-10`}>{children}</body>
        </html>
    );
}
