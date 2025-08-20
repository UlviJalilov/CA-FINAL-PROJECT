import React from 'react'
import Link from "next/link"

const Detailcrumb = ({ title }: { title: string }) => {
  return (
    <div>
      <nav
        className="text-sm text-gray-500 mb-4"
        aria-label="Breadcrumb"
      >
        <ol className="list-reset flex flex-wrap justify-center text-center">
          <li className="flex flex-wrap gap-2 sm:gap-4 text-white font-medium text-[16px] items-center justify-center">
            <Link className="hover:text-[#e51515]" href="/">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-[16px]">{title}</li>
        </ol>
      </nav>

    </div>

  )
}

export default Detailcrumb
