import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ShapeSelector from './ShapeSelector';

describe('ShapeSelector', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<ShapeSelector />).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
