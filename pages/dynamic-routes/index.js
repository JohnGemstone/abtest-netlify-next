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
        A/B Testing (Dynamic Routing) Fallback True
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            products/_middleware.js
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">

          <Link href="/dynamic-routes/product-0">
            <a
              className="mt-6 w-60 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Product 0 &rarr;</h3>
              <p className="mt-4 text-xl">
                Dummy page
              </p>
            </a>
          </Link>

          <Link href="/dynamic-routes/product-1">
            <a
              className="mt-6 w-80 rounded-xl border p-6 text-left bg-emerald-100 hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Product 1 (testing) &rarr;</h3>
              <p className="mt-4 text-xl">
                Page we are A/B testing
              </p>
            </a>
          </Link>

          <Link href="/dynamic-routes/product-2">
            <a
              className="mt-6 w-60 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Product 2 &rarr;</h3>
              <p className="mt-4 text-xl">
                Dummy page
              </p>
            </a>
          </Link>

        </div>
      </main>

    </div>
  )
}