"use client"

import {
  ChartLineMultiple,
  dashBoardData,
  KPICard,
  ListSection,
  OrderStatusPieChart
} from "@/components/pages/admin/dashboard"
import { chartConfig, chartData } from "@/components/pages/admin/dashboard/data/dashboard.data.orders"
import { BestSellingProduct } from "@/components/pages/products/components/BestSellingProduct"

export default function Dashboard() {


  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row gap-6">

      {/* LEFT */}
      <div className="flex-1 flex flex-col space-y-4">

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {dashBoardData.KPI.map((card, index) => (
            <KPICard key={index} {...card} />
          ))}
        </div>

        <ChartLineMultiple
          chartData={dashBoardData.monthlySalesComparison}
        />

        <OrderStatusPieChart
          className="block lg:hidden"
          config={chartConfig}
          data={chartData} 
          />
        <BestSellingProduct />
      </div>

      {/* RIGHT */}
      <aside className="grid lg:w-72 grid-rows-1 md:grid-cols-2 lg:grid-cols-1 gap-5">

        <OrderStatusPieChart
          className="hidden lg:block"
          config={chartConfig}
          data={chartData}
        />

        {/* <ListSection
          title="Top countries by sale"
          items={dashBoardData.topCountries}
        /> */}

        <ListSection
          title="Top customers"
          actionText="See all"
          actionHref="/customers"
          items={dashBoardData.topCustomers}
        />

        <ListSection
          title="Recent orders"
          actionText="See all"
          actionHref="/orders"
          items={dashBoardData.recentOrders}
        />
      </aside>
    </div>
  )
}
