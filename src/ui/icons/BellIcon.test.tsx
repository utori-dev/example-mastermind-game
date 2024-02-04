import * as React from 'react';
import * as renderer from 'react-test-renderer';
import BellIcon from './BellIcon';

describe('BellIcon', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<BellIcon />).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
