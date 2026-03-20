import type { Locale } from "../utils";

interface AboutData {
  paragraphs: string[];
  tags: string[];
}

const aboutData: Record<Locale, AboutData> = {
  ko: {
    paragraphs: [
      '<span class="text-[var(--color-text)] font-medium">클라우드 인프라를 관리하며 70개 이상의 고객 문제를 해결하고, AI 도구로 서비스를 직접 만들어본 경험</span>이 있습니다. 고객의 기술적 어려움을 파악해 해결책을 제안하고, 필요하면 직접 프로토타입을 만들어 검증합니다.',
      'AWS MSP 파트너사에서 EC2, S3, RDS, Lambda, CloudFront 등 70+ 고객 계정의 인프라를 관리하고 있습니다. Cost Explorer 비용 분석, RI 전환 권고, S3 Lifecycle 정책 최적화, Lambda 이미지 리사이징 자동화 등 비용 최적화 컨설팅을 수행합니다.',
      '<span class="text-[var(--color-text)] font-medium">AI 도구를 활용한 개발 생산성 극대화</span>를 추구합니다. Claude Code로 Dear,ANT 서비스를 기획부터 배포까지 1인 2주 만에 완성했습니다. AI를 \'써본\' 수준이 아니라, AI로 \'만들어본\' 경험이 있습니다.',
    ],
    tags: [
      "Cloud Infrastructure", "AWS", "Cost Optimization", "AI Service",
      "Technical Consulting", "Claude Code", "Next.js", "TypeScript",
      "Supabase", "CQRS",
    ],
  },
  en: {
    paragraphs: [
      '<span class="text-[var(--color-text)] font-medium">Experience managing cloud infrastructure, solving issues for 70+ clients, and building services with AI tools</span>. I identify clients\' technical challenges, propose solutions, and build prototypes to validate them when needed.',
      'At an AWS MSP partner company, I manage infrastructure for 70+ customer accounts including EC2, S3, RDS, Lambda, and CloudFront. I provide cost optimization consulting through Cost Explorer analysis, RI conversion recommendations, S3 Lifecycle policy optimization, and Lambda image resizing automation.',
      'I pursue <span class="text-[var(--color-text)] font-medium">maximizing development productivity with AI tools</span>. Using Claude Code, I completed the Dear,ANT service from planning to deployment in just 2 weeks as a solo developer. I don\'t just "use" AI — I "build" with AI.',
    ],
    tags: [
      "Cloud Infrastructure", "AWS", "Cost Optimization", "AI Service",
      "Technical Consulting", "Claude Code", "Next.js", "TypeScript",
      "Supabase", "CQRS",
    ],
  },
  ja: {
    paragraphs: [
      '<span class="text-[var(--color-text)] font-medium">クラウドインフラを管理し、70以上の顧客の課題を解決し、AIツールでサービスを自ら構築した経験</span>があります。顧客の技術的な課題を把握して解決策を提案し、必要に応じてプロトタイプを作成して検証します。',
      'AWS MSPパートナー企業で、EC2、S3、RDS、Lambda、CloudFrontなど70以上の顧客アカウントのインフラを管理しています。Cost Explorerによるコスト分析、RI転換推奨、S3 Lifecycleポリシー最適化、Lambda画像リサイズ自動化など、コスト最適化コンサルティングを実施しています。',
      '<span class="text-[var(--color-text)] font-medium">AIツールを活用した開発生産性の最大化</span>を追求しています。Claude Codeを使い、Dear,ANTサービスを企画からデプロイまで1人で2週間で完成させました。AIを「使った」レベルではなく、AIで「作った」経験があります。',
    ],
    tags: [
      "Cloud Infrastructure", "AWS", "Cost Optimization", "AI Service",
      "Technical Consulting", "Claude Code", "Next.js", "TypeScript",
      "Supabase", "CQRS",
    ],
  },
};

export function getAboutData(locale: Locale): AboutData {
  return aboutData[locale];
}
