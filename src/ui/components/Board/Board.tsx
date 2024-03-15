import * as React from 'react';
import { SettingsState, PegType } from '../../../state';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ShapeContainer, { ShapeSelector } from '../ShapeSelector';

/**
 * Props for the Board
 */
export type BoardProps = React.HTMLAttributes<HTMLDivElement> &
  SettingsState &
  PegType & {
    currentIndex?: number;
  };

const BoardContainer = styled.div`
  width: fit-content;
  margin: auto;
`;

const GameCircle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  margin: 1rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    scale: 1.5;
  }
`;

const GameBoard = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-top: 1px solid gray;
`;

/**
 * @todo Add description
 *
 * @param props
 * @returns
 */
const Board: React.FC<BoardProps> = (props) => {
  const { rows, columns, shapes, currentIndex = rows - 1 } = props;

  /**
   * Creating a default matrix for now.
   * This matrix will ultimately come from the redux board state
   */
  const boardMatrix = Array.from(Array(rows), () => Array.from(Array(columns)));
  const [boardState, setBoardState] = React.useState(boardMatrix);
  const [currentPeg, setCurrentPeg] = React.useState('' as PegType | '');

  React.useEffect(() => {
    setBoardState(boardMatrix);
  }, [rows, columns, shapes]);

  /**
   * cloning board state
   */
  const boardStateClone = boardState.slice(0);

  /**
   * Function to update the board matrix.
   * @param row
   * @param col
   * @param shapeIndex
   * @returns
   */
  const handleBoardOnClick = (row: number, col: number) => {
    if (row !== currentIndex) return;
    const targetCell = boardStateClone[row][col];

    if (targetCell === currentPeg) {
      boardStateClone[row][col] = '';
    } else {
      boardStateClone[row][col] = currentPeg;
    }
    setBoardState(() => boardStateClone);
  };

  const handleShapeOnClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { value } = event.currentTarget as HTMLButtonElement;
      /** @todo update type */
      setCurrentPeg(value as any);
    },
    []
  );

  return (
    <>
      <BoardContainer>
        {boardState.map((row, rowIndex) => {
          return (
            <GameBoard
              css={css`
                ${rowIndex === currentIndex
                  ? 'background-color: gray'
                  : 'background-color: light-gray'}
              `}
              key={`row-${rowIndex}`}
            >
              <>
                {row.map((column, colIndex) => (
                  <GameCircle
                    onClick={() => handleBoardOnClick(rowIndex, colIndex)}
                    key={`row-${colIndex}`}
                  >
                    <ShapeSelector peg={column} />
                  </GameCircle>
                ))}
                <div>KeyPeg container</div>
              </>
            </GameBoard>
          );
        })}
      </BoardContainer>
      <ShapeContainer
        shapes={shapes}
        currentPeg={currentPeg}
        handleOnClick={handleShapeOnClick}
      />
    </>
  );
};

export default Board;
