import { useState } from "react";
import { motion } from "framer-motion";
import { ui } from "../../i18n/ui";
import type { Locale } from "../../i18n/utils";

interface Project {
  title: string;
  description: string;
  tags: string[];
  company: string;
  href: string;
  github?: string;
  demo?: string;
  sideProject?: boolean;
  claudeCode?: boolean;
  education?: boolean;
  thumbnail?: string;
}

function localePath(path: string, locale: Locale): string {
  const cleanPath = path.replace(/^\/(en|ja)\//, "/").replace(/^\/(en|ja)$/, "/");
  if (locale === "ko") return cleanPath;
  if (cleanPath === "/") return `/${locale}/`;
  return `/${locale}${cleanPath}`;
}

const projectsData: Record<Locale, Project[]> = {
  ko: [
    {
      title: "클라우드 인프라 관리 & 비용 최적화",
      description:
        "70+ 고객 AWS 계정을 운영하며 비용·장애·아키텍처 이슈를 진단하고, QR 이미지 파이프라인 개선으로 스토리지 60% 절감",
      tags: ["AWS", "EC2", "Lambda", "Cost Optimization"],
      company: "스마일샤크",
      href: "/projects/cloud-infra-management",
    },
    {
      title: "Clova X AI 챗봇 PM",
      description:
        "AI 챗봇 아이디어를 프롬프트·IA·API 스펙으로 쪼개 개발팀 수정 사이클을 3회에서 1회로 줄인 PM 경험",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      company: "네이버클라우드 (대외활동)",
      href: "/projects/clova-x-chatbot",
    },
    {
      title: "CQRS 경매 웹사이트",
      description:
        "동시 입찰과 순서 보장이 핵심인 경매 도메인에 CQRS·SQS FIFO·Multi-AZ 구조를 적용해 처리량 2배/비용 30% 개선",
      tags: ["AWS", "CQRS", "RDS", "Multi-AZ"],
      company: "AWS CloudSchool (교육)",
      href: "/projects/cloud-native-auction",
      education: true,
    },
    {
      title: "Kubernetes 프로젝트",
      description:
        "3-Tier 앱을 Kubernetes에 배포하며 Namespace·NetworkPolicy·Ingress 흐름을 설계한 PM/Architect 프로젝트",
      tags: ["Kubernetes", "Docker", "Architecture"],
      company: "AWS CloudSchool (교육)",
      href: "/projects/kubernetes-service",
      education: true,
    },
    {
      title: "Python 데이터 시각화",
      description:
        "서울시 공공데이터를 주거 의사결정 문제로 바꾸고 지도·레이더 차트로 후보지를 비교한 데이터 서비스",
      tags: ["Python", "Data Analysis", "Visualization"],
      company: "AWS CloudSchool (교육)",
      href: "/projects/python-data-viz",
      education: true,
    },
    {
      title: "Dear,ANT — AI 투자 판단 리포트",
      description:
        "투자 성향 진단, 매매 저널, 금융 계산기를 2주 안에 구현하며 개인 투자자의 반복 의사결정을 제품화",
      tags: ["Next.js", "TypeScript", "Supabase", "Claude Code"],
      company: "개인 프로젝트",
      href: "/projects/dear-ant",
      github: "https://github.com/jeongbaaaan/dear-ant",
      demo: "https://dear-ant.vercel.app/",
      sideProject: true,
      claudeCode: true,
    },
    {
      title: "달결 — 무료 사주·타로 & AI 상담",
      description:
        "무료 사주·타로 유입에서 AI 상담으로 이어지는 서비스 구조를 설계하고 Next.js/Rust 기반으로 구현",
      tags: ["Next.js", "Rust", "Axum", "WebSocket", "Toss"],
      company: "개인 프로젝트",
      href: "/projects/dalgyeol",
      demo: "https://dalgyeol.com",
      sideProject: true,
      claudeCode: true,
      thumbnail: "/images/projects/dalgyeol-web-home.jpg",
    },
    {
      title: "조미료상 테스트",
      description:
        "사진 업로드부터 브라우저 추론·결과 공유까지 이어지는 가벼운 바이럴 테스트를 빠르게 배포한 실험",
      tags: ["Web", "Browser ML", "Cloudflare Pages"],
      company: "개인 프로젝트",
      href: "/projects/sauce-face-test",
      demo: "https://sauce-face.pages.dev",
      sideProject: true,
      thumbnail: "/images/projects/sauce-face-home.jpg",
    },
    {
      title: "Calendar Briefing Agent",
      description:
        "일정 데이터를 충돌·버퍼·페르소나 신호로 구조화하고 데일리 브리핑 액션까지 생성한 Agent MVP",
      tags: ["Python", "Streamlit", "Agent Workflow"],
      company: "개인 프로젝트",
      href: "/projects/calendar-briefing-agent",
      github: "https://github.com/jeongbaaaan/calendar-briefing-agent",
      sideProject: true,
    },
  ],
  en: [
    {
      title: "Cloud Infra Management & Cost Optimization",
      description:
        "Operated 70+ AWS customer accounts, diagnosed cost and reliability issues, and reduced QR image storage usage by 60%",
      tags: ["AWS", "EC2", "Lambda", "Cost Optimization"],
      company: "SmileShark",
      href: "/projects/cloud-infra-management",
    },
    {
      title: "Clova X AI Chatbot PM",
      description:
        "Translated an AI chatbot concept into prompts, IA, and API specs, cutting planning-dev revision cycles from 3 to 1",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      company: "Naver Cloud (Extracurricular)",
      href: "/projects/clova-x-chatbot",
    },
    {
      title: "CQRS Auction Website",
      description:
        "Applied CQRS, SQS FIFO, and Multi-AZ architecture to a bid-order-sensitive auction domain, improving throughput 2x and cost 30%",
      tags: ["AWS", "CQRS", "RDS", "Multi-AZ"],
      company: "AWS CloudSchool (Education)",
      href: "/projects/cloud-native-auction",
      education: true,
    },
    {
      title: "Kubernetes Project",
      description:
        "Designed the Namespace, NetworkPolicy, and Ingress flow for a Kubernetes-hosted 3-tier service as PM/Architect",
      tags: ["Kubernetes", "Docker", "Architecture"],
      company: "AWS CloudSchool (Education)",
      href: "/projects/kubernetes-service",
      education: true,
    },
    {
      title: "Python Data Visualization",
      description:
        "Turned Seoul public datasets into a housing decision tool with map and radar-chart comparisons",
      tags: ["Python", "Data Analysis", "Visualization"],
      company: "AWS CloudSchool (Education)",
      href: "/projects/python-data-viz",
      education: true,
    },
    {
      title: "Dear,ANT — AI Investment Report",
      description:
        "Productized recurring investor decisions with profile diagnosis, trading journal, and calculators built solo in 2 weeks",
      tags: ["Next.js", "TypeScript", "Supabase", "Claude Code"],
      company: "Personal Project",
      href: "/projects/dear-ant",
      github: "https://github.com/jeongbaaaan/dear-ant",
      demo: "https://dear-ant.vercel.app/",
      sideProject: true,
      claudeCode: true,
    },
    {
      title: "Dalgyeol — Free Saju, Tarot & AI Consultation",
      description:
        "Designed and built a Next.js/Rust service that turns free Saju and tarot entrypoints into AI consultation journeys",
      tags: ["Next.js", "Rust", "Axum", "WebSocket", "Toss"],
      company: "Personal Project",
      href: "/projects/dalgyeol",
      demo: "https://dalgyeol.com",
      sideProject: true,
      claudeCode: true,
      thumbnail: "/images/projects/dalgyeol-web-home.jpg",
    },
    {
      title: "Sauce Face Test",
      description:
        "A lightweight viral test shipped quickly from photo upload to browser-side prediction and shareable results",
      tags: ["Web", "Browser ML", "Cloudflare Pages"],
      company: "Personal Project",
      href: "/projects/sauce-face-test",
      demo: "https://sauce-face.pages.dev",
      sideProject: true,
      thumbnail: "/images/projects/sauce-face-home.jpg",
    },
    {
      title: "Calendar Briefing Agent",
      description:
        "An Agent MVP that structures calendar data into conflicts, buffer risks, persona signals, and daily briefing actions",
      tags: ["Python", "Streamlit", "Agent Workflow"],
      company: "Personal Project",
      href: "/projects/calendar-briefing-agent",
      github: "https://github.com/jeongbaaaan/calendar-briefing-agent",
      sideProject: true,
    },
  ],
  ja: [
    {
      title: "クラウドインフラ管理＆コスト最適化",
      description:
        "70以上のAWS顧客アカウントを運用し、コスト・障害・設計課題を診断。QR画像パイプライン改善でストレージ60%削減",
      tags: ["AWS", "EC2", "Lambda", "Cost Optimization"],
      company: "スマイルシャーク",
      href: "/projects/cloud-infra-management",
    },
    {
      title: "Clova X AI チャットボット PM",
      description:
        "AIチャットボット企画をプロンプト・IA・API仕様に分解し、企画開発間の修正サイクルを3回から1回へ短縮",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      company: "NAVERクラウド (課外活動)",
      href: "/projects/clova-x-chatbot",
    },
    {
      title: "CQRSオークションサイト",
      description:
        "同時入札と順序保証が重要なオークション領域にCQRS・SQS FIFO・Multi-AZを適用し、処理量2倍/コスト30%改善",
      tags: ["AWS", "CQRS", "RDS", "Multi-AZ"],
      company: "AWS CloudSchool (教育)",
      href: "/projects/cloud-native-auction",
      education: true,
    },
    {
      title: "Kubernetesプロジェクト",
      description:
        "3-TierアプリをKubernetesへ展開し、Namespace・NetworkPolicy・Ingressの流れを設計したPM/Architectプロジェクト",
      tags: ["Kubernetes", "Docker", "Architecture"],
      company: "AWS CloudSchool (教育)",
      href: "/projects/kubernetes-service",
      education: true,
    },
    {
      title: "Pythonデータ可視化",
      description:
        "ソウル市公共データを住居意思決定の課題に変え、地図とレーダーチャートで候補地を比較",
      tags: ["Python", "Data Analysis", "Visualization"],
      company: "AWS CloudSchool (教育)",
      href: "/projects/python-data-viz",
      education: true,
    },
    {
      title: "Dear,ANT — AI投資判断レポート",
      description:
        "投資性向診断、売買ジャーナル、金融計算機を2週間で実装し、個人投資家の反復判断をプロダクト化",
      tags: ["Next.js", "TypeScript", "Supabase", "Claude Code"],
      company: "個人プロジェクト",
      href: "/projects/dear-ant",
      github: "https://github.com/jeongbaaaan/dear-ant",
      demo: "https://dear-ant.vercel.app/",
      sideProject: true,
      claudeCode: true,
    },
    {
      title: "ダルギョル — 無料四柱推命・タロット & AI相談",
      description:
        "無料四柱推命・タロット導線からAI相談へつながるサービス構造を設計し、Next.js/Rustで実装",
      tags: ["Next.js", "Rust", "Axum", "WebSocket", "Toss"],
      company: "個人プロジェクト",
      href: "/projects/dalgyeol",
      demo: "https://dalgyeol.com",
      sideProject: true,
      claudeCode: true,
      thumbnail: "/images/projects/dalgyeol-web-home.jpg",
    },
    {
      title: "調味料顔テスト",
      description:
        "写真アップロードからブラウザ推論、結果共有までをすばやく公開した軽量バイラルテスト",
      tags: ["Web", "Browser ML", "Cloudflare Pages"],
      company: "個人プロジェクト",
      href: "/projects/sauce-face-test",
      demo: "https://sauce-face.pages.dev",
      sideProject: true,
      thumbnail: "/images/projects/sauce-face-home.jpg",
    },
    {
      title: "Calendar Briefing Agent",
      description:
        "予定データを衝突・バッファ・ペルソナ信号に構造化し、デイリーブリーフィングの行動まで生成するAgent MVP",
      tags: ["Python", "Streamlit", "Agent Workflow"],
      company: "個人プロジェクト",
      href: "/projects/calendar-briefing-agent",
      github: "https://github.com/jeongbaaaan/calendar-briefing-agent",
      sideProject: true,
    },
  ],
};

const projectHighlights: Record<Locale, Record<string, string[]>> = {
  ko: {
    "/projects/cloud-infra-management": [
      "70+ 고객 AWS 계정 운영",
      "QR 이미지 스토리지 60% 절감",
      "비용·장애·아키텍처 개선안 도출",
    ],
    "/projects/clova-x-chatbot": [
      "기획-개발 수정 사이클 3회에서 1회로 단축",
      "프롬프트·IA·API 스펙 정리",
      "챗봇 UX 흐름 PM",
    ],
    "/projects/cloud-native-auction": [
      "동시 입찰 처리량 2배 개선",
      "인프라 비용 30% 절감",
      "CQRS·SQS FIFO 설계",
    ],
    "/projects/kubernetes-service": [
      "3-Tier Kubernetes 배포",
      "Namespace·NetworkPolicy 설계",
      "PM/Architect 역할",
    ],
    "/projects/python-data-viz": [
      "공공데이터 의사결정 서비스화",
      "지도·레이더 차트 비교",
      "주거 후보지 탐색 흐름",
    ],
    "/projects/dear-ant": [
      "2주 솔로 MVP",
      "투자 성향·매매 저널·계산기",
      "AI 리포트 제품화",
    ],
    "/projects/dalgyeol": [
      "무료 사주·타로 유입 설계",
      "Next.js/Rust 실서비스 구조",
      "AI 상담 전환 흐름",
    ],
    "/projects/sauce-face-test": [
      "사진 업로드→추론→공유",
      "Cloudflare Pages 배포",
      "바이럴 테스트 MVP",
    ],
    "/projects/calendar-briefing-agent": [
      "일정 충돌·버퍼 신호 추출",
      "데일리 브리핑 액션 생성",
      "Agent 워크플로우 MVP",
    ],
  },
  en: {
    "/projects/cloud-infra-management": [
      "Operated 70+ AWS customer accounts",
      "Reduced QR image storage by 60%",
      "Turned cost and reliability issues into action plans",
    ],
    "/projects/clova-x-chatbot": [
      "Cut planning-dev revision cycles from 3 to 1",
      "Structured prompts, IA, and API specs",
      "Led chatbot UX flow as PM",
    ],
    "/projects/cloud-native-auction": [
      "Improved bid throughput 2x",
      "Reduced infrastructure cost 30%",
      "Designed CQRS and SQS FIFO flow",
    ],
    "/projects/kubernetes-service": [
      "Deployed a 3-tier Kubernetes service",
      "Designed Namespace and NetworkPolicy",
      "Owned PM/Architect scope",
    ],
    "/projects/python-data-viz": [
      "Turned public data into a decision tool",
      "Compared areas with maps and radar charts",
      "Built a housing shortlist workflow",
    ],
    "/projects/dear-ant": [
      "Solo MVP in 2 weeks",
      "Profile, trading journal, and calculators",
      "Productized AI investment reports",
    ],
    "/projects/dalgyeol": [
      "Designed free Saju and tarot acquisition",
      "Built a Next.js/Rust service path",
      "Shaped AI consultation conversion flow",
    ],
    "/projects/sauce-face-test": [
      "Photo upload to prediction to sharing",
      "Shipped on Cloudflare Pages",
      "Lightweight viral-test MVP",
    ],
    "/projects/calendar-briefing-agent": [
      "Extracted conflicts and buffer risks",
      "Generated daily briefing actions",
      "Agent workflow MVP",
    ],
  },
  ja: {
    "/projects/cloud-infra-management": [
      "70以上のAWS顧客アカウントを運用",
      "QR画像ストレージを60%削減",
      "コスト・障害・設計課題を改善案へ整理",
    ],
    "/projects/clova-x-chatbot": [
      "企画開発間の修正サイクルを3回から1回へ短縮",
      "プロンプト・IA・API仕様を整理",
      "チャットボットUXフローをPMとして推進",
    ],
    "/projects/cloud-native-auction": [
      "同時入札処理量を2倍改善",
      "インフラコストを30%削減",
      "CQRS・SQS FIFOフローを設計",
    ],
    "/projects/kubernetes-service": [
      "3-Tier Kubernetesサービスを展開",
      "Namespace・NetworkPolicyを設計",
      "PM/Architect領域を担当",
    ],
    "/projects/python-data-viz": [
      "公共データを意思決定ツール化",
      "地図・レーダーチャートで比較",
      "居住候補地の探索フローを構築",
    ],
    "/projects/dear-ant": [
      "2週間のソロMVP",
      "投資性向・売買ジャーナル・計算機",
      "AI投資レポートをプロダクト化",
    ],
    "/projects/dalgyeol": [
      "無料四柱推命・タロット導線を設計",
      "Next.js/Rustの実サービス構成",
      "AI相談への転換フロー",
    ],
    "/projects/sauce-face-test": [
      "写真アップロード→推論→共有",
      "Cloudflare Pagesで公開",
      "軽量バイラルテストMVP",
    ],
    "/projects/calendar-briefing-agent": [
      "予定の衝突・バッファリスクを抽出",
      "デイリーブリーフィング行動を生成",
      "AgentワークフローMVP",
    ],
  },
};

const listLabels: Record<Locale, { company: string; education: string; side: string; proof: string }> = {
  ko: {
    company: "실무",
    education: "교육",
    side: "사이드",
    proof: "핵심 근거",
  },
  en: {
    company: "Company",
    education: "Education",
    side: "Side",
    proof: "Proof",
  },
  ja: {
    company: "実務",
    education: "教育",
    side: "サイド",
    proof: "根拠",
  },
};

type FilterKey = "company" | "education" | "side" | "claude";

interface Props {
  locale?: Locale;
}

export default function Projects({ locale = "ko" }: Props) {
  const projects = projectsData[locale];

  const filterDefs: { key: FilterKey; label: string; count: number }[] = [
    { key: "company", label: ui[locale]["projects.filter.company"], count: projects.filter((p) => !p.sideProject && !p.education).length },
    { key: "education", label: ui[locale]["projects.filter.education"], count: projects.filter((p) => p.education).length },
    { key: "side", label: ui[locale]["projects.filter.side"], count: projects.filter((p) => p.sideProject).length },
    { key: "claude", label: "Claude Code", count: projects.filter((p) => p.claudeCode).length },
  ];

  const [active, setActive] = useState<Set<FilterKey>>(new Set());

  const toggle = (key: FilterKey) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const filtered = projects.filter((p) => {
    if (active.size === 0) return true;
    if (active.has("company") && !p.sideProject && !p.education) return true;
    if (active.has("education") && p.education) return true;
    if (active.has("side") && p.sideProject) return true;
    if (active.has("claude") && p.claudeCode) return true;
    return false;
  });

  const projectType = (project: Project) => {
    if (project.education) return listLabels[locale].education;
    if (project.sideProject) return listLabels[locale].side;
    return listLabels[locale].company;
  };

  return (
    <section id="projects" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ opacity: 1 }}
          className="mb-8 border-b border-[var(--color-border)] pb-7"
        >
          <div className="mb-3 flex items-center justify-between gap-4">
            <h2 className="text-xs font-semibold uppercase text-[var(--color-primary)]">
              {ui[locale]["projects.subtitle"]}
            </h2>
            <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-secondary)]">
              {filtered.length} / {projects.length}
            </span>
          </div>
          <h3 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl font-[family-name:var(--font-heading)]">
            {ui[locale]["projects.title"]}
          </h3>
        </motion.div>

        <div className="mb-7 flex flex-wrap items-center gap-2 border-b border-[var(--color-border)] pb-5">
          {filterDefs.map((f) => (
            <button
              key={f.key}
              onClick={() => toggle(f.key)}
              className={`inline-flex h-9 items-center gap-2 rounded-md border px-3 text-xs font-semibold transition-colors duration-200 ${
                active.has(f.key)
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-bg)]"
                  : "border-[var(--color-border)] bg-transparent text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-text)]"
              }`}
            >
              {f.label}
              <span className={active.has(f.key) ? "opacity-70" : "text-[var(--color-primary)]"}>
                {f.count}
              </span>
            </button>
          ))}
          {active.size > 0 && (
            <button
              onClick={() => setActive(new Set())}
              className="h-9 rounded-md px-3 text-xs font-medium text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-primary)]"
            >
              {ui[locale]["projects.filter.reset"]}
            </button>
          )}
        </div>

        <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {filtered.map((project, index) => {
            const highlights = projectHighlights[locale][project.href] ?? project.tags;

            return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.035 }}
              style={{ opacity: 1 }}
            >
              <a
                href={localePath(project.href, locale)}
                className="group grid gap-5 py-6 transition-colors duration-200 hover:bg-[var(--color-surface)]/35 md:grid-cols-[64px_minmax(0,1fr)_220px] md:px-4"
              >
                <div className="flex items-start justify-between md:block">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-md border border-[var(--color-border)] px-2 py-1 text-[10px] font-semibold uppercase text-[var(--color-text-secondary)] md:mt-4 md:inline-block">
                    {projectType(project)}
                  </span>
                </div>

                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="text-xs font-semibold uppercase text-[var(--color-accent)]">
                      {project.company}
                    </p>
                    {project.claudeCode && (
                      <span className="rounded-sm bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-amber-400">
                        Claude Code
                      </span>
                    )}
                  </div>
                  <h4 className="mb-3 flex min-w-0 items-center gap-2 text-base font-bold leading-snug transition-colors duration-200 group-hover:text-[var(--color-primary)] md:text-lg">
                    <span>{project.title}</span>
                    {project.github && (
                      <span
                        className="inline-flex text-[var(--color-text-secondary)] transition-colors duration-200 group-hover:text-[var(--color-primary)]"
                        aria-label="GitHub"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </span>
                    )}
                    {project.demo && (
                      <span
                        className="inline-flex text-[var(--color-text-secondary)] transition-colors duration-200 group-hover:text-[var(--color-primary)]"
                        aria-label="Live Demo"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </span>
                    )}
                  </h4>
                  <p className="max-w-3xl text-sm leading-7 text-[var(--color-text-secondary)] md:text-[15px]">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-[var(--color-border)] px-2 py-1 font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  {project.thumbnail ? (
                    <div className="aspect-[16/10] overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors duration-200 group-hover:border-[var(--color-primary)]/45">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                      />
                    </div>
                  ) : (
                    <div className="min-h-[148px] rounded-md border border-[var(--color-border)] bg-[var(--color-surface)]/20 p-4 transition-colors duration-200 group-hover:border-[var(--color-primary)]/45 group-hover:bg-[var(--color-surface)]/38">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase text-[var(--color-primary)]">
                          {listLabels[locale].proof}
                        </span>
                        <span className="h-px w-10 bg-[var(--color-primary)]/55" />
                      </div>
                      <ul className="m-0 list-none space-y-2.5 p-0">
                        {highlights.slice(0, 3).map((item) => (
                          <li key={item} className="flex gap-2 text-xs leading-5 text-[var(--color-text-secondary)]">
                            <span className="mt-2 h-px w-3 flex-none bg-[var(--color-border)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </a>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
