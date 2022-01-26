import Link from "next/link";

const Nav = () => {
  return ( 
    <nav className='flex gap-6'>
    <Link href="/">
      <a>
        Home
      </a>
    </Link>
    <Link href="/dynamic-routes/product-0">
      <a>
        Product 0
      </a>
    </Link>
    <Link href="/dynamic-routes/product-1">
      <a>
        Product 1 (testing)
      </a>
    </Link>
    <Link href="/dynamic-routes/product-2">
      <a>
        Product 2
      </a>
    </Link>
  </nav>
   );
}
 
export default Nav;