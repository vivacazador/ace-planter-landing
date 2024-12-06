'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { ChevronLeft, ChevronRight, Tractor, Sprout, Wrench } from 'lucide-react'

const montserrat = Montserrat({ subsets: ['latin'] })

const images = [
  '/placeholder.svg?height=400&width=600&text=Ace+Planter+1',
  '/placeholder.svg?height=400&width=600&text=Ace+Planter+2',
  '/placeholder.svg?height=400&width=600&text=Ace+Planter+3',
  '/placeholder.svg?height=400&width=600&text=Ace+Planter+4',
]

export default function Products() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className={`min-h-screen bg-gray-100 ${montserrat.className}`}>
      <header className="bg-black text-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">Ace Planters</Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/#features" className="text-gray-300 hover:text-red-500 transition duration-300">Product Features</Link>
              <Link href="/#sales" className="text-gray-300 hover:text-red-500 transition duration-300">Sales</Link>
              <Link href="/#service" className="text-gray-300 hover:text-red-500 transition duration-300">Customer Service</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300 inline-flex items-center"
          >
            Back to Home
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center mb-8 text-black">Our Products</h1>
        
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-black">The Original Ace Planter</h2>
          
          <div className="relative">
            <Image 
              src={images[currentImage]}
              alt={`Ace Planter ${currentImage + 1}`}
              width={600}
              height={400}
              className="mx-auto rounded-lg"
            />
            <button 
              onClick={prevImage} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-600">Image {currentImage + 1} of {images.length}</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Tractor className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">Built to Last</h3>
              <p className="text-gray-700">Designed for years of reliable service with minimal maintenance.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Sprout className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">Precision Planting</h3>
              <p className="text-gray-700">Advanced sensors ensure accurate seed placement for optimal crop yield.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Wrench className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">Easy Maintenance</h3>
              <p className="text-gray-700">Simple design allows for quick and easy maintenance and repairs.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Ace Planters. All rights reserved.</p>
          <div className="mt-4">
            <Link href="#" className="text-gray-400 hover:text-red-500 mx-2 transition duration-300">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-red-500 mx-2 transition duration-300">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

