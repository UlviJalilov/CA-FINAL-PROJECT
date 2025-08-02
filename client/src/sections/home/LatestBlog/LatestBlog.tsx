import Image from 'next/image';
import { FaPenNib, FaNewspaper, FaEdit, FaGem, FaHeart, FaStar } from "react-icons/fa";





const LatestBlog = () => {
    return (
        <div>
            <div className="w-full flex justify-center px-4 mt-15 mb-15">
                <div className="w-full md:w-3/4 lg:w-2/3 border-2 border-[#21252c] rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-300 ">

                    <div className="absolute top-0 left-0 w-16 h-1 bg-yellow-500"></div>
                    <div className="absolute top-0 left-0 w-1 h-16 bg-yellow-500"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-1 bg-yellow-500"></div>
                    <div className="absolute bottom-0 right-0 w-1 h-16 bg-yellow-500"></div>

                    <div className="flex items-center gap-3 justify-center text-yellow-400 tracking-widest font-bold uppercase primary-font mb-4">
                        <span className="text-2xl md:text-xl animate-pulse">
                            <FaPenNib />
                        </span>
                        <h1 className="text-xl text-white sm:text-2xl md:text-2xl text-center w-full">
                            Latest Blog Insights
                        </h1>
                        <span className="text-2xl md:text-xl animate-pulse">
                            <FaNewspaper />
                        </span>
                    </div>

                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-[#5a6069] text-[15px] md:text-base font-medium leading-relaxed">
                            Discover expert tips, industry news, and auto trends that fuel your passion for driving.
                        </p>
                    </div>

                    <div className="flex justify-center gap-6 mt-6 text-yellow-400 text-xl">
                        <FaEdit title="Author's Pick" className="hover:scale-110 transition cursor-pointer" />
                        <FaGem title="In-Depth" className="hover:scale-110 transition cursor-pointer" />
                        <FaHeart title="Readers' Favorite" className="hover:scale-110 transition cursor-pointer" />
                        <FaStar title="Editor's Choice" className="hover:scale-110 transition cursor-pointer" />
                    </div>
                </div>
            </div>



            <div className="container mx-auto px-4 sm:px-6 py-10 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">

                    <div className="w-full h-[350px] relative overflow-hidden">
                        <Image
                            src="https://aero-theme.myshopify.com/cdn/shop/articles/post1-270x334_b462aee1-714d-4ba8-866a-acba7f09ca18.jpg?v=1629927100"
                            alt="Blog Image 1"
                            width={300}
                            height={300}
                            className="object-cover w-full h-full"
                            quality={100}
                        />
                    </div>


                    <div className="flex flex-col items-center justify-center text-white p-6 h-[400px]">
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-center'>
                                <span className="text-[#e51515] primary-font pr-1 text-4xl font-bold">25 </span>
                                <span className='text-[13px] text-[#e51515]  pt-4 primary-font'>/AUG</span>
                            </div>
                            <h3 className="text-[14px] font-semibold mt-2 uppercase primary-font text-[#838896] whitespace-nowrap leading-tight">Ladipiscing erat llentesque pellentesque...</h3>
                            <span className="text-sm flex border-b pb-5 border-[#5a6069] items-center gap-1 justify-center text-[#5a6069] mt-2">
                                <FaEdit className='text-[#5a6069]' />
                                By:
                                <span className="text-[#e51515]">Elomus-Theme Admin</span>
                            </span>
                        </div>
                        <p className="text-sm text-center leading-6 text-[#5a6069] mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laboriosam in assumenda tempora est placeat.
                        </p>
                        <button className="bg-[#21252c]  hover:bg-[#e51515] hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] transition-all duration-300 hover:text-[white] text-[#5a6069] font-medium primary-font text-sm px-12 py-3 rounded-full w-fit mt-6">
                            READ MORE
                        </button>
                    </div>


                    <div className="w-full h-[350px] relative overflow-hidden">
                        <Image
                            src="https://aero-theme.myshopify.com/cdn/shop/articles/post2-270x334.jpg?v=1519516260"
                            alt="Blog Image 2"
                            width={300}
                            height={300}
                            className="object-cover w-full h-full"
                            quality={100}
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center text-white p-6 h-[400px]">
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-center'>
                                <span className="text-[#e51515] primary-font pr-1 text-4xl font-bold">24 </span>
                                <span className='text-[13px] text-[#e51515]  pt-4 primary-font'>/FEB</span>
                            </div>
                            <h3 className="text-[14px] font-semibold mt-2 uppercase primary-font text-[#838896] whitespace-nowrap leading-tight">CLARITAS EST ETIAM PROCESSUS DYNAMICUS.</h3>
                            <span className="text-sm flex border-b pb-5 border-[#5a6069] items-center gap-1 justify-center text-[#5a6069] mt-2">
                                <FaEdit className='text-[#5a6069]' />
                                By:
                                <span className="text-[#e51515]">Aero-Theme Admin</span>
                            </span>
                        </div>
                        <p className="text-sm text-center leading-6 text-[#5a6069] mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laboriosam in assumenda tempora est placeat.
                        </p>
                        <button className="bg-[#21252c]  hover:bg-[#e51515] hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] transition-all duration-300 hover:text-[white] text-[#5a6069] font-medium primary-font text-sm px-12 py-3 rounded-full w-fit mt-6">
                            READ MORE
                        </button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default LatestBlog;
