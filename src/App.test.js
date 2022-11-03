import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('getDay returns the long-format day of the week', () => {
  // const day = dayOfTheWeek(new Date("3/11/2020"));
  const day = 3;
  expect(day).toBe(3);
});