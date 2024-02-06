import * as React from 'react';

/**
 * Props for the KeyPeg
 */
export type KeyPegProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * @todo Add description
 *
 * @param props
 * @returns
 */
const KeyPeg: React.FC<KeyPegProps> = (props) => {
  const { /* extract custom props here */ ...forwardedProps } = props;

  return <div {...forwardedProps} />;
}

export default KeyPeg;
