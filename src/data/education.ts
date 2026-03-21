export interface Thesis {
  title: string;
  titleEn: string;
  advisor: string;
  date: string;
  keywords: string[];
  link: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  note?: string;
  thesis?: Thesis;
}

export interface Certification {
  name: string;
  date: string;
}

export const certifications: Certification[] = [
  { name: "AWS SAA (Solutions Architect Associate)", date: "2024.07" },
  { name: "ADsP (Advanced Data Analytics Semi-Professional)", date: "2023.11" },
  { name: "OPIc IH (Intermediate High)", date: "2024.04" },
  { name: "AWS Hackathon 대상 1위", date: "2024.02" },
];

export const education: Education[] = [
  {
    school: "가천대학교",
    degree: "경제학과 (3.6/4.5)",
    period: "",
  },
  {
    school: "Oklahoma State University",
    degree: "4.0/4.0",
    period: "",
  },
  {
    school: "AWS CloudSchool 4기",
    degree: "클라우드 아키텍처",
    period: "2024.01 ~ 2024.07",
    note: "AWS 해커톤 대상 (1위)",
  },
];
