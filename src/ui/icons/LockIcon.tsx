import * as React from 'react';
import SvgIcon, { SvgIconProps } from './SvgIcon';

/**
 * Props for the LockIcon
 */
export type LockIconProps = Omit<SvgIconProps, 'children'>;

/**
 * @todo Add description
 *
 * @param props
 * @returns
 */
const LockIcon: React.FC<LockIconProps> = (props) => {
  const { /* extract custom props here */ ...forwardedProps } = props;

  return (
    <SvgIcon {...forwardedProps}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </SvgIcon>
  );
};

export default LockIcon;
