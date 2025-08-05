"use client";

import React from "react";

interface Order {
    _id: string;
    orderId: string;
    email: string;
    total: number;
    paymentStatus: string;
    createdAt: string;
    shipping: {
        country: string;
        city: string;
    };
}

interface OrdersTableProps {
    orders: Order[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {
console.log(orders.length > 0 ? orders[0].total : 'orders boşdur');

    return (
        <div className="overflow-x-auto rounded-lg shadow mt-6 bg-white">
            <table className="min-w-full text-sm text-left text-gray-700">
                <thead className="bg-green-600 text-white">
                    <tr>
                        <th className="p-4">Order ID</th>
                        <th className="p-4">Email</th>
                        <th className="p-4">Total</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Shipping</th>
                        <th className="p-4">Date</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {orders.map((order, idx) => (
                        
                        
                        <tr
                            key={order._id}
                            className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                            <td className="p-4">{order.orderId}</td>
                            <td className="p-4">{order.email}</td>
                            <td className="p-4">
                            ${(order.total / 100).toFixed(2)}
                                
                            </td>
                            <td className="p-4 capitalize">
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-semibold ${order.paymentStatus === "paid"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {order.paymentStatus}
                                </span>
                            </td>
                            <td className="p-4">
                                {order.shipping
                                    ? `${order.shipping.city}, ${order.shipping.country}`
                                    : "N/A"}
                            </td>
                            <td className="p-4">
                                {new Date(order.createdAt).toLocaleDateString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default OrdersTable;
