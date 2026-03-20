export interface SkillCategory {
  title: string;
  icon: string;
  items: string[];
  size: "large" | "medium" | "small";
}

export const skills: SkillCategory[] = [
  {
    title: "Cloud & Infra",
    icon: "☁️",
    items: [
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "AWS RDS",
      "AWS CloudFront",
      "AWS Cost Explorer",
      "Docker",
      "Linux",
    ],
    size: "large",
  },
  {
    title: "Development",
    icon: "💻",
    items: ["Next.js", "TypeScript", "React", "Python", "JavaScript"],
    size: "medium",
  },
  {
    title: "Database",
    icon: "🗄️",
    items: ["Supabase", "PostgreSQL", "MySQL", "CQRS"],
    size: "medium",
  },
  {
    title: "Tools & Collaboration",
    icon: "🛠️",
    items: ["JIRA", "Figma", "Notion", "Git", "Claude Code"],
    size: "medium",
  },
];
