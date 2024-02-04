import * as React from 'react';
import * as renderer from 'react-test-renderer';
import FeatherIcon from './FeatherIcon';

describe('FeatherIcon', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<FeatherIcon />).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
