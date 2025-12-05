import { Button } from '../ui/button'
import { FormProvider } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Spinner } from '../ui/spinner';
import DropzoneInput from '../ui/dropzone-input';
import { useCategoryForm } from '@/hooks/use-categoroy-form';
import { useSheet } from '../ui/sheet';

export default function CategoryForm() {
  const { methods, onSubmit, isLoading } = useCategoryForm();
  const { toggleSheet } = useSheet();

  return (
    <div className='w-full p-4'>
      <h1 className='text-lg'>Category form</h1>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 pb-5 flex flex-col h-full justify-between mt-4">

        <FormProvider {...methods}>
          <div className="space-y-4">
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
          </div>
        </FormProvider>
        <div className='w-full flex gap-3 items-center'>
          <Button disabled={isLoading} className="w-1/2" type="submit">
            {isLoading && <Spinner />} Save
          </Button>
          <Button onClick={toggleSheet} variant="destructive" className="w-1/2" type="button">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}
