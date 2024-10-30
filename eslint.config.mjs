import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: ["dist/**", "coverage/**"], // Игнорирование всех файлов в dist и coverage
  },
  {
    files: ["src/**/*.js"], // Применение правил только к коду в src
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  {
    files: ["**/__tests__/**"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];


