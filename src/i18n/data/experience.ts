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
    {
      company: "Naver Cloud",
      team: "Clova X",
      role: "AI PM",
      period: "2023.11 ~ 2023.12",
      location: "",
      project: "Clova X",
      highlights: [
        "[AI] Built prompt datasets (Few-shot based)",
        "[UX] Designed UX flows and user scenarios",
        "[Planning] Converted planning documents to API specifications for developer collaboration",
        "[Process] Reduced revision cycles from 3 to 1 (66% reduction)",
      ],
    },
    {
      company: "AWS CloudSchool Cohort 4",
      team: "",
      role: "Vice Team Lead / DB Leader",
      period: "2024.01 ~ 2024.07",
      location: "",
      project: "CQRS Auction Website",
      highlights: [
        "[Architecture] Designed auction website based on CQRS pattern",
        "[Infra] Implemented Multi-AZ high availability architecture",
        "[Performance] Doubled throughput, reduced costs by 30%",
        "[Award] Won 1st place (Grand Prize) at AWS Hackathon",
      ],
    },
    {
      company: "Shinhan Bank",
      team: "",
      role: "Corporate Banking IT Planning",
      period: "2023.09",
      location: "",
      project: "",
      highlights: [
        "[Planning] Corporate banking IT planning operations",
      ],
    },
    {
      company: "Dear,ANT",
      team: "",
      role: "Personal Project",
      period: "2025.03",
      location: "",
      project: "AI Investment Report Service",
      highlights: [
        "[Product] Planned, designed, developed, and deployed an AI investment decision report service",
        "[Tech] Built with Next.js 16 + TypeScript + React 19 + Tailwind CSS 4 + Supabase",
        "[AI] Solo end-to-end development in 2 weeks using Claude Code",
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
    {
      company: "Naverクラウド",
      team: "Clova X",
      role: "AI PM",
      period: "2023.11 ~ 2023.12",
      location: "",
      project: "Clova X",
      highlights: [
        "[AI] プロンプトデータセット構築（Few-shotベース）",
        "[UX] UXフロー設計およびユーザーシナリオ作成",
        "[Planning] 企画文書をAPIスペックに変換し開発チームと協業",
        "[Process] 修正サイクルを3回から1回に短縮（66%短縮）",
      ],
    },
    {
      company: "AWS CloudSchool 第4期",
      team: "",
      role: "副チームリーダー / DBリーダー",
      period: "2024.01 ~ 2024.07",
      location: "",
      project: "CQRS オークションWebサイト",
      highlights: [
        "[Architecture] CQRSパターンベースのオークションWebサイト設計",
        "[Infra] Multi-AZ高可用性アーキテクチャ実装",
        "[Performance] スループット2倍向上、コスト30%削減",
        "[Award] AWSハッカソン大賞（1位）受賞",
      ],
    },
    {
      company: "新韓銀行",
      team: "",
      role: "法人バンキングIT企画",
      period: "2023.09",
      location: "",
      project: "",
      highlights: [
        "[Planning] 法人バンキングIT企画業務遂行",
      ],
    },
    {
      company: "Dear,ANT",
      team: "",
      role: "個人プロジェクト",
      period: "2025.03",
      location: "",
      project: "AI投資判断レポートサービス",
      highlights: [
        "[Product] AI投資判断レポートサービスの企画・設計・開発・デプロイ",
        "[Tech] Next.js 16 + TypeScript + React 19 + Tailwind CSS 4 + Supabase技術スタック",
        "[AI] Claude Codeを活用した1人2週間のEnd-to-End開発",
      ],
    },
  ],
};

export function getExperiences(locale: Locale): Experience[] {
  return experienceData[locale];
}
