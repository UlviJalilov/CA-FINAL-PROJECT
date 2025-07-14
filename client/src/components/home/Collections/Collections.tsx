import Image from "next/image";
const Collections = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="collection-card">
                    <div className="collection-img relative w-[380px] h-[204px]">
                        <Image src="https://aero-theme.myshopify.com/cdn/shop/files/img1-top-aero1.jpg?v=1613507033"
                            alt="Collection Image"
                            fill
                            className="object-cover"
                            quality={100}
                        />

                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4 z-10">
                            <p className="text-lg uppercase primary-font font-medium tracking-widest">New Collection</p>
                            <h3 className="text-2xl primary-font uppercase font-medium text-yellow-400 mt-1">New Trending 2017 - 2018</h3>
                            <p className="text-[13px] primary-font font-medium  uppercase mt-3">Sale up to 20% off</p>
                        </div>
                    </div>
                </div>
              
                <div className="collection-card">
                    <div className="collection-img relative w-[380px] h-[204px]">
                        <Image src="https://aero-theme.myshopify.com/cdn/shop/files/img2-top-aero1.jpg?v=1613507033"
                            alt="Collection Image"
                            fill
                            className="object-cover"
                            quality={100}
                        />

                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4 z-10">
                            <p className="text-lg uppercase primary-font font-medium tracking-widest">BEST LOW PRICE</p>
                            <h3 className="text-2xl primary-font uppercase font-medium text-yellow-400 mt-1">HIGH PERFORMANCE</h3>
                            <p className="text-[13px] primary-font font-medium  uppercase mt-3">Sale up to 10% off</p>
                        </div>
                    </div>
                </div>
              
                <div className="collection-card">
                    <div className="collection-img relative w-[380px] h-[204px]">
                        <Image src="https://aero-theme.myshopify.com/cdn/shop/files/img3-top-aero1.jpg?v=1613507033"
                            alt="Collection Image"
                            fill
                            className="object-cover"
                            quality={100}
                        />

                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4 z-10">
                            <p className="text-lg uppercase primary-font font-medium tracking-widest">HONDA MOTORCYCLES</p>
                            <h3 className="text-2xl primary-font uppercase font-medium text-yellow-400 mt-1">RED SALE ENDS APRIL 30</h3>
                            <p className="text-[13px] primary-font font-medium  uppercase mt-3">Sale up to 40% off</p>
                        </div>
                    </div>
                </div>
              

            </div>
        </div>
    )
}

export default Collections
