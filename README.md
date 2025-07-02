# 🌾 씨에스팜

> "티끌 모아 태산"을 꿈꾸는 개발자들을 위한 **1일 1지식 수확 서비스**

---

## 📌 배포 링크

- **Production:** [https://csfarm.me](https://csfarm.me)

---

## 🗂️ 프로젝트 개요

**씨에스팜**은 개발 공부를 막 시작했거나, 기본기가 부족하다고 느끼는 초보 개발자들을 위해 설계된 학습 플랫폼입니다.  
"농장"이라는 친근한 세계관을 접목해, 개발 지식을 "수확"하고 관련 퀴즈를 풀어 "타작"하는 과정을 통해 실력을 기를 수 있도록 돕습니다.

많은 입문자들은 **방대한 CS 지식 앞에서 어디서부터 시작해야 할지 모르는 문제**를 겪습니다.  
씨에스팜은 이 문제를 해결하기 위해 **"하루 한 개의 랜덤한 지식"이라는 단순한 규칙**을 제안합니다.  
사용자는 매일 새로운 지식을 배우고 퀴즈를 풀어 스스로의 "논밭"을 가꿔가며 성장할 수 있습니다.

---

## 🌱 핵심 아이디어

- **컨셉:** 농장에서 영감을 받은 직관적인 UI/UX
- **목표:** 매일 하나의 지식을 "수확"하고 퀴즈를 풀어 "타작"하여 지식을 쌓아감
- **문제 해결:** 방대한 정보 앞에서 학습에 어려움을 겪는 사용자가 부담 없이 매일 하나의 랜덤 지식을 학습하도록 설계
- **가치 제안:** 꾸준한 학습 습관을 유도하고 성취감을 제공

---

## 🎯 주요 기능

- **ChatGPT를 사용한 지식 및 퀴즈 출제**  
  OpenAI의 언어 모델을 활용해 매일 새로운 CS 지식과 퀴즈를 자동 생성/제공

- **오늘의 지식 수확**  
  매일 제공되는 무작위 CS 지식을 학습하고 "수확"하여 개인 지식 창고에 추가

- **오늘의 지식 타작**  
  수확한 지식에 대한 퀴즈를 풀어 "타작물"을 얻고 학습을 강화

- **수확물 창고**  
  최근 1달간의 지식을 조회, 복습할 수 있는 지식 라이브러리

- **마이페이지**

  - 사용자명(농부명)과 프로필 사진 변경
  - 사용자가 수확/타작한 결과를 표로 시각화하는 "논밭" 뷰 제공
  - 개인의 누적 학습 기록 조회

- **접근성 & 반응형 디자인**  
  다양한 디바이스에서 학습할 수 있도록 모바일·태블릿·PC 지원

---

## ⚙️ 주요 기술 스택

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Data Fetching / Caching:** TanStack Query
- **State Management:** Zustand
- **Deployment:** Vercel

---

## 🧩 서드파티 라이브러리

- **앱 프레임워크**
  - `next@15.3.1`
  - `react@19`, `react-dom@19`
- **상태 관리**
  - `@tanstack/react-query`
  - `zustand`
- **UI/UX**
  - `framer-motion`
  - `react-icons`
  - `react-intersection-observer`
- **유틸리티**
  - `clsx`
  - `date-fns`, `date-fns-tz`
  - `zod`
  - `react-error-boundary`

---

## 📁 프로젝트 구조

```plaintext
csfarm-web/
├── node_modules/             # 종속성 모듈
├── public/                   # 정적 파일
│   ├── images/               # 이미지 리소스
│   └── svgs/                 # SVG 리소스
└── src/                      # 애플리케이션 소스 코드
    ├── app/                  # Next.js App Router 구조
    │   ├── (auth)/           # 인증 관련 라우트 그룹
    │   ├── (service)/        # 서비스 관련 라우트 그룹
    │   ├── api/              # API 라우트 핸들러
    │   ├── favicon.ico       # 파비콘
    │   ├── layout.tsx        # 루트 레이아웃
    │   └── page.tsx          # 홈 페이지
    ├── components/           # 재사용 가능한 UI 컴포넌트
    │   ├── atoms/            # 원자 단위 최소 컴포넌트
    │   ├── molecules/        # 분자 단위 컴포넌트 조합
    │   └── organisms/        # 유기체 단위 큰 UI 블록
    ├── domains/              # 도메인별 비즈니스 로직
    │   ├── auth/             # 인증 및 인가 도메인
    │   ├── image/            # 이미지 도메인
    │   ├── insight/          # 지식 도메인
    │   ├── member/           # 회원 도메인
    │   ├── profile/          # 프로필 도메인
    │   ├── progress/         # 학습 이력 도메인
    │   └── quiz/             # 퀴즈 도메인
    ├── lib/                  # 공용 라이브러리와 유틸리티
    │   ├── apis/             # API 관련 유틸리티
    │   ├── constants/        # 공용 상수
    │   ├── cookie/           # 쿠키 관리 유틸리티
    │   ├── errors/           # 공용 에러
    │   ├── models/           # 공용 데이터 모델
    │   ├── providers/        # Context Providers
    │   ├── types/            # 공용 타입
    │   └── utils/            # 공용 유틸리티 함수
    └── styles/               # 전역 및 모듈 스타일
        ├── global.css        # 글로벌 스타일
        ├── media.css         # 미디어 쿼리 정의
        ├── reset.css         # 브라우저 기본 스타일 초기화
        ├── theme.css         # 테마 변수 정의
        └── variables.css     # CSS 변수 모음

```

---

## ⚒️ 협업 및 관리

- Git / GitHub를 통한 버전 관리
- **Git Flow** 전략 사용
- PR 리뷰를 통한 코드 품질 관리

---

## 🚀 배포

- Vercel을 통한 자동화된 CI/CD
  - Push/Merge 시 자동 빌드 및 배포

---

## 👤 작성자

- **Author / Maintainer:** [이재윤](https://github.com/ggalmury)

---
