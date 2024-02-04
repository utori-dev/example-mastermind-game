import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CoffeeIcon from './CoffeeIcon';

describe('CoffeeIcon', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<CoffeeIcon />).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
