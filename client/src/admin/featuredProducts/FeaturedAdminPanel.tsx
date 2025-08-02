"use client";

import React, { useState } from "react";
import FeaturedProductFormModal from "./form/FeaturedProductForm";
import FeaturedProductsTable from "./table/FeaturedProductsTable";
import { FeaturedProduct } from "@/types/FeaturedProduct";
import { useFeaturedProducts } from "@/hooks/useFeaturedProducts";
import {
  createFeaturedProduct,
  updateFeaturedProduct,
  deleteFeaturedProduct,
} from "@/admin/featuredProducts/service/featuredProductService";

const FeaturedAdminPanel = () => {
  const [editingProduct, setEditingProduct] = useState<FeaturedProduct | null>(null);
  const [showProductForm, setShowProductForm] = useState(false);

  const { data: products = [], isLoading, isError, refetch } = useFeaturedProducts();


  const handleDeleteProduct = async (id: string) => {
    if (!confirm("Are you sure you want to delete the product?")) return;

    try {
      await deleteFeaturedProduct(id);
      await refetch();
      alert("Product successfully deleted");
    } catch (error) {
      console.error("Error while deleting:", error);
      alert("An error occurred during deletion");
    }
  };

  const handleEditProduct = (product: FeaturedProduct) => {
    setEditingProduct(product);
    setShowProductForm(true);
  };

  const handleAddNewProduct = () => {
    setEditingProduct(null);
    setShowProductForm(true);
  };

  const handleFormSubmitProduct = async (newOrUpdatedProduct: FeaturedProduct) => {
    try {
      const cleanedProduct = {
        ...newOrUpdatedProduct,
        oldPrice: newOrUpdatedProduct.oldPrice || 0,
        discountBtn: newOrUpdatedProduct.discountBtn || "",
        hoverImage: newOrUpdatedProduct.hoverImage || "",
        rating: newOrUpdatedProduct.rating || 0,
        isFeatured: newOrUpdatedProduct.isFeatured ?? false,
      };

      if (editingProduct?._id) {
        await updateFeaturedProduct(editingProduct._id, cleanedProduct);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { _id: _, ...productWithoutId } = cleanedProduct;
        await createFeaturedProduct(productWithoutId);
      }

      await refetch();
      setShowProductForm(false);
      alert("Featured product saved successfully");
    } catch (err) {
      console.error("Create/Update error:", err);
      alert("An error occurred");
    }
  };

  if (isLoading) return <p>Loading featured products...</p>;
  if (isError) return <p>Error loading featured products.</p>;

  return (
    <div className="bg-[#1e2026] min-h-screen text-white p-6 mb-20 rounded-xl shadow-md space-y-20">
      <h1 className="text-2xl primary-font tracking-widest uppercase font-bold mb-6 text-center text-white border-b border-gray-700 pb-3">
        Featured Products
      </h1>

      <button
        onClick={handleAddNewProduct}
        className="mb-4 px-5 py-2 bg-[#e51515] text-white rounded-md hover:bg-[#c41414] transition"
      >
        + Add New Featured Product
      </button>

      {showProductForm && (
        <FeaturedProductFormModal
          open={showProductForm}
          onClose={() => setShowProductForm(false)}
          onCancel={() => setShowProductForm(false)}
          product={editingProduct}
          onSubmit={handleFormSubmitProduct}
        />
      )}

      <FeaturedProductsTable
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

export default FeaturedAdminPanel;
