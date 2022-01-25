import Link from "next/link";

const Nav = () => {
  return ( 
    <nav className='flex gap-6'>
    <Link href="/">
      <a>
        Home
      </a>
    </Link>
    <Link href="/products/product-a">
      <a>
        Product A
      </a>
    </Link>
    <Link href="/products/product-b">
      <a>
        Product B
      </a>
    </Link>
  </nav>
   );
}
 
export default Nav;