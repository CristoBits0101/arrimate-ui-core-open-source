'use server'

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  // Get the form data
  const formData = await request.formData()
  // Get the file from the form data
  const file = formData.get('file')
  // Check if a file was uploaded
  if (!file || !(file instanceof Blob))
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  // Confirm upload
  return NextResponse.json({ message: 'File uploaded successfully' })
}
