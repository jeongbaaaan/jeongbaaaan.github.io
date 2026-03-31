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
      contentHtml: `<h2>배경 (Situation)</h2>
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
<ul>
<li><strong>기존</strong>: 원본 이미지(~3MB)를 그대로 S3에 저장·CloudFront로 배포</li>
<li><strong>개선</strong>: S3 업로드 → Lambda 트리거 → 자동 리사이징(3MB→300KB) → CloudFront 배포</li>
<li>서버 없이 이벤트 기반으로 동작하는 완전 서버리스 파이프라인 구성</li>
</ul>

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
<ul>
<li><strong>Cloud</strong>: AWS (EC2, S3, RDS, Lambda, CloudFront, Cost Explorer)</li>
<li><strong>Architecture</strong>: Serverless, Well-Architected Framework</li>
<li><strong>Optimization</strong>: RI 전환, S3 Lifecycle, Lambda 리사이징</li>
</ul>`,
    },
    en: {
      title: "Cloud Infra Management & Cost Optimization",
      company: "SmileShark",
      period: "2024.11 ~ Present",
      role: "Account Manager",
      tags: ["AWS", "EC2", "Lambda", "Cost Optimization"],
      contentHtml: `<h2>Situation</h2>
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
<ul>
<li><strong>Before</strong>: Original images (~3MB) stored directly in S3 and served via CloudFront</li>
<li><strong>After</strong>: S3 Upload → Lambda Trigger → Auto-resizing (3MB→300KB) → CloudFront Distribution</li>
<li>Fully serverless, event-driven pipeline with no server management</li>
</ul>

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
<ul>
<li><strong>Cloud</strong>: AWS (EC2, S3, RDS, Lambda, CloudFront, Cost Explorer)</li>
<li><strong>Architecture</strong>: Serverless, Well-Architected Framework</li>
<li><strong>Optimization</strong>: RI Conversion, S3 Lifecycle, Lambda Resizing</li>
</ul>`,
    },
    ja: {
      title: "クラウドインフラ管理＆コスト最適化",
      company: "スマイルシャーク",
      period: "2024.11 ~ 現在",
      role: "アカウントマネージャー",
      tags: ["AWS", "EC2", "Lambda", "Cost Optimization"],
      contentHtml: `<h2>背景 (Situation)</h2>
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
<ul>
<li><strong>改善前</strong>: 元画像（〜3MB）をそのままS3に保存・CloudFrontで配信</li>
<li><strong>改善後</strong>: S3アップロード → Lambdaトリガー → 自動リサイジング（3MB→300KB） → CloudFront配信</li>
<li>サーバー不要のイベント駆動型完全サーバーレスパイプライン構成</li>
</ul>

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
<ul>
<li><strong>Cloud</strong>: AWS (EC2, S3, RDS, Lambda, CloudFront, Cost Explorer)</li>
<li><strong>Architecture</strong>: Serverless, Well-Architected Framework</li>
<li><strong>Optimization</strong>: RI転換、S3 Lifecycle、Lambdaリサイジング</li>
</ul>`,
    },
  },

  "clova-x-chatbot": {
    ko: {
      title: "Clova X AI 챗봇 PM",
      company: "네이버클라우드 (대외활동)",
      period: "2023.11 ~ 2023.12",
      role: "AI PM",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      contentHtml: `<h2>배경 (Situation)</h2>
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

<h3>프롬프트 엔지니어링</h3>
<ul>
<li><strong>Few-shot 기반 프롬프트 데이터셋</strong>: 사용자 답변을 학습하여 성향에 맞는 캐릭터를 생성하고, 상황별 맞춤 대화를 제공하는 프롬프트 설계</li>
<li>다양한 상황 제안(오늘의 추천 상황) 기능을 위한 프롬프트 구성</li>
</ul>

<h3>기획→개발 협업 프로세스</h3>
<ul>
<li>기획 문서를 개발팀이 바로 사용할 수 있는 <strong>API 스펙으로 변환</strong>하는 프로세스 수립</li>
<li>기획 의도와 기술 구현 사이의 갭을 줄여 수정 사이클 단축</li>
</ul>

<h2>결과 (Result)</h2>
<ul>
<li><strong>수정 사이클 66% 단축</strong> — 기획-개발 간 수정 3회→1회 (협업 프로세스 개선 한정)</li>
<li>Few-shot 기반 프롬프트 데이터셋 구축 완료</li>
<li>18문항 성향 분석 → AI 캐릭터 생성 → 맞춤 대화의 전체 UX 흐름 설계 완료</li>
</ul>

<h2>기술 스택</h2>
<ul>
<li><strong>AI</strong>: Clova X, Prompt Engineering, Few-shot Learning</li>
<li><strong>PM</strong>: 페르소나 정의, IA 설계, UX 설계, API 스펙 문서화</li>
<li><strong>Design</strong>: 디자인 시스템 (Typography, Color System, Component)</li>
</ul>`,
    },
    en: {
      title: "Clova X AI Chatbot PM",
      company: "Naver Cloud (Extracurricular)",
      period: "2023.11 ~ 2023.12",
      role: "AI PM",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      contentHtml: `<h2>Situation</h2>
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

<h3>Prompt Engineering</h3>
<ul>
<li><strong>Few-shot Prompt Datasets</strong>: Designed prompts that learn from user responses to generate personality-matched characters and provide situation-specific conversations</li>
<li>Composed prompts for contextual suggestion features (daily recommended situations)</li>
</ul>

<h3>Planning→Development Process</h3>
<ul>
<li>Established a process to convert planning documents into <strong>API specs directly usable by developers</strong></li>
<li>Reduced the gap between planning intent and technical implementation, shortening revision cycles</li>
</ul>

<h2>Result</h2>
<ul>
<li><strong>66% reduction in revision cycles</strong> — planning-development revisions from 3 rounds to 1 (collaboration process improvement)</li>
<li>Completed few-shot based prompt dataset construction</li>
<li>Designed complete UX flow: 18-question personality analysis → AI character generation → personalized conversation</li>
</ul>

<h2>Tech Stack</h2>
<ul>
<li><strong>AI</strong>: Clova X, Prompt Engineering, Few-shot Learning</li>
<li><strong>PM</strong>: Persona Definition, IA Design, UX Design, API Spec Documentation</li>
<li><strong>Design</strong>: Design System (Typography, Color System, Component)</li>
</ul>`,
    },
    ja: {
      title: "Clova X AI チャットボット PM",
      company: "NAVERクラウド (課外活動)",
      period: "2023.11 ~ 2023.12",
      role: "AI PM",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      contentHtml: `<h2>背景 (Situation)</h2>
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

<h3>プロンプトエンジニアリング</h3>
<ul>
<li><strong>Few-shotベースプロンプトデータセット</strong>: ユーザーの回答を学習して性向に合うキャラクターを生成し、状況別カスタマイズ会話を提供するプロンプト設計</li>
<li>多様な状況提案（今日のおすすめ状況）機能のためのプロンプト構成</li>
</ul>

<h3>企画→開発コラボレーションプロセス</h3>
<ul>
<li>企画文書を開発チームがそのまま使用できる<strong>APIスペックに変換</strong>するプロセス確立</li>
<li>企画意図と技術実装の間のギャップを縮め、修正サイクルを短縮</li>
</ul>

<h2>成果 (Result)</h2>
<ul>
<li><strong>修正サイクル66%短縮</strong> — 企画-開発間の修正3回→1回（コラボレーションプロセス改善に限定）</li>
<li>Few-shotベースプロンプトデータセット構築完了</li>
<li>18問の性向分析→AIキャラクター生成→カスタマイズ会話の全体UXフロー設計完了</li>
</ul>

<h2>技術スタック</h2>
<ul>
<li><strong>AI</strong>: Clova X, Prompt Engineering, Few-shot Learning</li>
<li><strong>PM</strong>: ペルソナ定義、IA設計、UX設計、APIスペック文書化</li>
<li><strong>Design</strong>: デザインシステム（Typography、Color System、Component）</li>
</ul>`,
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
      contentHtml: `<h2>개요</h2>
<p>CQRS(Command Query Responsibility Segregation) 패턴을 적용한 경매 웹사이트를 설계·구축했습니다. Command(Write)는 Primary DB로, Query(Read)는 Read Replica로 분리하여 처리량을 2배 향상시키고, Multi-AZ 고가용성 아키텍처로 자동 Failover를 구현했습니다.</p>
<h2>주요 성과</h2>
<ul>
<li><strong>CQRS 패턴 설계</strong>: Command(Write) → Primary DB, Query(Read) → Read Replica 분리</li>
<li><strong>Multi-AZ 고가용성</strong>: 자동 Failover를 통한 서비스 연속성 보장</li>
<li><strong>처리량 2배 향상</strong>: 읽기/쓰기 분리를 통한 성능 최적화</li>
<li><strong>비용 30% 절감</strong>: 효율적인 리소스 활용</li>
<li><strong>AWS 해커톤 대상(1위)</strong></li>
</ul>
<h2>팀 역할</h2>
<ul>
<li>부팀장, DB 리더, Frontend 개발</li>
</ul>
<h2>기술 스택</h2>
<ul>
<li><strong>Cloud</strong>: AWS (RDS, Multi-AZ, Read Replica)</li>
<li><strong>Pattern</strong>: CQRS (Command Query Responsibility Segregation)</li>
<li><strong>Frontend</strong>: 웹 프론트엔드 개발</li>
</ul>
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
      contentHtml: `<h2>Overview</h2>
<p>Designed and built an auction website applying the CQRS (Command Query Responsibility Segregation) pattern. Separated Command (Write) to Primary DB and Query (Read) to Read Replica, achieving 2x throughput improvement, and implemented automatic Failover with Multi-AZ high availability architecture.</p>
<h2>Key Results</h2>
<ul>
<li><strong>CQRS Pattern Design</strong>: Command (Write) → Primary DB, Query (Read) → Read Replica separation</li>
<li><strong>Multi-AZ High Availability</strong>: Service continuity through automatic Failover</li>
<li><strong>2x Throughput Improvement</strong>: Performance optimization through read/write separation</li>
<li><strong>30% Cost Reduction</strong>: Efficient resource utilization</li>
<li><strong>AWS Hackathon Grand Prize (1st Place)</strong></li>
</ul>
<h2>Team Role</h2>
<ul>
<li>Vice Team Lead, DB Lead, Frontend Development</li>
</ul>
<h2>Tech Stack</h2>
<ul>
<li><strong>Cloud</strong>: AWS (RDS, Multi-AZ, Read Replica)</li>
<li><strong>Pattern</strong>: CQRS (Command Query Responsibility Segregation)</li>
<li><strong>Frontend</strong>: Web frontend development</li>
</ul>
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
      contentHtml: `<h2>概要</h2>
<p>CQRS（Command Query Responsibility Segregation）パターンを適用したオークションウェブサイトを設計・構築しました。Command（Write）はPrimary DBへ、Query（Read）はRead Replicaへ分離し、スループットを2倍向上させ、Multi-AZ高可用性アーキテクチャで自動Failoverを実現しました。</p>
<h2>主要成果</h2>
<ul>
<li><strong>CQRSパターン設計</strong>: Command（Write）→ Primary DB、Query（Read）→ Read Replica分離</li>
<li><strong>Multi-AZ高可用性</strong>: 自動Failoverによるサービス継続性保証</li>
<li><strong>スループット2倍向上</strong>: 読み書き分離によるパフォーマンス最適化</li>
<li><strong>コスト30%削減</strong>: 効率的なリソース活用</li>
<li><strong>AWSハッカソン大賞（1位）</strong></li>
</ul>
<h2>チーム役割</h2>
<ul>
<li>副チームリーダー、DBリーダー、フロントエンド開発</li>
</ul>
<h2>技術スタック</h2>
<ul>
<li><strong>Cloud</strong>: AWS (RDS, Multi-AZ, Read Replica)</li>
<li><strong>Pattern</strong>: CQRS (Command Query Responsibility Segregation)</li>
<li><strong>Frontend</strong>: ウェブフロントエンド開発</li>
</ul>
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
      contentHtml: `<h2>개요</h2>
<p>Kubernetes 기반 서비스 배포 프로젝트를 PM 및 Architect로서 이끌었습니다. 3-Tier Application(Frontend + Backend + DB) 아키텍처를 설계하고, NetworkPolicy 보안 설정과 물리/논리적 아키텍처 설계를 담당했습니다.</p>
<h2>주요 성과</h2>
<ul>
<li><strong>Kubernetes 기반 서비스 배포</strong>: 컨테이너 오케스트레이션을 통한 안정적인 서비스 운영</li>
<li><strong>NetworkPolicy 보안 설정</strong>: Pod 간 네트워크 트래픽 제어를 통한 보안 강화</li>
<li><strong>물리/논리적 아키텍처 설계</strong>: 3-Tier Application 아키텍처 설계</li>
<li><strong>PM 역할</strong>: Jira, Slack을 활용한 프로젝트 일정 관리</li>
</ul>
<h2>기술 스택</h2>
<ul>
<li><strong>Orchestration</strong>: Kubernetes, Docker</li>
<li><strong>Architecture</strong>: 3-Tier (Frontend + Backend + DB)</li>
<li><strong>Security</strong>: NetworkPolicy</li>
<li><strong>PM Tools</strong>: Jira, Slack</li>
</ul>
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
      contentHtml: `<h2>Overview</h2>
<p>Led a Kubernetes-based service deployment project as PM and Architect. Designed a 3-Tier Application (Frontend + Backend + DB) architecture, and was responsible for NetworkPolicy security configuration and physical/logical architecture design.</p>
<h2>Key Results</h2>
<ul>
<li><strong>Kubernetes-based Service Deployment</strong>: Stable service operation through container orchestration</li>
<li><strong>NetworkPolicy Security</strong>: Enhanced security through pod-to-pod network traffic control</li>
<li><strong>Physical/Logical Architecture Design</strong>: 3-Tier Application architecture design</li>
<li><strong>PM Role</strong>: Project schedule management using Jira and Slack</li>
</ul>
<h2>Tech Stack</h2>
<ul>
<li><strong>Orchestration</strong>: Kubernetes, Docker</li>
<li><strong>Architecture</strong>: 3-Tier (Frontend + Backend + DB)</li>
<li><strong>Security</strong>: NetworkPolicy</li>
<li><strong>PM Tools</strong>: Jira, Slack</li>
</ul>
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
      contentHtml: `<h2>概要</h2>
<p>KubernetesベースのサービスデプロイプロジェクトをPMおよびアーキテクトとして率いました。3-Tier Application（Frontend + Backend + DB）アーキテクチャを設計し、NetworkPolicyセキュリティ設定と物理/論理的アーキテクチャ設計を担当しました。</p>
<h2>主要成果</h2>
<ul>
<li><strong>Kubernetesベースのサービスデプロイ</strong>: コンテナオーケストレーションによる安定的なサービス運用</li>
<li><strong>NetworkPolicyセキュリティ設定</strong>: Pod間ネットワークトラフィック制御によるセキュリティ強化</li>
<li><strong>物理/論理的アーキテクチャ設計</strong>: 3-Tier Applicationアーキテクチャ設計</li>
<li><strong>PM役割</strong>: Jira、Slackを活用したプロジェクトスケジュール管理</li>
</ul>
<h2>技術スタック</h2>
<ul>
<li><strong>Orchestration</strong>: Kubernetes, Docker</li>
<li><strong>Architecture</strong>: 3-Tier (Frontend + Backend + DB)</li>
<li><strong>Security</strong>: NetworkPolicy</li>
<li><strong>PM Tools</strong>: Jira, Slack</li>
</ul>
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
      contentHtml: `<h2>개요</h2>
<p>서울시 공공 데이터를 활용하여 데이터 분석 및 시각화 프로젝트를 수행했습니다. Python 기반 데이터 전처리부터 시각화까지의 전 과정을 PM으로서 이끌었습니다.</p>
<h2>주요 성과</h2>
<ul>
<li><strong>서울시 공공 데이터 활용</strong>: 공개 데이터를 수집·정제하여 분석에 활용</li>
<li><strong>Python 기반 데이터 전처리 및 시각화</strong>: Pandas, Matplotlib 등을 활용한 데이터 파이프라인 구축</li>
<li><strong>이사 추천 서비스</strong>: 비용, 안전, 근무지 거리 기준으로 최적의 이사 지역 추천</li>
</ul>
<h2>기술 스택</h2>
<ul>
<li><strong>Language</strong>: Python</li>
<li><strong>Data</strong>: Pandas, NumPy</li>
<li><strong>Visualization</strong>: Matplotlib, Seaborn</li>
</ul>
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
      contentHtml: `<h2>Overview</h2>
<p>Conducted a data analysis and visualization project using Seoul city public data. Led the entire process from Python-based data preprocessing to visualization as PM.</p>
<h2>Key Results</h2>
<ul>
<li><strong>Seoul Public Data Utilization</strong>: Collected and cleaned public data for analysis</li>
<li><strong>Python-based Data Preprocessing & Visualization</strong>: Built data pipeline using Pandas, Matplotlib, etc.</li>
<li><strong>Moving Recommendation Service</strong>: Recommended optimal moving areas based on cost, safety, and commute distance</li>
</ul>
<h2>Tech Stack</h2>
<ul>
<li><strong>Language</strong>: Python</li>
<li><strong>Data</strong>: Pandas, NumPy</li>
<li><strong>Visualization</strong>: Matplotlib, Seaborn</li>
</ul>
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
      contentHtml: `<h2>概要</h2>
<p>ソウル市公共データを活用してデータ分析および可視化プロジェクトを遂行しました。Pythonベースのデータ前処理から可視化までの全過程をPMとして率いました。</p>
<h2>主要成果</h2>
<ul>
<li><strong>ソウル市公共データ活用</strong>: 公開データを収集・整備して分析に活用</li>
<li><strong>Pythonベースのデータ前処理および可視化</strong>: Pandas、Matplotlibなどを活用したデータパイプライン構築</li>
<li><strong>引越し推薦サービス</strong>: コスト、安全、勤務地距離基準で最適な引越し地域を推薦</li>
</ul>
<h2>技術スタック</h2>
<ul>
<li><strong>Language</strong>: Python</li>
<li><strong>Data</strong>: Pandas, NumPy</li>
<li><strong>Visualization</strong>: Matplotlib, Seaborn</li>
</ul>
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
      contentHtml: `<h2>개요</h2>
<p>AI 기반 투자 판단 리포트 서비스입니다. Claude Code를 활용하여 기획부터 설계, 개발, 배포까지 1인으로 2주 만에 완성했습니다.</p>
<h2>주요 기능</h2>
<ul>
<li><strong>투자 성향 리포트</strong>: 7문항 설문 → AI 분석 → A~F 등급 판정</li>
<li><strong>트레이딩 저널</strong>: 매매 기록, 감정 태깅 분석</li>
<li><strong>금융 계산기</strong>: 복리 계산, 적금 vs 투자 비교</li>
</ul>
<h2>기술적 특징</h2>
<ul>
<li>REST API 5개 엔드포인트 설계</li>
<li>Custom SVG 차트 구현</li>
<li>Dual Storage (Supabase + LocalStorage) 아키텍처</li>
<li>Claude Code로 기획→설계→개발→배포까지 1인 2주 완성</li>
</ul>
<h2>기술 스택</h2>
<ul>
<li><strong>Frontend</strong>: Next.js 16, React 19, TypeScript, Tailwind CSS 4</li>
<li><strong>Backend</strong>: Supabase (Auth, Database, Storage)</li>
<li><strong>AI</strong>: Claude Code (개발 전 과정 활용)</li>
</ul>
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
      contentHtml: `<h2>Overview</h2>
<p>An AI-powered investment analysis report service. Completed solo in 2 weeks from planning to deployment using Claude Code.</p>
<h2>Key Features</h2>
<ul>
<li><strong>Investment Profile Report</strong>: 7-question survey → AI analysis → A~F grade assessment</li>
<li><strong>Trading Journal</strong>: Trade records, emotion tagging analysis</li>
<li><strong>Financial Calculator</strong>: Compound interest, savings vs investment comparison</li>
</ul>
<h2>Technical Highlights</h2>
<ul>
<li>5 REST API endpoints designed</li>
<li>Custom SVG chart implementation</li>
<li>Dual Storage (Supabase + LocalStorage) architecture</li>
<li>Full development cycle (planning→design→development→deployment) completed solo in 2 weeks with Claude Code</li>
</ul>
<h2>Tech Stack</h2>
<ul>
<li><strong>Frontend</strong>: Next.js 16, React 19, TypeScript, Tailwind CSS 4</li>
<li><strong>Backend</strong>: Supabase (Auth, Database, Storage)</li>
<li><strong>AI</strong>: Claude Code (used throughout entire development process)</li>
</ul>
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
      contentHtml: `<h2>概要</h2>
<p>AIベースの投資判断レポートサービスです。Claude Codeを活用して企画から設計、開発、デプロイまで1人で2週間で完成しました。</p>
<h2>主要機能</h2>
<ul>
<li><strong>投資性向レポート</strong>: 7問のアンケート → AI分析 → A〜Fグレード判定</li>
<li><strong>トレーディングジャーナル</strong>: 売買記録、感情タギング分析</li>
<li><strong>金融計算機</strong>: 複利計算、積立 vs 投資比較</li>
</ul>
<h2>技術的特徴</h2>
<ul>
<li>REST API 5エンドポイント設計</li>
<li>Custom SVGチャート実装</li>
<li>Dual Storage（Supabase + LocalStorage）アーキテクチャ</li>
<li>Claude Codeで企画→設計→開発→デプロイまで1人2週間で完成</li>
</ul>
<h2>技術スタック</h2>
<ul>
<li><strong>Frontend</strong>: Next.js 16, React 19, TypeScript, Tailwind CSS 4</li>
<li><strong>Backend</strong>: Supabase (Auth, Database, Storage)</li>
<li><strong>AI</strong>: Claude Code（開発全過程で活用）</li>
</ul>
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
      contentHtml: `<h2>개요</h2>
<p>사주와 타로를 결합한 AI 운세 상담 iOS 앱입니다. 규칙 기반 사주 엔진(순수 Rust, LLM 비의존)으로 운세를 생성하고, 멀티 LLM 프로바이더를 활용한 AI 상담사가 실시간 채팅 상담을 제공합니다. 서비스 출시 예정입니다.</p>
<h2>주요 구현</h2>
<ul><li>순수 Rust 사주 계산 엔진 (외부 API 의존 없음, ~1,100줄)</li><li>AES-256-GCM 개인정보 암호화</li><li>StoreKit 2 인앱결제 + 포인트 경제 시스템</li><li>실시간 WebSocket AI 상담 + PII 마스킹</li></ul>
<h2>기술 스택</h2>
<ul><li><strong>Backend</strong>: Rust (Axum, Tokio), PostgreSQL, Fly.io</li><li><strong>iOS</strong>: SwiftUI (iOS 17+), StoreKit 2, Sign in with Apple</li><li><strong>AI</strong>: 멀티 LLM (Claude, GPT, Gemini)</li></ul>
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
      contentHtml: `<h2>Overview</h2>
<p>An iOS app combining Saju (Korean fortune-telling) and Tarot for AI-powered fortune consultation. Generates fortunes using a rule-based Saju engine (pure Rust, no LLM dependency), and an AI counselor powered by multiple LLM providers offers real-time chat consultations. Launch planned.</p>
<h2>Key Implementation</h2>
<ul><li>Pure Rust Saju calculation engine (no external API dependency, ~1,100 lines)</li><li>AES-256-GCM personal data encryption</li><li>StoreKit 2 in-app purchases + point economy system</li><li>Real-time WebSocket AI consultation + PII masking</li></ul>
<h2>Tech Stack</h2>
<ul><li><strong>Backend</strong>: Rust (Axum, Tokio), PostgreSQL, Fly.io</li><li><strong>iOS</strong>: SwiftUI (iOS 17+), StoreKit 2, Sign in with Apple</li><li><strong>AI</strong>: Multi LLM (Claude, GPT, Gemini)</li></ul>
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
      contentHtml: `<h2>概要</h2>
<p>四柱推命とタロットを組み合わせたAI運勢相談iOSアプリです。ルールベースの四柱推命エンジン（純粋Rust、LLM非依存）で運勢を生成し、マルチLLMプロバイダーを活用したAIカウンセラーがリアルタイムチャット相談を提供します。サービスリリース予定です。</p>
<h2>主要実装</h2>
<ul><li>純粋Rust四柱推命計算エンジン（外部API依存なし、約1,100行）</li><li>AES-256-GCM個人情報暗号化</li><li>StoreKit 2アプリ内課金 + ポイントエコノミーシステム</li><li>リアルタイムWebSocket AIカウンセリング + PIIマスキング</li></ul>
<h2>技術スタック</h2>
<ul><li><strong>Backend</strong>: Rust (Axum, Tokio), PostgreSQL, Fly.io</li><li><strong>iOS</strong>: SwiftUI (iOS 17+), StoreKit 2, Sign in with Apple</li><li><strong>AI</strong>: マルチLLM (Claude, GPT, Gemini)</li></ul>
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
      contentHtml: `<h2>개요</h2>
<p>LLM이 운동 코치가 되어 개인 맞춤 운동 스케줄을 관리해주는 앱입니다.</p>
<h2>기술 스택</h2>
<ul><li><strong>Frontend</strong>: Swift (iOS)</li><li><strong>Backend</strong>: Rust</li><li><strong>AI</strong>: LLM</li></ul>`,
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
      contentHtml: `<h2>Overview</h2>
<p>An app where an LLM acts as a fitness coach, managing personalized workout schedules.</p>
<h2>Tech Stack</h2>
<ul><li><strong>Frontend</strong>: Swift (iOS)</li><li><strong>Backend</strong>: Rust</li><li><strong>AI</strong>: LLM</li></ul>`,
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
      contentHtml: `<h2>概要</h2>
<p>LLMがフィットネスコーチとなり、パーソナライズされたトレーニングスケジュールを管理するアプリです。</p>
<h2>技術スタック</h2>
<ul><li><strong>Frontend</strong>: Swift (iOS)</li><li><strong>Backend</strong>: Rust</li><li><strong>AI</strong>: LLM</li></ul>`,
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
