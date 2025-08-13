"use client";

import { useEffect, useState } from "react";
import { useCarProducts } from "@/admin/carProducts/hook/useCarProducts";
import { useFeaturedProducts } from "@/hooks/useFeaturedProducts";

export default function AdminDashboardPage() {
  const [orders, setOrders] = useState([]);
  const { data: carProducts = [] } = useCarProducts();
  const { data: featuredProducts = [] } = useFeaturedProducts();


  interface Order {
    _id: string;
    orderId?: string;
    email: string;
    total: number;
    createdAt: string;
  }

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
          cache: "no-store",
        });
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    getOrders();
  }, []);

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#A78BFA] drop-shadow-lg">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <StatCard
          title="Total Orders"
          value={orders.length}
        />
        <StatCard
          title="Total Products"
          value={carProducts.length}
        />
        <StatCard
          title="Featured Products"
          value={featuredProducts.length}
        />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">Recent Orders</h2>
        <div className="overflow-x-auto rounded-lg shadow-md bg-gradient-to-r from-[#0b0f1e] to-[#101728] text-gray-200">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gradient-to-r from-[#4FD1C5] to-[#A78BFA] text-white">
              <tr>
                <th className="py-3 px-4 font-medium">Order ID</th>
                <th className="py-3 px-4 font-medium">Email</th>
                <th className="py-3 px-4 font-medium">Total</th>
                <th className="py-3 px-4 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((order: Order, idx) => (
                <tr
                  key={order._id}
                  className={
                    idx % 2 === 0
                      ? "bg-[#111827] hover:bg-[#1e293b] transition-colors"
                      : "bg-[#0f172a] hover:bg-[#1e293b] transition-colors"
                  }
                >
                  <td className="py-3 px-4">{order.orderId || order._id.slice(-5)}</td>
                  <td className="py-3 px-4">{order.email}</td>
                  <td className="py-3 px-4">${(order.total / 100).toFixed(2)}</td>
                  <td className="py-3 px-4">{new Date(order.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}

const StatCard = ({ title, value }: { title: string; value: number }) => (
  <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] p-6 rounded-xl shadow-lg shadow-[#7f63f4]/50 hover:shadow-[#FFD700]/60 transition-all duration-300">
    <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#A78BFA] drop-shadow-md">
      {title}
    </h3>
    <p className="text-3xl font-bold mt-2 text-white">{value}</p>
  </div>
);
