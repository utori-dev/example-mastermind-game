import * as React from 'react';
import * as renderer from 'react-test-renderer';
import HeadphonesIcon from './HeadphonesIcon';

describe('HeadphonesIcon', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<HeadphonesIcon />).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
