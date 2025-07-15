import Link from "next/link";

const BreadcrumbLogin = () => {
    return (
        <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <ol className="list-reset flex">
                <li className="flex text-white gap-4 font-medium text-[16px] items-center justify-center">
                    <Link className="hover:text-[#e51515]" href="/">
                        Home
                    </Link>
                    <span>/</span>
                    <Link className="hover:text-[#e51515]" href="/login">
                        Account
                    </Link>
                </li>


            </ol>
        </nav>
    );
};

export default BreadcrumbLogin;
