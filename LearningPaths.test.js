// LearningPaths.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import LearningPaths from './LearningPaths'; // Update the path as needed

test('it renders a list of learning paths', () => {
  const paths = [
    { id: 1, name: 'Path 1' },
    { id: 2, name: 'Path 2' },
    { id: 3, name: 'Path 3' },
  ];

  render(<LearningPaths paths={paths} />);

  // Use screen queries to assert that the component renders as expected
  const heading = screen.getByText('Learning Paths');
  const pathItems = screen.getAllByRole('listitem');

  expect(heading).toBeInTheDocument();
  expect(pathItems).toHaveLength(3);
  expect(screen.getByText('Path 1')).toBeInTheDocument();
  expect(screen.getByText('Path 2')).toBeInTheDocument();
  expect(screen.getByText('Path 3')).toBeInTheDocument();
});
