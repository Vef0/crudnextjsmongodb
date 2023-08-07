import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    message: 'Tareaaas!'
  })
}

export function POST() {
  return NextResponse.json({
    message: 'Tarea creada!'
  })
}