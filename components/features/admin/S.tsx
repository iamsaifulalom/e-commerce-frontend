"use client"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", thisYear: 186, lastYear: 80 },
    { month: "February", thisYear: 305, lastYear: 200 },
    { month: "March", thisYear: 237, lastYear: 120 },
    { month: "April", thisYear: 73, lastYear: 190 },
    { month: "May", thisYear: 209, lastYear: 130 },
    { month: "June", thisYear: 214, lastYear: 140 },
]

const chartConfig = {
    thisYear: {
        label: "This year",
        color: "var(--chart-1)",
    },
    lastYear: {
        label: "Last year",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

export function ChartLineMultiple() {
    return (
        <div>
            <div className="flex justify-between mb-8">
                <h1 className="text-lg font-semibold">Earnings</h1>
                <div className="flex gap-3">
                    <div className="flex gap-1 text-xs text-muted-foreground">
                        <div className="size-4 bg-chart-1"></div>
                        This year
                    </div>
                    <div className="flex gap-1 text-xs text-muted-foreground">
                        <div className="size-4 bg-chart-2"></div>
                        Last year
                    </div>
                </div>
            </div>
            <ChartContainer config={chartConfig}>
                <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />

                    {/* LEFT SIDE NUMBERS */}
                    <YAxis
                        tickLine={true}
                        axisLine={false}
                        tickMargin={0}
                        width={34}
                        tickFormatter={(value) => `$${value}k`}
                    />

                    <XAxis
                        dataKey="month"
                        tickLine={true}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />

                    <ChartTooltip cursor={true} content={<ChartTooltipContent />} />

                    <Line
                        dataKey="thisYear"
                        type="monotone"
                        stroke="var(--color-thisYear)"
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        dataKey="lastYear"
                        type="monotone"
                        stroke="var(--color-lastYear)"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ChartContainer>
        </div>
    )
}
