export interface Experience {
  company: string;
  team: string;
  role: string;
  period: string;
  location: string;
  project: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "스마일샤크",
    team: "AWS MSP",
    role: "Account Manager",
    period: "2024.11 ~ 현재",
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
  {
    company: "네이버클라우드",
    team: "Clova X",
    role: "AI PM",
    period: "2023.11 ~ 2023.12",
    location: "",
    project: "Clova X",
    highlights: [
      "[AI] 프롬프트 데이터셋 구축 (Few-shot 기반)",
      "[UX] UX 흐름 설계 및 사용자 시나리오 작성",
      "[Planning] 기획 문서를 API 스펙으로 변환하여 개발팀과 협업",
      "[Process] 수정 사이클 3회에서 1회로 단축 (66% 단축)",
    ],
  },
  {
    company: "AWS CloudSchool 4기",
    team: "",
    role: "부팀장 / DB 리더",
    period: "2024.01 ~ 2024.07",
    location: "",
    project: "CQRS 경매 웹사이트",
    highlights: [
      "[Architecture] CQRS 패턴 기반 경매 웹사이트 설계",
      "[Infra] Multi-AZ 고가용성 아키텍처 구현",
      "[Performance] 처리량 2배 향상, 비용 30% 절감",
      "[Award] AWS 해커톤 대상 (1위) 수상",
    ],
  },
  {
    company: "신한은행",
    team: "",
    role: "기업뱅킹 IT기획",
    period: "2023.09",
    location: "",
    project: "",
    highlights: [
      "[Planning] 기업뱅킹 IT 기획 업무 수행",
    ],
  },
  {
    company: "Dear,ANT",
    team: "",
    role: "개인 프로젝트",
    period: "2025.03",
    location: "",
    project: "AI 투자 판단 리포트 서비스",
    highlights: [
      "[Product] AI 투자 판단 리포트 서비스 기획·설계·개발·배포",
      "[Tech] Next.js 16 + TypeScript + React 19 + Tailwind CSS 4 + Supabase 기술 스택",
      "[AI] Claude Code를 활용한 1인 2주 End-to-End 개발",
    ],
  },
];
