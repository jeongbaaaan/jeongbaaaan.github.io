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
];
