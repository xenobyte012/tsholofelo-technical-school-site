import { Pie, PieChart, Tooltip } from "recharts";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  {
    language: "JavaScript",
    percentage: 60,
    fill: "var(--chart-1)",
  },
  {
    language: "React",
    percentage: 20,
    fill: "var(--chart-2)",
  },
  {
    language: "CSS",
    percentage: 15,
    fill: "var(--chart-3)",
  },
  {
    language: "HTML",
    percentage: 5,
    fill: "var(--chart-4)",
  },
];

const chartConfig = {
  percentage: {
    label: "Usage %",
  },

  JavaScript: {
    label: "JavaScript",
    color: "var(--chart-1)",
  },

  React: {
    label: "React",
    color: "var(--chart-2)",
  },

  CSS: {
    label: "CSS",
    color: "var(--chart-3)",
  },

  HTML: {
    label: "HTML",
    color: "var(--chart-4)",
  },
};

  const fruits = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
  ]
  const vegetables = [
    { label: "Carrot", value: "carrot" },
    { label: "Broccoli", value: "broccoli" },
    { label: "Spinach", value: "spinach" },
  ]
    const allItems = [
      { label: "Select a fruit", value: null },
      ...fruits,
      ...vegetables,
    ];

export default function LanguageDistribution() {
  return (
    <Card className="border border-slate-950">
      <CardHeader>
        <CardTitle>Language Distribution</CardTitle>
        <Select items={allItems}>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              {fruits.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              {vegetables.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Tooltip />

            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="language"
              cx="50%"
              cy="50%"
              outerRadius={100}
            />

            <ChartLegend
              content={<ChartLegendContent nameKey="language" />}
              className="
                mt-4
                flex-wrap
                gap-4
                justify-center
              "
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
