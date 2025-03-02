module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'default-case-last': 0,
    'react/prop-types': 0,
    'no-extra-semi': 'error',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], // 확장자로 js와 jsx ts tsx 허용하도록 수정
    'arrow-parens': ['warn', 'as-needed'], // 화살표 함수의 파라미터가 하나일때 괄호 생략
    'no-unused-vars': 0, // 사용하지 않는 변수가 있을때 빌드에러가 나던 규칙 해제
    '@typescript-eslint/no-unused-vars': 0,
    'no-console': ['warn', { allow: ['error', 'warn'] }], // 콘솔을 쓰면 에러가 나던 규칙 해제
    'import/prefer-default-export': 0, // export const 문을 쓸때 에러를 내는 규칙 해제
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        enableDangerousAutofixThisMayCauseInfiniteLoops: true,
      },
    ], // hooks의 의존성배열이 충분하지 않을때 강제로 의존성을 추가하는 규칙을 완화
    'react/jsx-props-no-spreading': [0, { custom: 'ignore' }], // props spreading을 허용하지 않는 규칙 해제
    'linebreak-style': 0,
    'prettier/prettier': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/order': [
      'error',
      {
        groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    'no-shadow': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react/require-default-props': 0,
    'react/no-unescaped-entities': 0,
    'react/jsx-key': 1,
    allowAfterThis: 0,
    'no-underscore-dangle': 0,
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'default-case': 0,
    'class-methods-use-this': 'off',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'no-nested-ternary': 0,
    'lines-between-class-members': 0,
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 1,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['htmlFor'],
      },
    ],
    camelcase: 'warn',
  },
};
