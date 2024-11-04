import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from "./Todo"

test('renders learn react link', () => {
  render(<Todo />);
  const linkElement = screen.getByText(/Todo/i);
  expect(linkElement).toBeInTheDocument();
});
