export const chartData = [
    { name: "Completed", value: 300, fill: "var(--chart-3)" },
    { name: "Cancelled", value: 120, fill: "var(--destructive)" },
    { name: "Pending", value: 80, fill: "var(--chart-4)" },
    { name: "Returned", value: 80, fill: "var(--chart-1)" },
];

export const chartConfig = {
    value: { label: "Orders" },
    Completed: { label: "Completed", color: "var(--chart-3)" },
    Cancelled: { label: "Cancelled", color: "var(--destructive)" },
    Pending: { label: "Pending", color: "var(--chart-4)" },
    Returned: { label: "Returned", color: "var(--chart-1)" },
};