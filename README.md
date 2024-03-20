![Playwright TypeScript](/playwright-typescript.png)

# playwright-typescript
[Playwright](https://playwright.dev/) is an open-source automation library for browser testing and web scraping developed by Microsoft.
</br>
[TypeScript](https://www.typescriptlang.org/) extends JavaScript by adding types to the language.

## Getting Started
1. Install [NodeJS](https://nodejs.org/en/) LTS
1. Open the root folder using [VS Code](https://code.visualstudio.com/)
   * If you use [GitHub Desktop](https://desktop.github.com/), select the "Open in Visual Studio" button
1. Open the [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)
1. Run `npm install` to install dependencies noted in [package.json](/package.json)
1. Run `npx playwright install` to install browsers
1. In the root folder create a new file called `.env`
1. Copy+Paste the following
   ```
   TEST_BASE_URL="https://the-internet.herokuapp.com"
   TEST_USER="tomsmith"
   TEST_PASS="SuperSecretPassword!"
   ```
1. Save

## Run Tests

### Local Runs
1. In the integrated terminal run `npx playwright test`
1. To view results run `npx playwright show-report`
   - Alternatively, in VS Code right-click `playwright-report\index.html` and select "Open with Live Server"

### GitHub Runs
1. [One-Time Setup] Open the `/settings` page for this repo.
   1. Select "Secrets and variables" > "Actions"
   1. Select "New repository secret"
   1. For "Name" enter `TEST_BASE_URL` and for "Secret" enter `https://the-internet.herokuapp.com`
   1. Select "New repository secret"
   1. For "Name" enter `TEST_USER` and for "Secret" enter `tomsmith`
   1. Select "New repository secret"
   1. For "Name" enter `TEST_PASS` and for "Secret" enter `SuperSecretPassword!`
1. When code is commited the GHA will run, see [Actions](https://github.com/kirbycope/playwright-typescript/actions)

----

<details>

<summary>Creating the First Test (Historical)</summary>

1. Run `npm init playwright@latest` to install the latest version of Playwright
   - Enter `y` if prompted.
1. Select "TypeScript" when prompted
1. Press [Enter] to use the default location, "tests"
1. Press [Y] to add GitHub Actions
1. Press [Y] to add Playwright browsers
   - This can be done later by running `npx playwright install`

</details>
