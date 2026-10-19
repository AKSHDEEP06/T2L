import { Briefcase, FileText, Search } from "lucide-react";

// Canonical product order used everywhere: 01 Legal Services, 02 Doc Engine, 03 Introspector.
export const PRODUCTS = [
  { num: "01", name: "Legal Services", to: "/legal-services", icon: Briefcase, line: "Incorporation, compliance and advisory by an in-house bench.", chip: "Done for you" },
  { num: "02", name: "Doc Engine", to: "/docengine", icon: FileText, line: "India-specific legal documents drafted from plain language.", chip: "Instant drafts" },
  { num: "03", name: "Introspector", to: "/introspector", icon: Search, line: "AI legal research with a citation on every claim.", chip: "Pilot access" },
];