import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"]
})

export const metadata = {
  title: {
    template: "%s | SwapHub",
    default: "SwapHub"
  },
  description: "En app til at bytte ting med andre",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={`${inter.variable}`}>
        <Header />
        <main className="main">
        {children}
        </main>
         <Footer />
      </body>
    </html>
  );
}
