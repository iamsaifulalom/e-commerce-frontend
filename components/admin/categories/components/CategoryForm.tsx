"use client";

import { PlusIcon } from "lucide-react";
import { FormProvider } from "react-hook-form";

import { Button } from "@/components/ui/button";
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
import {
  Sidebar,
  SidebarOverlay,
  SidebarTrigger,
  SidebarContent,
  SidebarFooter,
  SidebarBody,
  SidebarClose,
  SidebarHeader
} from "@/components/ui/Sidebar";
import { Spinner } from "@/components/ui/spinner";

// ------------------------ Category Form ------------------------
export default function CategoryForm() {
  const { methods, onSubmit, isLoading } = useCategoryForm()

  return (
    <Sidebar isOpen={false}>
      <SidebarOverlay />

      <SidebarTrigger>
        <Button>
          <PlusIcon className="mr-1" />Add Category
        </Button>
      </SidebarTrigger>

      <SidebarContent width="350px">
        <SidebarHeader>
          <h1 className="text-lg">Add new category</h1>
        </SidebarHeader>
        <SidebarBody>
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

              <SidebarFooter className="flex justify-between flex-wrap gap-3">
                <Button disabled={isLoading} className="flex-1" type="submit">
                  {isLoading && <Spinner />} Save
                </Button>

                <SidebarClose className="flex-1">
                  <Button type="button" variant="outline" className="w-full">
                    Cancel
                  </Button>
                </SidebarClose>
              </SidebarFooter>
            </form>
          </FormProvider>
        </SidebarBody>
      </SidebarContent>
    </Sidebar>
  );
}