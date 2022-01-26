import Head from 'next/head'
import Nav from '@/components/Nav-static-routes'

const Product = () => {
  return (

    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>product-c</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center max-w-screen-xl">
        <h1 className="text-6xl font-bold mb-5">
          product-c
        </h1>
        <p className="mt-3 text-4xl bg-gray-200 px-3 py-2 rounded-lg">
          Original layout
        </p>
        <p className="mt-5 text-xl font-mono">
          Dummy Page
        </p>
        <p className="mt-3 text-xl">
          Permanence of the stars intelligent beings the carbon in our apple pies billions upon billions concept of the number one decipherment. Made in the interiors of collapsing stars astonishment vastness is bearable only through love dream of the mind's eye extraordinary claims require extraordinary evidence hearts of the stars. Inconspicuous motes of rock and gas encyclopaedia galactica two ghostly white figures in coveralls and helmets are softly dancing gathered by gravity across the centuries Drake Equation and billions upon billions upon billions upon billions upon billions upon billions upon billions.
        </p>

      
      </main>

    </div>

   );
}
 
export default Product;