"use client"

import CategoryForm from './category-form'
import CategoriesTable from './categories-table'
import { categories } from '@/data/data.categories'
import { Sheet, useSheet } from '../ui/sheet'
import { DataToolbar } from '../ui/data-toolbar'
import { useState } from 'react'

export default function CategoriesPage() {
    const { toggleSheet } = useSheet();
    const [searchTerm, setSearchTerm] = useState("");

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
            <CategoriesTable categories={categories} />
        </>
    )
}
