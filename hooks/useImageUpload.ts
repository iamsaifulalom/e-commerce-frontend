"use client";

import shopAPI from "@/config/axios";
import { useState } from "react";

interface UploadResponse {
  data: string[] | string;
}

interface UseImageUploadProps {
  multiple?: boolean;
  onChange: (value: string | string[]) => void;
}

export function useImageUpload({ multiple, onChange }: UseImageUploadProps) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);


  const handleDrop = async (incoming: File[]) => {
    if (!incoming || incoming.length === 0) return;

    try {
      setLoading(true);

      // 🟢 Enforce exactly 1 file when not multiple
      const files = multiple ? incoming : [incoming[0]];

      const formData = new FormData();

      // SINGLE IMAGE UPLOAD -------------------------------------------------
      if (!multiple) {
        onChange(URL.createObjectURL(files[0])); // return ONLY the URL string

        formData.append("image", files[0]);
        console.log(files[0])
        const res = await shopAPI.post<UploadResponse>(
          "/upload/image",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            onUploadProgress: (e) => {
              const percent = Math.round((e.loaded * 100) / (e.total || 1));
              setProgress(percent);

              if (percent === 100) {
                setLoading(true);
              }
            }
          }
        );

        if (res.data) {
          onChange(res.data.data); // return ONLY the URL string
        }

        return;
      }

      // MULTI UPLOAD --------------------------------------------------
      files.forEach((img) => {
        formData.append("images", img)
        onChange(URL.createObjectURL(img)); // return ONLY the URL string
      });

      const res = await shopAPI.post<UploadResponse>(
        "/upload/images",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data?.data) {
        onChange(res.data.data); // return array of URLs
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleDrop, progress };
}
