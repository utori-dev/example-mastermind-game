import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Slider from './Slider';

describe('Slider', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<Slider id={'slider-id'} min={0} max={10} doHandleChange={() => console.log("")} value={0}/>).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
