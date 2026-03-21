import type { Locale } from "../utils";

interface AboutData {
  paragraphs: string[];
  tags: string[];
}

const aboutData: Record<Locale, AboutData> = {
  ko: {
    paragraphs: [
      '클라우드 인프라 운영과 비용 최적화 컨설팅을 통해 70개 이상의 고객 환경에서 발생한 기술 및 비용 문제를 해결해왔습니다. 단순 운영을 넘어, 고객의 사용 패턴과 아키텍처를 분석하여 비용 절감과 성능 개선을 동시에 달성하는 실행 중심의 역할을 수행합니다.',
      'AWS MSP 파트너사에서 EC2, S3, RDS, Lambda, CloudFront 기반의 다수 고객 계정을 관리하며,<br/><br/>• Cost Explorer 기반 비용 구조 분석 및 비효율 구간 도출<br/>• RI/SP 전환 전략 수립 및 적용<br/>• S3 Lifecycle 정책 설계로 스토리지 비용 절감<br/>• Lambda 기반 이미지 리사이징 자동화 구축<br/><br/>등을 수행하며 지속적인 비용 최적화 체계를 구축했습니다. 특히 단발성 제안이 아닌, 고객 환경에 맞춘 구조적 개선과 운영 프로세스 정착까지 이어가는 것이 강점입니다.',
      '또한 AI 도구를 활용한 빠른 실행력을 기반으로, 서비스 기획부터 개발, 배포까지 직접 수행합니다. Claude Code를 활용해 \'Dear,ANT\' 서비스를 2주 만에 단독으로 구현 및 배포하며, 아이디어 검증 → 프로토타입 제작 → 실제 서비스화까지 전 과정을 경험했습니다.',
      'AI를 단순 활용하는 수준을 넘어, 문제 해결을 위한 제품으로 직접 구현해본 경험을 보유하고 있습니다.',
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
