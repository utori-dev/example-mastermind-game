import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Board from './Board';

describe('Board', () => {
  // Dummy test to get you started
  it('should render without errors', () => {
    // Act
    const tree = renderer.create(<Board peg='a' rows={4} columns={4} shapes={4}/>).toJSON();

    // Assert
    expect(tree).toBeTruthy();
  });
});
