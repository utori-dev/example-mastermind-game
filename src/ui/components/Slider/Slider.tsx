import * as React from 'react';
import { slider as styles } from '../../emotion';
import { css } from '@emotion/react';

/**
 * Props for the Slider
 */
export type SliderProps = React.HTMLAttributes<HTMLInputElement> & {
  /**
   * Lower limit for range
   */
  min?: number;

  /**
   * Upper limit for range
   */
  max?: number;

  /**
   * Current slider value
   */
  value: number;

  /**
   * Function to handle change event
   */
  doHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Displays range values
   */
  tick?: boolean;

  /**
   * Input id
   */
  id: string;

  /**
   * color of slider
   */
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warn' | 'info';
};

/**
 * A simple slider component for using a range input
 *
 * @param props
 * @returns
 */
const Slider = React.forwardRef<HTMLInputElement, SliderProps>((props, ref) => {
  const {
    min = 0,
    max = 100,
    value,
    doHandleChange,
    id,
    tick = true,
    color = 'primary',
    ...forwardedProps
  } = props;
  const [sliderValue, setSliderValue] = React.useState(value);

  const handleOnChangeEvent = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setSliderValue(Number(newValue));
      doHandleChange(event);
    },
    []
  );

  /**
   * Just in case min > max by accident
   */
  const newMin = Math.min(min, max);
  const newMax = Math.max(min, max);

  const determineBackgroundSize = () => `${((sliderValue - newMin) / (newMax - newMin)) * 100}%`;

  return (
    <label>
      <input
        css={css`
          ${styles.base};
          ${styles.color[color]};
          background-size: ${determineBackgroundSize()};
        `}
        id={id}
        ref={ref}
        min={newMin}
        max={newMax}
        {...forwardedProps}
        value={sliderValue}
        type="range"
        onChange={handleOnChangeEvent}
      />
      {tick ? max : ''}
    </label>
  );
});

export default Slider;
