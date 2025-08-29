"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

import AdBanner from "@/components/home/AdBanner/AdBanner";
import Footer from "@/components/shared/Footer/Footer";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();

  const hideFooter = pathname.startsWith("/checkout") || pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <WishlistProvider>
              <AdBanner />
              <main>{children}</main>
              {!hideFooter && <Footer />}
              <Toaster
                position="top-right"
                toastOptions={{
                  duration: 3000,
                  style: {
                    borderRadius: "15px",
                    background: "#e51515",
                    color: "#fff",
                    fontSize: "15px",
                    padding: "15px 16px",
                  },
                  iconTheme: {
                    primary: "#e51515",
                    secondary: "#fff",
                  },
                }}
              />
            </WishlistProvider>
          </CartProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
