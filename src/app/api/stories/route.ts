'use server'

// cloudinary
import { v2 as cloudinary } from 'cloudinary'

// next/server
import { NextResponse } from 'next/server'

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function POST(request: Request) {
  // Get the form data
  const formData = await request.formData()

  // Get the file from the form data
  const file = formData.get('file')

  // Check if a file was uploaded
  if (!file || !(file instanceof Blob))
    // Return a bad request if the file doesn't exist
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })

  // Read the file as a buffer
  const bytes = await file.arrayBuffer()

  // Save the file in the memory
  const buffer = Buffer.from(bytes)

  // Upload an image
  const response = await new Promise<{ secure_url: string }>((resolve, reject)=>{
    cloudinary.uploader.upload_stream({}, (error, result) => {
      if (error) reject(error)
      resolve(result as { secure_url: string })
    }).end(buffer)
  })

  // Confirm upload
  return NextResponse.json({ message: 'File uploaded successfully', url: response.secure_url })
}
