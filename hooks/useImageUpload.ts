"use client";

import { useState } from "react";
import shopAPI from "@/config/axios";
import { toast } from "sonner";

/* -------------------------------------------------------
   TYPES
------------------------------------------------------- */
export interface UploadResponse {
  data: string | string[];
}

export interface UploadedFile {
  url: string;
  progress: number;
  loading: boolean;
}

export interface UseImageUploadProps {
  multiple?: boolean;
  onChange: (value: string | string[]) => void;
}

export interface UseImageUploadReturn {
  files: UploadedFile[];
  handleDrop: (incoming: File[]) => Promise<void>;
  handleDelete: (url: string) => Promise<void>;
}

/* -------------------------------------------------------
   HOOK
------------------------------------------------------- */
export function useImageUpload({ multiple = false, onChange }: UseImageUploadProps): UseImageUploadReturn {
  const [files, setFiles] = useState<UploadedFile[]>([]);

  /* -------------------------------------------------------
     HANDLE DROP
  ------------------------------------------------------- */
  const handleDrop = async (incoming: File[]) => {
    if (!incoming || incoming.length === 0) return;

    const selectedFiles = multiple ? incoming : [incoming[0]];

    // Create optimistic previews
    const newFiles: UploadedFile[] = selectedFiles.map((file) => ({
      url: URL.createObjectURL(file),
      progress: 0,
      loading: true,
    }));

    setFiles((prev) => (multiple ? [...prev, ...newFiles] : newFiles));

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append(multiple ? "images" : "image", file);
    });

    try {
      const res = await shopAPI.post<UploadResponse>(
        multiple ? "/upload/images" : "/upload/image",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (e) => {
            const percent = Math.round((e.loaded * 100) / (e.total || 1));
            setFiles((prev) =>
              prev.map((f, i) =>
                i < newFiles.length ? { ...f, progress: percent } : f
              )
            );
          },
        }
      );

      // Update files with server URLs
      const serverUrls: string[] = Array.isArray(res.data.data)
        ? res.data.data
        : [res.data.data];

      const updatedFiles: UploadedFile[] = serverUrls.map((url) => ({
        url,
        progress: 100,
        loading: false,
      }));

      setFiles((prev) => (multiple ? [...prev.slice(0, prev.length - newFiles.length), ...updatedFiles] : updatedFiles));

      // Trigger onChange with correct type
      if (multiple) onChange(updatedFiles.map((f) => f.url));
      else onChange(updatedFiles[0].url);

      toast.success("Image(s) uploaded successfully!");
    } catch (err) {
      toast.error("Failed to upload image(s)");
      console.error("Upload error:", err);

      // Remove optimistic files if upload failed
      setFiles((prev) => prev.filter((f) => !newFiles.includes(f)));
    }
  };

  /* -------------------------------------------------------
     HANDLE DELETE
  ------------------------------------------------------- */
  const handleDelete = async (url: string) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.url === url ? { ...f, loading: true } : f
      )
    );

    try {
      await shopAPI.delete("/upload", { data: { imageUrl: url } });

      setFiles((prev) => prev.filter((f) => f.url !== url));

      // Update parent onChange
      if (!multiple) onChange("");
      else onChange(files.filter((f) => f.url !== url).map((f) => f.url));

      toast.success("Image deleted successfully!");
    } catch (err) {
      setFiles((prev) =>
        prev.map((f) =>
          f.url === url ? { ...f, loading: false } : f
        )
      );
      toast.error("Failed to delete image");
      console.error("Delete error:", err);
    }
  };

  return { files, handleDrop, handleDelete };
}
