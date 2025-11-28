"use client";

import { createContext, useContext } from "react";
import { useImageUpload, UploadedFile } from "@/hooks/useImageUpload";
import { Dropzone, DropzoneEmptyState } from "./shadcn-io/dropzone";
import { Button } from "./button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { Spinner } from "./spinner";

/* -------------------------------------------------------
   CONTEXT
------------------------------------------------------- */
interface DropzoneContextType {
  files: UploadedFile[];
  removeItem: (url: string) => void;
}

const DropzoneContext = createContext<DropzoneContextType | null>(null);

const useDropzoneContext = () => {
  const context = useContext(DropzoneContext);
  if (!context) throw new Error("Dropzone component must be inside DropzoneProvider");
  return context;
};

/* -------------------------------------------------------
   PREVIEW CARD
------------------------------------------------------- */
function PreviewCard({ file }: { file: UploadedFile }) {
  const { removeItem } = useDropzoneContext();
  const { url, loading, progress } = file;

  return (
    <div className="w-full flex justify-between items-center bg-input/30 h-20 p-2 pr-6 border rounded-sm">
      <div className="flex gap-2 h-full">
        <div className="h-full relative aspect-square overflow-hidden">
          {loading && (
            <div className="absolute inset-0 flex justify-center items-center bg-black/40">
              <Spinner />
            </div>
          )}
          <Image
            alt="Preview image"
            width={100}
            height={100}
            src={url}
            className="h-full w-full object-cover rounded-sm"
          />
          {!loading && progress < 100 && (
            <div
              className="absolute bottom-0 left-0 h-1 bg-green-600"
              style={{ width: `${progress}%` }}
            />
          )}
        </div>
      </div>

      <Button
        type="button"
        disabled={loading}
        size="icon"
        variant="secondary"
        onClick={() => removeItem(url)}
        className="text-red-600 rounded-full"
      >
        {loading ? <Spinner /> : <Trash2 />}
      </Button>
    </div>
  );
}

/* -------------------------------------------------------
   PREVIEW WRAPPER
------------------------------------------------------- */
function UploadPreview() {
  const { files } = useDropzoneContext();
  if (!files || files.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-2">
      {files.map((file) => (
        <PreviewCard key={file.url} file={file} />
      ))}
    </div>
  );
}

/* -------------------------------------------------------
   DROPZONE INPUT
------------------------------------------------------- */
interface DropzoneInputProps {
  value?: string | string[];
  onChange: (value: string | string[]) => void;
  multiple?: boolean;
}

export default function DropzoneInput({ value, onChange, multiple = false }: DropzoneInputProps) {
  const { files, handleDrop, handleDelete } = useImageUpload({ multiple, onChange });

  const removeItem = async (url: string) => {
    try {
      // Optimistic UI removal
      if (!multiple) onChange("");
      if (!multiple) {
        onChange("");
      } else if (Array.isArray(value)) {
        onChange(value.filter((item) => item !== url));
      } else {
        // fallback if somehow value is not array
        onChange([]);
      }
      await handleDelete(url);
    } catch (err) {
      console.error("Failed to delete image:", err);
    }
  };

  return (
    <DropzoneContext.Provider value={{ files, removeItem }}>
      <div className="space-y-4">
        <Dropzone
          className="inset-0 w-full h-40 cursor-pointer"
          accept={{ "image/*": [] }}
          maxFiles={multiple ? 10 : 1}
          maxSize={1024 * 1024 * 10}
          minSize={1024}
          onDrop={handleDrop}
        >
          <DropzoneEmptyState />
        </Dropzone>

        <UploadPreview />
      </div>
    </DropzoneContext.Provider>
  );
}
