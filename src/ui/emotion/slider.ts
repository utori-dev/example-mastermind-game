import { SerializedStyles, css } from '@emotion/react';

interface SliderStyles {
  base: SerializedStyles;
}

/**
 * @todo Add description
 */
const slider: SliderStyles = {
  base: css`
    -webkit-appearance: none;
    height: 7px;
    background: grey;
    border-radius: 5px;
    background-image: linear-gradient(var(--color--success--main, var(--color--neutral-00)), var(--color--success--main, var(--color--neutral-00)));
    background-repeat: no-repeat;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background: var(--color--success--main, var(--color--neutral-00));
      cursor: pointer;
      box-shadow: 0 0 2px 0 #555;
    }

    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }
  `,
};

export default slider;
