import { useState } from "react";
import { motion } from "framer-motion";
import { ui } from "../../i18n/ui";
import type { Locale } from "../../i18n/utils";
import GlassCard from "../ui/GlassCard";

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
        "AWS MSP 기반 70+ 고객 인프라 관리, Lambda 리사이징으로 스토리지 60% 절감",
      tags: ["AWS", "EC2", "Lambda", "Cost Optimization"],
      company: "스마일샤크",
      href: "/projects/cloud-infra-management",
    },
    {
      title: "Clova X AI 챗봇 PM",
      description:
        "프롬프트 데이터셋 구축, UX 흐름 설계, 수정 사이클 66% 단축",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      company: "네이버클라우드 (대외활동)",
      href: "/projects/clova-x-chatbot",
    },
    {
      title: "CQRS 경매 웹사이트",
      description:
        "CQRS 패턴 설계, Multi-AZ 고가용성, 처리량 2배 향상, 비용 30% 절감, AWS 해커톤 대상",
      tags: ["AWS", "CQRS", "RDS", "Multi-AZ"],
      company: "AWS CloudSchool (교육)",
      href: "/projects/cloud-native-auction",
      education: true,
    },
    {
      title: "Kubernetes 프로젝트",
      description:
        "Kubernetes 기반 서비스 배포, NetworkPolicy 보안, 아키텍처 설계",
      tags: ["Kubernetes", "Docker", "Architecture"],
      company: "AWS CloudSchool (교육)",
      href: "/projects/kubernetes-service",
      education: true,
    },
    {
      title: "Python 데이터 시각화",
      description:
        "서울시 공공 데이터 활용 분석 및 시각화",
      tags: ["Python", "Data Analysis", "Visualization"],
      company: "AWS CloudSchool (교육)",
      href: "/projects/python-data-viz",
      education: true,
    },
    {
      title: "Dear,ANT — AI 투자 판단 리포트",
      description:
        "Claude Code로 기획~배포까지 1인 2주 완성. 투자 성향 분석, 트레이딩 저널, 금융 계산기",
      tags: ["Next.js", "TypeScript", "Supabase", "Claude Code"],
      company: "개인 프로젝트",
      href: "/projects/dear-ant",
      github: "https://github.com/jeongbaaaan/dear-ant",
      demo: "https://dear-ant.vercel.app/",
      sideProject: true,
      claudeCode: true,
    },
    {
      title: "달결 — AI 사주·타로",
      description:
        "사주·타로 기반 AI 운세 상담 iOS 앱. 서비스 출시 예정",
      tags: ["Rust", "Swift", "LLM", "iOS"],
      company: "개인 프로젝트",
      href: "/projects/dalgyeol",
      sideProject: true,
      claudeCode: true,
      thumbnail: "/images/projects/dalgyeol-home.png",
    },
    {
      title: "What Health",
      description:
        "LLM이 운동 코치가 되어 개인 맞춤 운동 스케줄을 관리해주는 앱",
      tags: ["Swift", "Rust", "LLM"],
      company: "개인 프로젝트",
      href: "/projects/what-health",
      github: "https://github.com/kangnam7654/what_health",
      sideProject: true,
      claudeCode: true,
    },
  ],
  en: [
    {
      title: "Cloud Infra Management & Cost Optimization",
      description:
        "AWS MSP-based 70+ customer infra management, 60% storage reduction via Lambda resizing",
      tags: ["AWS", "EC2", "Lambda", "Cost Optimization"],
      company: "SmileShark",
      href: "/projects/cloud-infra-management",
    },
    {
      title: "Clova X AI Chatbot PM",
      description:
        "Prompt dataset construction, UX flow design, 66% reduction in revision cycles",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      company: "Naver Cloud (Extracurricular)",
      href: "/projects/clova-x-chatbot",
    },
    {
      title: "CQRS Auction Website",
      description:
        "CQRS pattern design, Multi-AZ high availability, 2x throughput improvement, 30% cost reduction, AWS Hackathon Grand Prize",
      tags: ["AWS", "CQRS", "RDS", "Multi-AZ"],
      company: "AWS CloudSchool (Education)",
      href: "/projects/cloud-native-auction",
      education: true,
    },
    {
      title: "Kubernetes Project",
      description:
        "Kubernetes-based service deployment, NetworkPolicy security, architecture design",
      tags: ["Kubernetes", "Docker", "Architecture"],
      company: "AWS CloudSchool (Education)",
      href: "/projects/kubernetes-service",
      education: true,
    },
    {
      title: "Python Data Visualization",
      description:
        "Seoul public data analysis and visualization",
      tags: ["Python", "Data Analysis", "Visualization"],
      company: "AWS CloudSchool (Education)",
      href: "/projects/python-data-viz",
      education: true,
    },
    {
      title: "Dear,ANT — AI Investment Report",
      description:
        "Built from planning to deployment in 2 weeks solo with Claude Code. Investment profile analysis, trading journal, financial calculator",
      tags: ["Next.js", "TypeScript", "Supabase", "Claude Code"],
      company: "Personal Project",
      href: "/projects/dear-ant",
      github: "https://github.com/jeongbaaaan/dear-ant",
      demo: "https://dear-ant.vercel.app/",
      sideProject: true,
      claudeCode: true,
    },
    {
      title: "Dalgyeol — AI Fortune Telling",
      description:
        "AI fortune consultation iOS app based on Korean fortune telling and tarot. Service launch planned",
      tags: ["Rust", "Swift", "LLM", "iOS"],
      company: "Personal Project",
      href: "/projects/dalgyeol",
      sideProject: true,
      claudeCode: true,
      thumbnail: "/images/projects/dalgyeol-home.png",
    },
    {
      title: "What Health",
      description:
        "App where LLM becomes a fitness coach managing personalized workout schedules",
      tags: ["Swift", "Rust", "LLM"],
      company: "Personal Project",
      href: "/projects/what-health",
      github: "https://github.com/kangnam7654/what_health",
      sideProject: true,
      claudeCode: true,
    },
  ],
  ja: [
    {
      title: "クラウドインフラ管理＆コスト最適化",
      description:
        "AWS MSPベースで70以上の顧客インフラを管理、Lambdaリサイジングでストレージ60%削減",
      tags: ["AWS", "EC2", "Lambda", "Cost Optimization"],
      company: "スマイルシャーク",
      href: "/projects/cloud-infra-management",
    },
    {
      title: "Clova X AI チャットボット PM",
      description:
        "プロンプトデータセット構築、UXフロー設計、修正サイクル66%短縮",
      tags: ["AI PM", "Prompt Engineering", "UX"],
      company: "NAVERクラウド (課外活動)",
      href: "/projects/clova-x-chatbot",
    },
    {
      title: "CQRSオークションサイト",
      description:
        "CQRSパターン設計、Multi-AZ高可用性、スループット2倍向上、コスト30%削減、AWSハッカソン大賞",
      tags: ["AWS", "CQRS", "RDS", "Multi-AZ"],
      company: "AWS CloudSchool (教育)",
      href: "/projects/cloud-native-auction",
      education: true,
    },
    {
      title: "Kubernetesプロジェクト",
      description:
        "Kubernetesベースのサービスデプロイ、NetworkPolicyセキュリティ、アーキテクチャ設計",
      tags: ["Kubernetes", "Docker", "Architecture"],
      company: "AWS CloudSchool (教育)",
      href: "/projects/kubernetes-service",
      education: true,
    },
    {
      title: "Pythonデータ可視化",
      description:
        "ソウル市公共データを活用した分析および可視化",
      tags: ["Python", "Data Analysis", "Visualization"],
      company: "AWS CloudSchool (教育)",
      href: "/projects/python-data-viz",
      education: true,
    },
    {
      title: "Dear,ANT — AI投資判断レポート",
      description:
        "Claude Codeで企画からデプロイまで1人2週間で完成。投資性向分析、トレーディングジャーナル、金融計算機",
      tags: ["Next.js", "TypeScript", "Supabase", "Claude Code"],
      company: "個人プロジェクト",
      href: "/projects/dear-ant",
      github: "https://github.com/jeongbaaaan/dear-ant",
      demo: "https://dear-ant.vercel.app/",
      sideProject: true,
      claudeCode: true,
    },
    {
      title: "ダルギョル — AI占い",
      description:
        "四柱推命・タロットベースのAI運勢相談iOSアプリ。サービスリリース予定",
      tags: ["Rust", "Swift", "LLM", "iOS"],
      company: "個人プロジェクト",
      href: "/projects/dalgyeol",
      sideProject: true,
      claudeCode: true,
      thumbnail: "/images/projects/dalgyeol-home.png",
    },
    {
      title: "What Health",
      description:
        "LLMがフィットネスコーチとなり、パーソナライズされたワークアウトスケジュールを管理するアプリ",
      tags: ["Swift", "Rust", "LLM"],
      company: "個人プロジェクト",
      href: "/projects/what-health",
      github: "https://github.com/kangnam7654/what_health",
      sideProject: true,
      claudeCode: true,
    },
  ],
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

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ opacity: 1 }}
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            {ui[locale]["projects.subtitle"]}
          </h2>
          <h3 className="mb-6 text-3xl font-bold md:text-4xl font-[family-name:var(--font-heading)]">
            {ui[locale]["projects.title"]}
          </h3>
        </motion.div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs text-[var(--color-text-secondary)]">
            {filtered.length} / {projects.length}
          </span>
          {filterDefs.map((f) => (
            <button
              key={f.key}
              onClick={() => toggle(f.key)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                active.has(f.key)
                  ? "bg-[var(--color-primary)] text-[var(--color-bg)]"
                  : "bg-[var(--color-surface)]/60 text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:text-[var(--color-primary)]"
              }`}
            >
              {f.label}
              <span className="ml-1.5 opacity-60">{f.count}</span>
            </button>
          ))}
          {active.size > 0 && (
            <button
              onClick={() => setActive(new Set())}
              className="rounded-full px-3 py-1.5 text-xs text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-primary)]"
            >
              {ui[locale]["projects.filter.reset"]}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <a href={localePath(project.href, locale)}>
              <GlassCard className="group h-full cursor-pointer overflow-hidden" noPadding>
                {/* Thumbnail */}
                <div className="relative h-40 overflow-hidden">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10">
                      <span className="text-4xl opacity-30">{project.sideProject ? "\u{1F6E0}" : "\u{1F3E2}"}</span>
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="p-6">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--color-accent)]">
                    {project.company}
                  </p>
                  <h4 className="mb-2 flex items-center gap-2 text-lg font-bold transition-colors duration-200 group-hover:text-[var(--color-primary)]">
                    {project.title}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-primary)]"
                        aria-label="GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-primary)]"
                        aria-label="Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                    {project.education && (
                      <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-[10px] font-semibold text-green-400">
                        Education
                      </span>
                    )}
                    {project.sideProject && (
                      <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                        Side Project
                      </span>
                    )}
                    {project.claudeCode && (
                      <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold text-amber-400">
                        Claude Code
                      </span>
                    )}
                  </h4>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[var(--color-primary)]/10 px-2 py-1 text-xs text-[var(--color-primary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
