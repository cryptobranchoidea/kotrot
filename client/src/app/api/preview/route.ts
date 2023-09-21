import { JSDOM } from 'jsdom';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) return NextResponse.json({ title: '' });

  const html = await fetch(url).then(async (res) => await res.text());
  const jsdom = new JSDOM();
  const parser = new jsdom.window.DOMParser();
  const dom = parser.parseFromString(html, 'text/html');

  const ogpInfo = Array.from(dom.head.children).reduce(
    (result, element) => {
      const property = element.getAttribute('property');
      if (property === 'og:title') result.title = element.getAttribute('content') ?? '';
      return result;
    },
    { title: '' },
  );

  return NextResponse.json(ogpInfo);
}
