import * as React from 'react';
import { SettingsState, PegType } from '../../../state';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ShapeSelector, { ShapeContainer } from '../ShapeSelector';

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

const ShapesContainer = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  svg {
    padding: 1rem;
    scale: 2;
  }
`;

const GameCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  margin: 1rem;
  background-color: white;
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
  const { rows, columns, shapes, currentIndex = rows - 1, peg } = props;

  /**
   * Creating a default matrix for now.
   * This matrix will ultimately come from the redux board state
   */
  const boardMatrix = Array.from(Array(rows), () => Array.from(Array(columns)));
  const [boardState, setBoardState] = React.useState(boardMatrix);

  React.useEffect(() => {
    setBoardState(boardMatrix);
  }, [rows, columns, shapes]);

  /**
   * cloning board state
   */
  const boardStateClone = boardState.slice(0);

  /**
   * Function to update the board matrix.
   * @TODO will need to figure out the best way to pass shapeIndex to component
   * @param row
   * @param col
   * @param shapeIndex
   * @returns
   */
  const handleOnClick = (row: number, col: number, shapeIndex: number = 0) => {
    console.log('handleOnClick', { row, col, shapeIndex });
    if (row !== currentIndex) return;
    const targetCell = boardStateClone[row][col];

    if (targetCell === shapeIndex) {
      boardStateClone[row][col] = undefined;
    } else {
      boardStateClone[row][col] = 'a';
    }
    setBoardState(() => boardStateClone);
  };

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
                    onClick={() => handleOnClick(rowIndex, colIndex)}
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
      <ShapeContainer shapes={shapes}/>
    </>
  );
};

export default Board;
