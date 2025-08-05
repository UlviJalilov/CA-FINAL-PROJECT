import OrdersTable from "@/admin/OrderProducts/OrdersTable";
async function getOrders() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Orders not received");
  return res.json();
}

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <OrdersTable orders={orders} />
    </div>
  );
}
