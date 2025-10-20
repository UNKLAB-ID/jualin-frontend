import ButtonPrimary from "../global/button-primary";
import ButtonSecundary from "../global/button-secundary";
import Image from "next/image";
import rectangle38 from "../../assets/images/rectangle38.svg";
import rectangle39 from "../../assets/images/rectangle39.svg";
import rectangle37 from "../../assets/images/rectangle37.svg";

const HeroSection = () => {
    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                    <div>
                        <h6 className="text-2xl font-semibold text-[var(--secondary)]">Platform Jual Beli Terpercaya di Indonesia</h6>
                        <h1 className="font-bold text-[58.29px] leading-none my-4">
                            Jual Beli Apapun <br />
                            <span className="text-[var(--primary)]">Cepat, Aman & Mudah</span>
                        </h1>
                        <p className="text-gray-600 mt-4 max-w-lg leading-relaxed">
                            Dari mobil, properti, hingga barang bekas—semua ada di satu platform!
                            Ribuan pembeli menunggu produk Anda. Listing gratis, proses instan,
                            transaksi aman. Mulai jualan sekarang dan raih untung maksimal!
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <ButtonPrimary text="Get Started" />
                            <ButtonSecundary text="Learn More" />
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <div className="w-full">
                            <div className="flex gap-4 w-full">
                                <div className="flex-1">
                                    <Image
                                        src={rectangle38}
                                        alt="Hero Image"
                                        width={327}
                                        height={278}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <div className="flex-1">
                                    <Image
                                        src={rectangle39}
                                        alt="Hero Image"
                                        width={327}
                                        height={278}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>


                            {/* Gambar bawah full 100% sesuai lebar div */}
                            <Image
                                src={rectangle37}
                                alt="Hero Image"
                                width={1000}   // nilai hanya untuk kebutuhan Next.js
                                height={296}
                                className="w-full h-auto object-cover mt-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;