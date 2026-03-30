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
      contentHtml: `<h2>개요</h2>
<p>AWS MSP(Managed Service Provider) 기반으로 70개 이상의 고객 계정 인프라를 관리하고 있습니다. EC2, S3, RDS, Lambda, CloudFront 등 다양한 AWS 서비스를 운영하며, 비용 최적화와 아키텍처 설계를 담당합니다.</p>
<h2>주요 성과</h2>
<ul>
<li><strong>QR 이미지 Lambda 리사이징 아키텍처 설계</strong>: S3 업로드 → Lambda 트리거 → 리사이징(3MB→300KB) → CloudFront 배포. 스토리지 비용 60% 절감</li>
<li><strong>Cost Explorer 분석</strong>: RI(Reserved Instance) 전환 권고, S3 Lifecycle 정책 최적화를 통한 비용 절감</li>
<li><strong>신규 고객사 PoC 기획</strong>: AWS Well-Architected Framework 기반 인프라 설계 및 검토</li>
<li>70+ 고객 계정의 AWS 인프라 일상 관리 및 장애 대응</li>
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
      contentHtml: `<h2>Overview</h2>
<p>Managing infrastructure for 70+ customer accounts based on AWS MSP (Managed Service Provider). Operating various AWS services including EC2, S3, RDS, Lambda, and CloudFront, while handling cost optimization and architecture design.</p>
<h2>Key Results</h2>
<ul>
<li><strong>QR Image Lambda Resizing Architecture</strong>: S3 Upload → Lambda Trigger → Resizing (3MB→300KB) → CloudFront Distribution. 60% storage cost reduction</li>
<li><strong>Cost Explorer Analysis</strong>: RI (Reserved Instance) conversion recommendations and S3 Lifecycle policy optimization for cost savings</li>
<li><strong>New Client PoC Planning</strong>: Infrastructure design and review based on AWS Well-Architected Framework</li>
<li>Daily management and incident response for 70+ customer AWS accounts</li>
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
      contentHtml: `<h2>概要</h2>
<p>AWS MSP（Managed Service Provider）ベースで70以上の顧客アカウントインフラを管理しています。EC2、S3、RDS、Lambda、CloudFrontなど様々なAWSサービスを運用し、コスト最適化とアーキテクチャ設計を担当しています。</p>
<h2>主要成果</h2>
<ul>
<li><strong>QR画像Lambdaリサイジングアーキテクチャ設計</strong>: S3アップロード → Lambdaトリガー → リサイジング(3MB→300KB) → CloudFront配信。ストレージコスト60%削減</li>
<li><strong>Cost Explorer分析</strong>: RI（リザーブドインスタンス）転換勧告、S3 Lifecycleポリシー最適化によるコスト削減</li>
<li><strong>新規顧客PoC企画</strong>: AWS Well-Architected Frameworkベースのインフラ設計およびレビュー</li>
<li>70以上の顧客アカウントのAWSインフラ日常管理および障害対応</li>
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
      company: "네이버클라우드",
      period: "2023.11 ~ 2023.12",
      role: "AI PM",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      contentHtml: `<h2>개요</h2>
<p>Clova X AI 챗봇의 프로젝트 매니저로서, 프롬프트 데이터셋 구축과 UX 흐름 설계를 담당했습니다. 기획에서 API 스펙 변환까지의 프로세스를 체계화하여 개발팀과의 협업 효율을 크게 향상시켰습니다.</p>
<h2>주요 성과</h2>
<ul>
<li><strong>프롬프트 데이터셋 구축</strong>: Few-shot 기반 프롬프트 데이터셋 설계 및 구축</li>
<li><strong>UX 흐름 설계</strong>: 사용자 시나리오 작성 및 챗봇 대화 흐름 최적화</li>
<li><strong>기획→API 스펙 변환</strong>: 기획 문서를 개발팀이 바로 사용할 수 있는 API 스펙으로 변환하는 프로세스 수립</li>
<li><strong>수정 사이클 66% 단축</strong>: 기획-개발 간 수정 사이클을 3회에서 1회로 단축</li>
</ul>
<h2>기술 스택</h2>
<ul>
<li><strong>AI</strong>: Clova X, Prompt Engineering</li>
<li><strong>PM</strong>: UX 설계, 사용자 시나리오, API 스펙 문서화</li>
</ul>`,
    },
    en: {
      title: "Clova X AI Chatbot PM",
      company: "Naver Cloud",
      period: "2023.11 ~ 2023.12",
      role: "AI PM",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      contentHtml: `<h2>Overview</h2>
<p>Served as Project Manager for the Clova X AI chatbot, responsible for prompt dataset construction and UX flow design. Systematized the process from planning to API spec conversion, significantly improving collaboration efficiency with the development team.</p>
<h2>Key Results</h2>
<ul>
<li><strong>Prompt Dataset Construction</strong>: Designed and built few-shot based prompt datasets</li>
<li><strong>UX Flow Design</strong>: Created user scenarios and optimized chatbot conversation flows</li>
<li><strong>Planning→API Spec Conversion</strong>: Established a process to convert planning documents into API specs directly usable by the development team</li>
<li><strong>66% Reduction in Revision Cycles</strong>: Reduced planning-development revision cycles from 3 rounds to 1</li>
</ul>
<h2>Tech Stack</h2>
<ul>
<li><strong>AI</strong>: Clova X, Prompt Engineering</li>
<li><strong>PM</strong>: UX Design, User Scenarios, API Spec Documentation</li>
</ul>`,
    },
    ja: {
      title: "Clova X AI チャットボット PM",
      company: "NAVERクラウド",
      period: "2023.11 ~ 2023.12",
      role: "AI PM",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      contentHtml: `<h2>概要</h2>
<p>Clova X AIチャットボットのプロジェクトマネージャーとして、プロンプトデータセット構築とUXフロー設計を担当しました。企画からAPIスペック変換までのプロセスを体系化し、開発チームとのコラボレーション効率を大幅に向上させました。</p>
<h2>主要成果</h2>
<ul>
<li><strong>プロンプトデータセット構築</strong>: Few-shotベースのプロンプトデータセット設計および構築</li>
<li><strong>UXフロー設計</strong>: ユーザーシナリオ作成およびチャットボット会話フロー最適化</li>
<li><strong>企画→APIスペック変換</strong>: 企画文書を開発チームがそのまま使用できるAPIスペックに変換するプロセス確立</li>
<li><strong>修正サイクル66%短縮</strong>: 企画-開発間の修正サイクルを3回から1回に短縮</li>
</ul>
<h2>技術スタック</h2>
<ul>
<li><strong>AI</strong>: Clova X, Prompt Engineering</li>
<li><strong>PM</strong>: UX設計、ユーザーシナリオ、APIスペック文書化</li>
</ul>`,
    },
  },

  "cloud-native-auction": {
    ko: {
      title: "CQRS 경매 웹사이트",
      company: "AWS CloudSchool",
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
<img src="/images/projects/cqrs-auction-msa.png" alt="MSA 아키텍처 & Queue Service" style="width:480px;border-radius:12px;" />
<img src="/images/projects/cqrs-auction-aws.png" alt="AWS 아키텍처 스펙" style="width:480px;border-radius:12px;" />
</div>`,
    },
    en: {
      title: "CQRS Auction Website",
      company: "AWS CloudSchool",
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
<img src="/images/projects/cqrs-auction-msa.png" alt="MSA Architecture & Queue Service" style="width:480px;border-radius:12px;" />
<img src="/images/projects/cqrs-auction-aws.png" alt="AWS Architecture Spec" style="width:480px;border-radius:12px;" />
</div>`,
    },
    ja: {
      title: "CQRSオークションサイト",
      company: "AWS CloudSchool",
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
<img src="/images/projects/cqrs-auction-msa.png" alt="MSAアーキテクチャ & Queue Service" style="width:480px;border-radius:12px;" />
<img src="/images/projects/cqrs-auction-aws.png" alt="AWSアーキテクチャスペック" style="width:480px;border-radius:12px;" />
</div>`,
    },
  },

  "kubernetes-service": {
    ko: {
      title: "Kubernetes 프로젝트",
      company: "AWS CloudSchool",
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
<img src="/images/projects/kubernetes-architecture.png" alt="Kubernetes 아키텍처 설계" style="width:600px;border-radius:12px;" />
</div>`,
    },
    en: {
      title: "Kubernetes Project",
      company: "AWS CloudSchool",
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
<img src="/images/projects/kubernetes-architecture.png" alt="Kubernetes Architecture Design" style="width:600px;border-radius:12px;" />
</div>`,
    },
    ja: {
      title: "Kubernetesプロジェクト",
      company: "AWS CloudSchool",
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
<img src="/images/projects/kubernetes-architecture.png" alt="Kubernetesアーキテクチャ設計" style="width:600px;border-radius:12px;" />
</div>`,
    },
  },

  "python-data-viz": {
    ko: {
      title: "Python 데이터 시각화",
      company: "AWS CloudSchool",
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
<img src="/images/projects/python-data-viz.png" alt="데이터 시각화 결과" style="width:600px;border-radius:12px;" />
</div>`,
    },
    en: {
      title: "Python Data Visualization",
      company: "AWS CloudSchool",
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
<img src="/images/projects/python-data-viz.png" alt="Data Visualization Results" style="width:600px;border-radius:12px;" />
</div>`,
    },
    ja: {
      title: "Pythonデータ可視化",
      company: "AWS CloudSchool",
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
<img src="/images/projects/python-data-viz.png" alt="データ可視化結果" style="width:600px;border-radius:12px;" />
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
