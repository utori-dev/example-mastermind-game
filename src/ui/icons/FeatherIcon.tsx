import * as React from 'react';
import SvgIcon, { SvgIconProps } from './SvgIcon';

/**
 * Props for the FeatherIcon
 */
export type FeatherIconProps = Omit<SvgIconProps, 'children'>;

/**
 * @todo Add description
 *
 * @param props
 * @returns
 */
const FeatherIcon: React.FC<FeatherIconProps> = (props) => {
  const { /* extract custom props here */ ...forwardedProps } = props;

  return (
    <SvgIcon {...forwardedProps}>
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" />
      <line x1="17.5" y1="15" x2="9" y2="15" />
    </SvgIcon>
  );
};

export default FeatherIcon;
