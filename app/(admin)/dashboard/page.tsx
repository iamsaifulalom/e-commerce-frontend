"use client"

import {
  ChartLineMultiple,
  KPICard,
  ListSection
} from "@/components/features/admin"
import {
  kpiCards,
  topCountries,
  topCustomers,
  recentOrders
} from "@/components/features/admin/data/dashboard.data"
import { BestSellingProduct } from "@/components/features/products/components/BestSellingProduct"

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row gap-6">

      {/* LEFT */}
      <div className="flex-1 flex flex-col space-y-4">

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {kpiCards.map((card, index) => (
            <KPICard key={index} {...card} />
          ))}
        </div>

        <ChartLineMultiple />

        <BestSellingProduct />
      </div>

      {/* RIGHT */}
      <aside className="grid lg:w-72 grid-rows-1 md:grid-cols-2 lg:grid-cols-1 gap-5">

        <ListSection title="Top countries by sale" items={topCountries} />

        <ListSection
          title="Top customers"
          actionText="See all"
          actionHref="/customers"
          items={topCustomers}
        />

        <ListSection
          title="Recent orders"
          actionText="See all"
          actionHref="/orders"
          items={recentOrders}
        />
      </aside>
    </div>
  )
}
