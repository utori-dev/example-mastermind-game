import * as React from 'react';
import * as renderer from 'react-test-renderer';
import RaindropIcon from './RaindropIcon';

describe('RaindropIcon', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<RaindropIcon />).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
