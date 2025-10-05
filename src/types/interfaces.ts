import { LucideIcon } from "lucide-react";

export interface SocialLink {
  href: string;
  icon: LucideIcon;
}

export interface NavLink extends SocialLink {
  title: string;
}
