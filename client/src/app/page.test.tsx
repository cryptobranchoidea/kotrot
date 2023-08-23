import { render, screen, within } from '@testing-library/react';
import { expect, it } from 'vitest';
import Home from './page';

it('Home', () => {
  render(<Home />);
  const main = within(screen.getByRole('main'));
  expect(main.getByRole('heading', { level: 1, name: 'Fisap' })).toBeDefined();
  expect(main.getByText('fill someone gap')).toBeDefined();
});
