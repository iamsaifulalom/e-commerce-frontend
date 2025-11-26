"use client";

import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { FormProvider } from "react-hook-form";

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
import DropzoneInput from "@/components/ui/DropzoneInput";
import { useCategoryForm } from "../hooks/useCategoryForm";

// ------------------------ Category Form ------------------------
export default function CategoryForm() {
  const { methods, onSubmit } = useCategoryForm()
  const [isDrawerOpen, setDrawerOpen] = useState(false);

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
        <DrawerHeader className="p-0">
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
                      // value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DrawerFooter className="grid p-0 grid-cols-2 gap-2 mt-4">
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
