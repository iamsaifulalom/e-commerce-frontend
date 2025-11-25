"use client";

import * as React from "react";
import { PieChart, Pie, Label } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// ------------------
// Types
// ------------------
export type OrderStatusItem = {
    name: string;        // e.g. "firefox"
    value: number;       // e.g. 120
    fill?: string;       // optional color
};

export type OrderStatusChartProps = {
    title?: string;
    data: OrderStatusItem[];
    config: ChartConfig;
    dataKey?: string;    // default: "value"
    nameKey?: string;    // default: "name"
    className?: string
};

// ------------------
// Component
// ------------------
export default function OrderStatusChart({
    title = "Orders",
    data,
    config,
    dataKey = "value",
    nameKey = "name",
    className
}: OrderStatusChartProps) {
    const total = React.useMemo(() => {
        return data.reduce((acc, item) => acc + item.value, 0);
    }, [data]);

    return (
        <Card className={cn("flex w-full flex-col" , className)}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent className="flex-1">
                <ChartContainer
                    config={config}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />

                        <Pie
                            data={data}
                            dataKey={dataKey}
                            nameKey={nameKey}
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
                                                    {total.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Orders
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
