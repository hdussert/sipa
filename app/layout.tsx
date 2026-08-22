import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";

const robotoSlabHeading = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIPA - Société Industrielle de Peinture Antillaise",
  description:
    "Spécialistes Antilles-Guyane de la préparation de surfaces, la protection anticorrosion et les travaux industriels de peinture pour les secteurs de l'industrie lourde, de l'énergie, du pétrole, du stockage, des infrastructures portuaires et du maritime.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        robotoSlabHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-zinc-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
