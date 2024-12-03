import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GABARITA A.I.",
  description: "Resumos e exercícios personalizados com inteligência artificial para te ajudar a conquistar sua nota 10!",
  keywords: ["Gemini", "Alura", "Estudar", "Resumos", "Exercícios", "Inteligência Artificial", "Google", "Generative AI"],
  openGraph: {
    images: '/preview.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-between min-h-screen bg-gradient-to-r from-[#2675B3] to-[#060E3D] min-h-screen">
          {children}
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
