import React from "react";
import Link from "next/link";

interface NewsCrumbProps {
    title?: string; 
}

const NewsCrumb: React.FC<NewsCrumbProps> = ({ title }) => {
    return (
        <div>
            <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
                <ol className="list-reset flex">
                    <li className="flex text-white gap-4 font-medium text-[16px] items-center justify-center">
                        <Link className="hover:text-[#e51515]" href="/">
                            Home
                        </Link>
                        <span>/</span>
                        <Link className="hover:text-[#e51515]" href="/news">
                            News
                        </Link>
                        {title && (
                            <>
                                <span>/</span>
                                <span className="capitalize">{title}</span>
                            </>
                        )}
                    </li>
                </ol>
            </nav>
        </div>
    );
};

export default NewsCrumb;
