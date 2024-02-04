import * as React from 'react';
import * as renderer from 'react-test-renderer';
import LockIcon from './LockIcon';

describe('LockIcon', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<LockIcon />).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
