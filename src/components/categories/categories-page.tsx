"use client"

import CategoryForm from './category-form'
import CategoriesTable from './categories-table'
import { Sheet, useSheet } from '../ui/sheet'
import { DataToolbar } from '../ui/data-toolbar'
import { useState } from 'react'
import { useCategories } from '@/hooks/use-category'

export default function CategoriesPage() {
    const { toggleSheet } = useSheet();
    const [searchTerm, setSearchTerm] = useState("");
    const { categories, isLoading, error } = useCategories()

    return (
        <>
            <Sheet>
                <CategoryForm />
            </Sheet>
            <DataToolbar
                onSearchChange={setSearchTerm}
                search={searchTerm}
                onAdd={toggleSheet}
                addLabel="Add Category"
            />
            <CategoriesTable
                isLoading={isLoading}
                error={error?.message}
                categories={categories}
            />
        </>
    )
}
