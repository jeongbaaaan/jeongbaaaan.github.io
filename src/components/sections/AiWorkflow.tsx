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
      title: "Idea Phase",
      subtitle: "아이디어 발굴 & 검증",
      color: "var(--color-primary)",
      steps: [
        {
          title: "AI 브레인스토밍 & 트렌드 스코어링",
          desc: "AI와 아이디어 발산, 트렌드 데이터 기반 주제 발굴. 막연한 요청도 구체화",
        },
        {
          title: "CEO 방향 결정 → 시장 조사 → CSO 전략 검증",
          desc: "AI CEO가 방향 설정, Researcher가 시장 조사, AI CSO가 리스크·실현가능성·타겟 유저 페르소나 검증. No-Go 시 방향 재설정",
        },
        {
          title: "BM 설계",
          desc: "수익 모델, 가격 전략, 유닛 이코노믹스를 체계적으로 설계",
        },
        {
          title: "CEO 게이트",
          desc: "PASS / BM 수정 / 방향 변경 삼분기 의사결정. 통과 시 Design Phase 진입",
        },
      ],
    },
    {
      num: "02",
      title: "Design Phase",
      subtitle: "설계 & 아키텍처",
      color: "var(--color-accent)",
      steps: [
        {
          title: "기술 스택 & DB 스키마 설계",
          desc: "CTO가 기술 스택 결정, data-engineer가 DB 설계, CTO 리뷰. FAIL 시 재설계",
        },
        {
          title: "UX/UI 디자인 & 디베이트",
          desc: "product-designer가 UX→UI 순차 설계, 각각 리뷰어 검증 후 UX↔UI 디자인 디베이트. 사용자 흐름이 API 설계의 기반이 됨",
        },
        {
          title: "API 설계 & DB-API 정합성 검증",
          desc: "UX 흐름 기반으로 backend-dev가 API 설계, CTO가 DB-API 정합성 검증. 불일치 시 DB부터 재설계",
        },
        {
          title: "실행 계획 & Plan Critic",
          desc: "planner가 구현 계획 생성, plan-critic이 6개 기준 채점. 통과까지 반복",
        },
        {
          title: "CTO 게이트",
          desc: "설계+계획 통합 검증. PASS 시 Build Phase 진입",
        },
      ],
    },
    {
      num: "03",
      title: "Build Phase",
      subtitle: "구현 & 리뷰",
      color: "#f59e0b",
      steps: [
        {
          title: "병렬 구현",
          desc: "frontend / backend / mobile / ai-engineer 에이전트가 동시 개발",
        },
        {
          title: "마이그레이션 리뷰 (DBA)",
          desc: "DBA가 DB 변경사항 검증. 지적 시 구현으로 되돌아감",
        },
        {
          title: "코드 리뷰 + 보안 리뷰",
          desc: "code-reviewer가 품질 검토, security-reviewer가 보안 취약점 검사",
        },
        {
          title: "QA 테스트",
          desc: "qa-engineer가 Unit / Integration / E2E 테스트 실행. FAIL 시 구현으로 복귀",
        },
        {
          title: "배포 환경 구성 (DevOps)",
          desc: "devops가 CI/CD 파이프라인, Docker 컨테이너, 배포 환경을 구성. Verify Phase에서 실제 동작 검증 가능한 상태로 준비",
        },
      ],
    },
    {
      num: "04",
      title: "Verify Phase",
      subtitle: "검증 & 론칭",
      color: "var(--color-secondary)",
      steps: [
        {
          title: "동작 검증 (Simulator)",
          desc: "실제 앱을 실행하여 기능 동작 확인. FAIL 시 Build Phase로 복귀",
        },
        {
          title: "UI 검증 & 사용성 테스트",
          desc: "스크린샷 기반 시각적 검증 + 사용자 관점 사용성 테스트. 구현 버그 → Build Phase, 디자인 문제 → Design Phase로 분기",
        },
        {
          title: "론칭 디베이트",
          desc: "CEO ↔ CTO ↔ CSO 삼자 회의. 코드 수정 / 설계 변경 / PASS 삼분기 결정",
        },
        {
          title: "완성 보고",
          desc: "론칭 승인 후 최종 보고서 생성",
        },
      ],
    },
  ],
  en: [
    {
      num: "01",
      title: "Idea Phase",
      subtitle: "Ideation & Validation",
      color: "var(--color-primary)",
      steps: [
        {
          title: "AI Brainstorming & Trend Scoring",
          desc: "Diverge ideas with AI, discover topics based on trend data. Even vague requests get refined",
        },
        {
          title: "CEO Direction → Market Research → CSO Validation",
          desc: "AI CEO sets direction, Researcher conducts market research, AI CSO validates risks, feasibility & target user personas. No-Go triggers re-direction",
        },
        {
          title: "Business Model Design",
          desc: "Systematically design revenue model, pricing strategy, and unit economics",
        },
        {
          title: "CEO Gate",
          desc: "PASS / Revise BM / Change direction. Proceeds to Design Phase on pass",
        },
      ],
    },
    {
      num: "02",
      title: "Design Phase",
      subtitle: "Design & Architecture",
      color: "var(--color-accent)",
      steps: [
        {
          title: "Tech Stack & DB Schema Design",
          desc: "CTO decides tech stack, data-engineer designs DB, CTO reviews. FAIL triggers redesign",
        },
        {
          title: "UX/UI Design & Debate",
          desc: "product-designer creates UX→UI sequentially, each verified by reviewers, then UX↔UI design debate. User flows become the basis for API design",
        },
        {
          title: "API Design & DB-API Consistency Check",
          desc: "backend-dev designs API based on UX flows, CTO verifies DB-API consistency. Mismatch triggers DB redesign",
        },
        {
          title: "Execution Plan & Plan Critic",
          desc: "Planner generates implementation plan, plan-critic scores on 6 criteria. Iterates until pass",
        },
        {
          title: "CTO Gate",
          desc: "Integrated validation of design + plan. Proceeds to Build Phase on pass",
        },
      ],
    },
    {
      num: "03",
      title: "Build Phase",
      subtitle: "Implementation & Review",
      color: "#f59e0b",
      steps: [
        {
          title: "Parallel Implementation",
          desc: "frontend / backend / mobile / ai-engineer agents develop simultaneously",
        },
        {
          title: "Migration Review (DBA)",
          desc: "DBA verifies DB changes. Issues route back to implementation",
        },
        {
          title: "Code Review + Security Review",
          desc: "code-reviewer checks quality, security-reviewer scans for vulnerabilities",
        },
        {
          title: "QA Testing",
          desc: "qa-engineer runs Unit / Integration / E2E tests. FAIL routes back to implementation",
        },
        {
          title: "Deployment Setup (DevOps)",
          desc: "devops configures CI/CD pipeline, Docker containers, and deployment environment. Prepares for functional verification in Verify Phase",
        },
      ],
    },
    {
      num: "04",
      title: "Verify Phase",
      subtitle: "Verification & Launch",
      color: "var(--color-secondary)",
      steps: [
        {
          title: "Functional Verification (Simulator)",
          desc: "Run actual app to verify functionality. FAIL routes back to Build Phase",
        },
        {
          title: "UI Verification & Usability Test",
          desc: "Screenshot-based visual verification + user perspective usability test. Implementation bugs → Build Phase, design issues → Design Phase",
        },
        {
          title: "Launch Debate",
          desc: "CEO ↔ CTO ↔ CSO three-way meeting. Code fix / Design change / PASS decision",
        },
        {
          title: "Completion Report",
          desc: "Final report generated after launch approval",
        },
      ],
    },
  ],
  ja: [
    {
      num: "01",
      title: "Idea Phase",
      subtitle: "アイデア発掘＆検証",
      color: "var(--color-primary)",
      steps: [
        {
          title: "AIブレインストーミング＆トレンドスコアリング",
          desc: "AIとアイデア発散、トレンドデータに基づくテーマ発掘。漠然とした要望も具体化",
        },
        {
          title: "CEO方向決定 → 市場調査 → CSO戦略検証",
          desc: "AI CEOが方向設定、Researcherが市場調査、AI CSOがリスク・実現可能性・ターゲットユーザーペルソナを検証。No-Goで方向再設定",
        },
        {
          title: "BM設計",
          desc: "収益モデル、価格戦略、ユニットエコノミクスを体系的に設計",
        },
        {
          title: "CEOゲート",
          desc: "PASS / BM修正 / 方向変更の三分岐意思決定。通過でDesign Phaseへ",
        },
      ],
    },
    {
      num: "02",
      title: "Design Phase",
      subtitle: "設計＆アーキテクチャ",
      color: "var(--color-accent)",
      steps: [
        {
          title: "技術スタック＆DBスキーマ設計",
          desc: "CTOが技術スタック決定、data-engineerがDB設計、CTOレビュー。FAILで再設計",
        },
        {
          title: "UX/UIデザイン＆ディベート",
          desc: "product-designerがUX→UI順次設計、各レビュアー検証後UX↔UIデザインディベート。ユーザーフローがAPI設計の基盤に",
        },
        {
          title: "API設計＆DB-API整合性検証",
          desc: "UXフローに基づきbackend-devがAPI設計、CTOがDB-API整合性を検証。不一致でDBから再設計",
        },
        {
          title: "実行計画＆Plan Critic",
          desc: "plannerが実装計画生成、plan-criticが6基準で採点。通過まで繰り返し",
        },
        {
          title: "CTOゲート",
          desc: "設計+計画の統合検証。PASSでBuild Phaseへ",
        },
      ],
    },
    {
      num: "03",
      title: "Build Phase",
      subtitle: "実装＆レビュー",
      color: "#f59e0b",
      steps: [
        {
          title: "並列実装",
          desc: "frontend / backend / mobile / ai-engineerエージェントが同時開発",
        },
        {
          title: "マイグレーションレビュー（DBA）",
          desc: "DBAがDB変更を検証。指摘があれば実装に差し戻し",
        },
        {
          title: "コードレビュー＋セキュリティレビュー",
          desc: "code-reviewerが品質検査、security-reviewerが脆弱性スキャン",
        },
        {
          title: "QAテスト",
          desc: "qa-engineerがUnit / Integration / E2Eテスト実行。FAILで実装に復帰",
        },
        {
          title: "デプロイ環境構成（DevOps）",
          desc: "devopsがCI/CDパイプライン、Dockerコンテナ、デプロイ環境を構成。Verify Phaseで実際の動作検証が可能な状態に準備",
        },
      ],
    },
    {
      num: "04",
      title: "Verify Phase",
      subtitle: "検証＆ローンチ",
      color: "var(--color-secondary)",
      steps: [
        {
          title: "動作検証（Simulator）",
          desc: "実際のアプリを実行して機能動作を確認。FAILでBuild Phaseに復帰",
        },
        {
          title: "UI検証＆ユーザビリティテスト",
          desc: "スクリーンショットベースの視覚検証＋ユーザー視点のユーザビリティテスト。実装バグ → Build Phase、デザイン問題 → Design Phaseに分岐",
        },
        {
          title: "ローンチディベート",
          desc: "CEO ↔ CTO ↔ CSO三者会議。コード修正 / 設計変更 / PASSの三分岐決定",
        },
        {
          title: "完成レポート",
          desc: "ローンチ承認後、最終レポートを生成",
        },
      ],
    },
  ],
};

const cycleItems = [
  { name: "Idea", color: "var(--color-primary)" },
  { name: "Design", color: "var(--color-accent)" },
  { name: "Build", color: "#f59e0b" },
  { name: "Verify", color: "var(--color-secondary)" },
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
          style={{ opacity: 1 }}
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
          style={{ opacity: 1 }}
          className="mb-20 flex items-center justify-center gap-3 md:gap-5"
        >
          {cycleItems.map((item, i) => (
            <div key={item.name} className="flex items-center gap-3 md:gap-5">
              <div
                className="flex h-[44px] w-[68px] items-center justify-center rounded-xl border-2 text-[13px] font-bold md:h-[52px] md:w-[84px] md:text-[15px]"
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
              style={{ opacity: 1 }}
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
                    style={{ opacity: 1 }}
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
          style={{ opacity: 1 }}
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
