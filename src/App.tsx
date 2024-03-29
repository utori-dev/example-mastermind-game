import * as React from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { text } from './ui/emotion';
import {
  DialogKey,
  closeDialog,
  openCreditsDialog,
  openSettingsDialog,
  toggleThemeModeAction,
  useDialogIsOpen,
  useThemeMode,
  useSettings,
  setSettingsAction,
} from './state';
import { Button, Dialog, Header, Main, Slider } from './ui/components';
import { DarkModeIcon, InfoIcon, LightModeIcon, GearIcon } from './ui/icons';
import { HomeView } from './views';

const AppRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;

  background: var(--color--background);
  color: var(--color--on-background);

  ${text.md}
`;

const Section = styled.section`
  min-width: 20rem;
  padding: 1rem;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

function App(): React.ReactElement | null {
  const mode = useThemeMode();
  const gameSettings = useSettings();
  const creditsDialogOpen = useDialogIsOpen(DialogKey.CREDITS);
  const settingDialogOpen = useDialogIsOpen(DialogKey.SETTINGS);

  const [settings, setSettings] = React.useState(gameSettings);

  /**
   * Updating the settings object
   * @param event
   */
  const doHandleSettingChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = event.target;

    setSettings((previousState) => {
      return {
        ...previousState,
        [id]: Number(value),
      };
    });
  };

  /**
   * Function to submit the user's settings to be saved to state
   */
  const doHandleSubmit = () => {
    setSettingsAction(settings);
    closeDialog();
  };

  React.useEffect(() => {
    document.body.className = clsx({
      'dark-mode': mode === 'dark',
      'light-mode': mode === 'light',
    });
  }, [mode]);

  return (
    <AppRoot>
      <Header>
        <Header.Title to="/">Prototype React App</Header.Title>
        <Header.Actions>
          <Button
            iconOnly
            label="Toggle Light and Dark Mode"
            onClick={toggleThemeModeAction}
            icon={mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          />
          <Button
            iconOnly
            label="Settings"
            onClick={openSettingsDialog}
            icon={<GearIcon />}
          />
          <Button
            iconOnly
            label="View Credits"
            onClick={openCreditsDialog}
            icon={<InfoIcon />}
          />
        </Header.Actions>
      </Header>
      <Main>
        <HomeView />
      </Main>

      {/* Settings dialog */}
      <Dialog open={settingDialogOpen} onClose={closeDialog}>
        <Dialog.Title>Settings</Dialog.Title>
        <Dialog.Content>
          <Section>
            <h2>Number of Rows</h2>
            <p>
              Adjust the number of rows in a game.
              <br />A higher value indicates a higher difficulty.
            </p>
            <Slider
              color="success"
              value={settings.rows}
              min={4}
              max={10}
              id="rows"
              doHandleChange={doHandleSettingChange}
            />
          </Section>
          <Section>
            <h2>Number of Columns</h2>
            <p>
              Adjust the number of columns in a game.
              <br />A higher value indicates a higher difficulty.
            </p>
            <Slider
              color="success"
              value={settings.columns}
              min={4}
              max={10}
              id="columns"
              doHandleChange={doHandleSettingChange}
            />
          </Section>
          <Section>
            <h2>Number of Shapes</h2>
            <p>
              Adjust the number of colors in a game.
              <br />A higher value indicates a higher difficulty.
            </p>
            <Slider
              color="success"
              value={settings.shapes}
              min={4}
              max={10}
              id="shapes"
              doHandleChange={doHandleSettingChange}
            />
          </Section>
          <ActionContainer>
            <Button
              variant="primary"
              type="submit"
              label="Save"
              onClick={doHandleSubmit}
            />
          </ActionContainer>
        </Dialog.Content>
      </Dialog>

      {/* Credits dialog */}
      <Dialog open={creditsDialogOpen} onClose={closeDialog}>
        <Dialog.Title>Credits</Dialog.Title>
        <Dialog.Content>
          <p>
            This React app prototype template was created by&nbsp;
            <a href="https://github.com/chellimiller">Michelle Miller</a>{' '}
            and&nbsp;
            <a href="https://github.com/JaredBourget">Jared Bourget</a>.
          </p>
          <p>
            Beyond React, we used the following libraries:
            <ul>
              <li>
                <a href="https://emotion.sh/">Emotion</a> for styling
                components.
              </li>
              <li>
                <a href="https://floating-ui.com/">Floating UI</a> for dialogs
                and other poppers.
              </li>
              <li>
                <a href="https://feathericons.com/">Feather Icons</a> for icons.
              </li>
              <li>
                <a href="https://redux-toolkit.js.org/">Redux Toolkit</a> for
                managing page state and tree state.
              </li>
              <li>
                <a href="https://www.npmjs.com/package/clsx">clsx</a> for
                constructing class names.
              </li>
            </ul>
          </p>
          <p>
            The following libraries are also included:
            <ul>
              <li>
                <a href="https://github.com/sindresorhus/type-fest">
                  Type Fest
                </a>
                &nbsp; for utility types.
              </li>
              <li>
                <a href="https://reactrouter.com/en/main">React Router</a> for
                routing and navigation.
              </li>
              <li>
                <a href="https://usehooks-ts.com/">usehooks-ts</a> for common
                utility hooks.
              </li>
              <li>
                <a href="https://moment.github.io/luxon/">Luxon</a> for date and
                time manipulation.
              </li>
              <li>
                <a href="https://lodash.com/">lodash</a> for generic utilities.
              </li>
              <li>
                <a href="https://dexie.org/">Dexie</a> for persisted data tables
                that can be queried.
              </li>
            </ul>
          </p>
          <p>
            To learn more,&nbsp;
            <a href="https://github.com/utori-dev/template-react-app-prototype">
              view the project on GitHub!
            </a>
          </p>
        </Dialog.Content>
      </Dialog>
    </AppRoot>
  );
}

export default App;
