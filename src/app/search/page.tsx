'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"


export default function SearchPage(){

    // usePathName - catch route segament after App-Url (http:localhost:3000/)
    // eg: localhost:3000/products -> pathName is products

    // usePathName
    const pathName = usePathname();

    // useRouter (hard-navigation)
    const router = useRouter();

    // useSearchparam (?) -> key value
    const searchParams = useSearchParams();

  return (
    <div>
      PathName: {pathName}

      {/* botton for useRouter */}
      <button className="border p-4 rounded cursor-pointer"
      onClick={() => router.push('/')}
      >
        Home Page
      </button>

       {/* botton forward useRouter */}
      <button className="border p-4 rounded cursor-pointer"
      onClick={() => router.forward()}
      >
        Forward Page
      </button>

       {/* botton Backward useRouter */}
      <button className="border p-4 rounded cursor-pointer"
      onClick={() => router.back()}
      >
       Backward
      </button>

        {/* Search params */}
      Search Params : {searchParams.get('category')}

    </div>
  )
}
