import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import Home from './page';

it('Home', () => {
  render(<Home />);
  expect(screen.getByRole('heading', { level: 1, name: 'KotRot' })).toBeDefined();
});
