"use client";

import React, { useState } from "react";
import CarProductFormModal from "./form/CarProductForm";
import CarProductsTable from "./table/CarProductsTable";
import { CarProduct } from "@/types/CarProduct";
import { useCarProducts } from "./hook/useCarProducts";
import {
    createCarProduct,
    updateCarProduct,
} from "../carProducts/service/carProductService";
import { toast } from "react-hot-toast";


const CarAdminPanel = () => {
    const [editingProduct, setEditingProduct] = useState<CarProduct | null>(null);
    const [showProductForm, setShowProductForm] = useState(false);

    const {
        data: products = [],
        isLoading: isLoadingProducts,
        isError: isErrorProducts,
        deleteMutation,
        refetch,
    } = useCarProducts();

    const handleDeleteProduct = (id: string) => {
        if (!confirm("Are you sure you want to delete the product?")) return;
        deleteMutation.mutate(id);
    };

    const handleEditProduct = (product: CarProduct) => {
        setEditingProduct(product);
        setShowProductForm(true);
    };

    const handleAddNewProduct = () => {
        setEditingProduct(null);
        setShowProductForm(true);
    };

    const handleFormSubmitProduct = async (newOrUpdatedProduct: CarProduct) => {
        try {
            const cleanedProduct = {
                ...newOrUpdatedProduct,
                oldPrice: newOrUpdatedProduct.oldPrice || 0,
                discountBtn: newOrUpdatedProduct.discountBtn || "",
                hoverImage: newOrUpdatedProduct.hoverImage || "",
                rating: newOrUpdatedProduct.rating || 0,
                isFeatured: newOrUpdatedProduct.isFeatured ?? false,
                make: newOrUpdatedProduct.make || "",
                carModel: newOrUpdatedProduct.carModel || "",
                year: newOrUpdatedProduct.year || 0,
            };

            if (editingProduct?._id) {
                console.log("Updating car product with ID:", editingProduct._id);
                await updateCarProduct(editingProduct._id, cleanedProduct);
            } else {
                await createCarProduct(cleanedProduct);
            }

            await refetch();
            setShowProductForm(false);

            toast.success("Car product saved successfully", {
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
            });

        } catch (err) {
            console.error("Create/Update error:", err);

            toast.error("An error occurred while saving the car product", {
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
            });
        }
    };

    if (isLoadingProducts) return <p>Loading car products...</p>;
    if (isErrorProducts) return <p>Error loading car products.</p>;

    return (
        <div className="bg-[#1e2026] min-h-screen text-white p-6 rounded-xl shadow-md space-y-10">
            <h1 className="text-2xl text-center primary-font tracking-widest uppercase font-bold mb-6 text-white border-b border-gray-700 pb-3">
                Car Products
            </h1>

            <button
                onClick={handleAddNewProduct}
                className="mb-4 px-5 py-2 bg-[#e51515] text-white rounded-md hover:bg-[#c41414] transition"
            >
                + Add New Car Product
            </button>

            {showProductForm && (
                <CarProductFormModal
                    open={showProductForm}
                    onClose={() => setShowProductForm(false)}
                    onCancel={() => setShowProductForm(false)}
                    product={editingProduct}
                    onSubmit={handleFormSubmitProduct}
                />
            )}

            <CarProductsTable
                products={products}
                onDelete={handleDeleteProduct}
                onEdit={(id: string) => {
                    const prod = products.find((p) => p._id === id);
                    if (prod) handleEditProduct(prod);
                }}
            />
        </div>
    );
};

export default CarAdminPanel;
