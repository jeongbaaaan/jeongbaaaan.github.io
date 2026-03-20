# 포트폴리오 사이트 (jeongbaaaan.github.io)

## 기술 스택
- **Framework**: Astro 6 (정적 사이트 생성)
- **UI**: React (interactive 컴포넌트), Tailwind CSS 4
- **Animation**: Framer Motion
- **배포**: GitHub Pages + GitHub Actions (withastro/action, Node 22)

## 구조
- `src/pages/` — 페이지 라우팅 (Astro 파일 기반)
- `src/components/sections/` — 섹션 컴포넌트 (Hero, About, Experience 등)
- `src/components/layout/` — Navbar, Footer
- `src/components/ui/` — 재사용 UI (GlassCard, TypeWriter, ScrollProgress 등)
- `src/layouts/` — BaseLayout, ProjectLayout
- `src/styles/global.css` — CSS 변수, 다크/라이트 테마
- `src/data/` — experience, education, skills, resume 데이터
- `src/i18n/` — 다국어 지원 (ko, en, ja)
- `public/images/projects/` — 프로젝트 이미지 (빌드에 포함)
- `assets/` — 원본 소스 (.gitignore로 제외)

## 로컬 assets 구조 (.gitignore)
```
assets/
├── resume/
│   └── 이력서_장정빈_2025.pptx
├── portfolio/
│   ├── 포트폴리오_장정빈_2025.pptx
│   ├── solution-architect-portfolio.pptx
│   ├── 서비스기획_또나.pdf
│   └── cloudschool-프로젝트.pdf
└── source-images/
    ├── icons/
    └── profile/
```

## 테마 시스템
- 다크모드 기본, 라이트모드 지원
- `html.light` 클래스로 CSS 변수 오버라이드 (`global.css`)
- `localStorage('theme')` + `prefers-color-scheme` 감지

## 프로젝트 페이지
- `ProjectLayout.astro` — 공통 레이아웃
- `Projects.tsx` — 프로젝트 카드 그리드 + 다중 토글 필터 (회사/교육/사이드/Claude Code)
- 프로젝트 데이터는 `src/i18n/data/projects.ts` + `Projects.tsx` 인라인 데이터에 정의
- 배지: Side Project (에메랄드), Claude Code (앰버), Education (그린)

## 회사 프로젝트 (3개)
| 프로젝트 | 회사 | 비고 |
|---------|------|------|
| 클라우드 인프라 관리 & 비용 최적화 | 스마일샤크 | AWS MSP, 70+ 고객 |
| Clova X AI 챗봇 PM | 네이버클라우드 | 프롬프트 데이터셋 |
| 기업뱅킹 IT기획 | 신한은행 | |

## 교육 프로젝트 (3개)
| 프로젝트 | 과정 | 비고 |
|---------|------|------|
| CQRS 경매 웹사이트 | AWS CloudSchool | 해커톤 대상, CQRS |
| Kubernetes 프로젝트 | AWS CloudSchool | PM, Architect |
| Python 데이터 시각화 | AWS CloudSchool | PM |

## 사이드 프로젝트 (5개)
| 프로젝트 | GitHub | 기술 |
|---------|--------|------|
| Dear,ANT (AI 투자 리포트) | jeongbaaaan/dear-ant | Next.js, Supabase |
| 또나 (AI 부캐 챗봇) | - | Potenday 312, PM |
| 달결 (AI 사주·타로) | private | Rust, Swift |
| What Health | kangnam7654/what_health | Swift, Rust |
| Quorum (멀티에이전트) | - | Rust, Next.js, Tauri |

## 주의사항
- **프로젝트 성과를 지어내지 말 것**
  - 스마일샤크: "스토리지 60% 절감"은 QR 이미지 리사이징 아키텍처 한정
  - 네이버클라우드: "수정 사이클 66% 단축"은 기획-개발 협업 프로세스 한정
  - AWS CloudSchool: "처리량 2x, 비용 30%"는 CQRS 경매 프로젝트 한정
  - 신한은행: 구체적 성과 데이터 없음
  - Dear,ANT: Claude Code 활용 사실만 기재
- 이력서 원본 데이터: `src/data/resume.ts` (Single Source of Truth)
- 타이틀: "Cloud Infra · AI Service · Technical Consulting"

## 완료된 작업
- [x] i18n (한국어/영어/일본어) 지원 — 45페이지, 동적 라우트 통합, 플로팅 언어/테마 스위처
- [x] kangnam7654 → jeongbaaaan 포트폴리오 마이그레이션
