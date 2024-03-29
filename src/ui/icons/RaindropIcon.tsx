import * as React from 'react';
import SvgIcon, { SvgIconProps } from './SvgIcon';

/**
 * Props for the RaindropIcon
 */
export type RaindropIconProps = Omit<SvgIconProps, 'children'>;

/**
 * @todo Add description
 *
 * @param props
 * @returns
 */
const RaindropIcon: React.FC<RaindropIconProps> = (props) => {
  const { /* extract custom props here */ ...forwardedProps } = props;

  return (
    <SvgIcon {...forwardedProps}>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    </SvgIcon>
  );
};

export default RaindropIcon;
