const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
  'src/**/*.{js,jsx,ts,tsx}',   // inclui apenas arquivos do código-fonte
  '!src/app/**',                // exclui o diretório app (usado em testes e2e)
  '!src/lib/registry.tsx',      // exclui arquivos específicos irrelevantes
  '!src/types/**',              // exclui tipos (TS)
  '!src/styles/**',             // exclui arquivos de estilo
  '!src/.next/**',              // exclui arquivos do build do Next.js
  '!src/**/index.ts',           // exclui arquivos index.ts
  '!**/*.d.ts',                 // exclui arquivos de tipos do TypeScript
  '!**/node_modules/**'         // exclui node_modules
  ],
  // https://github.com/styled-components/styled-components/issues/4081
  // v6 of styled-components doesn't inject styles in test environment
  // we should force it to use the browser version
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js'
  }
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
