import OrderStatusPieChart  from '@/components/pages/admin/dashboard/components/OrderStatusPieChart'
import { OrderTable } from '@/components/pages/order/components/OrderTable'
import { SalesTrendChart } from '@/components/pages/order/components/SalesTrendChart'

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
