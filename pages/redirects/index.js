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
          Testing Redirects with Next for Netlify
        </h1>

        <p className="mt-3 text-2xl">
          Config for redirects declared in <span className='font-mono p-2 bg-slate-400'>netlify.toml</span>
        </p>

      </main>

    </div>
  )
}