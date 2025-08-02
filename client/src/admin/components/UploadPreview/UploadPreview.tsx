"use client";

import { useState } from "react";
import Image from "next/image";

interface UploadPreviewProps {
  onMainImageUpload: (url: string) => void;
  onHoverImageUpload: (url: string) => void;
}

const UploadPreview = ({ onMainImageUpload, onHoverImageUpload }: UploadPreviewProps) => {
  const [preview, setPreview] = useState<string | null>(null); 
  const [hoverPreview, setHoverPreview] = useState<string | null>(null); 
  const [loading, setLoading] = useState(false);

 
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("http://localhost:3001/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setPreview(data.url);
        onMainImageUpload(data.url);
      } else {
        console.error("Yükləmə xətası:", data.message);
      }
    } catch (error) {
      console.error("Şəkil yüklənmədi:", error);
    } finally {
      setLoading(false);
    }
  };

 
  const handleHoverImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("http://localhost:3001/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Upload cavabı:", data); 


      if (res.ok) {
        setHoverPreview(data.url);
        onHoverImageUpload(data.url);
      } else {
        console.error("Hover yükləmə xətası:", data.message);
      }
    } catch (error) {
      console.error("Hover şəkil yüklənmədi:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 bg-[#1e2026] p-4 rounded-lg border border-gray-700 shadow-inner">
      <div className="flex flex-col gap-4">
        <label className="text-sm text-gray-400">Choose Main Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="text-gray-300 file:bg-[#e51515] file:text-white file:px-4 file:py-2 file:rounded file:border-none hover:file:bg-[#c41414] cursor-pointer"
        />
        {loading && <p className="text-sm text-gray-400">Loading...</p>}
        {preview && (
          <Image
            src={preview}
            alt="Main Preview"
            width={200}
            height={200}
            className="w-50 h-50 object-cover border border-gray-700 rounded"
          />
        )}
      </div>

      <div className="flex flex-col gap-4">
        <label className="text-sm text-gray-400">Choose Hover Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleHoverImageChange}
          className="text-gray-300 file:bg-[#e51515] file:text-white file:px-4 file:py-2 file:rounded file:border-none hover:file:bg-[#c41414] cursor-pointer"
        />
        {loading && <p className="text-sm text-gray-400">Loading...</p>}
        {hoverPreview && (
          <Image
            src={hoverPreview}
            alt="Hover Preview"
            width={200}
            height={200}
            className="w-50 h-50 object-cover border border-gray-700 rounded"
          />
        )}
      </div>
    </div>
  );
};

export default UploadPreview;
