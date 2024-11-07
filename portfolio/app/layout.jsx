import { Outfit } from "next/font/google";
// https://ui.shadcn.com/docs/components/accordion -> all the ui components inside ui folder is npm installed from here
// https://www.radix-ui.com/icons -> All icons installed from here 
import "./globals.css";

//components
import Footer from "@/components/Footer";
import Header from "@/components/Header";

//themes
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Yeshika Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={outfit.className}>
        <ThemeProvider attribute='class' default='dark' >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
