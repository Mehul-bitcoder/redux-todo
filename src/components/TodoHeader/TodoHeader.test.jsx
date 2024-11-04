import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoHeader from "./TodoHeader"

test('renders learn react link', () => {
  render(<TodoHeader />);
  const linkElement = screen.getByText(/TodoHeader/i);
  expect(linkElement).toBeInTheDocument();
});
