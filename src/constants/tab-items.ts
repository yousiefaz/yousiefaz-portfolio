import { TabItem } from "@/types/interfaces";
import { AppWindow, TerminalSquare, Wrench } from "lucide-react";

export const TabItems: TabItem[] = [
  {
    value: "frontend",
    icon: AppWindow,
    label: "Fronted",
  },
  {
    value: "backend",
    icon: TerminalSquare,
    label: "Backend",
  },
  {
    value: "tools",
    icon: Wrench,
    label: "Tools",
  },
];
