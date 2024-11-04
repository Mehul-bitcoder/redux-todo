import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomDialog from "./CustomDialog"

test('renders learn react link', () => {
  render(<CustomDialog />);
  const linkElement = screen.getByText(/CustomDialog/i);
  expect(linkElement).toBeInTheDocument();
});
