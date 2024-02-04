import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CloudIcon from './CloudIcon';

describe('CloudIcon', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<CloudIcon />).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
