"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { CartProvider } from "@/context/CartContext";
import AdBanner from "@/components/home/AdBanner/AdBanner";
import Footer from "@/components/shared/Footer/Footer";
import { Toaster } from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <AdBanner />
            <main>{children}</main>
            <Footer />
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  borderRadius: '15px',
                  background: '#e51515',
                  color: '#fff',
                  fontSize: '15px',
                  padding: '15px 16px',
                },
                iconTheme: {
                  primary: '#e51515',
                  secondary: '#fff',
                },
              }}
            />
          </CartProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
