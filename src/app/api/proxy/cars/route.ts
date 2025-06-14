import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const search = url.search;

  const apiRes = await fetch(`https://testing-api.ru-rating.ru/cars${search}`);
  const data = await apiRes.json();

  return NextResponse.json(data);
}
