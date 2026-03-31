import type { Locale } from "../utils";

export interface ProjectData {
  title: string;
  company: string;
  period: string;
  role: string;
  tags: string[];
  github?: string;
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
  "what-health",
] as const;

const projectsData: Record<string, Record<Locale, ProjectData>> = {
  "cloud-infra-management": {
    ko: {
      title: "클라우드 인프라 관리 & 비용 최적화",
      company: "스마일샤크",
      period: "2024.11 ~ 현재",
      role: "Account Manager",
      tags: ["AWS", "EC2", "Lambda", "Cost Optimization"],
      contentHtml: `
<div class="metric-cards">
<div class="metric-card"><div class="value">70+</div><div class="label">고객 계정</div></div>
<div class="metric-card"><div class="value">60%</div><div class="label">스토리지 절감</div></div>
<div class="metric-card"><div class="value">6</div><div class="label">AWS 공식 교육</div></div>
</div>

<h2>배경 (Situation)</h2>
<p>스마일샤크는 AWS MSP(Managed Service Provider) 파트너사로, 70개 이상의 고객이 사용하는 클라우드 인프라를 관리합니다. 고객별로 EC2, S3, RDS, Lambda, CloudFront 등 다양한 AWS 서비스를 운영하고 있으며, 각 고객의 비용 효율성과 서비스 안정성을 동시에 확보하는 것이 핵심 과제입니다.</p>

<h2>나의 역할 (Task)</h2>
<p>Account Manager로서 고객 계정의 인프라 전반을 담당합니다.</p>
<ul>
<li>70+ 고객 계정의 AWS 인프라 일상 관리 및 장애 대응</li>
<li>비용 최적화 분석 및 아키텍처 개선 제안</li>
<li>신규 고객사 인프라 설계 및 PoC 수행</li>
<li>AWS Well-Architected Framework 기반 인프라 검토</li>
</ul>

<h2>수행 내용 (Action)</h2>
<h3>QR 이미지 Lambda 리사이징 아키텍처 설계</h3>
<p>고객사의 QR 이미지 처리 비용 문제를 해결하기 위해 서버리스 아키텍처를 설계했습니다.</p>

<div class="compare">
<div class="compare-item before"><span class="tag">Before</span><p>원본 이미지(~3MB)를 그대로 S3에 저장·CloudFront로 배포</p></div>
<div class="compare-item after"><span class="tag">After</span><p>S3 업로드 → Lambda 트리거 → 자동 리사이징(3MB→300KB) → CloudFront 배포</p></div>
</div>

<div class="process-flow">
<div class="process-step"><div class="step-title">S3 Upload</div><div class="step-desc">이미지 업로드</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">Lambda</div><div class="step-desc">자동 리사이징</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">S3 저장</div><div class="step-desc">300KB</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">CloudFront</div><div class="step-desc">글로벌 배포</div></div>
</div>

<div class="highlight-box">
<strong>서버리스 아키텍처</strong> — 서버 없이 이벤트 기반으로 동작하는 완전 서버리스 파이프라인. 트래픽에 따라 자동 스케일링되며 유휴 비용이 없습니다.
</div>

<h3>Cost Explorer 기반 비용 최적화</h3>
<ul>
<li>고객별 Cost Explorer 데이터를 분석하여 <strong>RI(Reserved Instance) 전환 권고</strong></li>
<li><strong>S3 Lifecycle 정책 최적화</strong>: 사용 빈도가 낮은 객체의 스토리지 클래스 자동 전환 설정</li>
</ul>

<h3>신규 고객사 PoC</h3>
<ul>
<li>AWS Well-Architected Framework의 5대 축(보안, 안정성, 성능 효율성, 비용 최적화, 운영 우수성) 기반 인프라 설계 및 검토</li>
</ul>

<h3>AWS 공식 교육</h3>
<ul>
<li>Serverless, DevOps, Developing, Well-Architected, Technical Essentials, Security Essentials <strong>6개 과정 수료</strong></li>
</ul>

<h2>결과 (Result)</h2>
<ul>
<li><strong>스토리지 비용 60% 절감</strong> — QR 이미지 Lambda 리사이징 아키텍처 적용 건</li>
<li><strong>70+ 고객 계정</strong> 안정 운영 및 장애 대응</li>
<li><strong>AWS SAA</strong>(Solutions Architect Associate) 자격증 취득</li>
</ul>

<h2>기술 스택</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Cloud</span><span class="bento-value">AWS (EC2, S3, RDS, Lambda, CloudFront, Cost Explorer)</span></div>
<div class="bento-item"><span class="bento-label">Architecture</span><span class="bento-value">Serverless, Well-Architected Framework</span></div>
<div class="bento-item"><span class="bento-label">Optimization</span><span class="bento-value">RI 전환, S3 Lifecycle, Lambda 리사이징</span></div>
</div>`,
    },
    en: {
      title: "Cloud Infra Management & Cost Optimization",
      company: "SmileShark",
      period: "2024.11 ~ Present",
      role: "Account Manager",
      tags: ["AWS", "EC2", "Lambda", "Cost Optimization"],
      contentHtml: `
<div class="metric-cards">
<div class="metric-card"><div class="value">70+</div><div class="label">Customer Accounts</div></div>
<div class="metric-card"><div class="value">60%</div><div class="label">Storage Cost Saved</div></div>
<div class="metric-card"><div class="value">6</div><div class="label">AWS Trainings</div></div>
</div>

<h2>Situation</h2>
<p>SmileShark is an AWS MSP (Managed Service Provider) partner managing cloud infrastructure for over 70 customers. Each customer operates various AWS services including EC2, S3, RDS, Lambda, and CloudFront, and the key challenge is ensuring both cost efficiency and service reliability.</p>

<h2>Task</h2>
<p>As an Account Manager, I am responsible for the overall infrastructure of customer accounts.</p>
<ul>
<li>Daily management and incident response for 70+ customer AWS accounts</li>
<li>Cost optimization analysis and architecture improvement proposals</li>
<li>Infrastructure design and PoC for new customers</li>
<li>Infrastructure review based on AWS Well-Architected Framework</li>
</ul>

<h2>Action</h2>
<h3>QR Image Lambda Resizing Architecture</h3>
<p>Designed a serverless architecture to solve a customer's QR image processing cost issue.</p>

<div class="compare">
<div class="compare-item before"><span class="tag">Before</span><p>Original images (~3MB) stored directly in S3 and served via CloudFront</p></div>
<div class="compare-item after"><span class="tag">After</span><p>S3 Upload → Lambda Trigger → Auto-resizing (3MB→300KB) → CloudFront Distribution</p></div>
</div>

<div class="process-flow">
<div class="process-step"><div class="step-title">S3 Upload</div><div class="step-desc">Image upload</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">Lambda</div><div class="step-desc">Auto-resize</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">S3 Store</div><div class="step-desc">300KB</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">CloudFront</div><div class="step-desc">Global CDN</div></div>
</div>

<div class="highlight-box">
<strong>Serverless Architecture</strong> — Fully event-driven pipeline with no servers. Auto-scales with traffic and incurs zero idle costs.
</div>

<h3>Cost Optimization via Cost Explorer</h3>
<ul>
<li>Analyzed per-customer Cost Explorer data to recommend <strong>RI (Reserved Instance) conversions</strong></li>
<li><strong>S3 Lifecycle policy optimization</strong>: Configured automatic storage class transitions for infrequently accessed objects</li>
</ul>

<h3>New Customer PoC</h3>
<ul>
<li>Infrastructure design and review based on the 5 pillars of AWS Well-Architected Framework (Security, Reliability, Performance Efficiency, Cost Optimization, Operational Excellence)</li>
</ul>

<h3>AWS Official Training</h3>
<ul>
<li>Completed <strong>6 courses</strong>: Serverless, DevOps, Developing, Well-Architected, Technical Essentials, Security Essentials</li>
</ul>

<h2>Result</h2>
<ul>
<li><strong>60% storage cost reduction</strong> — from QR image Lambda resizing architecture</li>
<li><strong>70+ customer accounts</strong> operated stably with incident response</li>
<li><strong>AWS SAA</strong> (Solutions Architect Associate) certification obtained</li>
</ul>

<h2>Tech Stack</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Cloud</span><span class="bento-value">AWS (EC2, S3, RDS, Lambda, CloudFront, Cost Explorer)</span></div>
<div class="bento-item"><span class="bento-label">Architecture</span><span class="bento-value">Serverless, Well-Architected Framework</span></div>
<div class="bento-item"><span class="bento-label">Optimization</span><span class="bento-value">RI Conversion, S3 Lifecycle, Lambda Resizing</span></div>
</div>`,
    },
    ja: {
      title: "クラウドインフラ管理＆コスト最適化",
      company: "スマイルシャーク",
      period: "2024.11 ~ 現在",
      role: "アカウントマネージャー",
      tags: ["AWS", "EC2", "Lambda", "Cost Optimization"],
      contentHtml: `
<div class="metric-cards">
<div class="metric-card"><div class="value">70+</div><div class="label">顧客アカウント</div></div>
<div class="metric-card"><div class="value">60%</div><div class="label">ストレージ削減</div></div>
<div class="metric-card"><div class="value">6</div><div class="label">AWS公式研修</div></div>
</div>

<h2>背景 (Situation)</h2>
<p>スマイルシャークはAWS MSP（Managed Service Provider）パートナー企業で、70社以上の顧客のクラウドインフラを管理しています。各顧客がEC2、S3、RDS、Lambda、CloudFrontなど様々なAWSサービスを運用しており、コスト効率とサービス安定性の両立が重要な課題です。</p>

<h2>役割 (Task)</h2>
<p>アカウントマネージャーとして、顧客アカウントのインフラ全般を担当しています。</p>
<ul>
<li>70以上の顧客アカウントのAWSインフラ日常管理および障害対応</li>
<li>コスト最適化分析およびアーキテクチャ改善提案</li>
<li>新規顧客のインフラ設計およびPoC実施</li>
<li>AWS Well-Architected Frameworkベースのインフラレビュー</li>
</ul>

<h2>実施内容 (Action)</h2>
<h3>QR画像Lambdaリサイジングアーキテクチャ設計</h3>
<p>顧客のQR画像処理コスト問題を解決するため、サーバーレスアーキテクチャを設計しました。</p>

<div class="compare">
<div class="compare-item before"><span class="tag">Before</span><p>元画像（〜3MB）をそのままS3に保存・CloudFrontで配信</p></div>
<div class="compare-item after"><span class="tag">After</span><p>S3アップロード → Lambdaトリガー → 自動リサイジング（3MB→300KB） → CloudFront配信</p></div>
</div>

<div class="process-flow">
<div class="process-step"><div class="step-title">S3 Upload</div><div class="step-desc">画像アップロード</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">Lambda</div><div class="step-desc">自動リサイジング</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">S3保存</div><div class="step-desc">300KB</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">CloudFront</div><div class="step-desc">グローバル配信</div></div>
</div>

<div class="highlight-box">
<strong>サーバーレスアーキテクチャ</strong> — サーバー不要のイベント駆動型パイプライン。トラフィックに応じて自動スケーリング、アイドルコストゼロ。
</div>

<h3>Cost Explorerベースのコスト最適化</h3>
<ul>
<li>顧客別Cost Explorerデータを分析し、<strong>RI（リザーブドインスタンス）転換を勧告</strong></li>
<li><strong>S3 Lifecycleポリシー最適化</strong>: アクセス頻度の低いオブジェクトのストレージクラス自動転換を設定</li>
</ul>

<h3>新規顧客PoC</h3>
<ul>
<li>AWS Well-Architected Frameworkの5つの柱（セキュリティ、信頼性、パフォーマンス効率、コスト最適化、運用の優秀性）ベースのインフラ設計およびレビュー</li>
</ul>

<h3>AWS公式トレーニング</h3>
<ul>
<li>Serverless、DevOps、Developing、Well-Architected、Technical Essentials、Security Essentials <strong>6コース修了</strong></li>
</ul>

<h2>成果 (Result)</h2>
<ul>
<li><strong>ストレージコスト60%削減</strong> — QR画像Lambdaリサイジングアーキテクチャ適用件</li>
<li><strong>70以上の顧客アカウント</strong>の安定運用および障害対応</li>
<li><strong>AWS SAA</strong>（Solutions Architect Associate）資格取得</li>
</ul>

<h2>技術スタック</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Cloud</span><span class="bento-value">AWS (EC2, S3, RDS, Lambda, CloudFront, Cost Explorer)</span></div>
<div class="bento-item"><span class="bento-label">Architecture</span><span class="bento-value">Serverless, Well-Architected Framework</span></div>
<div class="bento-item"><span class="bento-label">Optimization</span><span class="bento-value">RI転換、S3 Lifecycle、Lambdaリサイジング</span></div>
</div>`,
    },
  },

  "clova-x-chatbot": {
    ko: {
      title: "Clova X AI 챗봇 PM",
      company: "네이버클라우드 (대외활동)",
      period: "2023.11 ~ 2023.12",
      role: "AI PM",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      contentHtml: `
<div class="metric-cards">
<div class="metric-card"><div class="value">66%</div><div class="label">수정 사이클 단축</div></div>
<div class="metric-card"><div class="value">18</div><div class="label">성향 분석 질문</div></div>
<div class="metric-card"><div class="value">6인</div><div class="label">팀 구성</div></div>
</div>

<h2>배경 (Situation)</h2>
<p>네이버클라우드 Clova X 대외활동에서 AI 챗봇 서비스를 기획했습니다. AI가 사용자의 성향을 학습하여 맞춤형 대화를 제공하는 서비스로, 챗봇의 대화 품질을 높이기 위한 프롬프트 데이터셋 구축과 사용자 경험 설계가 핵심 과제였습니다. 당시 기획팀과 개발팀 간 수정 사이클이 평균 3회로, 협업 효율이 낮은 상태였습니다.</p>

<h2>나의 역할 (Task)</h2>
<p>6인 팀(Back-end 1, Front-end 2, PM 2, Design 1)에서 AI PM을 담당했습니다.</p>
<ul>
<li>서비스 목표 정의 및 타겟 유저 페르소나 설계</li>
<li>프롬프트 데이터셋 설계 및 구축</li>
<li>UX 흐름 설계 및 Information Architecture(IA) 구성</li>
<li>기획 문서 → API 스펙 변환 프로세스 수립</li>
</ul>

<h2>수행 내용 (Action)</h2>
<h3>서비스 기획</h3>
<ul>
<li><strong>문제 정의</strong>: 일상의 과몰입이나 성격으로 인한 인간관계의 답답함을 AI 챗봇으로 해소</li>
<li><strong>타겟 페르소나</strong>: 2가지 유저 유형 정의 — 성격 개선을 원하는 사용자 / 새로운 자아를 경험하고 싶은 직장인</li>
<li><strong>서비스 목표</strong>: 원하는 페르소나를 구체화하고, AI와의 대화를 통해 삶의 유연함을 제공</li>
</ul>

<h3>UX 설계</h3>
<ul>
<li><strong>Information Architecture</strong>: 앱 진입 → 성향 질문(18문항) → 캐릭터 생성 → AI 대화방으로 이어지는 전체 흐름 설계</li>
<li><strong>사용자 시나리오</strong>: 성향 선택부터 대화까지 자연스럽게 이어지도록 IA 구성</li>
<li><strong>디자인 시스템</strong>: Typography, Color System, Component 정의를 통한 효율적 협업 환경 구축</li>
</ul>

<h3>UX 플로우</h3>
<div class="process-flow">
<div class="process-step"><div class="step-title">앱 진입</div><div class="step-desc">온보딩</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">성향 질문</div><div class="step-desc">18문항</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">캐릭터 생성</div><div class="step-desc">AI 매칭</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">AI 대화방</div><div class="step-desc">맞춤 대화</div></div>
</div>

<h3>프롬프트 엔지니어링</h3>
<ul>
<li><strong>Few-shot 기반 프롬프트 데이터셋</strong>: 사용자 답변을 학습하여 성향에 맞는 캐릭터를 생성하고, 상황별 맞춤 대화를 제공하는 프롬프트 설계</li>
<li>다양한 상황 제안(오늘의 추천 상황) 기능을 위한 프롬프트 구성</li>
</ul>

<h3>기획→개발 협업 프로세스</h3>

<div class="compare">
<div class="compare-item before"><span class="tag">Before</span><p>기획-개발 간 수정 사이클 평균 <strong>3회</strong></p></div>
<div class="compare-item after"><span class="tag">After</span><p>API 스펙 변환 프로세스 도입 → 수정 <strong>1회</strong></p></div>
</div>

<div class="highlight-box">
<strong>핵심 개선</strong> — 기획 문서를 개발팀이 바로 사용 가능한 API 스펙으로 변환하는 프로세스를 수립하여, 기획 의도와 기술 구현 사이의 갭을 줄였습니다.
</div>

<h2>결과 (Result)</h2>
<ul>
<li><strong>수정 사이클 66% 단축</strong> — 기획-개발 간 수정 3회→1회 (협업 프로세스 개선 한정)</li>
<li>Few-shot 기반 프롬프트 데이터셋 구축 완료</li>
<li>18문항 성향 분석 → AI 캐릭터 생성 → 맞춤 대화의 전체 UX 흐름 설계 완료</li>
</ul>

<h2>기술 스택</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">AI</span><span class="bento-value">Clova X, Prompt Engineering, Few-shot Learning</span></div>
<div class="bento-item"><span class="bento-label">PM</span><span class="bento-value">페르소나 정의, IA 설계, UX 설계, API 스펙 문서화</span></div>
<div class="bento-item"><span class="bento-label">Design</span><span class="bento-value">디자인 시스템 (Typography, Color System, Component)</span></div>
</div>`,
    },
    en: {
      title: "Clova X AI Chatbot PM",
      company: "Naver Cloud (Extracurricular)",
      period: "2023.11 ~ 2023.12",
      role: "AI PM",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      contentHtml: `
<div class="metric-cards">
<div class="metric-card"><div class="value">66%</div><div class="label">Revision Cycle Reduced</div></div>
<div class="metric-card"><div class="value">18</div><div class="label">Personality Questions</div></div>
<div class="metric-card"><div class="value">6</div><div class="label">Team Members</div></div>
</div>

<h2>Situation</h2>
<p>Planned an AI chatbot service as part of Naver Cloud's Clova X extracurricular program. The service learns user personality traits and provides personalized conversations. The key challenges were building prompt datasets to improve chatbot quality and designing the user experience. At the time, the average revision cycle between planning and development teams was 3 rounds, resulting in low collaboration efficiency.</p>

<h2>Task</h2>
<p>Served as AI PM in a 6-member team (1 Back-end, 2 Front-end, 2 PM, 1 Design).</p>
<ul>
<li>Define service goals and design target user personas</li>
<li>Design and build prompt datasets</li>
<li>Design UX flows and Information Architecture (IA)</li>
<li>Establish planning document → API spec conversion process</li>
</ul>

<h2>Action</h2>
<h3>Service Planning</h3>
<ul>
<li><strong>Problem Definition</strong>: Resolve frustrations in interpersonal relationships caused by personality traits or daily burnout through AI chatbot</li>
<li><strong>Target Personas</strong>: Defined 2 user types — users seeking personality improvement / professionals wanting to experience a new self</li>
<li><strong>Service Goal</strong>: Materialize desired personas and provide life flexibility through AI conversations</li>
</ul>

<h3>UX Design</h3>
<ul>
<li><strong>Information Architecture</strong>: Designed end-to-end flow from app entry → personality questions (18 items) → character generation → AI chat room</li>
<li><strong>User Scenarios</strong>: Structured IA for seamless flow from personality selection to conversation</li>
<li><strong>Design System</strong>: Defined Typography, Color System, and Components for efficient team collaboration</li>
</ul>

<h3>UX Flow</h3>
<div class="process-flow">
<div class="process-step"><div class="step-title">App Entry</div><div class="step-desc">Onboarding</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">Personality Q</div><div class="step-desc">18 items</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">Character Gen</div><div class="step-desc">AI Matching</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">AI Chat Room</div><div class="step-desc">Custom Chat</div></div>
</div>

<h3>Prompt Engineering</h3>
<ul>
<li><strong>Few-shot Prompt Datasets</strong>: Designed prompts that learn from user responses to generate personality-matched characters and provide situation-specific conversations</li>
<li>Composed prompts for contextual suggestion features (daily recommended situations)</li>
</ul>

<h3>Planning→Development Process</h3>

<div class="compare">
<div class="compare-item before"><span class="tag">Before</span><p>Average <strong>3 rounds</strong> of revision between planning and development</p></div>
<div class="compare-item after"><span class="tag">After</span><p>API spec conversion process → <strong>1 round</strong> of revision</p></div>
</div>

<div class="highlight-box">
<strong>Key Improvement</strong> — Established a process to convert planning documents into API specs directly usable by developers, reducing the gap between planning intent and technical implementation.
</div>

<h2>Result</h2>
<ul>
<li><strong>66% reduction in revision cycles</strong> — planning-development revisions from 3 rounds to 1 (collaboration process improvement)</li>
<li>Completed few-shot based prompt dataset construction</li>
<li>Designed complete UX flow: 18-question personality analysis → AI character generation → personalized conversation</li>
</ul>

<h2>Tech Stack</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">AI</span><span class="bento-value">Clova X, Prompt Engineering, Few-shot Learning</span></div>
<div class="bento-item"><span class="bento-label">PM</span><span class="bento-value">Persona Definition, IA Design, UX Design, API Spec Documentation</span></div>
<div class="bento-item"><span class="bento-label">Design</span><span class="bento-value">Design System (Typography, Color System, Component)</span></div>
</div>`,
    },
    ja: {
      title: "Clova X AI チャットボット PM",
      company: "NAVERクラウド (課外活動)",
      period: "2023.11 ~ 2023.12",
      role: "AI PM",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      contentHtml: `
<div class="metric-cards">
<div class="metric-card"><div class="value">66%</div><div class="label">修正サイクル短縮</div></div>
<div class="metric-card"><div class="value">18</div><div class="label">性向分析質問</div></div>
<div class="metric-card"><div class="value">6人</div><div class="label">チーム構成</div></div>
</div>

<h2>背景 (Situation)</h2>
<p>NAVERクラウドClova X課外活動でAIチャットボットサービスを企画しました。AIがユーザーの性向を学習し、カスタマイズされた会話を提供するサービスで、チャットボットの会話品質を高めるためのプロンプトデータセット構築とユーザー体験設計が重要な課題でした。当時、企画チームと開発チーム間の修正サイクルが平均3回で、コラボレーション効率が低い状態でした。</p>

<h2>役割 (Task)</h2>
<p>6人チーム（Back-end 1、Front-end 2、PM 2、Design 1）でAI PMを担当しました。</p>
<ul>
<li>サービス目標定義およびターゲットユーザーペルソナ設計</li>
<li>プロンプトデータセット設計および構築</li>
<li>UXフロー設計およびInformation Architecture（IA）構成</li>
<li>企画文書→APIスペック変換プロセス確立</li>
</ul>

<h2>実施内容 (Action)</h2>
<h3>サービス企画</h3>
<ul>
<li><strong>問題定義</strong>: 日常の過没入や性格による人間関係の息苦しさをAIチャットボットで解消</li>
<li><strong>ターゲットペルソナ</strong>: 2つのユーザータイプを定義 — 性格改善を望むユーザー / 新しい自分を体験したい社会人</li>
<li><strong>サービス目標</strong>: 望むペルソナを具体化し、AIとの会話を通じて人生の柔軟性を提供</li>
</ul>

<h3>UX設計</h3>
<ul>
<li><strong>Information Architecture</strong>: アプリ進入→性向質問（18問）→キャラクター生成→AIチャットルームまでの全体フロー設計</li>
<li><strong>ユーザーシナリオ</strong>: 性向選択から会話まで自然につながるようIA構成</li>
<li><strong>デザインシステム</strong>: Typography、Color System、Component定義による効率的なコラボレーション環境構築</li>
</ul>

<h3>UXフロー</h3>
<div class="process-flow">
<div class="process-step"><div class="step-title">アプリ進入</div><div class="step-desc">オンボーディング</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">性向質問</div><div class="step-desc">18問</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">キャラ生成</div><div class="step-desc">AIマッチング</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">AIチャット</div><div class="step-desc">カスタム会話</div></div>
</div>

<h3>プロンプトエンジニアリング</h3>
<ul>
<li><strong>Few-shotベースプロンプトデータセット</strong>: ユーザーの回答を学習して性向に合うキャラクターを生成し、状況別カスタマイズ会話を提供するプロンプト設計</li>
<li>多様な状況提案（今日のおすすめ状況）機能のためのプロンプト構成</li>
</ul>

<h3>企画→開発コラボレーションプロセス</h3>

<div class="compare">
<div class="compare-item before"><span class="tag">Before</span><p>企画-開発間の修正サイクル平均<strong>3回</strong></p></div>
<div class="compare-item after"><span class="tag">After</span><p>APIスペック変換プロセス導入 → 修正<strong>1回</strong></p></div>
</div>

<div class="highlight-box">
<strong>核心改善</strong> — 企画文書を開発チームがそのまま使用可能なAPIスペックに変換するプロセスを確立し、企画意図と技術実装の間のギャップを縮めました。
</div>

<h2>成果 (Result)</h2>
<ul>
<li><strong>修正サイクル66%短縮</strong> — 企画-開発間の修正3回→1回（コラボレーションプロセス改善に限定）</li>
<li>Few-shotベースプロンプトデータセット構築完了</li>
<li>18問の性向分析→AIキャラクター生成→カスタマイズ会話の全体UXフロー設計完了</li>
</ul>

<h2>技術スタック</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">AI</span><span class="bento-value">Clova X, Prompt Engineering, Few-shot Learning</span></div>
<div class="bento-item"><span class="bento-label">PM</span><span class="bento-value">ペルソナ定義、IA設計、UX設計、APIスペック文書化</span></div>
<div class="bento-item"><span class="bento-label">Design</span><span class="bento-value">デザインシステム（Typography、Color System、Component）</span></div>
</div>`,
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
      contentHtml: `<div class="metric-cards">
<div class="metric-card"><div class="value">🏆 대상</div><div class="label">AWS 해커톤 1위</div></div>
<div class="metric-card"><div class="value">2x</div><div class="label">처리량 향상</div></div>
<div class="metric-card"><div class="value">30%</div><div class="label">비용 절감</div></div>
</div>

<h2>배경 (Situation)</h2>
<p>AWS CloudSchool 최종 프로젝트로 경매 웹사이트를 설계·구축했습니다. 경매 서비스 특성상 <strong>대규모 동시 입찰 트래픽 처리</strong>와 <strong>입찰 순서 보장</strong>이 핵심 요구사항이었으며, On-premise 환경에서 AWS 클라우드로의 마이그레이션도 함께 수행해야 했습니다.</p>

<h2>나의 역할 (Task)</h2>
<p>부팀장 겸 DB 리더로서 프로젝트 전반을 관리하고, 데이터베이스 아키텍처를 주도했습니다.</p>
<ul>
<li><strong>부팀장</strong>: Jira 기반 전체 일정 관리 및 AWS 비용 모니터링</li>
<li><strong>DB 리더</strong>: 데이터 I/O 특성 분석, DB 기술 스택 선정, CQRS 패턴 설계</li>
<li><strong>Frontend 개발</strong>: 웹 프론트엔드 구현</li>
<li><strong>Infra Migration</strong>: On-premise → AWS 클라우드 마이그레이션 기획</li>
</ul>

<h2>수행 내용 (Action)</h2>
<h3>MSA 아키텍처 설계</h3>
<ul>
<li>경매 서비스에 MSA(Microservice Architecture) 채택</li>
<li><strong>확장성·탄력성</strong>: 대규모 트래픽을 유연하게 처리</li>
<li><strong>장애 격리성</strong>: 경매 외적인 부분에서 장애가 발생해도 핵심 입찰 기능에 영향을 주지 않도록 설계</li>
</ul>

<div class="highlight-box">
<strong>MSA를 선택한 이유</strong> — 경매 서비스는 입찰 트래픽이 집중되는 특성이 있어, 장애 격리를 통해 핵심 입찰 기능의 안정성을 보장해야 했습니다.
</div>

<h3>DB 기술 스택 선정 — CQRS 패턴</h3>
<ul>
<li>데이터 I/O 특성 분석: 경매 서비스는 읽기(상품 조회) 빈도가 쓰기(입찰)보다 높음</li>
<li><strong>CQRS 패턴 선택</strong>: Command(Write) → Primary DB, Query(Read) → Read Replica 분리</li>
<li>CRUD 단일 DB 대비 읽기/쓰기 분리로 성능 최적화</li>
</ul>

<h3>Queue Service — 입찰 순서 보장</h3>
<ul>
<li>경매 입찰의 정확한 순서 보장을 위해 Queue Service 도입</li>
<li>Kafka, RabbitMQ, Amazon SQS 비교 검토 → 클라우드 환경에 적합한 <strong>SQS FIFO Queue</strong> 채택</li>
</ul>

<h3>On-premise → Cloud 마이그레이션</h3>
<div class="compare">
<div class="compare-item before"><span class="tag">On-premise</span><p>Jira → GitHub → GitHub Actions / Argo CD → Apache Bench → Docker Hub → Kubernetes</p></div>
<div class="compare-item after"><span class="tag">Cloud (AWS)</span><p>Jira → CodeCommit → CodeBuild / Argo CD → Chaos Mesh → ECR → EKS → CloudWatch / Grafana / Loki / Jaeger</p></div>
</div>

<h3>Architecture 스펙 문서화</h3>
<ul>
<li>구현 전 각 서비스별 스펙을 문서로 정리하고 설계도를 기반으로 개발 진행</li>
<li>개발자별 사용 스펙을 공유하여 커뮤니케이션 효율화</li>
</ul>

<h3>Multi-AZ 고가용성</h3>
<ul>
<li>자동 Failover를 통한 서비스 연속성 보장</li>
</ul>

<h2>결과 (Result)</h2>
<ul>
<li><strong>AWS 해커톤 대상(1위)</strong></li>
<li><strong>처리량 2배 향상</strong> — CQRS 읽기/쓰기 분리</li>
<li><strong>비용 30% 절감</strong> — 효율적인 리소스 활용</li>
<li>AWS 비용 관리: 총 $673, 일일 $10.52, 28개 서비스 운영</li>
</ul>

<h2>기술 스택</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Cloud</span><span class="bento-value">AWS (EKS, RDS, Multi-AZ, Read Replica, SQS, ECR, CloudWatch)</span></div>
<div class="bento-item"><span class="bento-label">Pattern</span><span class="bento-value">CQRS, MSA (Microservice Architecture)</span></div>
<div class="bento-item"><span class="bento-label">DevOps</span><span class="bento-value">Argo CD, Chaos Mesh, Grafana, Loki, Jaeger</span></div>
<div class="bento-item"><span class="bento-label">PM</span><span class="bento-value">Jira, Slack, GitHub</span></div>
</div>

<h2>프로젝트 자료</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
<img src="/images/projects/cqrs-aws-architecture.png" alt="AWS 인프라 아키텍처" style="width:480px;border-radius:12px;" />
<img src="/images/projects/cqrs-queue-service.png" alt="Queue Service 아키텍처" style="width:400px;border-radius:12px;" />
<img src="/images/projects/cqrs-vs-crud.png" alt="CRUD vs CQRS 비교" style="width:400px;border-radius:12px;" />
</div>`,
    },
    en: {
      title: "CQRS Auction Website",
      company: "AWS CloudSchool (Education)",
      period: "2024.01 ~ 2024.07",
      role: "Vice Team Lead / DB Lead",
      tags: ["AWS", "CQRS", "RDS", "Multi-AZ"],
      education: true,
      contentHtml: `<div class="metric-cards">
<div class="metric-card"><div class="value">🏆 1st</div><div class="label">AWS Hackathon</div></div>
<div class="metric-card"><div class="value">2x</div><div class="label">Throughput</div></div>
<div class="metric-card"><div class="value">30%</div><div class="label">Cost Saved</div></div>
</div>

<h2>Situation</h2>
<p>Built an auction website as the final project for AWS CloudSchool. The auction service required <strong>handling high-volume concurrent bid traffic</strong> and <strong>guaranteeing bid ordering</strong>. The project also involved migrating from on-premise to AWS cloud.</p>

<h2>Task</h2>
<p>Managed the overall project as Vice Team Lead and led database architecture as DB Lead.</p>
<ul>
<li><strong>Vice Team Lead</strong>: Jira-based schedule management and AWS cost monitoring</li>
<li><strong>DB Lead</strong>: Data I/O analysis, DB tech stack selection, CQRS pattern design</li>
<li><strong>Frontend Development</strong>: Web frontend implementation</li>
<li><strong>Infra Migration</strong>: On-premise → AWS cloud migration planning</li>
</ul>

<h2>Action</h2>
<h3>MSA Architecture Design</h3>
<ul>
<li>Adopted MSA (Microservice Architecture) for the auction service</li>
<li><strong>Scalability & Elasticity</strong>: Handle large-scale traffic flexibly</li>
<li><strong>Fault Isolation</strong>: Designed so failures in non-auction components don't affect core bidding</li>
</ul>

<div class="highlight-box">
<strong>Why MSA</strong> — Auction services experience concentrated bid traffic, requiring fault isolation to guarantee stability of core bidding functionality.
</div>

<h3>DB Tech Stack — CQRS Pattern</h3>
<ul>
<li>Data I/O analysis: Auction services have higher read (product browsing) frequency than write (bidding)</li>
<li><strong>CQRS Pattern</strong>: Command (Write) → Primary DB, Query (Read) → Read Replica separation</li>
<li>Performance optimization through read/write separation vs single CRUD DB</li>
</ul>

<h3>Queue Service — Bid Order Guarantee</h3>
<ul>
<li>Introduced Queue Service to guarantee accurate bid ordering</li>
<li>Compared Kafka, RabbitMQ, and Amazon SQS → Selected <strong>SQS FIFO Queue</strong> for cloud environment</li>
</ul>

<h3>On-premise → Cloud Migration</h3>
<div class="compare">
<div class="compare-item before"><span class="tag">On-premise</span><p>Jira → GitHub → GitHub Actions / Argo CD → Apache Bench → Docker Hub → Kubernetes</p></div>
<div class="compare-item after"><span class="tag">Cloud (AWS)</span><p>Jira → CodeCommit → CodeBuild / Argo CD → Chaos Mesh → ECR → EKS → CloudWatch / Grafana / Loki / Jaeger</p></div>
</div>

<h3>Architecture Spec Documentation</h3>
<ul>
<li>Documented per-service specs before implementation; developed based on architecture diagrams</li>
<li>Shared developer-specific specs to improve communication efficiency</li>
</ul>

<h3>Multi-AZ High Availability</h3>
<ul>
<li>Service continuity through automatic Failover</li>
</ul>

<h2>Result</h2>
<ul>
<li><strong>AWS Hackathon Grand Prize (1st Place)</strong></li>
<li><strong>2x throughput improvement</strong> — CQRS read/write separation</li>
<li><strong>30% cost reduction</strong> — efficient resource utilization</li>
<li>AWS cost management: $673 total, $10.52/day, 28 services operated</li>
</ul>

<h2>Tech Stack</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Cloud</span><span class="bento-value">AWS (EKS, RDS, Multi-AZ, Read Replica, SQS, ECR, CloudWatch)</span></div>
<div class="bento-item"><span class="bento-label">Pattern</span><span class="bento-value">CQRS, MSA (Microservice Architecture)</span></div>
<div class="bento-item"><span class="bento-label">DevOps</span><span class="bento-value">Argo CD, Chaos Mesh, Grafana, Loki, Jaeger</span></div>
<div class="bento-item"><span class="bento-label">PM</span><span class="bento-value">Jira, Slack, GitHub</span></div>
</div>

<h2>Project Materials</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
<img src="/images/projects/cqrs-aws-architecture.png" alt="AWS Infrastructure Architecture" style="width:480px;border-radius:12px;" />
<img src="/images/projects/cqrs-queue-service.png" alt="Queue Service Architecture" style="width:400px;border-radius:12px;" />
<img src="/images/projects/cqrs-vs-crud.png" alt="CRUD vs CQRS Comparison" style="width:400px;border-radius:12px;" />
</div>`,
    },
    ja: {
      title: "CQRSオークションサイト",
      company: "AWS CloudSchool (教育)",
      period: "2024.01 ~ 2024.07",
      role: "副チームリーダー / DBリーダー",
      tags: ["AWS", "CQRS", "RDS", "Multi-AZ"],
      education: true,
      contentHtml: `<div class="metric-cards">
<div class="metric-card"><div class="value">🏆 大賞</div><div class="label">AWSハッカソン1位</div></div>
<div class="metric-card"><div class="value">2x</div><div class="label">スループット向上</div></div>
<div class="metric-card"><div class="value">30%</div><div class="label">コスト削減</div></div>
</div>

<h2>背景 (Situation)</h2>
<p>AWS CloudSchool最終プロジェクトとしてオークションウェブサイトを設計・構築しました。オークションサービスの特性上、<strong>大規模同時入札トラフィックの処理</strong>と<strong>入札順序の保証</strong>が重要な要件であり、オンプレミス環境からAWSクラウドへのマイグレーションも併せて実施しました。</p>

<h2>役割 (Task)</h2>
<p>副チームリーダー兼DBリーダーとしてプロジェクト全般を管理し、データベースアーキテクチャを主導しました。</p>
<ul>
<li><strong>副チームリーダー</strong>: Jiraベースの全体スケジュール管理およびAWSコストモニタリング</li>
<li><strong>DBリーダー</strong>: データI/O特性分析、DB技術スタック選定、CQRSパターン設計</li>
<li><strong>フロントエンド開発</strong>: ウェブフロントエンド実装</li>
<li><strong>インフラマイグレーション</strong>: オンプレミス→AWSクラウドマイグレーション企画</li>
</ul>

<h2>実施内容 (Action)</h2>
<h3>MSAアーキテクチャ設計</h3>
<ul>
<li>オークションサービスにMSA（Microservice Architecture）を採用</li>
<li><strong>拡張性・弾力性</strong>: 大規模トラフィックを柔軟に処理</li>
<li><strong>障害分離</strong>: オークション以外の部分で障害が発生しても、核心的な入札機能に影響を与えない設計</li>
</ul>

<div class="highlight-box">
<strong>MSAを選択した理由</strong> — オークションサービスは入札トラフィックが集中する特性があり、障害分離を通じて核心的な入札機能の安定性を保証する必要がありました。
</div>

<h3>DB技術スタック選定 — CQRSパターン</h3>
<ul>
<li>データI/O特性分析: オークションサービスは読み取り（商品閲覧）頻度が書き込み（入札）より高い</li>
<li><strong>CQRSパターン選択</strong>: Command（Write）→ Primary DB、Query（Read）→ Read Replica分離</li>
<li>CRUD単一DB対比、読み書き分離によるパフォーマンス最適化</li>
</ul>

<h3>Queue Service — 入札順序保証</h3>
<ul>
<li>オークション入札の正確な順序保証のためQueue Serviceを導入</li>
<li>Kafka、RabbitMQ、Amazon SQSを比較検討 → クラウド環境に適した<strong>SQS FIFO Queue</strong>を採用</li>
</ul>

<h3>オンプレミス → クラウドマイグレーション</h3>
<div class="compare">
<div class="compare-item before"><span class="tag">オンプレミス</span><p>Jira → GitHub → GitHub Actions / Argo CD → Apache Bench → Docker Hub → Kubernetes</p></div>
<div class="compare-item after"><span class="tag">Cloud（AWS）</span><p>Jira → CodeCommit → CodeBuild / Argo CD → Chaos Mesh → ECR → EKS → CloudWatch / Grafana / Loki / Jaeger</p></div>
</div>

<h3>アーキテクチャスペック文書化</h3>
<ul>
<li>実装前に各サービス別スペックを文書化し、設計図ベースで開発を進行</li>
<li>開発者別使用スペックを共有し、コミュニケーション効率化</li>
</ul>

<h3>Multi-AZ高可用性</h3>
<ul>
<li>自動Failoverによるサービス継続性保証</li>
</ul>

<h2>成果 (Result)</h2>
<ul>
<li><strong>AWSハッカソン大賞（1位）</strong></li>
<li><strong>スループット2倍向上</strong> — CQRS読み書き分離</li>
<li><strong>コスト30%削減</strong> — 効率的なリソース活用</li>
<li>AWSコスト管理: 総額$673、日額$10.52、28サービス運用</li>
</ul>

<h2>技術スタック</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Cloud</span><span class="bento-value">AWS (EKS, RDS, Multi-AZ, Read Replica, SQS, ECR, CloudWatch)</span></div>
<div class="bento-item"><span class="bento-label">Pattern</span><span class="bento-value">CQRS, MSA (Microservice Architecture)</span></div>
<div class="bento-item"><span class="bento-label">DevOps</span><span class="bento-value">Argo CD, Chaos Mesh, Grafana, Loki, Jaeger</span></div>
<div class="bento-item"><span class="bento-label">PM</span><span class="bento-value">Jira, Slack, GitHub</span></div>
</div>

<h2>プロジェクト資料</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
<img src="/images/projects/cqrs-aws-architecture.png" alt="AWSインフラアーキテクチャ" style="width:480px;border-radius:12px;" />
<img src="/images/projects/cqrs-queue-service.png" alt="Queue Serviceアーキテクチャ" style="width:400px;border-radius:12px;" />
<img src="/images/projects/cqrs-vs-crud.png" alt="CRUD vs CQRS比較" style="width:400px;border-radius:12px;" />
</div>`,
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
      contentHtml: `
<div class="process-flow">
<div class="process-step"><div class="step-title">아키텍처 설계</div><div class="step-desc">물리/논리 설계</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">서비스 배포</div><div class="step-desc">3-Tier App</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">보안 설정</div><div class="step-desc">NetworkPolicy</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">모니터링</div><div class="step-desc">Resource Quota</div></div>
</div>

<h2>배경 (Situation)</h2>
<p>AWS CloudSchool에서 Kubernetes 기반 서비스 배포 프로젝트를 진행했습니다. 학습과 동시에 프로젝트를 수행하며, 3-Tier Application의 컨테이너 오케스트레이션과 서비스 보안을 구현하는 것이 목표였습니다.</p>

<h2>나의 역할 (Task)</h2>
<p>PM 겸 Architect로서 프로젝트 전반을 이끌었습니다.</p>
<ul>
<li><strong>PM</strong>: Jira 기반 일정 관리, GitHub-Slack 연동으로 실시간 코드 변경 알림 설정</li>
<li><strong>Architect</strong>: 물리적/논리적 아키텍처 설계, Namespace 분리 전략</li>
<li><strong>보안</strong>: NetworkPolicy, Resource Quota 설정</li>
<li><strong>개발</strong>: Frontend + Backend + DB Ingress 연결</li>
</ul>

<h2>수행 내용 (Action)</h2>
<h3>아키텍처 설계 — 반복적 개선</h3>
<ul>
<li>초안에서 최종본까지 팀원 전체가 참여하는 설계 회의를 통해 아키텍처를 발전</li>
<li><strong>물리적 설계</strong>: Worker Node 구성 및 리소스 배분</li>
<li><strong>논리적 설계</strong>: Namespace별 서비스 분리 (frontend-ns, member-ns, apply-ns, job-ns, db-ns)</li>
</ul>

<div class="highlight-box">
<strong>설계도의 변화 과정</strong> — 전체 아키텍처 구성에 모든 팀원이 가장 시간을 많이 투자하고 길게 회의한 부분이었습니다. PT에서 아키텍처 변경 과정도 함께 설명하며 서비스 이해도를 높였습니다.
</div>

<h3>Frontend + Backend + DB 연결</h3>
<ul>
<li>Kubernetes 환경에서 각 서비스 간 API 연동 테스트</li>
<li>Ingress를 통한 3-Tier Application 통합</li>
<li>Frontend, Backend, Database 개발 프로세스와 인프라 결합을 경험</li>
</ul>

<h3>서비스 보안</h3>
<ul>
<li><strong>HTTPS Flow</strong>: OpenSSL 인증서 발급 → MetalLB External IP 할당</li>
<li><strong>NetworkPolicy</strong>: 내부 서비스를 기능별로 구분하고, 내부 통신을 설정 후 테스트</li>
<li><strong>Resource Quota</strong>: Namespace별 CPU/메모리 제한 설정</li>
</ul>

<h3>프로젝트 관리</h3>
<ul>
<li>Jira로 전체 태스크 관리 (주기별포, 백엔드 개발, DB 구축, 프론트엔드, API 연동 등)</li>
<li>GitHub-Slack 연동: 팀원들의 코드 변경 시 실시간 알림</li>
</ul>

<h2>결과 (Result)</h2>
<ul>
<li>Kubernetes 기반 3-Tier 서비스 배포 완료</li>
<li>NetworkPolicy + Resource Quota 보안 설정 완료</li>
<li>기획자로서 서비스에 문제가 생길 경우 다각도로 접근하는 시야 확보</li>
</ul>

<h2>기술 스택</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Orchestration</span><span class="bento-value">Kubernetes, Docker</span></div>
<div class="bento-item"><span class="bento-label">Architecture</span><span class="bento-value">3-Tier (Frontend + Backend + DB), Namespace 분리</span></div>
<div class="bento-item"><span class="bento-label">Security</span><span class="bento-value">NetworkPolicy, Resource Quota, OpenSSL, MetalLB</span></div>
<div class="bento-item"><span class="bento-label">PM</span><span class="bento-value">Jira, Slack, GitHub 연동</span></div>
</div>

<h2>프로젝트 자료</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
<img src="/images/projects/k8s-arch-logical.png" alt="논리적 아키텍처 (최종본)" style="width:480px;border-radius:12px;" />
<img src="/images/projects/k8s-arch-physical.png" alt="물리적 아키텍처 (워커노드 구성)" style="width:480px;border-radius:12px;" />
<img src="/images/projects/k8s-https-flow.png" alt="HTTPS 동작 Flow" style="width:480px;border-radius:12px;" />
</div>`,
    },
    en: {
      title: "Kubernetes Project",
      company: "AWS CloudSchool (Education)",
      period: "2024.04 ~ 2024.05",
      role: "PM / Architect",
      tags: ["Kubernetes", "Docker", "Architecture"],
      education: true,
      contentHtml: `
<div class="process-flow">
<div class="process-step"><div class="step-title">Architecture</div><div class="step-desc">Physical/Logical</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">Deployment</div><div class="step-desc">3-Tier App</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">Security</div><div class="step-desc">NetworkPolicy</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">Monitoring</div><div class="step-desc">Resource Quota</div></div>
</div>

<h2>Situation</h2>
<p>Conducted a Kubernetes-based service deployment project at AWS CloudSchool. The goal was to implement container orchestration for a 3-Tier Application and service security while simultaneously learning.</p>

<h2>Task</h2>
<p>Led the overall project as PM and Architect.</p>
<ul>
<li><strong>PM</strong>: Jira-based schedule management, real-time code change notifications via GitHub-Slack integration</li>
<li><strong>Architect</strong>: Physical/logical architecture design, Namespace separation strategy</li>
<li><strong>Security</strong>: NetworkPolicy, Resource Quota configuration</li>
<li><strong>Development</strong>: Frontend + Backend + DB Ingress connection</li>
</ul>

<h2>Action</h2>
<h3>Architecture Design — Iterative Improvement</h3>
<ul>
<li>Evolved architecture from initial draft to final version through team-wide design meetings</li>
<li><strong>Physical Design</strong>: Worker Node configuration and resource allocation</li>
<li><strong>Logical Design</strong>: Namespace-based service separation (frontend-ns, member-ns, apply-ns, job-ns, db-ns)</li>
</ul>

<div class="highlight-box">
<strong>Architecture Evolution</strong> — The overall architecture design was where the team invested the most time and had the longest discussions. Explaining the architecture changes during the presentation improved understanding of the service.
</div>

<h3>Frontend + Backend + DB Integration</h3>
<ul>
<li>API integration testing between services in Kubernetes environment</li>
<li>3-Tier Application integration through Ingress</li>
<li>Gained experience combining Frontend, Backend, Database development with infrastructure</li>
</ul>

<h3>Service Security</h3>
<ul>
<li><strong>HTTPS Flow</strong>: OpenSSL certificate issuance → MetalLB External IP allocation</li>
<li><strong>NetworkPolicy</strong>: Separated internal services by function, configured and tested internal communication</li>
<li><strong>Resource Quota</strong>: CPU/memory limits per Namespace</li>
</ul>

<h3>Project Management</h3>
<ul>
<li>Jira for all task management (sprints, backend, DB, frontend, API integration, etc.)</li>
<li>GitHub-Slack integration for real-time code change notifications</li>
</ul>

<h2>Result</h2>
<ul>
<li>Completed Kubernetes-based 3-Tier service deployment</li>
<li>NetworkPolicy + Resource Quota security configuration completed</li>
<li>Gained multi-perspective approach to service troubleshooting as a planner</li>
</ul>

<h2>Tech Stack</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Orchestration</span><span class="bento-value">Kubernetes, Docker</span></div>
<div class="bento-item"><span class="bento-label">Architecture</span><span class="bento-value">3-Tier (Frontend + Backend + DB), Namespace Separation</span></div>
<div class="bento-item"><span class="bento-label">Security</span><span class="bento-value">NetworkPolicy, Resource Quota, OpenSSL, MetalLB</span></div>
<div class="bento-item"><span class="bento-label">PM</span><span class="bento-value">Jira, Slack, GitHub Integration</span></div>
</div>

<h2>Project Materials</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
<img src="/images/projects/k8s-arch-logical.png" alt="Logical Architecture (Final)" style="width:480px;border-radius:12px;" />
<img src="/images/projects/k8s-arch-physical.png" alt="Physical Architecture (Worker Nodes)" style="width:480px;border-radius:12px;" />
<img src="/images/projects/k8s-https-flow.png" alt="HTTPS Flow" style="width:480px;border-radius:12px;" />
</div>`,
    },
    ja: {
      title: "Kubernetesプロジェクト",
      company: "AWS CloudSchool (教育)",
      period: "2024.04 ~ 2024.05",
      role: "PM / アーキテクト",
      tags: ["Kubernetes", "Docker", "Architecture"],
      education: true,
      contentHtml: `
<div class="process-flow">
<div class="process-step"><div class="step-title">アーキテクチャ</div><div class="step-desc">物理/論理設計</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">デプロイ</div><div class="step-desc">3-Tier App</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">セキュリティ</div><div class="step-desc">NetworkPolicy</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">モニタリング</div><div class="step-desc">Resource Quota</div></div>
</div>

<h2>背景 (Situation)</h2>
<p>AWS CloudSchoolでKubernetesベースのサービスデプロイプロジェクトを実施しました。学習と同時にプロジェクトを遂行し、3-Tier Applicationのコンテナオーケストレーションとサービスセキュリティの実装が目標でした。</p>

<h2>役割 (Task)</h2>
<p>PM兼アーキテクトとしてプロジェクト全般を率いました。</p>
<ul>
<li><strong>PM</strong>: Jiraベースのスケジュール管理、GitHub-Slack連動でリアルタイムコード変更通知</li>
<li><strong>アーキテクト</strong>: 物理/論理アーキテクチャ設計、Namespace分離戦略</li>
<li><strong>セキュリティ</strong>: NetworkPolicy、Resource Quota設定</li>
<li><strong>開発</strong>: Frontend + Backend + DB Ingress接続</li>
</ul>

<h2>実施内容 (Action)</h2>
<h3>アーキテクチャ設計 — 反復的改善</h3>
<ul>
<li>初案から最終版まで、チーム全員が参加する設計会議を通じてアーキテクチャを発展</li>
<li><strong>物理設計</strong>: Worker Node構成およびリソース配分</li>
<li><strong>論理設計</strong>: Namespace別サービス分離（frontend-ns、member-ns、apply-ns、job-ns、db-ns）</li>
</ul>

<div class="highlight-box">
<strong>設計図の変化過程</strong> — 全体アーキテクチャ構成にすべてのチームメンバーが最も時間を投資し、最も長く会議した部分でした。PTでアーキテクチャ変更過程も説明し、サービスの理解度を高めました。
</div>

<h3>Frontend + Backend + DB統合</h3>
<ul>
<li>Kubernetes環境で各サービス間のAPI連携テスト</li>
<li>Ingressによる3-Tier Application統合</li>
<li>Frontend、Backend、Database開発プロセスとインフラの結合を経験</li>
</ul>

<h3>サービスセキュリティ</h3>
<ul>
<li><strong>HTTPS Flow</strong>: OpenSSL証明書発行 → MetalLB External IP割当</li>
<li><strong>NetworkPolicy</strong>: 内部サービスを機能別に区分し、内部通信を設定後テスト</li>
<li><strong>Resource Quota</strong>: Namespace別CPU/メモリ制限設定</li>
</ul>

<h3>プロジェクト管理</h3>
<ul>
<li>Jiraで全タスク管理（スプリント、バックエンド、DB、フロントエンド、API連携等）</li>
<li>GitHub-Slack連動: チームメンバーのコード変更時リアルタイム通知</li>
</ul>

<h2>成果 (Result)</h2>
<ul>
<li>Kubernetesベース3-Tierサービスデプロイ完了</li>
<li>NetworkPolicy + Resource Quotaセキュリティ設定完了</li>
<li>企画者としてサービスに問題が生じた場合、多角的にアプローチする視野を確保</li>
</ul>

<h2>技術スタック</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Orchestration</span><span class="bento-value">Kubernetes, Docker</span></div>
<div class="bento-item"><span class="bento-label">Architecture</span><span class="bento-value">3-Tier (Frontend + Backend + DB), Namespace分離</span></div>
<div class="bento-item"><span class="bento-label">Security</span><span class="bento-value">NetworkPolicy, Resource Quota, OpenSSL, MetalLB</span></div>
<div class="bento-item"><span class="bento-label">PM</span><span class="bento-value">Jira, Slack, GitHub連動</span></div>
</div>

<h2>プロジェクト資料</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
<img src="/images/projects/k8s-arch-logical.png" alt="論理アーキテクチャ（最終版）" style="width:480px;border-radius:12px;" />
<img src="/images/projects/k8s-arch-physical.png" alt="物理アーキテクチャ（ワーカーノード構成）" style="width:480px;border-radius:12px;" />
<img src="/images/projects/k8s-https-flow.png" alt="HTTPS動作フロー" style="width:480px;border-radius:12px;" />
</div>`,
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
      contentHtml: `
<div class="process-flow">
<div class="process-step"><div class="step-title">데이터 수집</div><div class="step-desc">CSV 공공데이터</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">전처리</div><div class="step-desc">Pandas</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">분석/시각화</div><div class="step-desc">Matplotlib, Folium</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">서비스 제안</div><div class="step-desc">이사 추천 Top 5</div></div>
</div>

<h2>배경 (Situation)</h2>
<p>AWS CloudSchool에서 Python 언어의 이해와 활용을 주제로 데이터 시각화 프로젝트를 진행했습니다. 팀원 모두가 관심 가질만한 주제를 선정하고, 서울시 공공 데이터를 활용하여 실용적인 서비스를 기획하는 것이 목표였습니다.</p>

<h2>나의 역할 (Task)</h2>
<p>Project Manager로서 주제 선정부터 개발, PT까지 전 과정을 이끌었습니다.</p>
<ul>
<li>서비스 아이디어 선정 및 범위 설정</li>
<li>데이터 전처리 및 시각화 구현</li>
<li>최종 PT 발표</li>
</ul>

<h2>수행 내용 (Action)</h2>
<h3>서비스 설계 — "이 YeaH"</h3>

<div class="highlight-box">
<strong>서비스 컨셉</strong> — "이사 가기 전, 눈으로 확인하자." 서울시 전월세 가격, 범죄율, 거리를 종합 분석하여 이사 추천 지역을 제안하는 서비스를 기획했습니다.
</div>

<ul>
<li>서울시 전월세가 평균 확인을 통한 <strong>지역별 추이 확인</strong></li>
<li>범죄율, 횟수 시각화를 통한 <strong>선택 지역 안전성 확인</strong></li>
<li>이동 거리 선호별 <strong>이사 지역 추천 리스트</strong></li>
</ul>

<h3>데이터 파이프라인</h3>
<ul>
<li><strong>데이터 수집</strong>: 서울시 공공 데이터 CSV 파일 수집</li>
<li><strong>전처리</strong>: Pandas를 활용한 법정동, 전월세 구분, 금액 등 파라미터 필터링</li>
<li><strong>시각화</strong>: Folium(지도), Matplotlib(레이더 차트) 활용</li>
<li><strong>추천 로직</strong>: 420개 좌표 중 특정 거리 이하 + 선택 보증금, 임대료 가장 낮은 Top 5 선정</li>
</ul>

<h3>카테고리 분류</h3>
<ul>
<li>분류한 데이터를 기반으로 카테고리별 나누는 방법을 팀 회의를 통해 결정</li>
<li>이사추천에 적합한 비용, 안전, 근무지 거리에 따라 데이터를 구분</li>
<li>이용자 관점에서 서비스를 생각하여 제시</li>
</ul>

<h2>결과 (Result)</h2>
<ul>
<li>서울시 공공 데이터 기반 이사 추천 서비스 구축 완료</li>
<li>데이터 활용 기법 학습 및 데이터를 통한 인사이트 도출 경험</li>
</ul>

<h2>기술 스택</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Language</span><span class="bento-value">Python</span></div>
<div class="bento-item"><span class="bento-label">Data</span><span class="bento-value">Pandas, NumPy</span></div>
<div class="bento-item"><span class="bento-label">Visualization</span><span class="bento-value">Matplotlib, Folium</span></div>
<div class="bento-item"><span class="bento-label">IDE</span><span class="bento-value">PyCharm, Jupyter Notebook</span></div>
</div>

<h2>프로젝트 자료</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
<img src="/images/projects/python-data-viz-map.png" alt="거리별 비교 지도" style="width:480px;border-radius:12px;" />
<img src="/images/projects/python-data-viz-radar.png" alt="종목별 범죄 레이더 차트" style="width:480px;border-radius:12px;" />
</div>`,
    },
    en: {
      title: "Python Data Visualization",
      company: "AWS CloudSchool (Education)",
      period: "2024.03",
      role: "PM",
      tags: ["Python", "Data Analysis", "Visualization"],
      education: true,
      contentHtml: `
<div class="process-flow">
<div class="process-step"><div class="step-title">Data Collection</div><div class="step-desc">CSV Public Data</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">Preprocessing</div><div class="step-desc">Pandas</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">Visualization</div><div class="step-desc">Matplotlib, Folium</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">Recommendation</div><div class="step-desc">Top 5 Areas</div></div>
</div>

<h2>Situation</h2>
<p>Conducted a data visualization project at AWS CloudSchool focused on understanding and utilizing Python. The goal was to select a topic of common interest and build a practical service using Seoul city public data.</p>

<h2>Task</h2>
<p>Led the entire process from topic selection to development and presentation as Project Manager.</p>
<ul>
<li>Service idea selection and scope definition</li>
<li>Data preprocessing and visualization implementation</li>
<li>Final presentation delivery</li>
</ul>

<h2>Action</h2>
<h3>Service Design</h3>

<div class="highlight-box">
<strong>Service Concept</strong> — "Check before you move." Designed a service that recommends moving areas by comprehensively analyzing Seoul's rent prices, crime rates, and commute distances.
</div>

<ul>
<li><strong>Regional rent trend analysis</strong> through Seoul average rent data</li>
<li><strong>Safety assessment</strong> through crime rate and frequency visualization</li>
<li><strong>Moving area recommendation list</strong> based on commute distance preferences</li>
</ul>

<h3>Data Pipeline</h3>
<ul>
<li><strong>Collection</strong>: Seoul public data CSV files</li>
<li><strong>Preprocessing</strong>: Pandas-based filtering by district, rent type, and price</li>
<li><strong>Visualization</strong>: Folium (maps), Matplotlib (radar charts)</li>
<li><strong>Recommendation Logic</strong>: From 420 coordinates, select Top 5 within distance threshold with lowest deposit and rent</li>
</ul>

<h3>Category Classification</h3>
<ul>
<li>Decided categorization method through team meetings based on classified data</li>
<li>Separated data by cost, safety, and commute distance for moving recommendations</li>
<li>Designed from the end-user's perspective</li>
</ul>

<h2>Result</h2>
<ul>
<li>Completed Seoul public data-based moving recommendation service</li>
<li>Gained experience in data utilization techniques and deriving insights from data</li>
</ul>

<h2>Tech Stack</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Language</span><span class="bento-value">Python</span></div>
<div class="bento-item"><span class="bento-label">Data</span><span class="bento-value">Pandas, NumPy</span></div>
<div class="bento-item"><span class="bento-label">Visualization</span><span class="bento-value">Matplotlib, Folium</span></div>
<div class="bento-item"><span class="bento-label">IDE</span><span class="bento-value">PyCharm, Jupyter Notebook</span></div>
</div>

<h2>Project Materials</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
<img src="/images/projects/python-data-viz-map.png" alt="Distance Comparison Map" style="width:480px;border-radius:12px;" />
<img src="/images/projects/python-data-viz-radar.png" alt="Crime Category Radar Chart" style="width:480px;border-radius:12px;" />
</div>`,
    },
    ja: {
      title: "Pythonデータ可視化",
      company: "AWS CloudSchool (教育)",
      period: "2024.03",
      role: "PM",
      tags: ["Python", "Data Analysis", "Visualization"],
      education: true,
      contentHtml: `
<div class="process-flow">
<div class="process-step"><div class="step-title">データ収集</div><div class="step-desc">CSV公共データ</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">前処理</div><div class="step-desc">Pandas</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">分析/可視化</div><div class="step-desc">Matplotlib, Folium</div></div>
<span class="process-arrow">→</span>
<div class="process-step"><div class="step-title">サービス提案</div><div class="step-desc">引越しTop 5</div></div>
</div>

<h2>背景 (Situation)</h2>
<p>AWS CloudSchoolでPython言語の理解と活用をテーマにデータ可視化プロジェクトを実施しました。チームメンバー全員が関心を持てるテーマを選定し、ソウル市公共データを活用して実用的なサービスを企画することが目標でした。</p>

<h2>役割 (Task)</h2>
<p>Project Managerとしてテーマ選定から開発、PTまで全過程を率いました。</p>
<ul>
<li>サービスアイデア選定および範囲設定</li>
<li>データ前処理および可視化実装</li>
<li>最終PT発表</li>
</ul>

<h2>実施内容 (Action)</h2>
<h3>サービス設計</h3>

<div class="highlight-box">
<strong>サービスコンセプト</strong> — 「引越し前に、目で確認しよう。」ソウル市の家賃価格、犯罪率、距離を総合分析して引越し推薦地域を提案するサービスを企画しました。
</div>

<ul>
<li>ソウル市平均家賃確認による<strong>地域別推移確認</strong></li>
<li>犯罪率、回数の可視化による<strong>選択地域安全性確認</strong></li>
<li>移動距離選好別<strong>引越し地域推薦リスト</strong></li>
</ul>

<h3>データパイプライン</h3>
<ul>
<li><strong>データ収集</strong>: ソウル市公共データCSVファイル収集</li>
<li><strong>前処理</strong>: Pandasを活用した法定洞、家賃区分、金額等パラメータフィルタリング</li>
<li><strong>可視化</strong>: Folium（地図）、Matplotlib（レーダーチャート）活用</li>
<li><strong>推薦ロジック</strong>: 420座標から特定距離以下 + 選択保証金、賃料最低Top 5選定</li>
</ul>

<h3>カテゴリ分類</h3>
<ul>
<li>分類したデータを基にカテゴリ別の分け方をチーム会議で決定</li>
<li>引越し推薦に適した費用、安全、勤務地距離に応じてデータを区分</li>
<li>利用者視点でサービスを考えて提示</li>
</ul>

<h2>成果 (Result)</h2>
<ul>
<li>ソウル市公共データベースの引越し推薦サービス構築完了</li>
<li>データ活用技法の学習およびデータからのインサイト導出を経験</li>
</ul>

<h2>技術スタック</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Language</span><span class="bento-value">Python</span></div>
<div class="bento-item"><span class="bento-label">Data</span><span class="bento-value">Pandas, NumPy</span></div>
<div class="bento-item"><span class="bento-label">Visualization</span><span class="bento-value">Matplotlib, Folium</span></div>
<div class="bento-item"><span class="bento-label">IDE</span><span class="bento-value">PyCharm, Jupyter Notebook</span></div>
</div>

<h2>プロジェクト資料</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
<img src="/images/projects/python-data-viz-map.png" alt="距離別比較マップ" style="width:480px;border-radius:12px;" />
<img src="/images/projects/python-data-viz-radar.png" alt="犯罪種目別レーダーチャート" style="width:480px;border-radius:12px;" />
</div>`,
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
      sideProject: true,
      claudeCode: true,
      contentHtml: `<div class="metric-cards">
<div class="metric-card"><div class="value">2주</div><div class="label">기획~배포</div></div>
<div class="metric-card"><div class="value">5</div><div class="label">REST API</div></div>
<div class="metric-card"><div class="value">1인</div><div class="label">개발</div></div>
</div>

<h2>배경 (Situation)</h2>
<p>개인 투자자들이 자신의 투자 성향을 객관적으로 파악하고, 매매 기록을 감정과 함께 관리할 수 있는 서비스가 필요했습니다. AI 기반으로 투자 판단을 돕는 리포트 서비스를 기획했습니다.</p>

<h2>나의 역할 (Task)</h2>
<p>Claude Code를 활용하여 기획부터 배포까지 1인으로 전 과정을 수행했습니다.</p>

<h2>수행 내용 (Action)</h2>
<h3>주요 기능 구현</h3>
<ul>
<li><strong>투자 성향 리포트</strong>: 7문항 설문 → AI 분석 → A~F 등급 판정</li>
<li><strong>트레이딩 저널</strong>: 매매 기록, 감정 태깅 분석</li>
<li><strong>금융 계산기</strong>: 복리 계산, 적금 vs 투자 비교</li>
</ul>

<h3>기술적 구현</h3>
<ul>
<li>REST API 5개 엔드포인트 설계</li>
<li>Custom SVG 차트 구현</li>
<li>Dual Storage (Supabase + LocalStorage) 아키텍처</li>
</ul>

<div class="highlight-box">
<strong>Claude Code 활용</strong> — 기획→설계→개발→배포까지 전 과정에서 Claude Code를 활용하여 1인 2주 만에 서비스를 완성했습니다.
</div>

<h2>결과 (Result)</h2>
<ul>
<li>2주 만에 기획~배포 완료</li>
<li>REST API 5개 엔드포인트, Custom SVG 차트, Dual Storage 구현</li>
</ul>

<h2>기술 스택</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Frontend</span><span class="bento-value">Next.js 16, React 19, TypeScript, Tailwind CSS 4</span></div>
<div class="bento-item"><span class="bento-label">Backend</span><span class="bento-value">Supabase (Auth, Database, Storage)</span></div>
<div class="bento-item"><span class="bento-label">AI</span><span class="bento-value">Claude Code (개발 전 과정 활용)</span></div>
</div>

<h2>스크린샷</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
<img src="/images/projects/dear-ant-home.png" alt="홈 화면" style="width:240px;border-radius:12px;" />
<img src="/images/projects/dear-ant-survey.png" alt="투자 성향 설문" style="width:240px;border-radius:12px;" />
<img src="/images/projects/dear-ant-compound.png" alt="복리 계산기" style="width:240px;border-radius:12px;" />
<img src="/images/projects/dear-ant-tools.png" alt="투자 도구" style="width:240px;border-radius:12px;" />
</div>`,
    },
    en: {
      title: "Dear,ANT — AI Investment Report",
      company: "Personal Project",
      period: "2025.03",
      role: "Solo Developer",
      tags: ["Next.js", "TypeScript", "Supabase", "Claude Code"],
      github: "https://github.com/jeongbaaaan/dear-ant",
      sideProject: true,
      claudeCode: true,
      contentHtml: `<div class="metric-cards">
<div class="metric-card"><div class="value">2wk</div><div class="label">Plan to Deploy</div></div>
<div class="metric-card"><div class="value">5</div><div class="label">REST APIs</div></div>
<div class="metric-card"><div class="value">Solo</div><div class="label">Developer</div></div>
</div>

<h2>Situation</h2>
<p>Individual investors needed a service to objectively assess their investment profiles and manage trade records alongside emotions. Planned an AI-powered report service to assist investment decisions.</p>

<h2>Task</h2>
<p>Executed the entire process from planning to deployment solo using Claude Code.</p>

<h2>Action</h2>
<h3>Core Features</h3>
<ul>
<li><strong>Investment Profile Report</strong>: 7-question survey → AI analysis → A~F grade assessment</li>
<li><strong>Trading Journal</strong>: Trade records, emotion tagging analysis</li>
<li><strong>Financial Calculator</strong>: Compound interest, savings vs investment comparison</li>
</ul>

<h3>Technical Implementation</h3>
<ul>
<li>5 REST API endpoints designed</li>
<li>Custom SVG chart implementation</li>
<li>Dual Storage (Supabase + LocalStorage) architecture</li>
</ul>

<div class="highlight-box">
<strong>Claude Code</strong> — Leveraged Claude Code throughout the entire development cycle (planning → design → development → deployment) to complete the service solo in 2 weeks.
</div>

<h2>Result</h2>
<ul>
<li>Completed planning to deployment in 2 weeks</li>
<li>5 REST API endpoints, Custom SVG charts, Dual Storage implemented</li>
</ul>

<h2>Tech Stack</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Frontend</span><span class="bento-value">Next.js 16, React 19, TypeScript, Tailwind CSS 4</span></div>
<div class="bento-item"><span class="bento-label">Backend</span><span class="bento-value">Supabase (Auth, Database, Storage)</span></div>
<div class="bento-item"><span class="bento-label">AI</span><span class="bento-value">Claude Code (used throughout entire development process)</span></div>
</div>

<h2>Screenshots</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
<img src="/images/projects/dear-ant-home.png" alt="Home" style="width:240px;border-radius:12px;" />
<img src="/images/projects/dear-ant-survey.png" alt="Investment Profile Survey" style="width:240px;border-radius:12px;" />
<img src="/images/projects/dear-ant-compound.png" alt="Compound Interest Calculator" style="width:240px;border-radius:12px;" />
<img src="/images/projects/dear-ant-tools.png" alt="Investment Tools" style="width:240px;border-radius:12px;" />
</div>`,
    },
    ja: {
      title: "Dear,ANT — AI投資判断レポート",
      company: "個人プロジェクト",
      period: "2025.03",
      role: "1人開発",
      tags: ["Next.js", "TypeScript", "Supabase", "Claude Code"],
      github: "https://github.com/jeongbaaaan/dear-ant",
      sideProject: true,
      claudeCode: true,
      contentHtml: `<div class="metric-cards">
<div class="metric-card"><div class="value">2週</div><div class="label">企画〜デプロイ</div></div>
<div class="metric-card"><div class="value">5</div><div class="label">REST API</div></div>
<div class="metric-card"><div class="value">1人</div><div class="label">開発</div></div>
</div>

<h2>背景 (Situation)</h2>
<p>個人投資家が自分の投資性向を客観的に把握し、売買記録を感情と共に管理できるサービスが必要でした。AIベースで投資判断を支援するレポートサービスを企画しました。</p>

<h2>役割 (Task)</h2>
<p>Claude Codeを活用して企画からデプロイまで1人で全過程を遂行しました。</p>

<h2>実施内容 (Action)</h2>
<h3>主要機能実装</h3>
<ul>
<li><strong>投資性向レポート</strong>: 7問アンケート → AI分析 → A〜Fグレード判定</li>
<li><strong>トレーディングジャーナル</strong>: 売買記録、感情タギング分析</li>
<li><strong>金融計算機</strong>: 複利計算、積立 vs 投資比較</li>
</ul>

<h3>技術的実装</h3>
<ul>
<li>REST API 5エンドポイント設計</li>
<li>Custom SVGチャート実装</li>
<li>Dual Storage（Supabase + LocalStorage）アーキテクチャ</li>
</ul>

<div class="highlight-box">
<strong>Claude Code活用</strong> — 企画→設計→開発→デプロイまで全過程でClaude Codeを活用し、1人2週間でサービスを完成しました。
</div>

<h2>成果 (Result)</h2>
<ul>
<li>2週間で企画〜デプロイ完了</li>
<li>REST API 5エンドポイント、Custom SVGチャート、Dual Storage実装</li>
</ul>

<h2>技術スタック</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Frontend</span><span class="bento-value">Next.js 16, React 19, TypeScript, Tailwind CSS 4</span></div>
<div class="bento-item"><span class="bento-label">Backend</span><span class="bento-value">Supabase (Auth, Database, Storage)</span></div>
<div class="bento-item"><span class="bento-label">AI</span><span class="bento-value">Claude Code（開発全過程で活用）</span></div>
</div>

<h2>スクリーンショット</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
<img src="/images/projects/dear-ant-home.png" alt="ホーム画面" style="width:240px;border-radius:12px;" />
<img src="/images/projects/dear-ant-survey.png" alt="投資性向アンケート" style="width:240px;border-radius:12px;" />
<img src="/images/projects/dear-ant-compound.png" alt="複利計算機" style="width:240px;border-radius:12px;" />
<img src="/images/projects/dear-ant-tools.png" alt="投資ツール" style="width:240px;border-radius:12px;" />
</div>`,
    },
  },

  "dalgyeol": {
    ko: {
      title: "달결 — AI 사주·타로",
      company: "개인 프로젝트",
      period: "2026.03 ~",
      role: "풀스택 개발",
      tags: ["Rust", "Swift", "LLM", "iOS"],
      sideProject: true,
      claudeCode: true,
      contentHtml: `<div class="metric-cards">
<div class="metric-card"><div class="value">~1,100</div><div class="label">Rust 엔진 (줄)</div></div>
<div class="metric-card"><div class="value">3</div><div class="label">멀티 LLM</div></div>
<div class="metric-card"><div class="value">AES-256</div><div class="label">암호화</div></div>
</div>

<h2>배경 (Situation)</h2>
<p>사주와 타로를 결합한 AI 운세 상담 iOS 앱입니다. 기존 운세 서비스가 LLM에 전적으로 의존하여 일관성이 떨어지는 문제를 해결하고자, 규칙 기반 사주 엔진을 직접 구현했습니다.</p>

<h2>나의 역할 (Task)</h2>
<p>풀스택 개발자로서 백엔드(Rust), iOS(Swift), AI 통합을 담당합니다.</p>

<h2>수행 내용 (Action)</h2>
<h3>핵심 기술</h3>

<div class="highlight-box">
<strong>순수 Rust 사주 엔진</strong> — 외부 API에 의존하지 않는 ~1,100줄의 규칙 기반 사주 계산 엔진을 직접 구현. LLM의 불확실성 없이 일관된 운세 결과를 보장합니다.
</div>

<ul>
<li>AES-256-GCM 개인정보 암호화</li>
<li>StoreKit 2 인앱결제 + 포인트 경제 시스템</li>
<li>실시간 WebSocket AI 상담 + PII 마스킹</li>
<li>멀티 LLM 프로바이더 (Claude, GPT, Gemini)</li>
</ul>

<h2>결과 (Result)</h2>
<ul>
<li>순수 Rust 사주 엔진 구현 완료</li>
<li>서비스 출시 예정</li>
</ul>

<h2>기술 스택</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Backend</span><span class="bento-value">Rust (Axum, Tokio), PostgreSQL, Fly.io</span></div>
<div class="bento-item"><span class="bento-label">iOS</span><span class="bento-value">SwiftUI (iOS 17+), StoreKit 2, Sign in with Apple</span></div>
<div class="bento-item"><span class="bento-label">AI</span><span class="bento-value">멀티 LLM (Claude, GPT, Gemini)</span></div>
</div>

<h2>스크린샷</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
<img src="/images/projects/dalgyeol-daily-fortune.png" alt="오늘의 운세" style="width:240px;border-radius:12px;" />
<img src="/images/projects/dalgyeol-fortune-detail.png" alt="월운 상세" style="width:240px;border-radius:12px;" />
</div>`,
    },
    en: {
      title: "Dalgyeol — AI Fortune & Tarot",
      company: "Personal Project",
      period: "2026.03 ~",
      role: "Full-stack Developer",
      tags: ["Rust", "Swift", "LLM", "iOS"],
      sideProject: true,
      claudeCode: true,
      contentHtml: `<div class="metric-cards">
<div class="metric-card"><div class="value">~1,100</div><div class="label">Rust Engine (lines)</div></div>
<div class="metric-card"><div class="value">3</div><div class="label">Multi LLM</div></div>
<div class="metric-card"><div class="value">AES-256</div><div class="label">Encryption</div></div>
</div>

<h2>Situation</h2>
<p>An iOS app combining Saju (Korean fortune-telling) and Tarot for AI-powered fortune consultation. Built a rule-based Saju engine to solve the inconsistency problem of existing services that rely entirely on LLMs.</p>

<h2>Task</h2>
<p>Full-stack developer responsible for backend (Rust), iOS (Swift), and AI integration.</p>

<h2>Action</h2>
<h3>Core Technology</h3>

<div class="highlight-box">
<strong>Pure Rust Saju Engine</strong> — Implemented a ~1,100-line rule-based Saju calculation engine with no external API dependency. Guarantees consistent fortune results without LLM uncertainty.
</div>

<ul>
<li>AES-256-GCM personal data encryption</li>
<li>StoreKit 2 in-app purchases + point economy system</li>
<li>Real-time WebSocket AI consultation + PII masking</li>
<li>Multi LLM providers (Claude, GPT, Gemini)</li>
</ul>

<h2>Result</h2>
<ul>
<li>Pure Rust Saju engine implementation completed</li>
<li>Service launch planned</li>
</ul>

<h2>Tech Stack</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Backend</span><span class="bento-value">Rust (Axum, Tokio), PostgreSQL, Fly.io</span></div>
<div class="bento-item"><span class="bento-label">iOS</span><span class="bento-value">SwiftUI (iOS 17+), StoreKit 2, Sign in with Apple</span></div>
<div class="bento-item"><span class="bento-label">AI</span><span class="bento-value">Multi LLM (Claude, GPT, Gemini)</span></div>
</div>

<h2>Screenshots</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
<img src="/images/projects/dalgyeol-daily-fortune.png" alt="Daily Fortune" style="width:240px;border-radius:12px;" />
<img src="/images/projects/dalgyeol-fortune-detail.png" alt="Monthly Fortune Detail" style="width:240px;border-radius:12px;" />
</div>`,
    },
    ja: {
      title: "ダルギョル — AI四柱推命・タロット",
      company: "個人プロジェクト",
      period: "2026.03 ~",
      role: "フルスタック開発",
      tags: ["Rust", "Swift", "LLM", "iOS"],
      sideProject: true,
      claudeCode: true,
      contentHtml: `<div class="metric-cards">
<div class="metric-card"><div class="value">~1,100</div><div class="label">Rustエンジン（行）</div></div>
<div class="metric-card"><div class="value">3</div><div class="label">マルチLLM</div></div>
<div class="metric-card"><div class="value">AES-256</div><div class="label">暗号化</div></div>
</div>

<h2>背景 (Situation)</h2>
<p>四柱推命とタロットを組み合わせたAI運勢相談iOSアプリです。既存の運勢サービスがLLMに全面的に依存して一貫性が低い問題を解決するため、ルールベースの四柱推命エンジンを直接実装しました。</p>

<h2>役割 (Task)</h2>
<p>フルスタック開発者としてバックエンド（Rust）、iOS（Swift）、AI統合を担当しています。</p>

<h2>実施内容 (Action)</h2>
<h3>核心技術</h3>

<div class="highlight-box">
<strong>純粋Rust四柱推命エンジン</strong> — 外部APIに依存しない約1,100行のルールベース四柱推命計算エンジンを直接実装。LLMの不確実性なしに一貫した運勢結果を保証します。
</div>

<ul>
<li>AES-256-GCM個人情報暗号化</li>
<li>StoreKit 2アプリ内課金 + ポイントエコノミーシステム</li>
<li>リアルタイムWebSocket AIカウンセリング + PIIマスキング</li>
<li>マルチLLMプロバイダー（Claude、GPT、Gemini）</li>
</ul>

<h2>成果 (Result)</h2>
<ul>
<li>純粋Rust四柱推命エンジン実装完了</li>
<li>サービスリリース予定</li>
</ul>

<h2>技術スタック</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Backend</span><span class="bento-value">Rust (Axum, Tokio), PostgreSQL, Fly.io</span></div>
<div class="bento-item"><span class="bento-label">iOS</span><span class="bento-value">SwiftUI (iOS 17+), StoreKit 2, Sign in with Apple</span></div>
<div class="bento-item"><span class="bento-label">AI</span><span class="bento-value">マルチLLM (Claude, GPT, Gemini)</span></div>
</div>

<h2>スクリーンショット</h2>
<div style="display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;">
<img src="/images/projects/dalgyeol-daily-fortune.png" alt="今日の運勢" style="width:240px;border-radius:12px;" />
<img src="/images/projects/dalgyeol-fortune-detail.png" alt="月運詳細" style="width:240px;border-radius:12px;" />
</div>`,
    },
  },

  "what-health": {
    ko: {
      title: "What Health",
      company: "개인 프로젝트",
      period: "2026.03 ~",
      role: "풀스택 개발",
      tags: ["Swift", "Rust", "LLM"],
      github: "https://github.com/kangnam7654/what_health",
      sideProject: true,
      claudeCode: true,
      contentHtml: `<h2>배경 (Situation)</h2>
<p>LLM이 운동 코치가 되어 개인 맞춤 운동 스케줄을 관리해주는 앱입니다. 개발 진행 중입니다.</p>

<h2>기술 스택</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Frontend</span><span class="bento-value">Swift (iOS)</span></div>
<div class="bento-item"><span class="bento-label">Backend</span><span class="bento-value">Rust</span></div>
<div class="bento-item"><span class="bento-label">AI</span><span class="bento-value">LLM</span></div>
</div>`,
    },
    en: {
      title: "What Health",
      company: "Personal Project",
      period: "2026.03 ~",
      role: "Full-stack Developer",
      tags: ["Swift", "Rust", "LLM"],
      github: "https://github.com/kangnam7654/what_health",
      sideProject: true,
      claudeCode: true,
      contentHtml: `<h2>Situation</h2>
<p>An app where LLM becomes your fitness coach, managing personalized workout schedules. Currently in development.</p>

<h2>Tech Stack</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Frontend</span><span class="bento-value">Swift (iOS)</span></div>
<div class="bento-item"><span class="bento-label">Backend</span><span class="bento-value">Rust</span></div>
<div class="bento-item"><span class="bento-label">AI</span><span class="bento-value">LLM</span></div>
</div>`,
    },
    ja: {
      title: "What Health",
      company: "個人プロジェクト",
      period: "2026.03 ~",
      role: "フルスタック開発",
      tags: ["Swift", "Rust", "LLM"],
      github: "https://github.com/kangnam7654/what_health",
      sideProject: true,
      claudeCode: true,
      contentHtml: `<h2>背景 (Situation)</h2>
<p>LLMがフィットネスコーチとなり、個人に合わせた運動スケジュールを管理するアプリです。開発進行中です。</p>

<h2>技術スタック</h2>
<div class="bento-grid">
<div class="bento-item"><span class="bento-label">Frontend</span><span class="bento-value">Swift (iOS)</span></div>
<div class="bento-item"><span class="bento-label">Backend</span><span class="bento-value">Rust</span></div>
<div class="bento-item"><span class="bento-label">AI</span><span class="bento-value">LLM</span></div>
</div>`,
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
