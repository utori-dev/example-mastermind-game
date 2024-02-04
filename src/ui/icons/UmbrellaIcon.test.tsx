import * as React from 'react';
import * as renderer from 'react-test-renderer';
import UmbrellaIcon from './UmbrellaIcon';

describe('UmbrellaIcon', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<UmbrellaIcon />).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
