import * as React from 'react';
import FeatherBaseIcon, { FeatherBaseIconProps } from './FeatherBaseIcon';

/**
 * Props for the CloudIcon
 */
export type CloudIconProps = Omit<FeatherBaseIconProps, 'children'>;

/**
 * @todo Add description
 *
 * @param props
 * @returns
 */
const CloudIcon: React.FC<CloudIconProps> = (props) => {
  const { /* extract custom props here */ ...forwardedProps } = props;

  return (
    <FeatherBaseIcon {...forwardedProps}>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </FeatherBaseIcon>
  );
};

export default CloudIcon;
