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
        <h1 className="text-6xl font-bold max-w-xl">
        A/B Testing with Next for Netlify Middleware + Edge
        </h1>

        <p className="mt-3 text-2xl">
          Test the pages by observing cookie generation.<br/>Test pages should give a 50/50 chance of going <span className='bg-emerald-200 text-emerald-800 p-1 rounded-md overflow-hidden'>green.</span>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">

          <Link href="/standard-routes">
            <a
              className="mt-6 w-96 rounded-xl border p-6 text-left bg-red-100 hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Standard Routing &rarr;</h3>
              <p className="mt-4 text-xl">
                Standard routing has issues
              </p>
            </a>
          </Link>

          <Link href="/dynamic-routes">
            <a
              className="mt-6 w-96 rounded-xl border p-6 text-left bg-red-100 hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Dynamic Routing &rarr;</h3>
              <p className="mt-4 text-xl">
                Dynamic routing has issues
              </p>
            </a>
          </Link>

        </div>
      </main>

    </div>
  )
}