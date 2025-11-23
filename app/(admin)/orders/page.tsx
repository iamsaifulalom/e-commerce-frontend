import { OrderStatusPieChart } from '@/components/features/order/components/OrderStatusPieChart'
import { OrderTable } from '@/components/features/order/components/OrderTable'
import { SalesTrendChart } from '@/components/features/order/components/SalesTrendChart'
import React from 'react'

export default function Orders() {
  return (
    <div className='space-y-4'>
      <div className='flex flex-col md:flex-row gap-3 '>
        <SalesTrendChart/>
        <OrderStatusPieChart/>
      </div>
      <OrderTable/>
    </div>
  )
}
