export default {
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 새로운 기능 추가/변경/삭제
        'fix', // 버그 수정
        'docs', // 문서/주석 등 문서성 변경
        'style', // 포맷/세미콜론/린트 수정 등 로직 비영향 스타일 변경
        'refactor', // 로직 유지, 구조 개선/이름변경/파일이동 등
        'test', // 테스트 코드 추가/수정
        'chore', // 빌드/패키지/CI/설정
      ],
    ],

    'type-case': [2, 'always', 'lower-case'],

    'subject-empty': [2, 'never'],

    'subject-full-stop': [2, 'never'],

    'header-max-length': [2, 'always', 100],
  },
}
