import * as React from 'react';

/**
 * Props for the Slider
 */
export type SliderProps = React.HTMLAttributes<HTMLInputElement> & {
  /**
   * Lower limit for range
   */
  min: number;

  /**
   * Upper limit for range
   */
  max: number;

  /**
   * Current slider value
   */
  value: number;

  /**
   * Function to handle change event
   */
  doHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Label to be displayed
   */
  label?: string;

  /**
   * Displays range values
   */
  tick?: boolean;

  /**
   * Input id
   */
  id: string;
};

/**
 * A simple slider component for using a range input
 *
 * @param props
 * @returns
 */
const Slider = React.forwardRef<HTMLInputElement, SliderProps>((props, ref) => {
  const {
    min,
    max,
    value,
    doHandleChange,
    label,
    id,
    tick = true,
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

  return (
    <div>
      <label>
        {label}
        <input
          id={id}
          ref={ref}
          min={min}
          max={max}
          {...forwardedProps}
          value={sliderValue}
          type="range"
          onChange={handleOnChangeEvent}
        />
      </label>
    </div>
  );
});

export default Slider;
