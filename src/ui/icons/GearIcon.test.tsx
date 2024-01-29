import * as React from 'react';
import * as renderer from 'react-test-renderer';
import GearIcon from './GearIcon';

describe('GearIcon', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<GearIcon />).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
