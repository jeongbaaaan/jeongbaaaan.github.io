import { motion } from "framer-motion";
import { ui } from "../../i18n/ui";
import type { Locale } from "../../i18n/utils";
import GlassCard from "../ui/GlassCard";

interface Step {
  title: string;
  desc: string;
}

interface Phase {
  num: string;
  title: string;
  subtitle: string;
  color: string;
  steps: Step[];
}

const phasesData: Record<Locale, Phase[]> = {
  ko: [
    {
      num: "01",
      title: "Service Build",
      subtitle: "서비스 빌드",
      color: "var(--color-primary)",
      steps: [
        {
          title: "Claude Code로 전체 서비스 구축",
          desc: "Dear,ANT 프로젝트를 기획→코딩→디버깅→배포까지 대화형으로 개발",
        },
        {
          title: "팀 3-4명 1개월 → 1인 2주 완성",
          desc: "AI 도구를 활용해 개발 생산성을 극대화하여 풀스택 서비스를 혼자 완성",
        },
        {
          title: "REST API 5개 + Custom SVG + Dual Storage",
          desc: "별도 백엔드 없이 Next.js App Router 기반 풀스택 구현",
        },
      ],
    },
    {
      num: "02",
      title: "Prompt Engineering",
      subtitle: "프롬프트 엔지니어링",
      color: "var(--color-secondary)",
      steps: [
        {
          title: "Clova X PM으로 Few-shot 데이터셋 구축",
          desc: "AI 챗봇의 답변 품질을 구조적으로 설계",
        },
        {
          title: "기획 → API 스펙 변환 → 개발팀 협업",
          desc: "기획 문서를 개발자가 바로 사용할 수 있는 API 스펙으로 변환",
        },
        {
          title: "수정 사이클 3회 → 1회 (66% 단축)",
          desc: "프롬프트 데이터셋 품질 개선으로 기획-개발 간 커뮤니케이션 효율화",
        },
      ],
    },
    {
      num: "03",
      title: "Business Automation",
      subtitle: "업무 자동화",
      color: "var(--color-accent)",
      steps: [
        {
          title: "기술 문서 작성 자동화",
          desc: "아키텍처 설계, 기술 제안서, 비용 분석 보고서 작성에 AI 활용",
        },
        {
          title: "코드 리뷰 & 반복 작업 자동화",
          desc: "반복 작업을 자동화하여 핵심 업무에 집중",
        },
      ],
    },
    {
      num: "04",
      title: "Rapid Validation",
      subtitle: "빠른 검증",
      color: "var(--color-primary)",
      steps: [
        {
          title: "아이디어 → 프로토타입 수일 내",
          desc: "기획 단계에서 '이게 되나?'를 직접 만들어서 확인",
        },
        {
          title: "실패 비용 최소화",
          desc: "빠른 프로토타이핑으로 초기 단계에서 방향 검증",
        },
      ],
    },
  ],
  en: [
    {
      num: "01",
      title: "Service Build",
      subtitle: "Service Build",
      color: "var(--color-primary)",
      steps: [
        {
          title: "Full Service Build with Claude Code",
          desc: "Developed Dear,ANT project conversationally from planning to coding to debugging to deployment",
        },
        {
          title: "Team of 3-4 for 1 month → Solo in 2 weeks",
          desc: "Maximized development productivity with AI tools to complete a full-stack service solo",
        },
        {
          title: "REST API 5개 + Custom SVG + Dual Storage",
          desc: "Full-stack implementation with Next.js App Router without separate backend",
        },
      ],
    },
    {
      num: "02",
      title: "Prompt Engineering",
      subtitle: "Prompt Engineering",
      color: "var(--color-secondary)",
      steps: [
        {
          title: "Built Few-shot Datasets as Clova X PM",
          desc: "Structurally designed AI chatbot response quality",
        },
        {
          title: "Planning → API Spec Conversion → Dev Team Collaboration",
          desc: "Converted planning documents into API specs ready for developer use",
        },
        {
          title: "Revision Cycles 3 → 1 (66% Reduction)",
          desc: "Improved planning-dev communication efficiency through prompt dataset quality improvement",
        },
      ],
    },
    {
      num: "03",
      title: "Business Automation",
      subtitle: "Business Automation",
      color: "var(--color-accent)",
      steps: [
        {
          title: "Technical Document Automation",
          desc: "Leveraged AI for architecture design, technical proposals, and cost analysis reports",
        },
        {
          title: "Code Review & Repetitive Task Automation",
          desc: "Automated repetitive tasks to focus on core work",
        },
      ],
    },
    {
      num: "04",
      title: "Rapid Validation",
      subtitle: "Rapid Validation",
      color: "var(--color-primary)",
      steps: [
        {
          title: "Idea → Prototype in Days",
          desc: "Build and verify 'Does this work?' directly at the planning stage",
        },
        {
          title: "Minimize Failure Cost",
          desc: "Validated direction at early stages through rapid prototyping",
        },
      ],
    },
  ],
  ja: [
    {
      num: "01",
      title: "Service Build",
      subtitle: "サービスビルド",
      color: "var(--color-primary)",
      steps: [
        {
          title: "Claude Codeでサービス全体を構築",
          desc: "Dear,ANTプロジェクトを企画→コーディング→デバッグ→デプロイまで対話形式で開発",
        },
        {
          title: "チーム3-4人1ヶ月 → 1人2週間で完成",
          desc: "AIツールを活用して開発生産性を最大化し、フルスタックサービスを一人で完成",
        },
        {
          title: "REST API 5개 + Custom SVG + Dual Storage",
          desc: "別途バックエンドなしでNext.js App Routerベースのフルスタック実装",
        },
      ],
    },
    {
      num: "02",
      title: "Prompt Engineering",
      subtitle: "プロンプトエンジニアリング",
      color: "var(--color-secondary)",
      steps: [
        {
          title: "Clova X PMとしてFew-shotデータセット構築",
          desc: "AIチャットボットの回答品質を構造的に設計",
        },
        {
          title: "企画 → APIスペック変換 → 開発チーム協業",
          desc: "企画文書を開発者がすぐ使えるAPIスペックに変換",
        },
        {
          title: "修正サイクル3回 → 1回（66%短縮）",
          desc: "プロンプトデータセットの品質改善で企画-開発間のコミュニケーションを効率化",
        },
      ],
    },
    {
      num: "03",
      title: "Business Automation",
      subtitle: "業務自動化",
      color: "var(--color-accent)",
      steps: [
        {
          title: "技術文書作成自動化",
          desc: "アーキテクチャ設計、技術提案書、コスト分析レポート作成にAI活用",
        },
        {
          title: "コードレビュー＆反復作業自動化",
          desc: "反復作業を自動化してコア業務に集中",
        },
      ],
    },
    {
      num: "04",
      title: "Rapid Validation",
      subtitle: "高速検証",
      color: "var(--color-primary)",
      steps: [
        {
          title: "アイデア → プロトタイプ数日以内",
          desc: "企画段階で「これができるか？」を直接作って確認",
        },
        {
          title: "失敗コスト最小化",
          desc: "高速プロトタイピングで初期段階で方向性を検証",
        },
      ],
    },
  ],
};

const cycleItems = [
  { name: "Build", color: "var(--color-primary)" },
  { name: "Design", color: "var(--color-secondary)" },
  { name: "Automate", color: "var(--color-accent)" },
  { name: "Validate", color: "var(--color-primary)" },
];

interface Props {
  locale?: Locale;
}

export default function AiWorkflow({ locale = "ko" }: Props) {
  const phases = phasesData[locale];

  return (
    <section id="ai-workflow" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            {ui[locale]["aiWorkflow.subtitle"]}
          </h2>
          <h3 className="mb-4 text-3xl font-bold md:text-4xl font-[family-name:var(--font-heading)]">
            {ui[locale]["aiWorkflow.title"]}
          </h3>
          <p className="mb-12 text-[var(--color-text-secondary)] leading-relaxed">
            {ui[locale]["aiWorkflow.description"]}
            <br className="hidden md:inline" /> {ui[locale]["aiWorkflow.descriptionBr"]}
          </p>
        </motion.div>

        {/* Cycle Diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 flex items-center justify-center gap-5"
        >
          {cycleItems.map((item, i) => (
            <div key={item.name} className="flex items-center gap-5">
              <div
                className="flex h-[52px] w-[84px] items-center justify-center rounded-xl border-2 text-[15px] font-bold"
                style={{
                  borderColor: item.color,
                  color: item.color,
                  boxShadow: `0 0 16px color-mix(in srgb, ${item.color} 20%, transparent)`,
                }}
              >
                {item.name}
              </div>
              {i < cycleItems.length - 1 && (
                <span className="text-[var(--color-text-secondary)]/30">
                  →
                </span>
              )}
            </div>
          ))}
          <span className="text-xl font-bold text-[var(--color-text-secondary)]/30">
            ↻
          </span>
        </motion.div>

        {/* Phases */}
        <div className="space-y-20">
          {phases.map((phase, phaseIdx) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Phase Header */}
              <div className="mb-6 flex items-baseline gap-4">
                <span
                  className="text-[42px] font-extrabold opacity-20"
                  style={{ color: phase.color }}
                >
                  {phase.num}
                </span>
                <div>
                  <h4
                    className="text-2xl font-bold"
                    style={{ color: phase.color }}
                  >
                    {phase.title}
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {phase.subtitle}
                  </p>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-3">
                {phase.steps.map((step, stepIdx) => (
                  <motion.div
                    key={stepIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: stepIdx * 0.05,
                    }}
                  >
                    <GlassCard className="flex flex-row items-start gap-4 !p-[18px]">
                      {/* Step Number */}
                      <div
                        className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${phase.color} 15%, transparent)`,
                          color: phase.color,
                        }}
                      >
                        {stepIdx + 1}
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold">{step.title}</p>
                        <p className="mt-1 text-[11px] leading-relaxed text-[var(--color-text-secondary)]">
                          {step.desc}
                        </p>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Built with badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-6 py-2.5 text-sm text-[var(--color-accent)]">
            ⚡ {ui[locale]["aiWorkflow.badge"]}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
