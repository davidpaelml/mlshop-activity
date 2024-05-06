import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SubLayout from "./sub-layout";
import NoteProvider from "@/contexts/NoteProvider";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "500"] });

export const metadata: Metadata = {
  title: "ML Activity",
  description: "Created by MLShop Team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen`}>
        <NoteProvider>
          <SubLayout>
            {children}
          </SubLayout>
        </NoteProvider>

      </body>
    </html>
  );
}
