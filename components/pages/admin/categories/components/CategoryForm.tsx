"use client";

import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

import { CategoryBody, categorySchema } from "../schema.categories";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dropzone, DropzoneContent, DropzoneEmptyState } from "@/components/ui/shadcn-io/dropzone";

// ------------------------ Dropzone as controlled input ------------------------
interface DropzoneInputProps {
  onChange: (value: { image_url: string; public_id: string }) => void;
  value: { image_url: string; public_id: string };
}

const DropzoneInput: React.FC<DropzoneInputProps> = ({ onChange }) => {
  return (
    <Dropzone
      className="aspect-square"
      accept={{ "image/*": [] }}
      maxFiles={1}
      maxSize={1024 * 1024 * 10}
      minSize={1024}
      onDrop={(files) => {
        if (files.length > 0) {
          const file = files[0];
          // For demo purposes, just using object URL
          onChange({ image_url: URL.createObjectURL(file), public_id: file.name });
        }
      }}
      onError={console.error}
    >
      <DropzoneEmptyState />
      <DropzoneContent />
    </Dropzone>
  );
};

// ------------------------ Category Form ------------------------
export default function CategoryForm() {
  const methods = useForm<CategoryBody>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      slug: "",
      image: { image_url: "", public_id: "" },
    },
  });

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const onSubmit: SubmitHandler<CategoryBody> = (data) => {
    console.log("Form submitted:", data);
    setDrawerOpen(false);
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setDrawerOpen}>
      {/* Trigger */}
      <DrawerTrigger asChild>
        <Button>
          <PlusIcon className="mr-2" /> Add Category
        </Button>
      </DrawerTrigger>

      {/* Drawer Content */}
      <DrawerContent className="p-4 overflow-y-auto overflow-x-hidden">
        <DrawerHeader>
          <DrawerTitle>Add a New Category</DrawerTitle>
        </DrawerHeader>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            {/* Name */}
            <FormField
              control={methods.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Category Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Slug */}
            <FormField
              control={methods.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="category-slug" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image */}
            <FormField
              control={methods.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <DropzoneInput
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DrawerFooter className="grid grid-cols-2 gap-2 mt-4">
              <Button type="submit">Save</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </FormProvider>
      </DrawerContent>
    </Drawer>
  );
}
