import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoFooter from "./TodoFooter"

test('renders learn react link', () => {
  render(<TodoFooter />);
  const linkElement = screen.getByText(/TodoFooter/i);
  expect(linkElement).toBeInTheDocument();
});
