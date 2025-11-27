"use client";

import { useImageUpload } from "@/hooks/useImageUpload";
import { Dropzone, DropzoneEmptyState } from "./shadcn-io/dropzone";
import { Button } from "./button";
import { Trash2 } from "lucide-react";
import Image from "next/image";



/* -------------------------------------------------------
   Preview Card
------------------------------------------------------- */
function PreviewCard({
  url,
  onRemove
}: {
  url: string;
  onRemove?: () => void;
}) {
  return (
    <div className="w-full flex justify-between items-center bg-input/30 h-20 p-2 pr-6 border rounded-sm">
      <div className="flex gap-2 h-full">
        <div className="h-full aspect-square overflow-hidden">
          <Image
            alt="Preview image"
            width={100}
            height={100}
            src={url}
            className="h-full w-full overflow-hidden object-cover rounded-sm"
          />
        </div>
        <div className="text-sm flex flex-col justify-center">
          <p className="font-medium">Image</p>
          <p className="text-muted-foreground">Uploaded</p>
        </div>
      </div>

      {onRemove && (
        <Button
          size="icon"
          variant="secondary"
          onClick={onRemove}
          className="text-red-600 rounded-full">
          <Trash2 />
        </Button>
      )}
    </div>
  );
}

/* -------------------------------------------------------
   Preview Wrapper (Single + Multiple)
------------------------------------------------------- */
function UploadPreview({
  value,
  onRemove
}: {
  value: string | string[];
  onRemove: (url: string) => void;
}) {
  if (!value) return null;

  // SINGLE IMAGE
  if (!Array.isArray(value)) {
    return <PreviewCard url={value} onRemove={() => onRemove(value)} />;
  }

  // MULTIPLE IMAGES
  return (
    <div className="flex flex-col gap-2">
      {value.map((url) => (
        <PreviewCard key={url} url={url} onRemove={() => onRemove(url)} />
      ))}
    </div>
  );
}

/* -------------------------------------------------------
   MAIN DROPZONE INPUT COMPONENT
------------------------------------------------------- */
export default function DropzoneInput({
  value,
  onChange,
  multiple = false
}: {
  value?: string | string[];
  onChange: (value: string | string[]) => void;
  multiple?: boolean;
}) {
  const { handleDrop, progress } = useImageUpload({ multiple, onChange });

  const removeItem = (url: string) => {
    if (!value) return;

    if (!Array.isArray(value)) {
      onChange("");
      return;
    }

    onChange(value.filter((item) => item !== url));
  };

  return (
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
      <div style={{width: `${progress}%`}} className="bg-green-600 h-2 rounded-full" />
      {/* Preview */}
      {value &&
        <UploadPreview
          value={value}
          onRemove={removeItem}
        />}
    </div>
  );
}
