"use client";

import React, { useState, useEffect } from "react";
import UploadPreview from "@/admin/components/UploadPreview/UploadPreview";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { FeaturedProduct } from "@/types/FeaturedProduct";
import { IoClose } from "react-icons/io5";
import Image from "next/image";



interface ProductFormModalProps {
  open: boolean;
  product: FeaturedProduct | null;
  onSubmit: (product: FeaturedProduct) => void | Promise<void>;
  onCancel: () => void;
  onClose: () => void;
}

interface FormState {
  title: string;
  price: string;
  description: string;
  rating: string;
  image: string;
  isFeatured: boolean;
  oldPrice: string;
  discountBtn: string;
  hoverImage: string;
  discountPercent?: string;
}

const FeaturedProductFormModal: React.FC<ProductFormModalProps> = ({
  open,
  product,
  onSubmit,
  onCancel,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormState>({
    title: "",
    price: "",
    description: "",
    rating: "",
    image: "",
    isFeatured: false,
    oldPrice: "",
    discountBtn: "",
    hoverImage: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || "",
        price: product.price?.toString() || "",
        description: product.description || "",
        rating: product.rating?.toString() || "",
        image: product.image || "",
        isFeatured: product.isFeatured || false,
        oldPrice: product.oldPrice?.toString() || "",
        discountBtn: product.discountBtn || "",
        hoverImage: product.hoverImage || "",
        discountPercent: product.discountPercent?.toString() || "",
      });
    } else {
      setFormData({
        title: "",
        price: "",
        description: "",
        rating: "",
        image: "",
        isFeatured: false,
        oldPrice: "",
        discountBtn: "",
        hoverImage: "",
        discountPercent: "",
      });
    }
  }, [product]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const newProductData: FeaturedProduct = {
        _id: product?._id || "", 
        title: formData.title,
        price: Number(formData.price),
        description: formData.description,
        rating: Number(formData.rating),
        image: formData.image,
        isFeatured: formData.isFeatured,
        oldPrice: formData.oldPrice ? Number(formData.oldPrice) : 0,
        discountBtn: formData.discountBtn,
        hoverImage: formData.hoverImage,
        discountPercent: formData.discountPercent ? Number(formData.discountPercent) : undefined,
      };

      await onSubmit(newProductData);

      setFormData({
        title: "",
        price: "",
        description: "",
        rating: "",
        image: "",
        isFeatured: false,
        oldPrice: "",
        discountBtn: "",
        hoverImage: "",
        discountPercent: "",
      });
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <form onSubmit={handleSubmit}>
        <DialogTitle className="bg-[#23262e] text-white flex justify-between items-center">
          {product ? "Edit Featured Product" : "Add New Featured Product"}
          <IconButton onClick={onClose} className="text-white">
            <IoClose className="text-[#fff]" />
          </IconButton>
        </DialogTitle>

        <DialogContent
          dividers
          className="bg-[#23262e] overflow-y-auto max-h-[60vh] my-modal-scrollbar text-white space-y-5"
        >
          <input
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#1e2026] border border-gray-700 rounded focus:outline-none focus:ring-1"
          />

          <input
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            type="number"
            required
            className="w-full px-4 py-2 bg-[#1e2026] border border-gray-700 rounded focus:outline-none focus:ring-1"
          />

          <input
            name="rating"
            placeholder="Rating (1-5)"
            value={formData.rating}
            onChange={handleChange}
            type="number"
            min={1}
            max={5}
            required
            className="w-full px-4 py-2 bg-[#1e2026] border border-gray-700 rounded"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
            className="w-full px-4 py-2 bg-[#1e2026] border border-gray-700 rounded"
          />

          <input
            name="oldPrice"
            placeholder="Old Price"
            value={formData.oldPrice}
            onChange={handleChange}
            type="number"
            className="w-full px-4 py-2 bg-[#1e2026] border border-gray-700 rounded"
          />

          <input
            name="discountBtn"
            placeholder="Discount Button Text"
            value={formData.discountBtn}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#1e2026] border border-gray-700 rounded"
          />
          <input
            name="discountPercent"
            placeholder="Discount Percent (e.g. 33)"
            value={formData.discountPercent || ""}
            onChange={handleChange}
            type="number"
            className="w-full px-4 py-2 bg-[#1e2026] border border-gray-700 rounded"
          />

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
              id="isFeatured"
              className="accent-red-600 w-4 h-4"
            />
            <label htmlFor="isFeatured" className="text-sm">
              Featured
            </label>
          </div>

          {formData.hoverImage && (
            <Image
              src={formData.hoverImage}
              alt="Hover Preview"
              className="mt-2 max-h-40 rounded object-contain"
              width={300}
              height={300}
            />
          )}

          <UploadPreview
            onMainImageUpload={(url) =>
              setFormData((prev) => ({ ...prev, image: url }))
            }
            onHoverImageUpload={(url) =>
              setFormData((prev) => ({ ...prev, hoverImage: url }))
            }
          />
        </DialogContent>

        <DialogActions className="bg-[#23262e] px-6 pb-4">
          <button
            type="submit"
            className="bg-[#e51515] rounded-lg px-5 text-white py-1 hover:bg-[#c41414]"
          >
            {product ? "Edit" : "ADD"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="text-white py-1 px-5 rounded-lg bg-orange-400"
          >
            Cancel
          </button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FeaturedProductFormModal;
