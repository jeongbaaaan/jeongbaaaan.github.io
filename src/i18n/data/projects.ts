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
  "smileshark-mailer",
  "clova-x-chatbot",
  "dapanda",
  "dear-ant",
  "dalgyeol",
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
    screenshots: "아키텍처",
  },
  en: {
    summary: "Summary",
    signal: "Hiring Signal",
    problem: "Problem Framing",
    flow: "Product / System Flow",
    action: "What I Built",
    result: "Result",
    stack: "Tech Stack",
    screenshots: "Architecture",
  },
  ja: {
    summary: "概要",
    signal: "実務で伝わるポイント",
    problem: "課題設定",
    flow: "プロダクト/構造フロー",
    action: "実施内容",
    result: "成果",
    stack: "技術スタック",
    screenshots: "アーキテクチャ",
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
        images: [
          { src: "/images/projects/cloud-infra-architecture.svg", alt: "클라우드 인프라 관리 아키텍처" },
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
        images: [
          { src: "/images/projects/cloud-infra-architecture.svg", alt: "클라우드 인프라 관리 아키텍처" },
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
        images: [
          { src: "/images/projects/cloud-infra-architecture.svg", alt: "클라우드 인프라 관리 아키텍처" },
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
        images: [
          { src: "/images/projects/clova-x-architecture.svg", alt: "Clova X 챗봇 기획 구조" },
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
        images: [
          { src: "/images/projects/clova-x-architecture.svg", alt: "Clova X 챗봇 기획 구조" },
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
        images: [
          { src: "/images/projects/clova-x-architecture.svg", alt: "Clova X 챗봇 기획 구조" },
        ],
      }),
    },
  },

  "smileshark-mailer": {
    ko: {
      title: "SmileShark Mailer — Gmail 작성 자동화 도구",
      company: "스마일샤크 (내부 도구)",
      period: "2026.06",
      role: "1인 설계·개발",
      tags: ["Fastify", "React", "TipTap", "SQLite", "Chrome Extension"],
      github: "https://github.com/jeongbaaaan/smileshark-mailer-portfolio",
      sideProject: true,
      contentHtml: projectHtml("ko", {
        metrics: [
          { value: "15", label: "ADR 작성" },
          { value: "2", label: "피벗 의사결정" },
          { value: "MV3", label: "Chrome Extension" },
        ],
        summary:
          "70개 이상의 고객사에 반복 발송하는 AM 이메일 업무를 자동화하기 위해 직접 설계·개발한 내부 도구. Gmail 작성창에 고객사명·담당자·이슈를 자동으로 채워주는 핸드오프 방식.",
        signal:
          "실무 문제를 스스로 제품으로 해결한 사례입니다. 기획부터 개발까지 혼자 수행하며 15개의 ADR로 모든 의사결정 근거를 기록했습니다.",
        problem: {
          beforeTag: "Before",
          before: "Monday.com 고객 목록에서 이메일을 수작업으로 작성·발송. 고객사명·담당자·이슈를 매번 직접 입력.",
          afterTag: "After",
          after: "고객 선택 → 템플릿 선택 → Gmail 작성창 자동 채움. 발송만 직접 클릭.",
        },
        flow: [
          { title: "고객 선택", desc: "SQLite DB에서 조회" },
          { title: "템플릿", desc: "TipTap 에디터로 편집" },
          { title: "미리보기", desc: "수신자별 변수 치환" },
          { title: "Gmail 열기", desc: "크롬 확장으로 자동 채움" },
        ],
        actions: [
          "Fastify + SQLite로 고객 DB와 템플릿 CRUD API를 설계·구현했습니다.",
          "TipTap 리치 텍스트 에디터로 HTML 이메일 템플릿 편집 기능을 구현했습니다.",
          "Chrome Extension MV3으로 Gmail 작성창에 내용을 주입하는 핸드오프 플로우를 구현했습니다.",
          "Gmail OAuth 직접 발송 → 핸드오프 모델로의 피벗 포함, 15개의 ADR로 모든 기술 의사결정을 기록했습니다.",
          "조직의 서드파티 OAuth 차단 환경을 파악하고 아키텍처를 현실에 맞게 재설계했습니다.",
        ],
        results: [
          "고객별 이메일 작성 시간을 크게 단축했습니다.",
          "포트폴리오 수준의 설계 문서(ADR 15개)를 갖춘 내부 도구를 완성했습니다.",
          "실무 제약(OAuth 차단)을 파악하고 대안 아키텍처로 전환한 의사결정 과정을 기록으로 남겼습니다.",
        ],
        stack: [
          { label: "Backend", value: "Fastify, SQLite, TypeScript" },
          { label: "Frontend", value: "React, TipTap, Tailwind CSS, Vite" },
          { label: "Extension", value: "Chrome Extension MV3, Gmail 핸드오프" },
          { label: "Docs", value: "ADR 15개, Architecture Decision Records" },
        ],
        images: [
          { src: "/images/projects/smileshark-mailer-architecture.svg", alt: "SmileShark Mailer 시스템 아키텍처" },
        ],
      }),
    },
    en: {
      title: "SmileShark Mailer — Gmail Compose Automation",
      company: "SmileShark (Internal Tool)",
      period: "2026.06",
      role: "Solo Design & Development",
      tags: ["Fastify", "React", "TipTap", "SQLite", "Chrome Extension"],
      github: "https://github.com/jeongbaaaan/smileshark-mailer-portfolio",
      sideProject: true,
      contentHtml: projectHtml("en", {
        metrics: [
          { value: "15", label: "ADRs Written" },
          { value: "2", label: "Pivot Decisions" },
          { value: "MV3", label: "Chrome Extension" },
        ],
        summary:
          "An internal tool I designed and built to automate repetitive email writing for 70+ client accounts. Uses a Chrome Extension to auto-fill Gmail compose with customer name, contact, and issue details.",
        signal:
          "Demonstrates the ability to identify a real workflow pain point and solve it with a product. Every technical decision is documented in 15 ADRs.",
        problem: {
          beforeTag: "Before",
          before: "Manually writing and sending emails from the Monday.com client list. Typing customer name, contact, and issue every time.",
          afterTag: "After",
          after: "Select client → choose template → Gmail compose auto-filled. Only the send click is manual.",
        },
        flow: [
          { title: "Select Client", desc: "Query from SQLite DB" },
          { title: "Template", desc: "Edit with TipTap editor" },
          { title: "Preview", desc: "Variable substitution per recipient" },
          { title: "Open Gmail", desc: "Auto-fill via Chrome Extension" },
        ],
        actions: [
          "Designed and implemented customer DB and template CRUD API with Fastify + SQLite.",
          "Built HTML email template editing with TipTap rich text editor.",
          "Implemented Gmail compose auto-fill handoff flow using Chrome Extension MV3.",
          "Documented all technical decisions across 15 ADRs, including the Gmail OAuth to handoff model pivot.",
          "Identified the organization's third-party OAuth block and redesigned the architecture accordingly.",
        ],
        results: [
          "Significantly reduced per-client email writing time.",
          "Completed an internal tool with portfolio-grade design documentation (15 ADRs).",
          "Left a documented record of identifying a real constraint and pivoting the architecture to match.",
        ],
        stack: [
          { label: "Backend", value: "Fastify, SQLite, TypeScript" },
          { label: "Frontend", value: "React, TipTap, Tailwind CSS, Vite" },
          { label: "Extension", value: "Chrome Extension MV3, Gmail handoff" },
          { label: "Docs", value: "15 ADRs, Architecture Decision Records" },
        ],
        images: [
          { src: "/images/projects/smileshark-mailer-architecture.svg", alt: "SmileShark Mailer 시스템 아키텍처" },
        ],
      }),
    },
    ja: {
      title: "SmileShark Mailer — Gmail作成自動化ツール",
      company: "スマイルシャーク（内部ツール）",
      period: "2026.06",
      role: "1人設計・開発",
      tags: ["Fastify", "React", "TipTap", "SQLite", "Chrome Extension"],
      github: "https://github.com/jeongbaaaan/smileshark-mailer-portfolio",
      sideProject: true,
      contentHtml: projectHtml("ja", {
        metrics: [
          { value: "15", label: "ADR作成" },
          { value: "2", label: "ピボット意思決定" },
          { value: "MV3", label: "Chrome Extension" },
        ],
        summary:
          "70以上の顧客へ繰り返し送信するAMメール業務を自動化するために設計・開発した内部ツール。Gmail作成画面に顧客名・担当者・課題を自動入力するハンドオフ方式。",
        signal:
          "実務上の問題を自ら製品として解決した事例です。企画から開発まで一人で行い、15個のADRで全ての意思決定根拠を記録しました。",
        problem: {
          beforeTag: "Before",
          before: "Monday.comの顧客リストからメールを手動で作成・送信。顧客名・担当者・課題をその都度入力。",
          afterTag: "After",
          after: "顧客選択 → テンプレート選択 → Gmail作成画面を自動入力。送信だけ手動クリック。",
        },
        flow: [
          { title: "顧客選択", desc: "SQLite DBから照会" },
          { title: "テンプレート", desc: "TipTapエディタで編集" },
          { title: "プレビュー", desc: "受信者別変数置換" },
          { title: "Gmail起動", desc: "Chrome拡張で自動入力" },
        ],
        actions: [
          "Fastify + SQLiteで顧客DBとテンプレートCRUD APIを設計・実装しました。",
          "TipTapリッチテキストエディタでHTMLメールテンプレート編集機能を実装しました。",
          "Chrome Extension MV3でGmail作成画面へ内容を注入するハンドオフフローを実装しました。",
          "Gmail OAuth直接送信 → ハンドオフモデルへのピボットを含む15個のADRで全技術意思決定を記録しました。",
          "組織のサードパーティOAuth制限を把握し、アーキテクチャを現実に合わせて再設計しました。",
        ],
        results: [
          "顧客ごとのメール作成時間を大幅に短縮しました。",
          "ポートフォリオレベルの設計文書（ADR 15個）を備えた内部ツールを完成しました。",
          "実務制約（OAuth制限）を把握し、代替アーキテクチャへ転換した意思決定過程を記録として残しました。",
        ],
        stack: [
          { label: "Backend", value: "Fastify, SQLite, TypeScript" },
          { label: "Frontend", value: "React, TipTap, Tailwind CSS, Vite" },
          { label: "Extension", value: "Chrome Extension MV3, Gmailハンドオフ" },
          { label: "Docs", value: "ADR 15個, Architecture Decision Records" },
        ],
        images: [
          { src: "/images/projects/smileshark-mailer-architecture.svg", alt: "SmileShark Mailer 시스템 아키텍처" },
        ],
      }),
    },
  },

  "dapanda": {
    ko: {
      title: "Dapanda — AWS CloudSchool 4기 최종 프로젝트",
      company: "AWS CloudSchool (교육)",
      period: "2024.07 ~ 2024.08",
      role: "부팀장 / Frontend + Database + Netpol",
      tags: ["Terraform", "Kubernetes", "Docker", "Spring", "Django", "Next.js"],
      github: "https://github.com/dapanda-awscloudschool",
      education: true,
      contentHtml: projectHtml("ko", {
        metrics: [
          { value: "IaC", label: "Terraform 인프라 코드화" },
          { value: "K8s", label: "Kubernetes 오케스트레이션" },
          { value: "CQRS", label: "명령/조회 분리 아키텍처" },
        ],
        summary:
          "AWS CloudSchool 4기 팀 최종 프로젝트. '네고 없는 중고 경매' 서비스를 MSA + EKS + Terraform으로 구축. SQS FIFO로 입찰 순서를 보장하고 CQRS로 명령/조회를 분리했습니다.",
        signal:
          "교육 프로젝트지만 Terraform IaC, EKS + Istio MSA, CQRS, GitOps까지 현업 수준의 아키텍처를 팀으로 직접 구축한 경험입니다.",
        problem: {
          beforeTag: "Challenge",
          before: "중고 경매 서비스는 동시 입찰과 순서 보장, MSA 간 통신 복잡성, IaC 일관성이 핵심 도전이었습니다.",
          afterTag: "Architecture",
          after: "SQS FIFO로 입찰 순서 보장, CQRS로 명령/조회 분리, Terraform으로 전체 인프라 코드화했습니다.",
        },
        flow: [
          { title: "IaC", desc: "Terraform EKS/VPC 코드화" },
          { title: "MSA", desc: "Spring(명령) + Django(조회)" },
          { title: "Queue", desc: "SQS FIFO 입찰 순서" },
          { title: "GitOps", desc: "ArgoCD 배포" },
        ],
        actions: [
          "Terraform으로 EKS, VPC, Aurora, SQS, CloudFront 전체 인프라를 코드화했습니다.",
          "EKS + Karpenter + Istio로 MSA 서비스 메시와 오토스케일링을 구성했습니다.",
          "SQS FIFO 큐로 동시 입찰의 순서를 보장하는 입찰 처리 흐름을 설계했습니다.",
          "CQRS 패턴으로 Spring Boot 3.2.7(명령)과 Django 5.0.6(조회)을 분리했습니다.",
          "Next.js 14.2 프론트엔드 기능과 Database 설계 및 Kubernetes NetworkPolicy를 담당했습니다.",
          "ArgoCD GitOps와 CodePipeline으로 CI/CD 파이프라인을 구성했습니다.",
          "Grafana + Jaeger + OpenTelemetry로 분산 추적과 모니터링 환경을 구축했습니다.",
        ],
        results: [
          "MSA + EKS + Terraform 기반 중고 경매 서비스를 팀으로 완성했습니다.",
          "SQS FIFO 입찰 큐와 CQRS 아키텍처로 경매 도메인의 핵심 요구사항을 구현했습니다.",
          "Terraform IaC로 인프라 재현성과 협업 일관성을 확보했습니다.",
          "Grafana/Jaeger 기반 관측 가능성 환경에서 분산 시스템을 운영하는 경험을 쌓았습니다.",
        ],
        stack: [
          { label: "IaC", value: "Terraform (EKS, VPC, Aurora, SQS, CloudFront)" },
          { label: "Container", value: "Kubernetes 1.29, Karpenter, Istio, ArgoCD" },
          { label: "Backend", value: "Spring Boot 3.2.7 (command), Django 5.0.6 (query)" },
          { label: "Frontend", value: "Next.js 14.2, TypeScript" },
          { label: "DB", value: "Amazon Aurora MySQL, Redis 7.0" },
          { label: "Observability", value: "Grafana, Jaeger, OpenTelemetry, CloudWatch" },
        ],
        images: [
          { src: "/images/projects/cqrs-aws-architecture.png", alt: "Dapanda AWS 클라우드 아키텍처" },
        ],
      }),
    },
    en: {
      title: "Dapanda — AWS CloudSchool 4th Final Project",
      company: "AWS CloudSchool (Education)",
      period: "2024.07 ~ 2024.08",
      role: "Vice Lead / Frontend + Database + Netpol",
      tags: ["Terraform", "Kubernetes", "Docker", "Spring", "Django", "Next.js"],
      github: "https://github.com/dapanda-awscloudschool",
      education: true,
      contentHtml: projectHtml("en", {
        metrics: [
          { value: "IaC", label: "Terraform Infrastructure" },
          { value: "K8s", label: "Kubernetes Orchestration" },
          { value: "CQRS", label: "Command/Query Separation" },
        ],
        summary:
          "AWS CloudSchool 4th cohort team final project. Built a used-goods auction service with MSA + EKS + Terraform. Guaranteed bid ordering with SQS FIFO and separated command/query with CQRS.",
        signal:
          "An education project built with production-grade architecture: Terraform IaC, EKS + Istio MSA, CQRS, and GitOps — all implemented hands-on as a team.",
        problem: {
          beforeTag: "Challenge",
          before: "Concurrent bidding with ordering guarantees, MSA inter-service complexity, and IaC consistency were the core challenges.",
          afterTag: "Architecture",
          after: "SQS FIFO for bid ordering, CQRS for command/query separation, Terraform for full infrastructure as code.",
        },
        flow: [
          { title: "IaC", desc: "Terraform EKS/VPC" },
          { title: "MSA", desc: "Spring (command) + Django (query)" },
          { title: "Queue", desc: "SQS FIFO bid ordering" },
          { title: "GitOps", desc: "ArgoCD deployment" },
        ],
        actions: [
          "Codified the full infrastructure — EKS, VPC, Aurora, SQS, CloudFront — with Terraform.",
          "Set up MSA service mesh and autoscaling with EKS + Karpenter + Istio.",
          "Designed the bid-processing flow using SQS FIFO to guarantee ordering under concurrent bids.",
          "Separated command (Spring Boot 3.2.7) and query (Django 5.0.6) using CQRS.",
          "Owned Next.js 14.2 frontend features, database schema design, and Kubernetes NetworkPolicy configuration.",
          "Built CI/CD pipeline with ArgoCD GitOps and CodePipeline.",
          "Set up distributed tracing and monitoring with Grafana + Jaeger + OpenTelemetry.",
        ],
        results: [
          "Delivered a used-goods auction service built on MSA + EKS + Terraform as a team.",
          "Implemented the core auction domain requirements with SQS FIFO bid queue and CQRS architecture.",
          "Achieved infrastructure reproducibility and collaboration consistency through Terraform IaC.",
          "Gained hands-on experience operating a distributed system with Grafana/Jaeger observability.",
        ],
        stack: [
          { label: "IaC", value: "Terraform (EKS, VPC, Aurora, SQS, CloudFront)" },
          { label: "Container", value: "Kubernetes 1.29, Karpenter, Istio, ArgoCD" },
          { label: "Backend", value: "Spring Boot 3.2.7 (command), Django 5.0.6 (query)" },
          { label: "Frontend", value: "Next.js 14.2, TypeScript" },
          { label: "DB", value: "Amazon Aurora MySQL, Redis 7.0" },
          { label: "Observability", value: "Grafana, Jaeger, OpenTelemetry, CloudWatch" },
        ],
        images: [
          { src: "/images/projects/cqrs-aws-architecture.png", alt: "Dapanda AWS 클라우드 아키텍처" },
        ],
      }),
    },
    ja: {
      title: "Dapanda — AWS CloudSchool 4期 最終プロジェクト",
      company: "AWS CloudSchool (教育)",
      period: "2024.07 ~ 2024.08",
      role: "副リーダー / Frontend + Database + Netpol",
      tags: ["Terraform", "Kubernetes", "Docker", "Spring", "Django", "Next.js"],
      github: "https://github.com/dapanda-awscloudschool",
      education: true,
      contentHtml: projectHtml("ja", {
        metrics: [
          { value: "IaC", label: "Terraformインフラコード化" },
          { value: "K8s", label: "Kubernetesオーケストレーション" },
          { value: "CQRS", label: "命令/照会分離アーキテクチャ" },
        ],
        summary:
          "AWS CloudSchool 4期チーム最終プロジェクト。中古品オークションサービスをMSA + EKS + Terraformで構築。SQS FIFOで入札順序を保証し、CQRSで命令/照会を分離しました。",
        signal:
          "教育プロジェクトですが、Terraform IaC、EKS + Istio MSA、CQRS、GitOpsまで現場レベルのアーキテクチャをチームで直接構築した経験です。",
        problem: {
          beforeTag: "Challenge",
          before: "同時入札の順序保証、MSA間の通信複雑性、IaC一貫性が核心的な課題でした。",
          afterTag: "Architecture",
          after: "SQS FIFOで入札順序保証、CQRSで命令/照会分離、Terraformで全インフラコード化しました。",
        },
        flow: [
          { title: "IaC", desc: "Terraform EKS/VPCコード化" },
          { title: "MSA", desc: "Spring(命令) + Django(照会)" },
          { title: "Queue", desc: "SQS FIFO入札順序" },
          { title: "GitOps", desc: "ArgoCD配備" },
        ],
        actions: [
          "TerraformでEKS、VPC、Aurora、SQS、CloudFront全体インフラをコード化しました。",
          "EKS + Karpenter + IstioでMSAサービスメッシュとオートスケーリングを構成しました。",
          "SQS FIFOキューで同時入札の順序を保証する入札処理フローを設計しました。",
          "CQRSパターンでSpring Boot 3.2.7（命令）とDjango 5.0.6（照会）を分離しました。",
          "Next.js 14.2フロントエンド機能、DB設計、Kubernetes NetworkPolicy構成を担当しました。",
          "ArgoCD GitOpsとCodePipelineでCI/CDパイプラインを構成しました。",
          "Grafana + Jaeger + OpenTelemetryで分散トレーシングとモニタリング環境を構築しました。",
        ],
        results: [
          "MSA + EKS + Terraformベースの中古品オークションサービスをチームで完成しました。",
          "SQS FIFO入札キューとCQRSアーキテクチャでオークションドメインの核心要件を実装しました。",
          "Terraform IaCでインフラ再現性とチーム協業一貫性を確保しました。",
          "Grafana/Jaegerベースの観測可能性環境で分散システムを運用する経験を積みました。",
        ],
        stack: [
          { label: "IaC", value: "Terraform (EKS, VPC, Aurora, SQS, CloudFront)" },
          { label: "Container", value: "Kubernetes 1.29, Karpenter, Istio, ArgoCD" },
          { label: "Backend", value: "Spring Boot 3.2.7 (command), Django 5.0.6 (query)" },
          { label: "Frontend", value: "Next.js 14.2, TypeScript" },
          { label: "DB", value: "Amazon Aurora MySQL, Redis 7.0" },
          { label: "Observability", value: "Grafana, Jaeger, OpenTelemetry, CloudWatch" },
        ],
        images: [
          { src: "/images/projects/cqrs-aws-architecture.png", alt: "Dapanda AWS 클라우드 아키텍처" },
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
          { src: "/images/projects/dear-ant-architecture.svg", alt: "Dear,ANT 서비스 아키텍처" },
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
          { src: "/images/projects/dear-ant-architecture.svg", alt: "Dear,ANT Service Architecture" },
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
          { src: "/images/projects/dear-ant-architecture.svg", alt: "Dear,ANTサービスアーキテクチャ" },
          
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
          { src: "/images/projects/dalgyeol-architecture.svg", alt: "달결 서비스 아키텍처" },
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
          { src: "/images/projects/dalgyeol-architecture.svg", alt: "Dalgyeol Service Architecture" },
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
          { src: "/images/projects/dalgyeol-architecture.svg", alt: "ダルギョルサービスアーキテクチャ" },
          { src: "/images/projects/dalgyeol-web-saju.jpg", alt: "無料四柱推命" },
          { src: "/images/projects/dalgyeol-web-tarot.jpg", alt: "無料タロット" },
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
        images: [
          { src: "/images/projects/calendar-agent-architecture.svg", alt: "Calendar Briefing Agent 아키텍처" },
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
        images: [
          { src: "/images/projects/calendar-agent-architecture.svg", alt: "Calendar Briefing Agent 아키텍처" },
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
        images: [
          { src: "/images/projects/calendar-agent-architecture.svg", alt: "Calendar Briefing Agent 아키텍처" },
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
