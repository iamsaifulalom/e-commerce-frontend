"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export const description = "A donut chart with text"

const chartData = [
    { browser: "chrome", Orders: 275, fill: "var(--color-chrome)" },
    { browser: "safari", Orders: 200, fill: "var(--color-safari)" },
    { browser: "firefox", Orders: 287, fill: "var(--color-firefox)" },
]

const chartConfig = {
    Orders: {
        label: "Orders",
    },
    chrome: {
        label: "CANSELD",
        color: "var(--chart-1)",
    },
    firefox: {
        label: "COMPLETED ",
        color: "var(--chart-3)",
    },
    edge: {
        label: "Pending",
        color: "var(--chart-4)",
    }
} satisfies ChartConfig

export function OrderStatusPieChart() {
    const totalOrders = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.Orders, 0)
    }, [])

    return (
        <Card className="flex w-full flex-col">
            <CardHeader>
                <CardTitle>Order status</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="Orders"
                            nameKey="browser"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalOrders.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Orders
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
