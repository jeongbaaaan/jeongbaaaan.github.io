// 이력서 생성용 통합 데이터
// 이 파일이 이력서의 Single Source of Truth

export const profile = {
  name: "장정빈",
  title: "Cloud Infra · AI Service · Technical Consulting",
  birth: "",
  address: "",
  portfolio: "jeongbaaaan.github.io",
  salary: { current: "", desired: "" },
};

export const summary = [
  "AWS MSP 파트너사에서 70+ 고객 계정의 클라우드 인프라를 관리하고 비용을 최적화하는 Account Manager입니다. QR 이미지 Lambda 리사이징 아키텍처를 설계하여 스토리지 60% 절감, RI 전환 권고 및 S3 Lifecycle 정책 최적화를 통한 비용 절감을 달성했습니다.",
  "네이버클라우드 Clova X 공모전에서 AI PM으로 프롬프트 데이터셋을 구축하고 UX 흐름을 설계한 경험이 있습니다. 기획 문서를 API 스펙으로 변환하여 개발팀과 협업하며 수정 사이클을 66% 단축했습니다.",
  "AWS CloudSchool 해커톤 대상(1위) 수상 경력이 있으며, Claude Code를 활용해 Dear,ANT AI 투자 판단 리포트 서비스를 1인 2주 만에 기획부터 배포까지 완성했습니다. 기술 블로그: substack.com/@bitbit1",
];

export const skills = {
  "Cloud": "AWS (EC2, S3, Lambda, RDS, CloudFront, Cost Explorer), Docker, Linux",
  "Dev": "Next.js, TypeScript, React, Python, JavaScript",
  "DB": "Supabase (PostgreSQL), MySQL, CQRS",
  "Tools": "JIRA, Figma, Notion, Git, Claude Code",
};

export interface CareerEntry {
  company: string;
  role: string;
  team: string;
  period: string;
  location: string;
  reason?: string;
  project?: string;
  highlights: string[];
}

export const career: CareerEntry[] = [
  {
    company: "스마일샤크",
    role: "Account Manager",
    team: "AWS MSP",
    period: "2024.11 – 현재",
    location: "",
    project: "AWS MSP",
    highlights: [
      "[Cloud] 70+ 고객 계정의 AWS 인프라(EC2, S3, RDS, Lambda, CloudFront) 관리 및 기술 지원",
      "[Architecture] QR 이미지 Lambda 리사이징 아키텍처 설계로 스토리지 60% 절감",
      "[Cost] Cost Explorer 기반 비용 분석 및 RI 전환 권고",
      "[Cost] S3 Lifecycle 정책 최적화를 통한 비용 절감",
      "[Consulting] 신규 고객사 PoC 수행 (Well-Architected 프레임워크 기반)",
    ],
  },
];

export const education = [
  {
    school: "가천대학교",
    major: "경제학과 (3.6/4.5)",
    period: "",
    location: "",
    details: [],
  },
  {
    school: "Oklahoma State University",
    major: "4.0/4.0",
    period: "",
    location: "",
    details: [],
  },
];

export const certifications = [
  "AWS SAA (Solutions Architect Associate) – 2024.07",
  "ADsP (Advanced Data Analytics Semi-Professional) – 2023.11",
  "OPIc IH (Intermediate High) – 2024.04",
  "AWS Hackathon 대상 1위 – 2024.02",
  "AWS Official Training 6개 (Serverless, DevOps, Developing, Well-Architected, Technical Essentials, Security Essentials)",
];
