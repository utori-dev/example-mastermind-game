import * as React from 'react';
import SvgIcon, { SvgIconProps } from './SvgIcon';

/**
 * Props for the HeadphonesIcon
 */
export type HeadphonesIconProps = Omit<SvgIconProps, 'children'>;

/**
 * @todo Add description
 *
 * @param props
 * @returns
 */
const HeadphonesIcon: React.FC<HeadphonesIconProps> = (props) => {
  const { /* extract custom props here */ ...forwardedProps } = props;

  return (
    <SvgIcon {...forwardedProps}>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
    </SvgIcon>
  );
};

export default HeadphonesIcon;
