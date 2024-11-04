import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoBody from "./TodoBody"

test('renders learn react link', () => {
  render(<TodoBody />);
  const linkElement = screen.getByText(/TodoBody/i);
  expect(linkElement).toBeInTheDocument();
});
