import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import Slider from './Slider';

describe('Slider', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer
      .create(
        <Slider
          id={'slider-id'}
          doHandleChange={() => console.log('')}
          value={0}
        />
      )
      .toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });

  it('should call doHandleChange on change event', () => {
    // Arrange
    const doHandleChange = jest.fn();
    render(
      <Slider
        tick={false}
        color="primary"
        aria-label="slider"
        id={'slider-id'}
        min={10}
        max={0}
        doHandleChange={doHandleChange}
        value={0}
      />
    );
    const inputElement = screen.getByLabelText('slider') as HTMLInputElement;

    // Act
    fireEvent.change(inputElement, { target: { value: 3 } });

    // Assert
    expect(doHandleChange).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe('3');
  });
});
