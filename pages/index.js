import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
        <h1 className="text-6xl font-bold">
        A/B Testing with Next for Netlify Middleware
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            products/_middleware.js
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">

          <Link href="/products/product-a">
            <a
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Product A &rarr;</h3>
              <p className="mt-4 text-xl">
                This is the page we are testing
              </p>
            </a>
          </Link>

          <Link href="/products/product-b">
            <a
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Product B &rarr;</h3>
              <p className="mt-4 text-xl">
                Same directory different slug
              </p>
            </a>
          </Link>

        </div>
      </main>

    </div>
  )
}