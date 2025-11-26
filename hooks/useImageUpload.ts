"use client";

import shopAPI from "@/config/axios";
import { useState } from "react";

interface UploadResponse {
  urls: string[];
}

interface UseImageUploadProps {
  multiple?: boolean;
  onChange: (value: string | string[]) => void;
}

export function useImageUpload({ multiple = false, onChange }: UseImageUploadProps) {
  const [loading, setLoading] = useState(false);

  const handleDrop = async (incoming: File[]) => {
    if (!incoming || incoming.length === 0) return;

    try {
      setLoading(true);

      // 🟢 Enforce exactly 1 file when not multiple
      const files = multiple ? incoming : [incoming[0]];

      const formData = new FormData();

      // SINGLE IMAGE UPLOAD -------------------------------------------------
      if (!multiple) {
        formData.append("image", files[0]);

        const res = await shopAPI.post<UploadResponse>(
          "/image",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        if (res.data?.urls?.[0]) {
          onChange(res.data.urls[0]); // return ONLY the URL string
        }

        return;
      }

      // MULTI UPLOAD --------------------------------------------------
      files.forEach((img) => formData.append("images", img));

      const res = await shopAPI.post<UploadResponse>(
        "/images",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data?.urls) {
        onChange(res.data.urls); // return array of URLs
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleDrop };
}
