import { createFileRoute } from "@tanstack/react-router";
import { MngAcademyPage } from "@/components/MngAcademyPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MNG Academy Kolkata | Healthcare & Skill Development Training" },
      { name: "description", content: "Explore practical healthcare and career-focused skill development courses at MNG Academy in Kolkata." },
      { property: "og:title", content: "MNG Academy Kolkata | Build Skills. Shape Your Career." },
      { property: "og:description", content: "Practical healthcare and career-focused training with career guidance and placement assistance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <MngAcademyPage />;
}
