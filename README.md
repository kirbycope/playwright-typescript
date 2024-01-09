![Playwright TypeScript](/playwright-typescript.png)

# playwright-typescript
[Playwright](https://playwright.dev/) is an open-source automation library for browser testing and web scraping developed by Microsoft.
</br>
[TypeScript](https://www.typescriptlang.org/) extends JavaScript by adding types to the language.

## Getting Started
1. Install [NodeJS](https://nodejs.org/en/) LTS
1. Open the root folder using [VS Code](https://code.visualstudio.com/)
   * If you use [GitHub Desktop](https://desktop.github.com/), select the "Open in Visual Studio" button1. Open the [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)
1. Run `npm init playwright@latest` to install the latest version of Playwright
   - Enter `y` if prompted.
1. Select "TypeScript" when prompted
1. Press [Enter] to use the default location, "tests"
1. Press [Y] to add GitHub Actions
1. Press [Y] to add Playwright browsers
   - This can be done later by running `npx playwright install`

## Run Tests
1. In the integrated terminal run `npx playwright test`
1. In VS Code right-click `playwright-report\index.html` and select "Open with Live Server"
