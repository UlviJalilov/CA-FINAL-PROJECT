import React from 'react'
import Link from "next/link"

const Detailcrumb = ({ title }: { title: string }) => {
  return (
    <div>
      <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
        <ol className="list-reset flex">
          <li className="flex text-white gap-4 font-medium text-[16px] items-center justify-center">
            <Link className="hover:text-[#e51515]" href="/">
              Home
            </Link>
            <span>/</span>
            <span>{title}</span>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default Detailcrumb
