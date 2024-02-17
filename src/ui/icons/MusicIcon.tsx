import * as React from 'react';
import FeatherBaseIcon, { FeatherBaseIconProps } from './FeatherBaseIcon';

/**
 * Props for the MusicIcon
 */
export type MusicIconProps = Omit<FeatherBaseIconProps, 'children'>;

/**
 * @todo Add description
 *
 * @param props
 * @returns
 */
const MusicIcon: React.FC<MusicIconProps> = (props) => {
  const { /* extract custom props here */ ...forwardedProps } = props;

  return (
    <FeatherBaseIcon {...forwardedProps}>
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </FeatherBaseIcon>
  );
};

export default MusicIcon;
