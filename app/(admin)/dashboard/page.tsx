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

import { OrderTable } from "@/components/features/order/components/OrderTable"

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row gap-6">

      {/* LEFT */}
      <div className="flex-1 flex flex-col gap-12">

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {kpiCards.map((card, index) => (
            <KPICard key={index} {...card} />
          ))}
        </div>

        <ChartLineMultiple />

        <OrderTable />
      </div>

      {/* RIGHT */}
      <aside className="w-full md:w-64 flex flex-col gap-5">

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
