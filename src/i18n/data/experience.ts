import type { Locale } from "../utils";

export interface Experience {
  company: string;
  team: string;
  role: string;
  period: string;
  location: string;
  project: string;
  highlights: string[];
}

const experienceData: Record<Locale, Experience[]> = {
  ko: [
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
  ],
  en: [
    {
      company: "SmileShark",
      team: "AWS MSP",
      role: "Account Manager",
      period: "2024.11 ~ Present",
      location: "",
      project: "AWS MSP",
      highlights: [
        "[Cloud] Managing AWS infrastructure (EC2, S3, RDS, Lambda, CloudFront) for 70+ customer accounts with technical support",
        "[Architecture] Designed QR image Lambda resizing architecture, achieving 60% storage reduction",
        "[Cost] Cost analysis and RI conversion recommendations based on Cost Explorer",
        "[Cost] Cost savings through S3 Lifecycle policy optimization",
        "[Consulting] Conducting PoC for new clients (based on Well-Architected Framework)",
      ],
    },
  ],
  ja: [
    {
      company: "SmileShark",
      team: "AWS MSP",
      role: "アカウントマネージャー",
      period: "2024.11 ~ 現在",
      location: "",
      project: "AWS MSP",
      highlights: [
        "[Cloud] 70以上の顧客アカウントのAWSインフラ（EC2、S3、RDS、Lambda、CloudFront）管理および技術サポート",
        "[Architecture] QR画像Lambda リサイズアーキテクチャ設計によりストレージ60%削減",
        "[Cost] Cost Explorerベースのコスト分析およびRI転換推奨",
        "[Cost] S3 Lifecycleポリシー最適化によるコスト削減",
        "[Consulting] 新規顧客向けPoC実施（Well-Architectedフレームワーク基盤）",
      ],
    },
  ],
};

export function getExperiences(locale: Locale): Experience[] {
  return experienceData[locale];
}
