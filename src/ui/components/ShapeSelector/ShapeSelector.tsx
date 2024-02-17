import * as React from 'react';
import { PegType } from '../../../state';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Button from '../Button';
import {
  DarkModeIcon,
  GearIcon,
  UmbrellaIcon,
  RaindropIcon,
  MusicIcon,
  BellIcon,
  CloudIcon,
  HeadphonesIcon,
  WatchIcon,
  CoffeeIcon,
  FeatherIcon,
  LockIcon,
} from '../../icons';

const ShapeContainerDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  button {
    margin: 1rem;
  }
  svg {
    scale: 2;
  }
`;

/**
 * Props for the ShapeSelector
 */
const pegObject = {
  a: <GearIcon />,
  b: <DarkModeIcon />,
  c: <UmbrellaIcon />,
  d: <RaindropIcon />,
  e: <MusicIcon />,
  f: <BellIcon />,
  g: <CloudIcon />,
  h: <HeadphonesIcon />,
  i: <WatchIcon />,
  j: <CoffeeIcon />,
  k: <FeatherIcon />,
  l: <LockIcon />,
};

export type ShapeSelectorProps = React.HTMLAttributes<HTMLDivElement> & PegType;

export type ShapeContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Number of shapes from settings
   */
  shapes: number;

  /**
   * Current peg property
   */
  currentPeg: PegType | '';

  /**
   * Function to set the current peg
   * @param event
   * @returns
   */
  handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

/**
 * @todo Add description
 *
 * @param props
 * @returns
 */
export const ShapeSelector: React.FC<ShapeSelectorProps> = (props) => {
  const { peg } = props;

  return peg && pegObject[peg];
};

/**
 *
 * @param props
 * @returns
 */
export const ShapeContainer: React.FC<ShapeContainerProps> = (props) => {
  const { shapes, currentPeg, handleOnClick } = props;

  return (
    <ShapeContainerDiv>
      {Object.entries(pegObject)
        .map(([property, peg], index) => {
          return (
            <Button
              iconOnly
              icon={peg}
              label={property}
              key={`${index}-property`}
              value={property}
              onClick={handleOnClick}
              css={css`
                ${currentPeg === property ? 'background-color: gray' : ''}
              `}
            />
          );
        })
        .slice(0, shapes)}
    </ShapeContainerDiv>
  );
};

export default ShapeContainer;
