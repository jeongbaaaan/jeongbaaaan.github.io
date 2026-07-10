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
      "AWS IAM",
      "VPC",
      "CloudWatch",
      "Route 53",
      "ECS",
      "Docker",
      "Linux",
    ],
    size: "large",
  },
  {
    title: "Development",
    icon: "💻",
    items: ["Next.js", "TypeScript", "React", "Python", "JavaScript", "Astro"],
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
    items: ["Claude Code", "JIRA", "Figma", "Notion", "Git", "GitHub Actions"],
    size: "medium",
  },
];
