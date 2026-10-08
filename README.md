# Playwright MCP AI 1 — UI & API Test Automation Framework

A TypeScript-based test automation framework built with **Playwright**, supporting **Web UI testing** for Dummy web app - DemoWebShop .

Current setup includes below things: -
1- UI Automation library = Playwright.

2- Programming language used = Typescript.

3- Model used = POM for UI tests.

4- AI tools used: -

A- CommandCode (As AI agent mainly for AI assistance and execution )

B- OpenRouter (As LLM model - free models are used as brain for gathering knowledge)

C- Playwright MCP CLI  - To enable communication or interactions between AI tools and underlying project or local system, APPs etc.


---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Setup & Installation](#setup--installation)
4. [Project Structure](#project-structure)
5. [Environment Configuration](#environment-configuration)
6. [Running Tests](#running-tests)
7. [Test Tags & Filtering](#test-tags--filtering)
8. [Reporting](#reporting)
9. [Architecture Patterns](#architecture-patterns)
10. [Coding Conventions](#coding-conventions)
11. [CI/CD](#cicd)

---

## Project Overview

This framework automates testing for the **Demo Web Shop** application (https://demowebshop.tricentis.com/) and the **FakeStore API** (https://fakestoreapi.com).

| Layer      | Description                                         |
|------------|----------------------------------------------------|
| **Web**    | Browser-driven UI tests using Page Object Model    |
| **API**    | REST API tests using Playwright's `request` fixture|
| **DB**     | Database validation tests (MySQL)                  |

---

## Prerequisites

- **Node.js** 18+ (LTS)
- **npm** (comes with Node.js)
- **Windows/macOS/Linux** terminal with PowerShell or Bash

---

## Setup & Installation

### 1. Clone the repository

```bash
git clone <repo-url>
cd PLAYWRIGHT_MCP_AI_1
```

### 2. Install dependencies

```bash
npm install
```

Or use the provided setup script on Windows:

```bat
env_setup.bat
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

### 4. Configure environment variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

Edit `.env` with your application URL, credentials, and other settings.

---

## Project Structure

```
playwright-mcp-ai-1/
├── .env                          # Environment variables (secrets, URLs) — NOT committed
├── .env.example                  # Template for .env — committed to repo
├── .gitignore                    # Git ignore rules
├── .github/workflows/            # CI/CD pipeline definitions
├── api/
│   ├── endpoints/routes.ts       # Centralized API route definitions
│   └── schemas/                  # JSON schemas for API response validation
│       └── PET/                  # Pet store schema folder
│       └── STORE/                # Store order schema folder
│       └── USER/                 # User schema folder
├── fixtures/
│   └── pageFixtures.ts           # Custom Playwright fixtures exposing Page Objects
├── pages/                        # Page Object Model classes (one class per file)
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── MyAccountPage.ts
│   ├── ProductPage.ts
│   ├── RegisterPage.ts
│   └── WishlistPage.ts
├── playwright.config.ts          # Playwright configuration (timeout, reporters, projects)
├── playwright-mcp-context.md     # Framework conventions & guidelines (knowledge base)
├── package.json                  # Dependencies and npm scripts
├── prompts/                      # Test scenario prompt files (generation drivers)
│   ├── test.md
│   └── utilitis_prompt.md
├── testdata/                     # Test data files (JSON) for data-driven tests
│   ├── AddToCart_TestData.json
│   ├── Login_TestData.json
│   ├── ProductSearch_TestData.json
│   └── Register_TestData.json
├── tests/
│   ├── example.spec.ts           # Default Playwright example test
│   ├── api/                      # API test specs
│   │   └── README.md
│   ├── web/                      # Web UI test specs
│   │   ├── add-to-cart.spec.ts
│   │   ├── checkout.spec.ts
│   │   ├── login.spec.ts
│   │   ├── logout.spec.ts
│   │   ├── my-account.spec.ts
│   │   ├── order-placement.spec.ts
│   │   ├── product-details.spec.ts
│   │   ├── product-search.spec.ts
│   │   ├── registration.spec.ts
│   │   ├── wishlist.spec.ts
│   │   └── README.md
│   └── db/                       # Database test specs
│       └── README.md
├── tsconfig.json                 # TypeScript configuration (strict mode)
├── utils/                        # Reusable utility classes
│   ├── CustomReporter.ts         # Custom HTML reporter with charts & dashboards
│   ├── DataReader.ts             # JSON/CSV/Excel data reader utility
│   ├── dataGenerator.ts          # Faker-based random data generator
│   └── helper.ts                 # Fixed test data helper (credentials, addresses)
├── custom-report/                # Generated custom HTML reports (gitignored)
├── reports/                      # Playwright HTML reports (gitignored)
├── allure-results/               # Allure report data (gitignored)
└── test-results/                 # Test result artifacts (gitignored)

```

---

## Environment Configuration

All environment-specific values are stored in `.env`. Create a `.env` file from `.env.example`:

| Variable             | Description                                | Default                  |
|----------------------|--------------------------------------------|--------------------------|
| `WEB_APP_URL`        | Web application base URL                   | https://demowebshop.tricentis.com/ |
| `APP_EMAIL`          | Application login email                    | (your credentials)       |
| `APP_PASSWORD`       | Application login password                 | (your credentials)       |
| `API_BASE_URL`       | API base URL                               | https://fakestoreapi.com |
| `USERNAME`           | API user username                          | mor_2314                 |
| `PASSWORD`           | API user password                          | (your password)          |
| `USER_ID`            | API user ID                                | 1                        |
| `PRODUCT_ID`         | API product ID                             | 1                        |
| `CART_ID`            | API cart ID                                | 1                        |
| `LIMIT`              | API query limit                            | 3                        |
| `ADMIN_USERNAME`     | Admin panel username                       | admin                    |
| `ADMIN_PASSWORD`     | Admin panel password                       | admin                    |
| `DB_HOST`            | Database host                              | localhost                |
| `DB_PORT`            | Database port                              | 3306                     |
| `DB_USER`            | Database user                              | root                     |
| `DB_PASSWORD`        | Database password                          |                          |
| `DB_NAME`            | Database name                              | openshop                 |

> **Never commit your `.env` file. Never hard-code secrets in source files.**

---

## Running Tests

### Via npm scripts (tag-based)

```bash
# Run only @master tagged tests (default config grep)
npx playwright test

# Run all API tests
npm run test:api

# Run all Web tests
npm run test:web

# Run master suite
npm run test:master

# Run sanity tests
npm run test:sanity

# Run regression tests
npm run test:regression

# Run e2e tests
npm run test:e2e

# Run data-driven tests
npm run test:datadriven
```

### Run a specific test file

```bash
npx playwright test tests/web/login.spec.ts
```

### Run with a specific tag

```bash
npx playwright test --grep @sanity
npx playwright test --grep @master
```

### Run in headed mode (watch the browser)

```bash
npm run test:master:headed
npx playwright test tests/web/login.spec.ts --headed
```

### Debug mode

```bash
npm run test:sanity:debug
npx playwright test tests/web/login.spec.ts --debug
```

---

## Test Tags & Filtering

Tests are tagged within their titles. The framework uses these tags:

| Tag           | Purpose                                      |
|---------------|----------------------------------------------|
| `@master`     | Default / core test suite (default grep)     |
| `@sanity`     | Critical smoke tests                         |
| `@regression` | Full regression coverage                     |
| `@datadriven` | Tests that use data from `testdata/` files   |
| `@end-to-end` | Full user journeys spanning multiple steps   |
| `@web`        | Web UI tests                                 |
| `@api`        | API tests                                    |

The default `grep` in `playwright.config.ts` is set to `/@master/`, so running `npx playwright test` executes only `@master`-tagged tests.

---

## Reporting

The framework generates multiple report formats:

| Reporter       | Output Location    | Description                          |
|----------------|--------------------|--------------------------------------|
| Console (list) | Terminal           | Real-time test progress              |
| HTML           | `reports/`         | Standard Playwright HTML report      |
| JUnit XML      | `reports/results.xml` | JUnit XML for CI integration     |
| Custom         | `custom-report/`   | Rich HTML report with charts (CustomReporter.ts) |
| Allure         | `allure-results/`  | Allure report data                   |

### View the Custom Report

Open `custom-report/index.html` in a browser after a test run. It includes:
- Pass/fail summary dashboard
- Interactive charts (status, severity, duration, trend)
- Step-by-step test details with screenshots, videos, and traces
- Filter by status and priority

### View the Standard HTML Report

```bash
npx playwright show-report
```

---

## Architecture Patterns

This framework follows the **Page Object Model (POM)** pattern for web tests and uses **custom fixtures** to inject page objects.

### Web Test Flow

```
Test Spec (tests/web/)
  → Custom Fixture (fixtures/pageFixtures.ts)
    → Page Object (pages/*.ts)
      → Test Data (testdata/*.json / utils/helper.ts / utils/dataGenerator.ts)
```

### API Test Flow

```
Test Spec (tests/api/)
  → Routes (api/endpoints/routes.ts)
  → Schemas (api/schemas/)
  → Data Reader (utils/DataReader.ts)
  → Random Data Util (utils/dataGenerator.ts)
```

### Key Conventions

- **Web tests** import from `../../fixtures/pageFixtures` (not `@playwright/test` directly)
- **API tests** import from `@playwright/test` directly
- **Page Objects** are PascalCase (e.g., `LoginPage.ts`)
- **Test specs** are kebab-case (e.g., `login.spec.ts`)
- **Tests use `test.step()`** to organize multi-step flows
- **Assertions use `expect()`** from Playwright
- **Locator strategy**: `getByRole()` → `getByLabel()` → `getByText()` → `getByPlaceholder()` → CSS selectors

See `playwright-mcp-context.md` for the full framework conventions and coding guidelines.

---

## Coding Conventions

### TypeScript

- Strict mode is enabled (`tsconfig.json`)
- All code is TypeScript with proper typing
- Avoid `any`; prefer explicit types

### Page Objects (`pages/`)

- One class per file, `export class XxxPage`
- Private readonly fields for page and locators
- JSDoc comments on every public method
- Return `Promise<void>` for actions, `Promise<boolean>` for checks

### Test Specs

- JSDoc header with `Test Case`, `Tags`, `Steps`
- Test title includes tags: `test('Description @master @sanity', ...)`
- Multi-step flows use `test.step('N) description', async () => { ... })`

### Utilities (`utils/`)

- `Helper` — fixed/static test data (credentials, addresses)
- `RandomDataUtil` — Faker-based dynamic data generation
- `DataProvider` — reads JSON/CSV/Excel test data files
- `CustomReporter` — custom HTML reporting with charts

---

## CI/CD

This project includes a GitHub Actions workflow at `.github/workflows/playwright.yml` that:

1. Triggers on push and pull request to `main` / `master`
2. Sets up Node.js LTS
3. Installs dependencies (`npm ci`)
4. Installs Playwright browsers (`npx playwright install --with-deps`)
5. Runs all Playwright tests
6. Uploads the Playwright HTML report as an artifact

---

## Git Branching & Commit Workflow

- **Branch**: `main` (default)
- **Commit message format**: Use clear, descriptive messages
- **`package-lock.json`** is committed to lock dependency versions
- **`.env`** is never committed — use `.env.example` as the template

---

## Troubleshooting

### Browser not found

```bash
npx playwright install --with-deps
```

### Tests fail with "page is not defined"

Ensure you're importing from `../../fixtures/pageFixtures` in web tests.

### Environment variables not loading

Verify `.env` exists and contains all required variables. Run `cp .env.example .env` if needed.

### Custom report not generating

Check that `custom-report/` directory is writable. The reporter creates it automatically if missing.
