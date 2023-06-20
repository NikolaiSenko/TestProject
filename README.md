## The project start

```
npm install - install all the dependencies
npm run start:dev or npm run start:dev:vite - start of the json server + frontend in development mode
```

---

## Scripts

- `npm run start` - Start the project frontend using webpack dev server
- `npm run start:vite` - Start the project frontend using vite
- `npm run start:dev` - Start the project frontend using webpack dev server and start of the backend
- `npm run start:dev:vite` - Start the project frontend using vite + backend
- `npm run start:dev:server` - Start of the project backend
- `npm run build:prod` - Build in the production mode
- `npm run build:dev` - Build in the development mode
- `npm run lint:ts` - Linting of typescript files using eslint
- `npm run lint:ts:fix` - Fixing of typescript files using eslint
- `npm run lint:scss` - Linting of css files using styleling
- `npm run lint:scss:fix` - Fixing of css files using styleling
- `npm run test:unit` - Start of unit tests
- `npm run test:ui` - Start of screenshot tests with loki
- `npm run test:ui:ok` - Acceprting of new screenshots via loki
- `npm run test:ui:report` - Creating full report fo screenshot tests
- `npm run test:ui:json` - Creating JSON report fo screenshot tests
- `npm run test:ui:html` - Creating HTML report fo screenshot tests
- `npm run storybook` - Start of Storybook
- `npm run storybook:build` - Storybook build
- `npm run generate:slice` - Script for creating FSD slices

---

## Project architecture

The project is written in accordance with the Feature sliced design methodology

Documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Translating

The project uses the i18next library to work with translations.
Files with translations are stored in public/locales.

For comfortable work, it is recommended to install the plugin for webstorm/vscode

i18next documentation - [https://react.i18next.com/](https://react.i18next.com/)

---

## Tests

There are 4 types of tests in the project:
1)Jest unit tests - `npm run test:unit` 2) Components tests via React testing library -`npm run test:unit` 3) Screenshot tests via loki `npm run test:ui` 4) e2e tests via Cypress `npm run test:e2e`

More details - [Testing documentation](/docs/tests.md)

---

## Linting

Eslint and Styleling were used in the project

Also, for strict control of the main architectural principles,
the own eslint plugin _eslint-plugin-senko-plugin_ is used,
which contains 3 rules

1. path-checker - prohibits the use of absolute imports within a single module
2. layer-imports - checks the correctness of using layers from the FSD point of view
   (for example, widgets cannot be used in features and entitites)
3. public-api-imports - allows to make imports from other modules only via public api (contains autofix).

##### Linters start

- `npm run lint:ts` - Linting of typescript files using eslint
- `npm run lint:ts:fix` - Fixing of typescript files using eslint
- `npm run lint:scss` - Linting of css files using styleling
- `npm run lint:scss:fix` - Fixing of css files using styleling

---

## Storybook

The project describes story cases for each component.
Requests to the server are mocked using storybook-addon-mock.

The file with the stories is created next to the component with the .stories.tsx extension

To run Storybook use the command:

- `npm run storybook`

More details - [Storybook](/docs/storybook.md)

For example:

```typescript jsx
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Button, ButtonSize, ButtonTheme } from './Button'
import { Theme } from '@/shared/const/theme'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
}
```

---

## Project configureation

There are 2 configs in the project fro build:

1. Webpack - ./config/build
2. vite - vite.config.ts

Both builders are configured for main features of the app

All the configurations are located in /config

- /config/babel - babel
- /config/build - webpack
- /config/jest - tests
- /config/storybook - storybook

`scripts` folder contains different scripts for refactroring, easyness of code writing, wrtiting reports etc.

---

## CI pipeline and pre commit hooks

Github actions configuration are located in /.github/workflows.
CI pipeline contains all the tests, project and storybook building process and linting

---

### Data workflow

The data workflow is provided by redux toolkit.

Server requests are being held with the help of [RTK query](/src/shared/api/rtkApi.ts)

For asynchronic connection of the reducers [DynamicModuleLoader] is being used
(/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
