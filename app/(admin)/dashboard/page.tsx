"use client"

import KPICard from "@/components/features/admin/KPICard"
import ListSection from "@/components/features/admin/ListSection"
import { ChartLineMultiple } from "@/components/features/admin/S"
import { OrderTable } from "@/components/features/order/OrderTable"

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row gap-6">
      
      {/* LEFT: Cards, Chart, Table */}
      <div className="flex-1 flex flex-col gap-12">
        
        {/* KPI CARDS */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <KPICard
            title="Total customers"
            value={900}
            percentageChange={30}
            changeDescription="This month"
          />

          <KPICard
            title="Total revenue"
            value="900k"
            percentageChange={10}
            changeDescription="This month"
            className="bg-[#EFFCEF]"
          />

          <KPICard
            title="Total expenses"
            value={900}
            percentageChange={-40}
            changeDescription="This month"
            className="bg-[#EFF6FC]"
          />
        </div>

        {/* CHART */}
        <ChartLineMultiple />

        {/* TABLE SECTION */}
        <div className="space-y-4">
          <h1 className="text-lg font-semibold">Top selling products</h1>
          <OrderTable />
        </div>
      </div>


      {/* RIGHT: Sidebar Lists */}
      <aside className="w-full md:w-64 flex flex-col gap-5">
        <ListSection
          title="Top countries by sale"
          items={[
            {
              imageFallback: "cn",
              imageUrl: "https://github.com/shadcn.png",
              title: "Nike shoes",
              value: "$400",
            },
          ]}
        />

        <ListSection
          title="Top customers"
          actionText="See all"
          actionHref="/customers"
          items={[
            {
              description: "User added data",
              imageFallback: "cn",
              imageUrl: "https://github.com/shadcn.png",
              title: "Nike shoes",
              value: "$400",
              showBadge: true,
            },
          ]}
        />

        <ListSection
          title="Recent orders"
          actionText="See all"
          actionHref="/orders"
          items={[
            {
              description: "By Karim",
              imageFallback: "cn",
              imageUrl: "https://github.com/shadcn.png",
              title: "Nike shoes",
              value: "$400",
            },
          ]}
        />
      </aside>
    </div>
  )
}
