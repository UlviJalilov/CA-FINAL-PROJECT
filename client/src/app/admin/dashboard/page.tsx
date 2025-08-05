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
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Total Orders" value={orders.length} />
        <StatCard title="Total Products" value={carProducts.length} />
        <StatCard title="Featured Products" value={featuredProducts.length} />


      </div>


      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto rounded-lg shadow-md bg-white">
          <table className="min-w-full text-left text-gray-700 text-sm">
            <thead className="bg-green-600 text-white">
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
                  className={idx % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "bg-white hover:bg-gray-100"}
                >
                  <td className="py-3 px-4">{order.orderId || order._id.slice(-5)}</td>
                  <td className="py-3 px-4">{order.email}</td>
                  <td className="py-3 px-4"> ${(order.total / 100).toFixed(2)}</td>
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
  <div className="bg-[#161f5e] p-6 shadow-lg rounded-xl">
    <h3 className="text-lg font-semibold text-[#7f63f4]">{title}</h3>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);
