import CategoriesPage from '@/components/categories/categories-page'

import { SheetProvider } from '@/components/ui/sheet'


export default function Categories() {
  return (
    <SheetProvider>
      <CategoriesPage />
    </SheetProvider>
  )
}
