import * as React from 'react';
import * as renderer from 'react-test-renderer';
import KeyPeg from './KeyPeg';

describe('KeyPeg', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<KeyPeg />).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
