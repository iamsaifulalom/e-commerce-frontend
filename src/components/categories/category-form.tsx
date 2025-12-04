"use client"
import React from 'react'
import { useSheet } from '../ui/sheet'

export default function CategoryForm() {
 const {toggleSheet} =   useSheet()
  return (
    <div>
        <button onClick={toggleSheet}>Toggle Sheet</button>
    </div>
  )
}
