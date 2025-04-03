import { render, screen } from '@testing-library/react';

import App from './App';

test('renders the edit instruction text', () => {
  render(<App />);
  const textElement = screen.getByText(/edit src\/App\.tsx and save to reload/i);
  expect(textElement).toBeInTheDocument();
});

test('renders the Learn React link with correct href', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
});

test('renders header with correct class', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toHaveClass('App-header');
});

test('matches the snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders code snippet', () => {
  render(<App />);
  const codeElement = screen.getByText(/src\/App\.tsx/i);
  expect(codeElement).toBeInTheDocument();
  expect(codeElement.tagName).toBe('CODE');
});
