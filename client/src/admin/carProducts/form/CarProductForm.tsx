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
import { CarProduct } from "@/types/CarProduct";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

interface CarProductFormModalProps {
  open: boolean;
  product: CarProduct | null;
  onSubmit: (product: CarProduct) => void | Promise<void>;
  onCancel: () => void;
  onClose: () => void;
}

interface FormState {
  make: string;
  carModel: string;
  year: string;
  title: string;
  price: string;
  description: string;
  rating: string;
  image: string;
  hoverImage: string;
  oldPrice: string;
  discountBtn: string;
  isFeatured: boolean;
}

const CarProductFormModal: React.FC<CarProductFormModalProps> = ({
  open,
  product,
  onSubmit,
  onCancel,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormState>({
    make: "",
    carModel: "",
    year: "",
    title: "",
    price: "",
    description: "",
    rating: "",
    image: "",
    hoverImage: "",
    oldPrice: "",
    discountBtn: "",
    isFeatured: false,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        make: product.make || "",
        carModel: product.carModel || "",
        year: product.year ? product.year.toString() : "",
        title: product.title || "",
        price: product.price ? product.price.toString() : "",
        description: product.description || "",
        rating: product.rating ? product.rating.toString() : "",
        image: product.image || "",
        hoverImage: product.hoverImage || "",
        oldPrice: product.oldPrice ? product.oldPrice.toString() : "",
        discountBtn: product.discountBtn || "",
        isFeatured: product.isFeatured || false,
      });
    } else {
      setFormData({
        make: "",
        carModel: "",
        year: "",
        title: "",
        price: "",
        description: "",
        rating: "",
        image: "",
        hoverImage: "",
        oldPrice: "",
        discountBtn: "",
        isFeatured: false,
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
      const newProductData: CarProduct = {
        _id: product?._id || "", 
        make: formData.make,
        carModel: formData.carModel,
        year: Number(formData.year),
        title: formData.title,
        price: Number(formData.price),
        description: formData.description,
        rating: Number(formData.rating),
        image: formData.image,
        hoverImage: formData.hoverImage,
        oldPrice: Number(formData.oldPrice),
        discountBtn: formData.discountBtn,
        isFeatured: formData.isFeatured,
      };

      await onSubmit(newProductData);

      setFormData({
        make: "",
        carModel: "",
        year: "",
        title: "",
        price: "",
        description: "",
        rating: "",
        image: "",
        hoverImage: "",
        oldPrice: "",
        discountBtn: "",
        isFeatured: false,
      });
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <form onSubmit={handleSubmit}>
        <DialogTitle className="bg-[#23262e] text-white flex justify-between items-center">
          {product ? "Edit Car Product" : "Add New Car Product"}
          <IconButton onClick={onClose} className="text-white">
            <IoClose className="text-[#fff]" />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers className="bg-[#23262e] overflow-y-auto max-h-[60vh] my-modal-scrollbar text-white space-y-5">
          <input
            name="make"
            placeholder="Make"
            value={formData.make}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#1e2026] border border-gray-700 rounded focus:outline-none focus:ring-1"
          />
          <input
            name="carModel"
            placeholder="Car Model"
            value={formData.carModel}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#1e2026] border border-gray-700 rounded focus:outline-none focus:ring-1"
          />
          <input
            name="year"
            placeholder="Year"
            type="number"
            value={formData.year}
            onChange={handleChange}
            required
            min={1900}
            max={new Date().getFullYear()}
            className="w-full px-4 py-2 bg-[#1e2026] border border-gray-700 rounded focus:outline-none focus:ring-1"
          />
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
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#1e2026] border border-gray-700 rounded focus:outline-none focus:ring-1"
          />
          <input
            name="rating"
            placeholder="Rating (1-5)"
            type="number"
            min={1}
            max={5}
            value={formData.rating}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#1e2026] border border-gray-700 rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 bg-[#1e2026] border border-gray-700 rounded"
          />
          <input
            name="oldPrice"
            placeholder="Old Price"
            type="number"
            value={formData.oldPrice}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#1e2026] border border-gray-700 rounded"
          />
          <input
            name="discountBtn"
            placeholder="Discount Button Text"
            value={formData.discountBtn}
            onChange={handleChange}
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
            {product ? "Edit" : "Add"}
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

export default CarProductFormModal;
