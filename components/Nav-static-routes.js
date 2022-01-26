import Link from "next/link";

const Nav = () => {
  return ( 
    <nav className='flex gap-6'>
    <Link href="/">
      <a>
        Home
      </a>
    </Link>
    <Link href="/standard-routes/product-a">
      <a>
        Product A
      </a>
    </Link>
    <Link href="/standard-routes/product-b">
      <a>
        Product B (testing)
      </a>
    </Link>
    <Link href="/standard-routes/product-c">
      <a>
        Product C
      </a>
    </Link>
  </nav>
   );
}
 
export default Nav;