import * as React from 'react';
import * as renderer from 'react-test-renderer';
import WatchIcon from './WatchIcon';

describe('WatchIcon', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<WatchIcon />).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
