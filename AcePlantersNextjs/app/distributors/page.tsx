import Link from 'next/link'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

const distributors = [
  {
    name: "Heartland Ag Solutions",
    region: "Midwest",
    phone: "(555) 123-4567",
    email: "sales@heartlandag.com",
    address: "123 Corn Row, Des Moines, IA 50309"
  },
  {
    name: "Prairie Equipment Co.",
    region: "Midwest",
    phone: "(555) 234-5678",
    email: "info@prairieequip.com",
    address: "456 Wheat Field Rd, Omaha, NE 68102"
  },
  {
    name: "Southern Farm Supplies",
    region: "Southern",
    phone: "(555) 345-6789",
    email: "sales@southernfarm.com",
    address: "789 Cotton Lane, Atlanta, GA 30303"
  },
  {
    name: "Gulf Coast Planters",
    region: "Southern",
    phone: "(555) 456-7890",
    email: "info@gulfcoastplanters.com",
    address: "101 Bayou St, New Orleans, LA 70112"
  },
  {
    name: "Pacific Ag Equipment",
    region: "Western",
    phone: "(555) 567-8901",
    email: "sales@pacificag.com",
    address: "202 Orchard Ave, Fresno, CA 93721"
  },
  {
    name: "Mountain States Machinery",
    region: "Western",
    phone: "(555) 678-9012",
    email: "info@mountainstates.com",
    address: "303 High Plains Dr, Denver, CO 80202"
  }
]

export default function Distributors() {
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
        <h1 className="text-4xl font-bold text-center mb-12 text-black">Authorized Distributors</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {distributors.map((distributor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2 text-black">{distributor.name}</h2>
              <p className="text-gray-600 mb-4">Region: {distributor.region}</p>
              <p className="mb-1"><strong>Phone:</strong> {distributor.phone}</p>
              <p className="mb-1"><strong>Email:</strong> {distributor.email}</p>
              <p><strong>Address:</strong> {distributor.address}</p>
            </div>
          ))}
        </div>
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

