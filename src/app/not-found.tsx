import Link from 'next/link'
 
export default function NotFound() {
  return (
      <div className="flex flex-col items-center justify-start min-h-screen text-center">
      <h2 className="text-2xl font-bold">404: Not Found</h2>
      <p className="mt-2">Could not find requested resource</p>
      <p className="mb-4">Custom not found page</p>
      <Link href="/" className="text-purple-600 hover:underline">
        Return Home
      </Link>
    </div>
  )
}