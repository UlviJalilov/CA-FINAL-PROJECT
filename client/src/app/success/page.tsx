"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();
  const [orderData, setOrderData] = useState<Order | null>(null);

  type Order = {
    id: string;
    total: number;
    
  };
  useEffect(() => {
    localStorage.removeItem("cartItems");

    const order = sessionStorage.getItem("lastOrder");
    if (order) {
      setOrderData(JSON.parse(order));
      sessionStorage.removeItem("lastOrder");
    } else {
      router.push("/");
    }
  }, [router]); 

  if (!orderData) return null;

  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20 bg-gray-50">
      <div className="text-center max-w-2xl mx-auto bg-white p-10 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Təşəkkür edirik!</h1>
        <p className="text-lg text-gray-700 mb-6">Sifarişiniz uğurla tamamlandı.</p>

        <div className="text-left mb-4 space-y-2 text-sm">
          <p><strong>Sifariş nömrəsi:</strong> #{orderData?.id}</p>
          <p><strong>Ümumi məbləğ:</strong> ${orderData?.total}</p>
        </div>

        <button
          onClick={() => router.push("/")}
          className="bg-black text-white py-2 px-5 rounded hover:bg-gray-800 transition"
        >
          Ana Səhifəyə qayıt
        </button>
      </div>
    </section>
  );
}
