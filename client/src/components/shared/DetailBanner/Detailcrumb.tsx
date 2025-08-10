import React from 'react'
import Link from "next/link"

const Detailcrumb = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex justify-center items-center p-5">
      <nav aria-label="Breadcrumb" className="text-white">
        <ol className="flex gap-2 items-center">
          <li className="font-medium text-[16px]">
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
