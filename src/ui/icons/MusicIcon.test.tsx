import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MusicIcon from './MusicIcon';

describe('MusicIcon', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<MusicIcon />).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
