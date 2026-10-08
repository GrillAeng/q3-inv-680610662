import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { OverviewCards } from "./OverviewCards"
import { CategoryCards } from "./CategoryCards"
import { LayoutGrid, SummaryIcon } from "lucide-react"

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview"><SummaryIcon />Overview</TabsTrigger>
        <TabsTrigger value="Category"><LayoutGrid />By Category</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="w-full">
        <OverviewCards />
      </TabsContent>
      <TabsContent value="Category">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  );
}
