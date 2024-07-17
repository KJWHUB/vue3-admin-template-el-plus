# Vue3 Admin Template

본 템플릿은 Vue 3와 Vite를 사용하여 구성된 어드민 템플릿입니다. 이 템플릿은 [Feature-Sliced Design (FSD)](https://feature-sliced.design/docs/get-started/overview) 아키텍처를 적용하였습니다.

## 주요 특징

- **로그인 화면**과 **메뉴 화면**이 기본적으로 구성되어 있습니다.
- **Mock 서버**와의 통신 방법 및 **라우터 구성** 방법을 학습할 수 있습니다.
- api 를 이용한 crud 구축의 예제가 있습니다.

## 로컬 개발 시작하기

개발서버 실행

```
npm run dev
```

### 외부 api url 설정

api url 은 env 파일의 VITE_APP_API_URL 의 값으로 지정됩니다.
production, development 에 각각 지정하여 개발환경과 실제 프로덕션 환경을 구분할수 있습니다.

api와 함께 개발시 local api url 을 할당할수 있습니다.

프로젝트 루트 경로에 `.env.development.local` 파일을 추가하고 아래와 같이 API URL을 설정하세요. (\* 절대 .env.development.local 를 git 에 추가하면 안됩니다.)

```env
# API URL 설정 예시
VITE_APP_API_URL=http://localhost:9999
```
