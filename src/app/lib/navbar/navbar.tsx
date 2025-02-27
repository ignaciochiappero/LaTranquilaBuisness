import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div >
      <div className="flex justify-center gap-10  ">
        <Link
          href="/"
          className="text-black text-lg  pb-1 border-b-2 border-transparent hover:border-blue-500 transition ease-in-out "
        >
          Home
        </Link>
        <Link
          href="/pages/information"
          className="text-black text-lg no-underline pb-1 border-b-2 border-transparent hover:border-blue-500 transition ease-in-out"
        >
          Información
        </Link>
        <Link
          href="/pages/location"
          className="text-black text-lg no-underline pb-1 border-b-2 border-transparent hover:border-blue-500 transition ease-in-out"
        >
          Ubicación
        </Link>
        <Link
          href="/pages/localguide"
          className="text-black text-lg no-underline pb-1 border-b-2 border-transparent hover:border-blue-500 transition ease-in-out"
        >
          Guía Local
        </Link>
      </div>
    </div>
  );
};
export default Navbar