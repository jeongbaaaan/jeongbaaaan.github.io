import type { Locale } from "../utils";

export interface ProjectData {
  title: string;
  company: string;
  period: string;
  role: string;
  tags: string[];
  github?: string;
  demo?: string;
  sideProject?: boolean;
  claudeCode?: boolean;
  education?: boolean;
  contentHtml: string;
}

export const projectSlugs = [
  "cloud-infra-management",
  "clova-x-chatbot",
  "cloud-native-auction",
  "kubernetes-service",
  "python-data-viz",
  "dear-ant",
  "dalgyeol",
  "sauce-face-test",
  "calendar-briefing-agent",
] as const;

type Metric = { value: string; label: string };
type FlowStep = { title: string; desc: string };
type ProblemFrame = { beforeTag: string; before: string; afterTag: string; after: string };
type StackItem = { label: string; value: string };
type ImageItem = { src: string; alt: string };

interface ProjectContent {
  metrics?: Metric[];
  summary: string;
  signal: string;
  problem?: ProblemFrame;
  flow?: FlowStep[];
  actions: string[];
  results: string[];
  stack: StackItem[];
  images?: ImageItem[];
}

interface SectionLabels {
  summary: string;
  signal: string;
  problem: string;
  flow: string;
  action: string;
  result: string;
  stack: string;
  screenshots: string;
}

const sectionLabels: Record<Locale, SectionLabels> = {
  ko: {
    summary: "한줄 요약",
    signal: "현업 관점",
    problem: "문제 정의",
    flow: "제품/구조 흐름",
    action: "주요 실행",
    result: "결과",
    stack: "기술 스택",
    screenshots: "스크린샷",
  },
  en: {
    summary: "Summary",
    signal: "Hiring Signal",
    problem: "Problem Framing",
    flow: "Product / System Flow",
    action: "What I Built",
    result: "Result",
    stack: "Tech Stack",
    screenshots: "Screenshots",
  },
  ja: {
    summary: "概要",
    signal: "実務で伝わるポイント",
    problem: "課題設定",
    flow: "プロダクト/構造フロー",
    action: "実施内容",
    result: "成果",
    stack: "技術スタック",
    screenshots: "スクリーンショット",
  },
};

function metricCards(metrics?: Metric[]): string {
  if (!metrics?.length) return "";
  return `<div class="metric-strip">
${metrics.map((item) => `<div class="metric-stat"><span class="value">${item.value}</span><span class="label">${item.label}</span></div>`).join("\n")}
</div>`;
}

function bulletList(items: string[]): string {
  return `<ul>
${items.map((item) => `<li>${item}</li>`).join("\n")}
</ul>`;
}

function compare(frame?: ProblemFrame): string {
  if (!frame) return "";
  return `<div class="compare">
<div class="compare-item before"><span class="tag">${frame.beforeTag}</span><p>${frame.before}</p></div>
<div class="compare-item after"><span class="tag">${frame.afterTag}</span><p>${frame.after}</p></div>
</div>`;
}

function processFlow(steps?: FlowStep[]): string {
  if (!steps?.length) return "";
  return `<div class="process-flow">
${steps
  .map((step, index) => {
    const item = `<div class="process-step"><div class="step-title">${step.title}</div><div class="step-desc">${step.desc}</div></div>`;
    return index === steps.length - 1 ? item : `${item}\n<span class="process-arrow">→</span>`;
  })
  .join("\n")}
</div>`;
}

function stackGrid(items: StackItem[]): string {
  return `<div class="bento-grid">
${items.map((item) => `<div class="bento-item"><span class="bento-label">${item.label}</span><span class="bento-value">${item.value}</span></div>`).join("\n")}
</div>`;
}

function imageGrid(images?: ImageItem[]): string {
  if (!images?.length) return "";
  return `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;">
${images.map((image) => `<img src="${image.src}" alt="${image.alt}" style="width:100%;border-radius:8px;" />`).join("\n")}
</div>`;
}

function projectHtml(locale: Locale, content: ProjectContent): string {
  const label = sectionLabels[locale];
  return `${metricCards(content.metrics)}

<h2>${label.summary}</h2>
<p>${content.summary}</p>

<div class="highlight-box">
<strong>${label.signal}</strong>: ${content.signal}
</div>

${content.problem ? `<h2>${label.problem}</h2>\n${compare(content.problem)}\n` : ""}${content.flow ? `<h2>${label.flow}</h2>\n${processFlow(content.flow)}\n` : ""}
<h2>${label.action}</h2>
${bulletList(content.actions)}

<h2>${label.result}</h2>
${bulletList(content.results)}

<h2>${label.stack}</h2>
${stackGrid(content.stack)}
${content.images ? `\n<h2>${label.screenshots}</h2>\n${imageGrid(content.images)}` : ""}`;
}

const projectsData: Record<string, Record<Locale, ProjectData>> = {
  "cloud-infra-management": {
    ko: {
      title: "클라우드 인프라 관리 & 비용 최적화",
      company: "스마일샤크",
      period: "2024.11 ~ 현재",
      role: "Account Manager",
      tags: ["AWS", "EC2", "Lambda", "Cost Optimization"],
      contentHtml: projectHtml("ko", {
        metrics: [
          { value: "70+", label: "고객 계정" },
          { value: "60%", label: "스토리지 절감" },
          { value: "6", label: "AWS 공식 교육" },
        ],
        summary:
          "AWS MSP 환경에서 70개 이상의 고객 계정을 운영하며 비용, 장애, 아키텍처 이슈를 고객 언어로 정리하고 실행 가능한 개선안으로 연결했습니다.",
        signal:
          "단순 콘솔 운영이 아니라 고객의 비용 구조와 운영 리스크를 읽고, 기술 대안을 비즈니스 효과로 설명할 수 있는 클라우드 운영 역량을 보여줍니다.",
        problem: {
          beforeTag: "Before",
          before: "원본 QR 이미지를 그대로 저장하고 배포해 스토리지와 전송 비용이 불필요하게 커졌습니다.",
          afterTag: "After",
          after: "S3 업로드 이벤트에 Lambda 리사이징을 연결해 이미지 용량을 줄이고 CloudFront 배포 흐름을 유지했습니다.",
        },
        flow: [
          { title: "진단", desc: "Cost Explorer·리소스 점검" },
          { title: "설계", desc: "서버리스 개선안" },
          { title: "적용", desc: "S3→Lambda→CloudFront" },
          { title: "보고", desc: "비용 효과·운영 리스크" },
        ],
        actions: [
          "70+ 고객 AWS 계정의 EC2, S3, RDS, Lambda, CloudFront 사용 현황과 비용 흐름을 점검했습니다.",
          "QR 이미지 파이프라인을 S3 업로드, Lambda 자동 리사이징, CloudFront 배포 구조로 재설계했습니다.",
          "Cost Explorer 데이터를 기반으로 RI 전환, S3 Lifecycle, 불필요 리소스 정리 같은 고객별 최적화 안건을 도출했습니다.",
          "신규 고객 PoC에서 Well-Architected Framework 관점으로 보안, 안정성, 비용 최적화 항목을 검토했습니다.",
          "AWS Serverless, DevOps, Developing, Well-Architected, Technical Essentials, Security Essentials 교육을 수료하고 SAA 자격을 취득했습니다.",
        ],
        results: [
          "QR 이미지 리사이징 구조 적용 건에서 스토리지 사용량 60% 절감 효과를 만들었습니다.",
          "고객별 비용 이슈를 기술 항목이 아니라 의사결정 가능한 개선 리스트로 전달했습니다.",
          "운영, 비용, 아키텍처 리뷰를 함께 수행하며 클라우드 AM으로서의 문제 해결 범위를 넓혔습니다.",
        ],
        stack: [
          { label: "Cloud", value: "AWS EC2, S3, RDS, Lambda, CloudFront, Cost Explorer" },
          { label: "Architecture", value: "Serverless, Well-Architected Framework" },
          { label: "Optimization", value: "RI 전환 제안, S3 Lifecycle, 이미지 리사이징" },
        ],
      }),
    },
    en: {
      title: "Cloud Infra Management & Cost Optimization",
      company: "SmileShark",
      period: "2024.11 ~ Present",
      role: "Account Manager",
      tags: ["AWS", "EC2", "Lambda", "Cost Optimization"],
      contentHtml: projectHtml("en", {
        metrics: [
          { value: "70+", label: "Customer Accounts" },
          { value: "60%", label: "Storage Reduced" },
          { value: "6", label: "AWS Trainings" },
        ],
        summary:
          "Managed 70+ customer AWS accounts in an MSP environment, translating cost, reliability, and architecture issues into actionable customer-facing recommendations.",
        signal:
          "This shows cloud operations judgment beyond console work: reading cost structures, spotting reliability risks, and explaining technical options in business terms.",
        problem: {
          beforeTag: "Before",
          before: "QR images were stored and distributed at original size, creating avoidable storage and delivery cost.",
          afterTag: "After",
          after: "Connected S3 upload events to Lambda resizing while preserving the CloudFront delivery path.",
        },
        flow: [
          { title: "Diagnose", desc: "Cost and resource review" },
          { title: "Design", desc: "Serverless improvement" },
          { title: "Apply", desc: "S3→Lambda→CloudFront" },
          { title: "Report", desc: "Cost and risk impact" },
        ],
        actions: [
          "Reviewed EC2, S3, RDS, Lambda, CloudFront, and cost patterns across 70+ AWS customer accounts.",
          "Redesigned the QR image pipeline around S3 upload, Lambda resizing, and CloudFront distribution.",
          "Used Cost Explorer to identify customer-specific optimization items including RI conversion, S3 Lifecycle, and unused resources.",
          "Reviewed new-customer PoCs through Well-Architected lenses including security, reliability, and cost optimization.",
          "Completed AWS Serverless, DevOps, Developing, Well-Architected, Technical Essentials, and Security Essentials training, and earned AWS SAA.",
        ],
        results: [
          "Reduced storage usage by 60% in the QR image resizing architecture case.",
          "Turned customer cost issues into concrete action lists rather than raw cloud metrics.",
          "Expanded from account operation into architecture review, cost optimization, and incident-aware customer communication.",
        ],
        stack: [
          { label: "Cloud", value: "AWS EC2, S3, RDS, Lambda, CloudFront, Cost Explorer" },
          { label: "Architecture", value: "Serverless, Well-Architected Framework" },
          { label: "Optimization", value: "RI recommendations, S3 Lifecycle, image resizing" },
        ],
      }),
    },
    ja: {
      title: "クラウドインフラ管理＆コスト最適化",
      company: "スマイルシャーク",
      period: "2024.11 ~ 現在",
      role: "アカウントマネージャー",
      tags: ["AWS", "EC2", "Lambda", "Cost Optimization"],
      contentHtml: projectHtml("ja", {
        metrics: [
          { value: "70+", label: "顧客アカウント" },
          { value: "60%", label: "ストレージ削減" },
          { value: "6", label: "AWS公式研修" },
        ],
        summary:
          "AWS MSP環境で70以上の顧客アカウントを運用し、コスト、障害、アーキテクチャ課題を顧客が判断できる改善案へ整理しました。",
        signal:
          "単なるコンソール運用ではなく、コスト構造と運用リスクを読み、技術的な選択肢をビジネス効果として説明できるクラウド運用力を示します。",
        problem: {
          beforeTag: "Before",
          before: "QR画像を元サイズのまま保存・配信しており、ストレージと配信コストが不要に増えていました。",
          afterTag: "After",
          after: "S3アップロードイベントにLambdaリサイズを接続し、CloudFront配信フローは維持しました。",
        },
        flow: [
          { title: "診断", desc: "コスト・リソース確認" },
          { title: "設計", desc: "サーバーレス改善案" },
          { title: "適用", desc: "S3→Lambda→CloudFront" },
          { title: "報告", desc: "費用効果・運用リスク" },
        ],
        actions: [
          "70以上の顧客AWSアカウントでEC2、S3、RDS、Lambda、CloudFrontの利用状況とコストを確認しました。",
          "QR画像パイプラインをS3アップロード、Lambda自動リサイズ、CloudFront配信の構造へ再設計しました。",
          "Cost ExplorerをもとにRI転換、S3 Lifecycle、不要リソース整理など顧客別の最適化案を出しました。",
          "新規顧客PoCではWell-Architected Framework観点でセキュリティ、信頼性、コスト最適化を確認しました。",
          "AWS Serverless、DevOps、Developing、Well-Architected、Technical Essentials、Security Essentialsを修了し、SAAを取得しました。",
        ],
        results: [
          "QR画像リサイズ構造の適用ケースでストレージ使用量を60%削減しました。",
          "顧客のコスト課題をクラウド指標の羅列ではなく、実行可能な改善リストとして伝えました。",
          "運用、コスト、アーキテクチャレビューを横断して扱うクラウドAMとしての問題解決範囲を広げました。",
        ],
        stack: [
          { label: "Cloud", value: "AWS EC2, S3, RDS, Lambda, CloudFront, Cost Explorer" },
          { label: "Architecture", value: "Serverless, Well-Architected Framework" },
          { label: "Optimization", value: "RI転換提案、S3 Lifecycle、画像リサイズ" },
        ],
      }),
    },
  },

  "clova-x-chatbot": {
    ko: {
      title: "Clova X AI 챗봇 PM",
      company: "네이버클라우드 (대외활동)",
      period: "2023.11 ~ 2023.12",
      role: "AI PM",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      contentHtml: projectHtml("ko", {
        metrics: [
          { value: "18", label: "성향 질문" },
          { value: "3→1", label: "수정 사이클" },
          { value: "Few-shot", label: "프롬프트 설계" },
        ],
        summary:
          "AI 챗봇 아이디어를 사용자 성향 진단, 캐릭터 생성, 맞춤 대화 흐름으로 쪼개고 개발팀이 바로 구현할 수 있는 API 스펙까지 정리했습니다.",
        signal:
          "AI PM에게 중요한 역량인 모호한 아이디어의 구조화, 프롬프트 요구사항 정의, 기획-개발 간 커뮤니케이션 비용 절감이 드러납니다.",
        problem: {
          beforeTag: "Before",
          before: "기획 문서가 추상적이면 개발팀이 의도를 재확인해야 하고 수정 사이클이 반복됩니다.",
          afterTag: "After",
          after: "프롬프트 데이터셋, IA, API 스펙으로 기획 의도를 쪼개 개발 가능한 요구사항으로 전환했습니다.",
        },
        flow: [
          { title: "질문", desc: "18문항 성향 진단" },
          { title: "분류", desc: "사용자 페르소나" },
          { title: "생성", desc: "AI 캐릭터" },
          { title: "대화", desc: "상황별 챗봇" },
        ],
        actions: [
          "18문항 성향 분석을 기반으로 사용자 페르소나와 AI 캐릭터 생성 흐름을 설계했습니다.",
          "Few-shot 예시와 상황별 대화 톤을 정리해 Clova X 기반 챗봇의 응답 방향을 구체화했습니다.",
          "화면 흐름, IA, 컴포넌트 기준을 정리해 사용자 여정이 끊기지 않도록 설계했습니다.",
          "기획 문서를 API 스펙으로 변환하는 협업 프로세스를 만들어 개발팀과의 해석 차이를 줄였습니다.",
        ],
        results: [
          "기획-개발 수정 사이클을 평균 3회에서 1회로 줄였습니다.",
          "AI 챗봇의 핵심 경험을 성향 분석, 캐릭터 생성, 맞춤 대화로 명확하게 구조화했습니다.",
          "PM 산출물이 실제 개발 입력값으로 쓰이도록 요구사항의 밀도를 높였습니다.",
        ],
        stack: [
          { label: "AI", value: "Clova X, Prompt Engineering, Few-shot Prompting" },
          { label: "PM", value: "Persona, IA, User Flow, API Spec" },
          { label: "Design", value: "Typography, Color System, Component 기준" },
        ],
      }),
    },
    en: {
      title: "Clova X AI Chatbot PM",
      company: "Naver Cloud (Extracurricular)",
      period: "2023.11 ~ 2023.12",
      role: "AI PM",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      contentHtml: projectHtml("en", {
        metrics: [
          { value: "18", label: "Profile Questions" },
          { value: "3→1", label: "Revision Cycles" },
          { value: "Few-shot", label: "Prompt Design" },
        ],
        summary:
          "Structured an AI chatbot concept into user profiling, AI character generation, personalized conversation flows, and developer-ready API specs.",
        signal:
          "This demonstrates AI PM fundamentals: turning ambiguity into product logic, defining prompt requirements, and reducing planning-development friction.",
        problem: {
          beforeTag: "Before",
          before: "Abstract planning documents forced developers to re-check intent and caused repeated revision cycles.",
          afterTag: "After",
          after: "Converted the concept into prompt datasets, IA, and API specs that could be implemented directly.",
        },
        flow: [
          { title: "Questions", desc: "18-item profile test" },
          { title: "Classify", desc: "User persona" },
          { title: "Generate", desc: "AI character" },
          { title: "Chat", desc: "Contextual dialogue" },
        ],
        actions: [
          "Designed the user persona and AI character generation flow around an 18-question profile test.",
          "Defined few-shot examples and situational tone rules for Clova X chatbot responses.",
          "Mapped screens, IA, and component guidelines to keep the user journey coherent.",
          "Built a planning-to-API-spec collaboration process to reduce interpretation gaps with developers.",
        ],
        results: [
          "Reduced planning-development revision cycles from an average of 3 to 1.",
          "Clarified the chatbot experience into profile analysis, character generation, and personalized conversation.",
          "Made PM deliverables dense enough to work as actual development input.",
        ],
        stack: [
          { label: "AI", value: "Clova X, Prompt Engineering, Few-shot Prompting" },
          { label: "PM", value: "Persona, IA, User Flow, API Spec" },
          { label: "Design", value: "Typography, Color System, Component Guidelines" },
        ],
      }),
    },
    ja: {
      title: "Clova X AI チャットボット PM",
      company: "NAVERクラウド (課外活動)",
      period: "2023.11 ~ 2023.12",
      role: "AI PM",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      contentHtml: projectHtml("ja", {
        metrics: [
          { value: "18", label: "性向質問" },
          { value: "3→1", label: "修正サイクル" },
          { value: "Few-shot", label: "プロンプト設計" },
        ],
        summary:
          "AIチャットボットのアイデアを性向診断、AIキャラクター生成、パーソナライズ会話、開発可能なAPI仕様へ構造化しました。",
        signal:
          "曖昧なAI企画をプロダクトロジックに落とし込み、プロンプト要件を定義し、企画と開発の摩擦を下げるAI PM力を示します。",
        problem: {
          beforeTag: "Before",
          before: "企画文書が抽象的だと、開発チームが意図を再確認し、修正サイクルが繰り返されます。",
          afterTag: "After",
          after: "プロンプトデータセット、IA、API仕様へ分解し、実装できる要求事項に変換しました。",
        },
        flow: [
          { title: "質問", desc: "18問の性向診断" },
          { title: "分類", desc: "ユーザーペルソナ" },
          { title: "生成", desc: "AIキャラクター" },
          { title: "会話", desc: "状況別チャット" },
        ],
        actions: [
          "18問の性向分析をもとにユーザーペルソナとAIキャラクター生成フローを設計しました。",
          "Few-shot例と状況別の会話トーンを整理し、Clova Xチャットボットの応答方針を具体化しました。",
          "画面フロー、IA、コンポーネント基準を整理し、ユーザー体験が途切れないよう設計しました。",
          "企画文書をAPI仕様へ変換する協業プロセスを作り、開発チームとの解釈差を減らしました。",
        ],
        results: [
          "企画開発間の修正サイクルを平均3回から1回へ短縮しました。",
          "AIチャットボットの中核体験を性向分析、キャラクター生成、パーソナライズ会話として明確化しました。",
          "PM成果物が実際の開発入力として使える密度になるよう改善しました。",
        ],
        stack: [
          { label: "AI", value: "Clova X, Prompt Engineering, Few-shot Prompting" },
          { label: "PM", value: "Persona, IA, User Flow, API Spec" },
          { label: "Design", value: "Typography, Color System, Component基準" },
        ],
      }),
    },
  },

  "cloud-native-auction": {
    ko: {
      title: "CQRS 경매 웹사이트",
      company: "AWS CloudSchool (교육)",
      period: "2024.01 ~ 2024.07",
      role: "부팀장 / DB 리더",
      tags: ["AWS", "CQRS", "RDS", "Multi-AZ"],
      education: true,
      contentHtml: projectHtml("ko", {
        metrics: [
          { value: "대상", label: "AWS 해커톤" },
          { value: "2x", label: "처리량 향상" },
          { value: "30%", label: "비용 절감" },
        ],
        summary:
          "동시 입찰과 입찰 순서 보장이 중요한 경매 도메인에 CQRS, SQS FIFO, Multi-AZ 아키텍처를 적용해 성능과 비용을 함께 개선했습니다.",
        signal:
          "도메인의 병목을 읽고 데이터 I/O, 메시징, 고가용성을 함께 설계한 경험입니다. 교육 프로젝트지만 현업 아키텍처 의사결정 방식으로 설명할 수 있습니다.",
        problem: {
          beforeTag: "Risk",
          before: "단일 CRUD DB 구조에서는 조회 트래픽과 입찰 쓰기 트래픽이 섞여 병목과 순서 오류 위험이 커집니다.",
          afterTag: "Architecture",
          after: "CQRS로 읽기와 쓰기를 분리하고 SQS FIFO로 입찰 순서를 보장하며 Multi-AZ로 장애 대응성을 높였습니다.",
        },
        flow: [
          { title: "Read", desc: "상품 조회 Replica" },
          { title: "Write", desc: "입찰 Command" },
          { title: "Queue", desc: "SQS FIFO 순서 보장" },
          { title: "HA", desc: "RDS Multi-AZ" },
        ],
        actions: [
          "부팀장으로 Jira 일정, AWS 비용, 팀 커뮤니케이션을 관리했습니다.",
          "DB 리더로 경매 서비스의 읽기/쓰기 비율을 분석하고 CQRS 구조를 제안했습니다.",
          "Kafka, RabbitMQ, SQS를 비교해 클라우드 운영 부담과 순서 보장 요구에 맞는 SQS FIFO를 선택했습니다.",
          "On-premise 흐름을 AWS 기반 EKS, RDS, ECR, CloudWatch 중심 구조로 재설계했습니다.",
          "아키텍처 스펙과 서비스별 책임을 문서화해 팀원이 같은 구조를 기준으로 개발하도록 맞췄습니다.",
        ],
        results: [
          "AWS CloudSchool 해커톤에서 대상(1위)을 수상했습니다.",
          "CQRS 읽기/쓰기 분리를 통해 처리량 2배 향상 결과를 만들었습니다.",
          "리소스 구조 조정으로 비용 30% 절감 결과를 만들었습니다.",
          "경매 도메인의 핵심 요구인 입찰 순서, 확장성, 장애 격리를 설계 산출물로 남겼습니다.",
        ],
        stack: [
          { label: "Cloud", value: "AWS EKS, RDS, Multi-AZ, Read Replica, SQS, ECR, CloudWatch" },
          { label: "Pattern", value: "CQRS, MSA, Queue-based Ordering" },
          { label: "DevOps", value: "Argo CD, Chaos Mesh, Grafana, Loki, Jaeger" },
          { label: "PM", value: "Jira, Slack, GitHub" },
        ],
        images: [
          { src: "/images/projects/cqrs-aws-architecture.png", alt: "AWS 인프라 아키텍처" },
          { src: "/images/projects/cqrs-queue-service.png", alt: "Queue Service 아키텍처" },
          { src: "/images/projects/cqrs-vs-crud.png", alt: "CRUD vs CQRS 비교" },
        ],
      }),
    },
    en: {
      title: "CQRS Auction Website",
      company: "AWS CloudSchool (Education)",
      period: "2024.01 ~ 2024.07",
      role: "Vice Team Lead / DB Lead",
      tags: ["AWS", "CQRS", "RDS", "Multi-AZ"],
      education: true,
      contentHtml: projectHtml("en", {
        metrics: [
          { value: "1st", label: "AWS Hackathon" },
          { value: "2x", label: "Throughput" },
          { value: "30%", label: "Cost Saved" },
        ],
        summary:
          "Applied CQRS, SQS FIFO, and Multi-AZ architecture to an auction domain where concurrent bids and bid ordering are core product requirements.",
        signal:
          "This reads as architecture decision-making: identifying domain bottlenecks, separating data I/O paths, selecting messaging, and planning for availability.",
        problem: {
          beforeTag: "Risk",
          before: "A single CRUD database mixes product reads with bid writes, increasing bottleneck and ordering risk.",
          afterTag: "Architecture",
          after: "Separated reads and writes with CQRS, guaranteed bid order with SQS FIFO, and improved resilience with Multi-AZ.",
        },
        flow: [
          { title: "Read", desc: "Product replica" },
          { title: "Write", desc: "Bid command" },
          { title: "Queue", desc: "SQS FIFO ordering" },
          { title: "HA", desc: "RDS Multi-AZ" },
        ],
        actions: [
          "Managed schedule, AWS cost, and team communication as Vice Team Lead.",
          "Led database architecture by analyzing read/write characteristics and proposing CQRS.",
          "Compared Kafka, RabbitMQ, and SQS, then selected SQS FIFO for cloud-fit and ordering requirements.",
          "Redesigned the on-premise flow around AWS EKS, RDS, ECR, and CloudWatch.",
          "Documented architecture specs and service responsibilities so the team could build from a shared model.",
        ],
        results: [
          "Won 1st place at the AWS CloudSchool hackathon.",
          "Improved throughput 2x through CQRS read/write separation.",
          "Reduced cost 30% through resource and architecture adjustments.",
          "Produced architecture artifacts covering bid ordering, scalability, and fault isolation.",
        ],
        stack: [
          { label: "Cloud", value: "AWS EKS, RDS, Multi-AZ, Read Replica, SQS, ECR, CloudWatch" },
          { label: "Pattern", value: "CQRS, MSA, Queue-based Ordering" },
          { label: "DevOps", value: "Argo CD, Chaos Mesh, Grafana, Loki, Jaeger" },
          { label: "PM", value: "Jira, Slack, GitHub" },
        ],
        images: [
          { src: "/images/projects/cqrs-aws-architecture.png", alt: "AWS infrastructure architecture" },
          { src: "/images/projects/cqrs-queue-service.png", alt: "Queue service architecture" },
          { src: "/images/projects/cqrs-vs-crud.png", alt: "CRUD vs CQRS comparison" },
        ],
      }),
    },
    ja: {
      title: "CQRSオークションサイト",
      company: "AWS CloudSchool (教育)",
      period: "2024.01 ~ 2024.07",
      role: "副チームリーダー / DBリーダー",
      tags: ["AWS", "CQRS", "RDS", "Multi-AZ"],
      education: true,
      contentHtml: projectHtml("ja", {
        metrics: [
          { value: "大賞", label: "AWSハッカソン" },
          { value: "2x", label: "処理量向上" },
          { value: "30%", label: "コスト削減" },
        ],
        summary:
          "同時入札と入札順序保証が重要なオークション領域にCQRS、SQS FIFO、Multi-AZ構成を適用し、性能とコストを改善しました。",
        signal:
          "ドメイン上のボトルネックを読み、データI/O、メッセージング、高可用性を一緒に設計した経験として伝わります。",
        problem: {
          beforeTag: "Risk",
          before: "単一CRUD DBでは商品閲覧と入札書き込みが混ざり、ボトルネックと順序エラーのリスクが高まります。",
          afterTag: "Architecture",
          after: "CQRSで読み書きを分離し、SQS FIFOで入札順序を保証し、Multi-AZで障害対応力を高めました。",
        },
        flow: [
          { title: "Read", desc: "商品照会Replica" },
          { title: "Write", desc: "入札Command" },
          { title: "Queue", desc: "SQS FIFO順序保証" },
          { title: "HA", desc: "RDS Multi-AZ" },
        ],
        actions: [
          "副チームリーダーとしてJira日程、AWSコスト、チームコミュニケーションを管理しました。",
          "DBリーダーとしてオークションサービスの読み書き特性を分析し、CQRS構造を提案しました。",
          "Kafka、RabbitMQ、SQSを比較し、クラウド運用負担と順序保証要求に合うSQS FIFOを選びました。",
          "オンプレミスの流れをAWS EKS、RDS、ECR、CloudWatch中心の構造へ再設計しました。",
          "アーキテクチャ仕様とサービス別責任を文書化し、チームが同じ構造を基準に開発できるようにしました。",
        ],
        results: [
          "AWS CloudSchoolハッカソンで大賞(1位)を受賞しました。",
          "CQRS読み書き分離により処理量2倍向上の結果を作りました。",
          "リソース構造調整によりコスト30%削減の結果を作りました。",
          "入札順序、拡張性、障害分離を設計成果物として残しました。",
        ],
        stack: [
          { label: "Cloud", value: "AWS EKS, RDS, Multi-AZ, Read Replica, SQS, ECR, CloudWatch" },
          { label: "Pattern", value: "CQRS, MSA, Queue-based Ordering" },
          { label: "DevOps", value: "Argo CD, Chaos Mesh, Grafana, Loki, Jaeger" },
          { label: "PM", value: "Jira, Slack, GitHub" },
        ],
        images: [
          { src: "/images/projects/cqrs-aws-architecture.png", alt: "AWSインフラアーキテクチャ" },
          { src: "/images/projects/cqrs-queue-service.png", alt: "Queue Serviceアーキテクチャ" },
          { src: "/images/projects/cqrs-vs-crud.png", alt: "CRUD vs CQRS比較" },
        ],
      }),
    },
  },

  "kubernetes-service": {
    ko: {
      title: "Kubernetes 프로젝트",
      company: "AWS CloudSchool (교육)",
      period: "2024.04 ~ 2024.05",
      role: "PM / Architect",
      tags: ["Kubernetes", "Docker", "Architecture"],
      education: true,
      contentHtml: projectHtml("ko", {
        metrics: [
          { value: "3-Tier", label: "서비스 구조" },
          { value: "5", label: "Namespace" },
          { value: "Policy", label: "네트워크 보안" },
        ],
        summary:
          "Kubernetes 배포 실습을 서비스 운영 관점으로 확장해 Namespace, NetworkPolicy, Ingress, Resource Quota까지 포함한 3-Tier 구조로 설계했습니다.",
        signal:
          "컨테이너를 띄우는 수준을 넘어 서비스 경계, 내부 통신, 리소스 제한, 팀 협업 흐름을 함께 설계한 PM/Architect 경험입니다.",
        problem: {
          beforeTag: "Challenge",
          before: "프론트엔드, 백엔드, DB가 컨테이너화되어도 서비스 경계와 통신 규칙이 없으면 운영 구조가 흐려집니다.",
          afterTag: "Design",
          after: "Namespace와 NetworkPolicy로 서비스 경계를 나누고 Ingress로 외부 진입을 통합했습니다.",
        },
        flow: [
          { title: "Namespace", desc: "기능별 경계" },
          { title: "Ingress", desc: "외부 진입" },
          { title: "Policy", desc: "내부 통신 제어" },
          { title: "Quota", desc: "리소스 제한" },
        ],
        actions: [
          "PM으로 Jira 일정과 팀 태스크를 관리하고 GitHub-Slack 알림으로 코드 변경 흐름을 공유했습니다.",
          "Architect로 물리/논리 아키텍처를 나누고 frontend, member, apply, job, db Namespace 전략을 설계했습니다.",
          "Ingress를 통해 프론트엔드, 백엔드, DB 연결 흐름을 통합하고 API 연동을 검증했습니다.",
          "NetworkPolicy와 Resource Quota를 적용해 내부 통신 범위와 리소스 사용 상한을 명확히 했습니다.",
          "설계 변경 과정을 PT에 포함해 왜 구조가 바뀌었는지 팀과 평가자가 이해할 수 있게 설명했습니다.",
        ],
        results: [
          "Kubernetes 기반 3-Tier 서비스 배포를 완료했습니다.",
          "NetworkPolicy와 Resource Quota를 적용해 운영 관점의 보안/자원 경계를 만들었습니다.",
          "서비스 장애를 애플리케이션 코드뿐 아니라 네트워크, 리소스, 배포 구조에서 함께 보는 관점을 얻었습니다.",
        ],
        stack: [
          { label: "Orchestration", value: "Kubernetes, Docker" },
          { label: "Architecture", value: "3-Tier, Namespace 분리, Ingress" },
          { label: "Security", value: "NetworkPolicy, Resource Quota, OpenSSL, MetalLB" },
          { label: "PM", value: "Jira, Slack, GitHub 연동" },
        ],
        images: [
          { src: "/images/projects/k8s-arch-logical.png", alt: "논리적 아키텍처" },
          { src: "/images/projects/k8s-arch-physical.png", alt: "물리적 아키텍처" },
          { src: "/images/projects/k8s-https-flow.png", alt: "HTTPS 동작 흐름" },
        ],
      }),
    },
    en: {
      title: "Kubernetes Project",
      company: "AWS CloudSchool (Education)",
      period: "2024.04 ~ 2024.05",
      role: "PM / Architect",
      tags: ["Kubernetes", "Docker", "Architecture"],
      education: true,
      contentHtml: projectHtml("en", {
        metrics: [
          { value: "3-Tier", label: "Service Structure" },
          { value: "5", label: "Namespaces" },
          { value: "Policy", label: "Network Security" },
        ],
        summary:
          "Extended a Kubernetes deployment project into an operations-oriented 3-tier design covering Namespace, NetworkPolicy, Ingress, and Resource Quota.",
        signal:
          "This shows PM/Architect thinking beyond launching containers: service boundaries, internal traffic control, resource limits, and team workflow.",
        problem: {
          beforeTag: "Challenge",
          before: "Even containerized frontend, backend, and database components become hard to operate without clear service boundaries and traffic rules.",
          afterTag: "Design",
          after: "Separated service boundaries with Namespaces and NetworkPolicy, then unified external access through Ingress.",
        },
        flow: [
          { title: "Namespace", desc: "Functional boundary" },
          { title: "Ingress", desc: "External entry" },
          { title: "Policy", desc: "Internal traffic" },
          { title: "Quota", desc: "Resource limit" },
        ],
        actions: [
          "Managed Jira schedule and team tasks, and connected GitHub-Slack notifications for code-change visibility.",
          "Designed physical and logical architecture with separate frontend, member, apply, job, and db Namespaces.",
          "Integrated frontend, backend, and database flows through Ingress and validated API communication.",
          "Applied NetworkPolicy and Resource Quota to define internal traffic scope and resource ceilings.",
          "Included architecture evolution in the presentation so reviewers could follow why the structure changed.",
        ],
        results: [
          "Completed Kubernetes-based 3-tier service deployment.",
          "Created operational security and resource boundaries through NetworkPolicy and Resource Quota.",
          "Built the habit of diagnosing service issues across code, network, resources, and deployment structure.",
        ],
        stack: [
          { label: "Orchestration", value: "Kubernetes, Docker" },
          { label: "Architecture", value: "3-Tier, Namespace separation, Ingress" },
          { label: "Security", value: "NetworkPolicy, Resource Quota, OpenSSL, MetalLB" },
          { label: "PM", value: "Jira, Slack, GitHub integration" },
        ],
        images: [
          { src: "/images/projects/k8s-arch-logical.png", alt: "Logical architecture" },
          { src: "/images/projects/k8s-arch-physical.png", alt: "Physical architecture" },
          { src: "/images/projects/k8s-https-flow.png", alt: "HTTPS flow" },
        ],
      }),
    },
    ja: {
      title: "Kubernetesプロジェクト",
      company: "AWS CloudSchool (教育)",
      period: "2024.04 ~ 2024.05",
      role: "PM / アーキテクト",
      tags: ["Kubernetes", "Docker", "Architecture"],
      education: true,
      contentHtml: projectHtml("ja", {
        metrics: [
          { value: "3-Tier", label: "サービス構造" },
          { value: "5", label: "Namespace" },
          { value: "Policy", label: "ネットワーク保護" },
        ],
        summary:
          "Kubernetes配備を運用視点に広げ、Namespace、NetworkPolicy、Ingress、Resource Quotaを含む3-Tier構造として設計しました。",
        signal:
          "コンテナを起動するだけでなく、サービス境界、内部通信、リソース制限、チーム協業の流れを一緒に設計したPM/Architect経験です。",
        problem: {
          beforeTag: "Challenge",
          before: "フロントエンド、バックエンド、DBをコンテナ化しても、境界と通信ルールがなければ運用構造が不明確になります。",
          afterTag: "Design",
          after: "NamespaceとNetworkPolicyでサービス境界を分け、Ingressで外部入口を統合しました。",
        },
        flow: [
          { title: "Namespace", desc: "機能別境界" },
          { title: "Ingress", desc: "外部入口" },
          { title: "Policy", desc: "内部通信制御" },
          { title: "Quota", desc: "リソース制限" },
        ],
        actions: [
          "PMとしてJira日程とチームタスクを管理し、GitHub-Slack通知でコード変更を共有しました。",
          "Architectとして物理/論理アーキテクチャを分け、frontend、member、apply、job、db Namespace戦略を設計しました。",
          "Ingressでフロントエンド、バックエンド、DBの接続フローを統合し、API連携を検証しました。",
          "NetworkPolicyとResource Quotaを適用し、内部通信範囲とリソース上限を明確にしました。",
          "設計変更の過程を発表に含め、構造が変わった理由を説明しました。",
        ],
        results: [
          "Kubernetesベースの3-Tierサービス配備を完了しました。",
          "NetworkPolicyとResource Quotaで運用視点のセキュリティ/リソース境界を作りました。",
          "サービス障害をコード、ネットワーク、リソース、配備構造から一緒に見る観点を得ました。",
        ],
        stack: [
          { label: "Orchestration", value: "Kubernetes, Docker" },
          { label: "Architecture", value: "3-Tier, Namespace分離, Ingress" },
          { label: "Security", value: "NetworkPolicy, Resource Quota, OpenSSL, MetalLB" },
          { label: "PM", value: "Jira, Slack, GitHub連動" },
        ],
        images: [
          { src: "/images/projects/k8s-arch-logical.png", alt: "論理アーキテクチャ" },
          { src: "/images/projects/k8s-arch-physical.png", alt: "物理アーキテクチャ" },
          { src: "/images/projects/k8s-https-flow.png", alt: "HTTPS動作フロー" },
        ],
      }),
    },
  },

  "python-data-viz": {
    ko: {
      title: "Python 데이터 시각화",
      company: "AWS CloudSchool (교육)",
      period: "2024.03",
      role: "PM",
      tags: ["Python", "Data Analysis", "Visualization"],
      education: true,
      contentHtml: projectHtml("ko", {
        metrics: [
          { value: "서울", label: "공공데이터" },
          { value: "420", label: "좌표 후보" },
          { value: "Top 5", label: "지역 추천" },
        ],
        summary:
          "서울시 전월세, 범죄, 거리 데이터를 단순 시각화가 아니라 이사 후보지를 비교하는 의사결정 도구로 만들었습니다.",
        signal:
          "데이터를 예쁘게 보여주는 데서 끝내지 않고, 사용자의 선택 기준을 정의하고 추천 로직으로 연결한 PM형 데이터 프로젝트입니다.",
        problem: {
          beforeTag: "Data",
          before: "전월세, 범죄율, 거리 데이터는 각각 흩어져 있어 이사 후보지를 한 번에 비교하기 어렵습니다.",
          afterTag: "Service",
          after: "비용, 안전, 이동 거리 기준으로 후보지를 필터링하고 지도와 레이더 차트로 비교 가능하게 했습니다.",
        },
        flow: [
          { title: "수집", desc: "서울시 CSV" },
          { title: "전처리", desc: "Pandas 필터링" },
          { title: "비교", desc: "지도·레이더 차트" },
          { title: "추천", desc: "이사 후보 Top 5" },
        ],
        actions: [
          "PM으로 주제 선정, 범위 설정, 개발 진행, 최종 발표를 이끌었습니다.",
          "서울시 공공데이터를 수집하고 법정동, 전월세 구분, 보증금, 월세 기준으로 전처리했습니다.",
          "Folium 지도와 Matplotlib 레이더 차트로 거리, 비용, 안전성을 비교할 수 있게 만들었습니다.",
          "420개 좌표 중 사용자가 선택한 거리와 예산 조건에 맞는 후보지를 Top 5로 추천했습니다.",
        ],
        results: [
          "서울시 공공데이터 기반 이사 추천 서비스 컨셉을 구현했습니다.",
          "분석 결과를 사용자의 의사결정 기준으로 번역하는 경험을 만들었습니다.",
          "데이터 전처리, 시각화, 추천 로직을 하나의 흐름으로 연결했습니다.",
        ],
        stack: [
          { label: "Language", value: "Python" },
          { label: "Data", value: "Pandas, NumPy, Seoul Public Data CSV" },
          { label: "Visualization", value: "Matplotlib, Folium" },
          { label: "Tool", value: "PyCharm, Jupyter Notebook" },
        ],
        images: [
          { src: "/images/projects/python-data-viz-map.png", alt: "거리별 비교 지도" },
          { src: "/images/projects/python-data-viz-radar.png", alt: "범죄 유형 레이더 차트" },
        ],
      }),
    },
    en: {
      title: "Python Data Visualization",
      company: "AWS CloudSchool (Education)",
      period: "2024.03",
      role: "PM",
      tags: ["Python", "Data Analysis", "Visualization"],
      education: true,
      contentHtml: projectHtml("en", {
        metrics: [
          { value: "Seoul", label: "Public Data" },
          { value: "420", label: "Coordinates" },
          { value: "Top 5", label: "Area Picks" },
        ],
        summary:
          "Turned Seoul rent, crime, and distance datasets into a decision tool for comparing moving-area candidates.",
        signal:
          "This is a PM-style data project: defining user decision criteria and connecting cleaned data to recommendation logic, not just drawing charts.",
        problem: {
          beforeTag: "Data",
          before: "Rent, crime, and distance data are scattered, making it hard to compare moving candidates in one view.",
          afterTag: "Service",
          after: "Filtered candidates by cost, safety, and commute distance, then made them comparable through maps and radar charts.",
        },
        flow: [
          { title: "Collect", desc: "Seoul CSV data" },
          { title: "Clean", desc: "Pandas filters" },
          { title: "Compare", desc: "Map and radar" },
          { title: "Recommend", desc: "Top 5 areas" },
        ],
        actions: [
          "Led topic selection, scope definition, development flow, and final presentation as PM.",
          "Collected Seoul public datasets and cleaned them by district, rent type, deposit, and monthly rent.",
          "Used Folium and Matplotlib to compare distance, cost, and safety visually.",
          "Recommended Top 5 candidates from 420 coordinates based on selected distance and budget conditions.",
        ],
        results: [
          "Built a Seoul public data-based moving recommendation concept.",
          "Translated raw analysis into criteria users can actually decide with.",
          "Connected preprocessing, visualization, and recommendation logic into one product flow.",
        ],
        stack: [
          { label: "Language", value: "Python" },
          { label: "Data", value: "Pandas, NumPy, Seoul Public Data CSV" },
          { label: "Visualization", value: "Matplotlib, Folium" },
          { label: "Tool", value: "PyCharm, Jupyter Notebook" },
        ],
        images: [
          { src: "/images/projects/python-data-viz-map.png", alt: "Distance comparison map" },
          { src: "/images/projects/python-data-viz-radar.png", alt: "Crime category radar chart" },
        ],
      }),
    },
    ja: {
      title: "Pythonデータ可視化",
      company: "AWS CloudSchool (教育)",
      period: "2024.03",
      role: "PM",
      tags: ["Python", "Data Analysis", "Visualization"],
      education: true,
      contentHtml: projectHtml("ja", {
        metrics: [
          { value: "ソウル", label: "公共データ" },
          { value: "420", label: "座標候補" },
          { value: "Top 5", label: "地域推薦" },
        ],
        summary:
          "ソウル市の家賃、犯罪、距離データを単なる可視化ではなく、引越し候補地を比較する意思決定ツールにしました。",
        signal:
          "データを見せるだけで終わらせず、利用者の選択基準を定義し推薦ロジックへつなげたPM型データプロジェクトです。",
        problem: {
          beforeTag: "Data",
          before: "家賃、犯罪率、距離データが分散しており、引越し候補地を一度に比較しにくい状態でした。",
          afterTag: "Service",
          after: "費用、安全、移動距離で候補地を絞り込み、地図とレーダーチャートで比較できるようにしました。",
        },
        flow: [
          { title: "収集", desc: "ソウル市CSV" },
          { title: "前処理", desc: "Pandasフィルタ" },
          { title: "比較", desc: "地図・レーダー" },
          { title: "推薦", desc: "候補地Top 5" },
        ],
        actions: [
          "PMとしてテーマ選定、範囲設定、開発進行、最終発表をリードしました。",
          "ソウル市公共データを収集し、法定洞、家賃区分、保証金、月額家賃で前処理しました。",
          "Folium地図とMatplotlibレーダーチャートで距離、費用、安全性を比較できるようにしました。",
          "420座標の中から距離と予算条件に合う候補地をTop 5として推薦しました。",
        ],
        results: [
          "ソウル市公共データベースの引越し推薦サービスコンセプトを実装しました。",
          "分析結果をユーザーの意思決定基準へ翻訳する経験を作りました。",
          "データ前処理、可視化、推薦ロジックを一つの流れにつなげました。",
        ],
        stack: [
          { label: "Language", value: "Python" },
          { label: "Data", value: "Pandas, NumPy, Seoul Public Data CSV" },
          { label: "Visualization", value: "Matplotlib, Folium" },
          { label: "Tool", value: "PyCharm, Jupyter Notebook" },
        ],
        images: [
          { src: "/images/projects/python-data-viz-map.png", alt: "距離別比較マップ" },
          { src: "/images/projects/python-data-viz-radar.png", alt: "犯罪カテゴリーレーダーチャート" },
        ],
      }),
    },
  },

  "dear-ant": {
    ko: {
      title: "Dear,ANT — AI 투자 판단 리포트",
      company: "개인 프로젝트",
      period: "2025.03",
      role: "1인 개발",
      tags: ["Next.js", "TypeScript", "Supabase", "Claude Code"],
      github: "https://github.com/jeongbaaaan/dear-ant",
      demo: "https://dear-ant.vercel.app/",
      sideProject: true,
      claudeCode: true,
      contentHtml: projectHtml("ko", {
        metrics: [
          { value: "2주", label: "기획~배포" },
          { value: "1인", label: "제품 개발" },
          { value: "3", label: "핵심 워크플로우" },
        ],
        summary:
          "개인 투자자가 매매 전 판단, 매매 후 기록, 장기 수익 계산을 한 곳에서 반복할 수 있도록 투자 의사결정 루틴을 제품화했습니다.",
        signal:
          "혼자 빠르게 만드는 능력보다 더 중요한 것은 사용자의 반복 행동을 읽고 기능을 묶는 제품 감각입니다. 이 프로젝트는 그 흐름을 보여줍니다.",
        problem: {
          beforeTag: "Pain",
          before: "개인 투자자는 매매 판단, 감정 기록, 수익 계산을 서로 다른 도구에 흩어놓기 쉽습니다.",
          afterTag: "Product",
          after: "투자 성향 리포트, 트레이딩 저널, 금융 계산기를 하나의 루틴으로 연결했습니다.",
        },
        flow: [
          { title: "진단", desc: "투자 성향 리포트" },
          { title: "기록", desc: "트레이딩 저널" },
          { title: "계산", desc: "복리·비교 계산기" },
          { title: "회고", desc: "판단 습관 확인" },
        ],
        actions: [
          "7문항 설문을 통해 투자 성향을 진단하고 결과를 A~F 등급 리포트로 보여주는 흐름을 만들었습니다.",
          "매매 기록과 감정 태그를 함께 남길 수 있는 트레이딩 저널을 구현했습니다.",
          "복리 계산, 적금과 투자 비교, 매매 시뮬레이션처럼 반복 사용 가능한 계산 도구를 구성했습니다.",
          "Supabase와 LocalStorage를 함께 사용해 로그인 유무와 저장 안정성을 고려한 Dual Storage 구조를 적용했습니다.",
          "Claude Code를 활용해 기획, 설계, 구현, 배포까지 2주 안에 마무리했습니다.",
        ],
        results: [
          "개인 투자자의 의사결정 루틴을 진단, 기록, 계산 세 흐름으로 정리했습니다.",
          "Next.js 기반 웹서비스를 1인으로 기획부터 배포까지 완성했습니다.",
          "AI 도구를 단순 코드 생성이 아니라 제품 개발 속도를 높이는 작업 파트너로 활용했습니다.",
        ],
        stack: [
          { label: "Frontend", value: "Next.js 16, React 19, TypeScript, Tailwind CSS 4" },
          { label: "Backend", value: "Supabase Auth, Database, Storage" },
          { label: "Product", value: "Investment Profile, Trading Journal, Financial Calculators" },
          { label: "AI Workflow", value: "Claude Code 기반 1인 개발" },
        ],
        images: [
          { src: "/images/projects/dear-ant-home.png", alt: "홈 대시보드" },
          { src: "/images/projects/dear-ant-survey.png", alt: "매매 전 셀프 체크" },
          { src: "/images/projects/dear-ant-report.png", alt: "리포트 목록" },
          { src: "/images/projects/dear-ant-journal.png", alt: "트레이딩 저널" },
          { src: "/images/projects/dear-ant-calculator.png", alt: "적금 vs 투자 비교" },
          { src: "/images/projects/dear-ant-compound.png", alt: "복리 계산기" },
          { src: "/images/projects/dear-ant-simulator.png", alt: "매매 시뮬레이터" },
        ],
      }),
    },
    en: {
      title: "Dear,ANT — AI Investment Report",
      company: "Personal Project",
      period: "2025.03",
      role: "Solo Developer",
      tags: ["Next.js", "TypeScript", "Supabase", "Claude Code"],
      github: "https://github.com/jeongbaaaan/dear-ant",
      demo: "https://dear-ant.vercel.app/",
      sideProject: true,
      claudeCode: true,
      contentHtml: projectHtml("en", {
        metrics: [
          { value: "2wk", label: "Plan to Deploy" },
          { value: "Solo", label: "Product Build" },
          { value: "3", label: "Core Workflows" },
        ],
        summary:
          "Productized an individual investor routine around pre-trade judgment, post-trade journaling, and long-term return calculation.",
        signal:
          "The key signal is not just building fast, but recognizing repeated user behavior and grouping features into a coherent product routine.",
        problem: {
          beforeTag: "Pain",
          before: "Individual investors often scatter trade judgment, emotion records, and return calculations across separate tools.",
          afterTag: "Product",
          after: "Connected investment profile reports, trading journal, and financial calculators into one loop.",
        },
        flow: [
          { title: "Diagnose", desc: "Investment profile" },
          { title: "Record", desc: "Trading journal" },
          { title: "Calculate", desc: "Compound and compare" },
          { title: "Review", desc: "Decision habits" },
        ],
        actions: [
          "Built a 7-question investment profile survey that returns an A-F style report.",
          "Implemented a trading journal where users can save trade records with emotion tags.",
          "Created repeat-use calculators including compound interest, savings vs investment, and trade simulation.",
          "Applied a Dual Storage approach using Supabase and LocalStorage to consider both authenticated and local usage.",
          "Used Claude Code across planning, design, implementation, and deployment to finish the product in 2 weeks.",
        ],
        results: [
          "Organized individual investor decisions into diagnosis, journaling, and calculation workflows.",
          "Shipped a Next.js web service from planning to deployment as a solo developer.",
          "Used AI tooling as a product-development partner rather than only a code-generation shortcut.",
        ],
        stack: [
          { label: "Frontend", value: "Next.js 16, React 19, TypeScript, Tailwind CSS 4" },
          { label: "Backend", value: "Supabase Auth, Database, Storage" },
          { label: "Product", value: "Investment Profile, Trading Journal, Financial Calculators" },
          { label: "AI Workflow", value: "Solo development with Claude Code" },
        ],
        images: [
          { src: "/images/projects/dear-ant-home.png", alt: "Home dashboard" },
          { src: "/images/projects/dear-ant-survey.png", alt: "Pre-trade self check" },
          { src: "/images/projects/dear-ant-report.png", alt: "Report list" },
          { src: "/images/projects/dear-ant-journal.png", alt: "Trading journal" },
          { src: "/images/projects/dear-ant-calculator.png", alt: "Savings vs investment" },
          { src: "/images/projects/dear-ant-compound.png", alt: "Compound calculator" },
          { src: "/images/projects/dear-ant-simulator.png", alt: "Trade simulator" },
        ],
      }),
    },
    ja: {
      title: "Dear,ANT — AI投資判断レポート",
      company: "個人プロジェクト",
      period: "2025.03",
      role: "1人開発",
      tags: ["Next.js", "TypeScript", "Supabase", "Claude Code"],
      github: "https://github.com/jeongbaaaan/dear-ant",
      demo: "https://dear-ant.vercel.app/",
      sideProject: true,
      claudeCode: true,
      contentHtml: projectHtml("ja", {
        metrics: [
          { value: "2週", label: "企画〜公開" },
          { value: "1人", label: "製品開発" },
          { value: "3", label: "主要ワークフロー" },
        ],
        summary:
          "個人投資家が売買前の判断、売買後の記録、長期収益計算を一つの流れで繰り返せるよう、投資意思決定ルーティンを製品化しました。",
        signal:
          "早く作る力だけでなく、ユーザーの反復行動を読み、機能を一つのプロダクト体験としてまとめる感覚を示します。",
        problem: {
          beforeTag: "Pain",
          before: "個人投資家は売買判断、感情記録、収益計算を別々のツールに分散しがちです。",
          afterTag: "Product",
          after: "投資性向レポート、トレーディングジャーナル、金融計算機を一つのルーティンとして接続しました。",
        },
        flow: [
          { title: "診断", desc: "投資性向レポート" },
          { title: "記録", desc: "売買ジャーナル" },
          { title: "計算", desc: "複利・比較" },
          { title: "振り返り", desc: "判断習慣確認" },
        ],
        actions: [
          "7問アンケートで投資性向を診断し、A〜Fグレードのレポートで見せる流れを作りました。",
          "売買記録と感情タグを一緒に残せるトレーディングジャーナルを実装しました。",
          "複利計算、積立と投資比較、売買シミュレーションなど繰り返し使える計算機を構成しました。",
          "SupabaseとLocalStorageを併用し、ログイン有無と保存安定性を考慮したDual Storage構造を適用しました。",
          "Claude Codeを活用して企画、設計、実装、公開まで2週間で完了しました。",
        ],
        results: [
          "個人投資家の意思決定ルーティンを診断、記録、計算の三つの流れに整理しました。",
          "Next.jsベースのWebサービスを1人で企画から公開まで完成させました。",
          "AIツールを単なるコード生成ではなく、製品開発速度を上げる作業パートナーとして活用しました。",
        ],
        stack: [
          { label: "Frontend", value: "Next.js 16, React 19, TypeScript, Tailwind CSS 4" },
          { label: "Backend", value: "Supabase Auth, Database, Storage" },
          { label: "Product", value: "Investment Profile, Trading Journal, Financial Calculators" },
          { label: "AI Workflow", value: "Claude Codeによる1人開発" },
        ],
        images: [
          { src: "/images/projects/dear-ant-home.png", alt: "ホームダッシュボード" },
          { src: "/images/projects/dear-ant-survey.png", alt: "売買前セルフチェック" },
          { src: "/images/projects/dear-ant-report.png", alt: "レポート一覧" },
          { src: "/images/projects/dear-ant-journal.png", alt: "トレーディングジャーナル" },
          { src: "/images/projects/dear-ant-calculator.png", alt: "積立 vs 投資比較" },
          { src: "/images/projects/dear-ant-compound.png", alt: "複利計算機" },
          { src: "/images/projects/dear-ant-simulator.png", alt: "売買シミュレーター" },
        ],
      }),
    },
  },

  "dalgyeol": {
    ko: {
      title: "달결 — 무료 사주·타로 & AI 상담",
      company: "개인 프로젝트",
      period: "2026.03 ~",
      role: "풀스택 웹서비스 개발 · 제품 구조 설계",
      tags: ["Next.js", "Rust", "Axum", "WebSocket", "Toss"],
      demo: "https://dalgyeol.com",
      sideProject: true,
      claudeCode: true,
      contentHtml: projectHtml("ko", {
        metrics: [
          { value: "3", label: "무료 공개 진입점" },
          { value: "Next.js", label: "웹 프론트" },
          { value: "Rust", label: "Axum API" },
          { value: "BYTEA", label: "프로필 PII 저장" },
        ],
        summary:
          "무료 사주, 오늘의 운세, 타로로 첫 방문자의 체험 장벽을 낮추고, 결과 이후 AI 상담과 프로필 저장으로 이어지는 운세 웹서비스를 설계·구현했습니다.",
        signal:
          "달결은 단순 운세 페이지가 아니라 유입, 체험, 신뢰, 심화 행동을 분리한 제품 구조입니다. 기획과 풀스택 구현을 동시에 다룰 수 있음을 보여줍니다.",
        problem: {
          beforeTag: "Friction",
          before: "운세 서비스는 호기심 진입이 많아 첫 화면에서 로그인이나 결제가 빠르게 나오면 결과 품질을 확인하기 전에 이탈합니다.",
          afterTag: "Funnel",
          after: "오늘의 운세, 사주, 타로를 무료 공개 진입점으로 두고 AI 상담과 지갑은 결과 이후의 심화 행동으로 배치했습니다.",
        },
        flow: [
          { title: "방문", desc: "홈/검색 유입" },
          { title: "체험", desc: "무료 사주·타로" },
          { title: "맥락", desc: "프로필 저장" },
          { title: "심화", desc: "AI 상담" },
        ],
        actions: [
          "Next.js App Router로 공개 화면과 인증 후 화면을 분리하고, 첫 방문자가 바로 결과를 볼 수 있는 무료 진입점을 구성했습니다.",
          "Rust Axum 백엔드에서 public/protected 라우트를 나누고 JWT 인증, PostgreSQL, sqlx 기반 API 흐름을 설계했습니다.",
          "사주 엔진, 타로 엔진, LLM 라우팅, 채팅, 프로필 PII 처리를 도메인 모듈로 분리해 화면 코드와 정책 코드를 얇게 유지했습니다.",
          "회원 프로필에 저장되는 생년월일, 태어난 시간, 출생지, 전화번호는 CryptoService로 암호화해 BYTEA 컬럼에 저장하는 흐름으로 다뤘습니다.",
          "AI 상담은 WebSocket/RPC 스트리밍, 추천 질문, 상담 맥락 유지, 부족 상태 안내까지 포함해 서비스형 대화 경험으로 구성했습니다.",
          "Fly.dev 백엔드 콜드스타트 재시도, 입력 해시 기반 중복 생성 방지, 공개/보호 라우트 분리를 반영했습니다.",
        ],
        results: [
          "dalgyeol.com에 실제 서비스 도메인을 연결했습니다.",
          "첫 방문자가 로그인 없이 오늘의 운세, 사주팔자, 타로를 바로 체험하는 구조를 완성했습니다.",
          "운세 결과 이후 프로필 저장과 AI 상담으로 자연스럽게 이어지는 심화 흐름을 만들었습니다.",
          "사주, 타로, LLM, 암호화, 채팅을 모듈화해 이후 기능 확장 비용을 낮췄습니다.",
        ],
        stack: [
          { label: "Web", value: "Next.js 15, React 19, TypeScript, Tailwind CSS 4" },
          { label: "API", value: "Rust 2024, Axum 0.8, PostgreSQL, sqlx, JWT" },
          { label: "Domain", value: "Saju Engine, Tarot Engine, LLM Router, Chat Core, PII Crypto" },
          { label: "Realtime", value: "WebSocket/RPC AI Consultation, Streaming Messages" },
          { label: "Deploy", value: "Vercel Web, Fly.dev Backend" },
        ],
        images: [
          { src: "/images/projects/dalgyeol-web-home.jpg", alt: "달결 홈" },
          { src: "/images/projects/dalgyeol-web-today.jpg", alt: "무료 오늘의 운세" },
          { src: "/images/projects/dalgyeol-web-saju.jpg", alt: "무료 사주팔자" },
          { src: "/images/projects/dalgyeol-web-tarot.jpg", alt: "무료 타로" },
        ],
      }),
    },
    en: {
      title: "Dalgyeol — Free Saju, Tarot & AI Consultation",
      company: "Personal Project",
      period: "2026.03 ~",
      role: "Full-stack Web Service Developer · Product Architecture",
      tags: ["Next.js", "Rust", "Axum", "WebSocket", "Toss"],
      demo: "https://dalgyeol.com",
      sideProject: true,
      claudeCode: true,
      contentHtml: projectHtml("en", {
        metrics: [
          { value: "3", label: "Free Entry Points" },
          { value: "Next.js", label: "Web Frontend" },
          { value: "Rust", label: "Axum API" },
          { value: "BYTEA", label: "Profile PII Storage" },
        ],
        summary:
          "Designed and built a Korean fortune web service where free Saju, daily fortune, and tarot lower first-visit friction, then lead into profile saving and AI consultation.",
        signal:
          "Dalgyeol is not just a fortune page. It separates acquisition, trial, trust, and deeper actions, showing both product thinking and full-stack execution.",
        problem: {
          beforeTag: "Friction",
          before: "Fortune products are curiosity-driven, so early login or payment can make users leave before they can judge result quality.",
          afterTag: "Funnel",
          after: "Daily fortune, Saju, and tarot are public entrypoints, while AI consultation and wallet actions are placed after the result experience.",
        },
        flow: [
          { title: "Visit", desc: "Home/search entry" },
          { title: "Try", desc: "Free Saju and tarot" },
          { title: "Context", desc: "Profile saving" },
          { title: "Deepen", desc: "AI consultation" },
        ],
        actions: [
          "Separated public and authenticated screens with Next.js App Router so first-time users can experience results immediately.",
          "Designed Rust Axum public/protected API routes with JWT authentication, PostgreSQL, and sqlx.",
          "Separated Saju, tarot, LLM routing, chat, and PII encryption into domain modules to keep screen and policy code focused.",
          "Stored profile birth date, birth time, birthplace, and phone fields as encrypted BYTEA values through CryptoService.",
          "Built AI consultation as a service-like conversation experience with WebSocket/RPC streaming, suggested questions, context retention, and shortage-state guidance.",
          "Added operational guardrails including Fly.dev cold-start retry, input-hash deduplication, and clear public/protected route boundaries.",
        ],
        results: [
          "Connected the live service domain at dalgyeol.com.",
          "Completed a first-visit flow where users can try daily fortune, Saju, and tarot without login.",
          "Created a deeper journey from fortune result to profile saving and AI consultation.",
          "Reduced future expansion cost by modularizing Saju, tarot, LLM, encryption, and chat responsibilities.",
        ],
        stack: [
          { label: "Web", value: "Next.js 15, React 19, TypeScript, Tailwind CSS 4" },
          { label: "API", value: "Rust 2024, Axum 0.8, PostgreSQL, sqlx, JWT" },
          { label: "Domain", value: "Saju Engine, Tarot Engine, LLM Router, Chat Core, PII Crypto" },
          { label: "Realtime", value: "WebSocket/RPC AI Consultation, Streaming Messages" },
          { label: "Deploy", value: "Vercel Web, Fly.dev Backend" },
        ],
        images: [
          { src: "/images/projects/dalgyeol-web-home.jpg", alt: "Dalgyeol home" },
          { src: "/images/projects/dalgyeol-web-today.jpg", alt: "Free daily fortune" },
          { src: "/images/projects/dalgyeol-web-saju.jpg", alt: "Free Saju report" },
          { src: "/images/projects/dalgyeol-web-tarot.jpg", alt: "Free tarot" },
        ],
      }),
    },
    ja: {
      title: "ダルギョル — 無料四柱推命・タロット & AI相談",
      company: "個人プロジェクト",
      period: "2026.03 ~",
      role: "フルスタックWebサービス開発 · プロダクト構造設計",
      tags: ["Next.js", "Rust", "Axum", "WebSocket", "Toss"],
      demo: "https://dalgyeol.com",
      sideProject: true,
      claudeCode: true,
      contentHtml: projectHtml("ja", {
        metrics: [
          { value: "3", label: "無料公開入口" },
          { value: "Next.js", label: "Webフロント" },
          { value: "Rust", label: "Axum API" },
          { value: "BYTEA", label: "プロフィールPII保存" },
        ],
        summary:
          "無料四柱推命、今日の運勢、タロットで初回体験の障壁を下げ、結果後にプロフィール保存とAI相談へつながる占いWebサービスを設計・実装しました。",
        signal:
          "ダルギョルは単なる占いページではなく、流入、体験、信頼、深い行動を分けたプロダクト構造です。企画とフルスタック実装を同時に扱えることを示します。",
        problem: {
          beforeTag: "Friction",
          before: "占いサービスは好奇心で入るため、早い段階でログインや決済が出ると結果品質を確認する前に離脱されやすくなります。",
          afterTag: "Funnel",
          after: "今日の運勢、四柱推命、タロットを無料入口とし、AI相談とウォレットは結果後の深い行動として配置しました。",
        },
        flow: [
          { title: "訪問", desc: "ホーム/検索流入" },
          { title: "体験", desc: "無料四柱・タロット" },
          { title: "文脈", desc: "プロフィール保存" },
          { title: "深化", desc: "AI相談" },
        ],
        actions: [
          "Next.js App Routerで公開画面と認証後画面を分け、初回訪問者がすぐ結果を見られる無料入口を構成しました。",
          "Rust Axumバックエンドでpublic/protectedルートを分け、JWT認証、PostgreSQL、sqlxベースのAPIフローを設計しました。",
          "四柱推命、タロット、LLMルーティング、チャット、プロフィールPII処理をドメインモジュールとして分離しました。",
          "会員プロフィールに保存される生年月日、出生時刻、出生地、電話番号はCryptoServiceで暗号化し、BYTEAカラムへ保存する流れにしました。",
          "AI相談はWebSocket/RPCストリーミング、推奨質問、相談文脈維持、不足状態案内まで含む会話体験として構成しました。",
          "Fly.devバックエンドのコールドスタート再試行、入力ハッシュによる重複生成防止、公開/保護ルート分離を反映しました。",
        ],
        results: [
          "dalgyeol.comに実サービスドメインを接続しました。",
          "初回訪問者がログインなしで今日の運勢、四柱推命、タロットをすぐ体験できる構造を完成しました。",
          "結果後にプロフィール保存とAI相談へ自然につながる深い体験フローを作りました。",
          "四柱推命、タロット、LLM、暗号化、チャットをモジュール化し、今後の機能拡張コストを下げました。",
        ],
        stack: [
          { label: "Web", value: "Next.js 15, React 19, TypeScript, Tailwind CSS 4" },
          { label: "API", value: "Rust 2024, Axum 0.8, PostgreSQL, sqlx, JWT" },
          { label: "Domain", value: "Saju Engine, Tarot Engine, LLM Router, Chat Core, PII Crypto" },
          { label: "Realtime", value: "WebSocket/RPC AI Consultation, Streaming Messages" },
          { label: "Deploy", value: "Vercel Web, Fly.dev Backend" },
        ],
        images: [
          { src: "/images/projects/dalgyeol-web-home.jpg", alt: "ダルギョルホーム" },
          { src: "/images/projects/dalgyeol-web-today.jpg", alt: "無料今日の運勢" },
          { src: "/images/projects/dalgyeol-web-saju.jpg", alt: "無料四柱推命" },
          { src: "/images/projects/dalgyeol-web-tarot.jpg", alt: "無料タロット" },
        ],
      }),
    },
  },

  "sauce-face-test": {
    ko: {
      title: "조미료상 테스트",
      company: "개인 프로젝트",
      period: "2026.05",
      role: "웹 서비스 개발",
      tags: ["Web", "Browser ML", "Cloudflare Pages"],
      demo: "https://sauce-face.pages.dev",
      sideProject: true,
      contentHtml: projectHtml("ko", {
        metrics: [
          { value: "9", label: "결과 유형" },
          { value: "Browser", label: "이미지 판정" },
          { value: "Pages", label: "Cloudflare 배포" },
        ],
        summary:
          "사진 한 장으로 사용자가 가볍게 즐기고 공유할 수 있는 조미료상 테스트를 브라우저 중심 흐름으로 빠르게 배포했습니다.",
        signal:
          "작은 사이드 프로젝트지만 업로드, 판정, 실패 처리, 공유까지 사용자가 끝까지 도달하는 흐름을 빠르게 만드는 실행력이 보입니다.",
        problem: {
          beforeTag: "Need",
          before: "바이럴 테스트는 진입이 쉬워야 하고, 사용자가 결과를 기다리거나 개인정보 저장을 걱정하면 바로 이탈합니다.",
          afterTag: "MVP",
          after: "사진 업로드 후 브라우저에서 바로 미리보기와 판정을 진행하고, 짧은 결과 문구로 공유하기 쉽게 만들었습니다.",
        },
        flow: [
          { title: "업로드", desc: "사진 선택" },
          { title: "판정", desc: "브라우저 처리" },
          { title: "결과", desc: "9가지 조미료상" },
          { title: "공유", desc: "짧은 결과 문구" },
        ],
        actions: [
          "사진 업로드, 미리보기, 브라우저 기반 이미지 판정 흐름을 구현했습니다.",
          "얼굴 감지 실패 시 사용자가 직접 영역을 선택할 수 있는 보조 흐름을 제공했습니다.",
          "한국어, 영어, 일본어 페이지와 검색 노출용 메타 정보를 구성했습니다.",
          "결과를 복사하거나 공유하기 쉬운 짧은 문구 중심으로 화면을 정리했습니다.",
        ],
        results: [
          "sauce-face.pages.dev에 공개 테스트 페이지를 연결했습니다.",
          "사진 업로드부터 결과 확인까지 별도 회원가입 없이 끝나는 가벼운 테스트 경험을 만들었습니다.",
          "작은 아이디어를 빠르게 릴리즈 가능한 웹 제품으로 바꾸는 실험을 완료했습니다.",
        ],
        stack: [
          { label: "Web", value: "HTML, CSS, JavaScript" },
          { label: "Analysis", value: "Browser-based image prediction" },
          { label: "Deploy", value: "Cloudflare Pages" },
        ],
        images: [
          { src: "/images/projects/sauce-face-home.jpg", alt: "조미료상 테스트 메인 화면" },
        ],
      }),
    },
    en: {
      title: "Sauce Face Test",
      company: "Personal Project",
      period: "2026.05",
      role: "Web Service Developer",
      tags: ["Web", "Browser ML", "Cloudflare Pages"],
      demo: "https://sauce-face.pages.dev",
      sideProject: true,
      contentHtml: projectHtml("en", {
        metrics: [
          { value: "9", label: "Result Types" },
          { value: "Browser", label: "Image Judgement" },
          { value: "Pages", label: "Cloudflare Deploy" },
        ],
        summary:
          "Shipped a lightweight seasoning-style face test where users can upload one photo, get a playful result, and share it quickly.",
        signal:
          "It is a small side project, but it shows fast execution across upload, prediction, failure handling, and shareable result design.",
        problem: {
          beforeTag: "Need",
          before: "Viral tests need low friction. If users wait too long or worry about photo storage, they leave.",
          afterTag: "MVP",
          after: "Handled upload, preview, and prediction in the browser, then presented compact copy for sharing.",
        },
        flow: [
          { title: "Upload", desc: "Choose photo" },
          { title: "Predict", desc: "Browser process" },
          { title: "Result", desc: "9 seasoning types" },
          { title: "Share", desc: "Short copy" },
        ],
        actions: [
          "Implemented photo upload, preview, and browser-based image prediction flow.",
          "Added a manual area-selection fallback when face detection fails.",
          "Prepared Korean, English, and Japanese pages with search-friendly metadata.",
          "Focused the result screen around compact copy that is easy to copy and share.",
        ],
        results: [
          "Connected the public page at sauce-face.pages.dev.",
          "Created a no-signup test experience from image upload to result.",
          "Turned a small idea into a shippable web product experiment.",
        ],
        stack: [
          { label: "Web", value: "HTML, CSS, JavaScript" },
          { label: "Analysis", value: "Browser-based image prediction" },
          { label: "Deploy", value: "Cloudflare Pages" },
        ],
        images: [
          { src: "/images/projects/sauce-face-home.jpg", alt: "Sauce Face Test main screen" },
        ],
      }),
    },
    ja: {
      title: "調味料顔テスト",
      company: "個人プロジェクト",
      period: "2026.05",
      role: "Webサービス開発",
      tags: ["Web", "Browser ML", "Cloudflare Pages"],
      demo: "https://sauce-face.pages.dev",
      sideProject: true,
      contentHtml: projectHtml("ja", {
        metrics: [
          { value: "9", label: "結果タイプ" },
          { value: "Browser", label: "画像判定" },
          { value: "Pages", label: "Cloudflare配備" },
        ],
        summary:
          "1枚の写真で気軽に遊び、結果を共有できる調味料顔テストをブラウザ中心の流れで素早く公開しました。",
        signal:
          "小さなサイドプロジェクトですが、アップロード、判定、失敗時の補助、共有までユーザーが最後まで進める流れを素早く作った実行力が見えます。",
        problem: {
          beforeTag: "Need",
          before: "バイラルテストは入口が軽い必要があり、待ち時間や写真保存への不安があると離脱されます。",
          afterTag: "MVP",
          after: "写真アップロード後にブラウザでプレビューと判定を行い、短い結果文で共有しやすくしました。",
        },
        flow: [
          { title: "アップロード", desc: "写真選択" },
          { title: "判定", desc: "ブラウザ処理" },
          { title: "結果", desc: "9種類の調味料顔" },
          { title: "共有", desc: "短い結果文" },
        ],
        actions: [
          "写真アップロード、プレビュー、ブラウザベースの画像判定フローを実装しました。",
          "顔検出に失敗した場合に手動で領域を選択できる補助フローを提供しました。",
          "韓国語、英語、日本語ページと検索向けメタ情報を構成しました。",
          "結果をコピーまたは共有しやすい短い文言中心に画面を整理しました。",
        ],
        results: [
          "sauce-face.pages.devに公開テストページを接続しました。",
          "写真アップロードから結果確認まで会員登録なしで終わる軽いテスト体験を作りました。",
          "小さなアイデアを素早く公開可能なWeb製品実験へ変えました。",
        ],
        stack: [
          { label: "Web", value: "HTML, CSS, JavaScript" },
          { label: "Analysis", value: "Browser-based image prediction" },
          { label: "Deploy", value: "Cloudflare Pages" },
        ],
        images: [
          { src: "/images/projects/sauce-face-home.jpg", alt: "調味料顔テストのメイン画面" },
        ],
      }),
    },
  },

  "calendar-briefing-agent": {
    ko: {
      title: "Calendar Briefing Agent",
      company: "개인 프로젝트",
      period: "2026.05",
      role: "AI Agent MVP 설계·개발",
      tags: ["Python", "Streamlit", "Agent Workflow"],
      github: "https://github.com/jeongbaaaan/calendar-briefing-agent",
      sideProject: true,
      contentHtml: projectHtml("ko", {
        metrics: [
          { value: "Python", label: "Agent MVP" },
          { value: "Streamlit", label: "검증 UI" },
          { value: "JSON", label: "구조화 출력" },
        ],
        summary:
          "캘린더 데이터를 일정 수, 시간 밀도, 충돌, 버퍼 부족, 카테고리 신호로 구조화하고 하루를 읽는 브리핑 액션으로 변환했습니다.",
        signal:
          "LLM을 붙이기 전에 문제를 분석, 판단, 추천 단계로 나눈 점이 좋습니다. Agent 제품을 만들 때 필요한 워크플로우 설계 감각이 드러납니다.",
        problem: {
          beforeTag: "Raw Calendar",
          before: "캘린더는 일정 목록을 보여주지만 하루의 위험, 집중도, 우선순위를 스스로 해석해주지는 않습니다.",
          afterTag: "Briefing",
          after: "일정을 구조화해 페르소나, 리스크, 추천 액션을 포함한 데일리 브리핑으로 바꿨습니다.",
        },
        flow: [
          { title: "Analyze", desc: "일정 밀도·충돌" },
          { title: "Classify", desc: "사용자 페르소나" },
          { title: "Detect", desc: "리스크·버퍼" },
          { title: "Brief", desc: "추천 액션" },
        ],
        actions: [
          "샘플 일정 로더와 입력 파싱 구조를 정의했습니다.",
          "일정 수, 총 일정 시간, 카테고리 분포, 일정 충돌, 버퍼 부족을 계산했습니다.",
          "분석 결과를 바탕으로 사용자 페르소나를 분류하고 하루의 리스크를 도출했습니다.",
          "요약, 일정 목록, 리스크 메시지, 추천 액션을 포함한 브리핑 출력을 만들었습니다.",
          "Streamlit UI에서 날짜 선택, 일정 추가/삭제/저장, 분석 실행 흐름을 제공했습니다.",
        ],
        results: [
          "CLI와 Streamlit 두 실행 흐름을 구현했습니다.",
          "분석 결과를 <code>logs/result.json</code>에 저장하는 구조화 출력 흐름을 만들었습니다.",
          "Google Calendar/Outlook 연동과 LLM 자연어 브리핑으로 확장 가능한 MVP 구조를 정리했습니다.",
        ],
        stack: [
          { label: "Language", value: "Python" },
          { label: "UI", value: "Streamlit" },
          { label: "Architecture", value: "Modular analysis, persona, briefing logic" },
          { label: "Output", value: "Structured JSON result" },
        ],
      }),
    },
    en: {
      title: "Calendar Briefing Agent",
      company: "Personal Project",
      period: "2026.05",
      role: "AI Agent MVP Designer & Developer",
      tags: ["Python", "Streamlit", "Agent Workflow"],
      github: "https://github.com/jeongbaaaan/calendar-briefing-agent",
      sideProject: true,
      contentHtml: projectHtml("en", {
        metrics: [
          { value: "Python", label: "Agent MVP" },
          { value: "Streamlit", label: "Validation UI" },
          { value: "JSON", label: "Structured Output" },
        ],
        summary:
          "Structured calendar data into event count, time density, conflicts, buffer risks, and category signals, then converted them into daily briefing actions.",
        signal:
          "The strong point is separating the problem into analysis, decision, and recommendation before adding LLM output. That is useful Agent product thinking.",
        problem: {
          beforeTag: "Raw Calendar",
          before: "Calendars show event lists, but they do not explain daily risk, focus load, or priority by themselves.",
          afterTag: "Briefing",
          after: "Converted schedules into persona, risk, and recommended-action briefings.",
        },
        flow: [
          { title: "Analyze", desc: "Density and conflicts" },
          { title: "Classify", desc: "User persona" },
          { title: "Detect", desc: "Risk and buffer" },
          { title: "Brief", desc: "Recommended actions" },
        ],
        actions: [
          "Defined a sample schedule loader and input parsing structure.",
          "Calculated event count, total scheduled time, category distribution, conflicts, and insufficient buffers.",
          "Classified user personas and derived daily risks from structured analysis.",
          "Generated briefing output with summary, event list, risk messages, and recommended actions.",
          "Provided a Streamlit UI for date selection, event add/delete/save, and analysis execution.",
        ],
        results: [
          "Implemented both CLI and Streamlit execution flows.",
          "Saved structured analysis output to <code>logs/result.json</code>.",
          "Outlined an MVP path that can expand into Google Calendar/Outlook integration and LLM-powered natural-language briefings.",
        ],
        stack: [
          { label: "Language", value: "Python" },
          { label: "UI", value: "Streamlit" },
          { label: "Architecture", value: "Modular analysis, persona, briefing logic" },
          { label: "Output", value: "Structured JSON result" },
        ],
      }),
    },
    ja: {
      title: "Calendar Briefing Agent",
      company: "個人プロジェクト",
      period: "2026.05",
      role: "AI Agent MVP設計・開発",
      tags: ["Python", "Streamlit", "Agent Workflow"],
      github: "https://github.com/jeongbaaaan/calendar-briefing-agent",
      sideProject: true,
      contentHtml: projectHtml("ja", {
        metrics: [
          { value: "Python", label: "Agent MVP" },
          { value: "Streamlit", label: "検証UI" },
          { value: "JSON", label: "構造化出力" },
        ],
        summary:
          "カレンダーデータを予定数、時間密度、衝突、バッファ不足、カテゴリ信号に構造化し、1日のブリーフィングアクションへ変換しました。",
        signal:
          "LLMを先に接続する前に、分析、判断、推薦の段階へ問題を分けている点が強みです。Agent製品に必要なワークフロー設計力が見えます。",
        problem: {
          beforeTag: "Raw Calendar",
          before: "カレンダーは予定一覧を見せますが、1日のリスク、集中度、優先順位を自動で解釈してくれるわけではありません。",
          afterTag: "Briefing",
          after: "予定を構造化し、ペルソナ、リスク、推奨アクションを含むデイリーブリーフィングへ変換しました。",
        },
        flow: [
          { title: "Analyze", desc: "予定密度・衝突" },
          { title: "Classify", desc: "ユーザーペルソナ" },
          { title: "Detect", desc: "リスク・バッファ" },
          { title: "Brief", desc: "推奨アクション" },
        ],
        actions: [
          "サンプル予定ローダーと入力パース構造を定義しました。",
          "予定数、総予定時間、カテゴリ分布、予定衝突、バッファ不足を計算しました。",
          "分析結果をもとにユーザーペルソナを分類し、1日のリスクを導きました。",
          "要約、予定一覧、リスクメッセージ、推奨アクションを含むブリーフィング出力を作りました。",
          "Streamlit UIで日付選択、予定追加/削除/保存、分析実行フローを提供しました。",
        ],
        results: [
          "CLIとStreamlitの二つの実行フローを実装しました。",
          "分析結果を<code>logs/result.json</code>に保存する構造化出力を作りました。",
          "Google Calendar/Outlook連携とLLM自然言語ブリーフィングへ拡張できるMVP構造を整理しました。",
        ],
        stack: [
          { label: "Language", value: "Python" },
          { label: "UI", value: "Streamlit" },
          { label: "Architecture", value: "Modular analysis, persona, briefing logic" },
          { label: "Output", value: "Structured JSON result" },
        ],
      }),
    },
  },
};

export function getProjectData(slug: string, locale: Locale): ProjectData {
  const project = projectsData[slug];
  if (!project) {
    throw new Error(`Project not found: ${slug}`);
  }
  return project[locale];
}

export function getAllProjectSlugs(): string[] {
  return [...projectSlugs];
}
