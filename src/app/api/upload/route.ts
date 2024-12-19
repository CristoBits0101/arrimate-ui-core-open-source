'use server'

// cloudinary
import { v2 as cloudinary } from 'cloudinary'

// next/server
import { NextResponse } from 'next/server'

// Configuration
cloudinary.config({
  cloud_name: 'dy2dwramv',
  api_key: '212337762958693',
  api_secret: process.env.CLOUDINARY_API_KEY,
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
  const uploadResult = await cloudinary.uploader
    .upload(
      'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg',
      {
        public_id: 'shoes',
      }
    )
    .catch((error) => {
      console.log(error)
    })

  console.log(uploadResult)

  // Optimize delivery by resizing and applying auto-format and auto-quality
  const optimizeUrl = cloudinary.url('shoes', {
    fetch_format: 'auto',
    quality: 'auto',
  })

  console.log(optimizeUrl)

  // Transform the image: auto-crop to square aspect_ratio
  const autoCropUrl = cloudinary.url('shoes', {
    crop: 'auto',
    gravity: 'auto',
    width: 500,
    height: 500,
  })

  console.log(autoCropUrl)

  // Confirm upload
  return NextResponse.json({ message: 'File uploaded successfully' })
}
