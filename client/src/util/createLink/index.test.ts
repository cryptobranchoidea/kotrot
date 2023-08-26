import { describe, expect, test } from 'vitest';
import { createClientLink, createServerLink } from '.';

describe('createServerLink', () => {
  test('期待した値が返ってくる', () => expect(createServerLink('/signup')).toBe(process.env.SERVER_URL + '/signup'));
});

describe('createClientLink', () => {
  test('期待した値が返ってくる', () => expect(createClientLink('/signup')).toBe(process.env.CLIENT_URL + '/signup'));
});
