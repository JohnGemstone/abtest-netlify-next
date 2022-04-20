import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'abtest-dynamic'
const BUCKETS = ['original','test']
const PAGES = ['product-1']


export function middleware(req) {

  const path = req.nextUrl.pathname
  const slug = path.substring(path.lastIndexOf('/') + 1)


  if ( PAGES.includes(slug) )

  {
    // Get the bucket cookie or generate random
    const bucket = req.cookies[COOKIE_NAME] || getBucket(BUCKETS)

    let res = NextResponse.next()
    
    // Branch to bucket location
    if (bucket==='test') {
      res = NextResponse.rewrite(new URL(`/dynamic-routes/${bucket}/${slug}`, req.url))
    } 

    // Store the bucket to cookies if it's not there
    if (!req.cookies[COOKIE_NAME]) {
      res.cookie(COOKIE_NAME, bucket)
    }

    return res

  }


}



// Random generator

export function getBucket(buckets) {
  // Get a random number between 0 and 1
  let n = cryptoRandom() * 100
  // Get the percentage of each bucket
  let percentage = 100 / buckets.length
  // Loop through the buckets and see if the random number falls
  // within the range of the bucket
  return (
    buckets.find(() => {
      n -= percentage
      return n <= 0
    }) ?? buckets[0]
  )
}

function cryptoRandom() {
  return crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)
}