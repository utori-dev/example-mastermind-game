import { SerializedStyles, css } from '@emotion/react';

interface SliderStyles {
  base: SerializedStyles;
  color: Record<
    'primary' | 'secondary' | 'danger' | 'success' | 'warn' | 'info',
    SerializedStyles
  >;
}

/**
 * Styles for a input['range'] component.
 *
 * These are used in the `ui/components/Slider` component.
 */
const slider: SliderStyles = {
  base: css`
    margin-right: 0.5rem;
    -webkit-appearance: none;
    height: 7px;
    background: grey;
    border-radius: 5px;
    background-repeat: no-repeat;
    width: calc(100% - 3rem);

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 15px;
      width: 15px;
      border-radius: 50%;
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
  color: {
    primary: css`
      background-image: linear-gradient(
        var(--slider--track-color--primary, var(--color--neutral-00)),
        var(--slider--track-color--primary, var(--color--neutral-00))
      );
      &::-webkit-slider-thumb {
        background: var(
          --slider--track-color--primary,
          var(--color--neutral-00)
        );
      }
    `,
    secondary: css`
      background-image: linear-gradient(
        var(--slider--track-color--secondary, var(--color--neutral-00)),
        var(--slider--track-color--secondary, var(--color--neutral-00))
      );
      &::-webkit-slider-thumb {
        background: var(
          --slider--track-color--secondary,
          var(--color--neutral-00)
        );
      }
    `,
    warn: css`
      background-image: linear-gradient(
        var(--slider--track-color--warn, var(--color--neutral-00)),
        var(--slider--track-color--warn, var(--color--neutral-00))
      );
      &::-webkit-slider-thumb {
        background: var(--slider--track-color--warn, var(--color--neutral-00));
      }
    `,
    danger: css`
      background-image: linear-gradient(
        var(--slider--track-color--danger, var(--color--neutral-00)),
        var(--slider--track-color--danger, var(--color--neutral-00))
      );
      &::-webkit-slider-thumb {
        background: var(
          --slider--track-color--danger,
          var(--color--neutral-00)
        );
      }
    `,
    info: css`
      background-image: linear-gradient(
        var(--slider--track-color--info, var(--color--neutral-00)),
        var(--slider--track-color--info, var(--color--neutral-00))
      );
      &::-webkit-slider-thumb {
        background: var(--slider--track-color--info, var(--color--neutral-00));
      }
    `,
    success: css`
      background-image: linear-gradient(
        var(--slider--track-color--success, var(--color--neutral-00)),
        var(--slider--track-color--success, var(--color--neutral-00))
      );
      &::-webkit-slider-thumb {
        background: var(
          --slider--track-color--success,
          var(--color--neutral-00)
        );
      }
    `,
  },
};

export default slider;
