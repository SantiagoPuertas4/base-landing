import { NextResponse } from 'next/server';

//Endpoint para verificar status del servicio de forma externa
export function GET() {
  return NextResponse.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
}
