import * as React from 'react';
import { PegType } from '../../../state';
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
  shapes: number;
};

/**
 * @todo Add description
 *
 * @param props
 * @returns
 */
const ShapeSelector: React.FC<ShapeSelectorProps> = (props) => {
  const { peg } = props;

  return peg && pegObject[peg];
};

export const ShapeContainer: React.FC<ShapeContainerProps> = (props) => {
  const { shapes } = props;

  const shapesArray = Object.entries(pegObject)
    .map(([property, peg], index) => {
      return (
        <button key={property} value={property}>
          {peg}
        </button>
      );
    })
    .slice(0, shapes);

  return (
    <>
      {shapesArray.map((peg, index) => {
        return peg;
      })}
    </>
  );
};

export default ShapeSelector;
