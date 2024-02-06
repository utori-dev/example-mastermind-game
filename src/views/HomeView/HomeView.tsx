import * as React from 'react';
import {
  DialogKey,
  SettingsState,
  closeDialog,
  openRulesDialog,
  useDialogIsOpen,
  useSettings,
} from '../../state';
import { Button, Dialog, Board } from '../../ui/components';

/**
 * Props for the HomeView component.
 */
export type HomeViewProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * @todo Add description
 *
 * @param props
 * @returns
 */
const HomeView: React.FC<HomeViewProps> = (props) => {
  const { ...forwardedProps } = props;
  const gameSettings = useSettings();
  const [peg, setPeg] = React.useState('' as any);

  const creditsRulesOpen = useDialogIsOpen(DialogKey.RULES);

  return (
    <div>
      <Button variant="primary" label="Show Rules" onClick={openRulesDialog} />
      <Dialog open={creditsRulesOpen} onClose={closeDialog}>
        <Dialog.Title>MasterMind Rules</Dialog.Title>
        <Dialog.Content>
          <section>
            <h2>Objective of Mastermind</h2>
            <p>
              The objective of Mastermind is to figure out your code in less
              turns than your opponent.
              <br />
              In this case, you are competing against yourself to crack the code
              before running out of tries!
            </p>
          </section>
          <section>
            <h2>Setup</h2>
            <p>
              Based on the difficulty chosen, a sequence of 4-8 colored shapes
              will be randomly generated.
              <br />
              This setting, along with the number of rows, columns, and checks
              may be altered.
            </p>
          </section>
          <section>
            <h2>Gameplay</h2>
            <p>
              You, the Codebreaker, hazards a guess by filling out a row with
              shapes.
              <br />
              After submitting a solution, the key next to the board will
              provide useful information toward solving the code. <br />
              Here's what it means:
            </p>
            <ul>
              <li>
                A black circle with a checkmark indicates that a shape is in the
                solution and in the correct position.
              </li>
              <li>
                A white circle with an exclamation mark indicates that a shape
                is the solution but in the wrong position.
              </li>
            </ul>
          </section>
          <section>
            <h2>Winning</h2>
            <p>
              If you decipher the code before running out of guesses, you win!
            </p>
            <footer>
              Read More at:&nbsp;
              <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">
                Wikipedia/Mastermind
              </a>
            </footer>
          </section>
        </Dialog.Content>
      </Dialog>
<Board {...gameSettings} peg={peg}/>
      {/** @TODO consider adding Board UI Here
       */}
    </div>
  );
};

export default HomeView;
