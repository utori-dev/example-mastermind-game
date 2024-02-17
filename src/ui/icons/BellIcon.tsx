import * as React from 'react';
import FeatherBaseIcon, { FeatherBaseIconProps } from './FeatherBaseIcon';

/**
 * Props for the BellIcon
 */
export type BellIconProps = Omit<FeatherBaseIconProps, 'children'>;

/**
 * @todo Add description
 *
 * @param props
 * @returns
 */
const BellIcon: React.FC<BellIconProps> = (props) => {
  const { /* extract custom props here */ ...forwardedProps } = props;

  return (
    <FeatherBaseIcon {...forwardedProps}>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </FeatherBaseIcon>
  );
};

export default BellIcon;
