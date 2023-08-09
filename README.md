# CODERE CHALLENGE
## Description
,

Features:
TBD



## Quickstart (Mac)

Assuming Git and Homebrew installed:

```bash
# install NVM and NodeJS LTS (skip if already installed)
brew install nvm
nvm install --lts && nvm use --lts

# clone the project
git clone git@github.com:facundorosonovich/codere-challenge.git
cd codere-challenge

# install dependencies
yarn install

# install the playwright browser binaries
npx playwright install

# run the tests
npx playwright test

# if you want, open the report
npx playwright show-report
```

This will execute all the tests in the configured browsers: Chrome
