# Example MasterMind Game

The MasterMind Game generated using the [Template React App][template-react-app].

Mastermind is a classic two-player code-breaking game where one player, \
the Codemaker, creates a secret code, and the other player, the Codebreaker, tries to guess the code. \
In this version, you are competing against yourself to crack the code before running out of attempts.

After submitting a guess, there are three possibilities to acquaint yourself with:

1. A black circle with a checkmark indicates that a shape is in the solution and in the correct position.
1. A white circle with an exclamation mark indicates that a shape
is the solution but in the wrong position.
1. Nothing is shown - this indicates that the shape is not in the solution


The primary goal for this application was to showcase the utility of the React template app that this was generated from. \
As a secondary goal, we thought it would be great to create a MasterMind game accommodating those with color blindness.

Play here at [MasterMind][]

## Structure

### `state/`

This directory manages the app state.
It exports utilities to interact with the app state and
it should be the only directory to know about the store's implementation.

This is where both the Dexie database and Redux store lives.

### `ui/`

This is for presentational building block components.
It should not import any utilities from `views/` or `state/` or know anything about routes.

#### `components/`

This is for React components that are not tied to the state.
This directory may include things like buttons, cards, tooltips, etc.

#### `emotion/`

This is for Emotion styles that may be shared between components.

This directory may include things like typography styles, error color styling, etc.

#### `icons/`

This is for React icon components.

Components generated here will use the `SvgIcon` component.

### `views/`

This is for connected and routed components.
It can import from `ui/` and `state/` as needed.

Components in this directory will often be tied to routes, such as pages.

## Scripts

### Generate: `npm run generate:<type> -- [name]`

To generate new code, run one of the following:

- `npm run generate:component -- foo-bar`
  - Generates a generic UI component under `src/ui/components/`
  - Updates `src/ui/components/index.ts`
- `npm run generate:emotion -- foo-bar`
  - Generates an Emotion styles file under `src/ui/emotion/`
  - Updates `src/ui/emotion/index.ts`
- `npm run generate:icon -- foo-bar`
  - Generates a React icon component under `src/ui/icons/`
  - Appends `*Icon` to the name of the component
  - Updates `src/ui/icons/index.ts`
- `npm run generate:view -- foo-bar`
  - Generates a view component under `src/views/`
  - Appends `*View` to the name of the component

Read about the structure to learn more about the different components and code.

### Build: `npm run build`

To build the app, run `npm run build`.

The generated output will be in the `dist/` directory.

### Clean: `npm run clean`

To clean `.cache`, `.tmp`, `lib`, `dist`, and `build` files and directories.

### Format: `npm run format`

To format the source code, run `npm run format`.

### Serve: `npm start`

To serve the app, run `npm start`.

The app will be updated automatically as code changes are saved.

To simulate a production environment, run `npm run start:production`.
Note that the `webpack-dev-server` is not intended for use in production environments.

### Test: `npm test`

To test the app, run `npm test`.

[template-react-app]: https://github.com/utori-dev/template-react-app-prototype
[mastermind-game]: https://github.com/utori-dev/example-mastermind-game