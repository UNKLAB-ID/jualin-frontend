import Image from "next/image";
import rectangle82 from "../../assets/images/rectangle82.svg";
import rectangle81 from "../../assets/images/rectangle81.svg";
import rectangle79 from "../../assets/images/rectangle79.svg";
import DolarIcon from "@/assets/icons/dolar-icons";

const ServiceOnbording = () => {
  const services = [
    {
      title: "Listing Gratis & Mudah",
      description:
        "Pasang iklan tanpa biaya! Upload foto produk, isi detail, dan barang Anda langsung tayang. Proses cepat dalam hitungan menit, siap dilihat ribuan calon pembeli.",
      icon: <DolarIcon />,
    },
    {
      title: "Jangkauan Pembeli Luas",
      description:
        "Ribuan pembeli aktif mencari produk setiap hari. Dari mobil, motor, properti, hingga barang elektronik—semua kategori ada. Produk Anda dilihat target market yang tepat!",
      icon: <DolarIcon />,
    },
    {
      title: "Transaksi Aman & Terpercaya",
      description:
        "Sistem verifikasi pengguna, chat langsung dengan pembeli, dan opsi COD. Jual dengan tenang tanpa khawatir penipuan. Platform terpercaya untuk jual beli barang bekas!",
      icon: <DolarIcon />,
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 mt-8 text-center">
          service kami
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="w-full">
              {/* Gambar bawah full 100% sesuai lebar div */}
              <Image
                src={rectangle79}
                alt="Hero Image"
                width={1000} // nilai hanya untuk kebutuhan Next.js
                height={296}
                className="w-full h-auto object-cover mt-4"
              />

              <div className="flex gap-4 w-full mt-4">
                <div className="flex-1">
                  <Image
                    src={rectangle82}
                    alt="Hero Image"
                    width={327}
                    height={278}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex-1">
                  <Image
                    src={rectangle81}
                    alt="Hero Image"
                    width={327}
                    height={278}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 space-y-6 sm:space-y-8 mt-8 lg:mt-0">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex gap-4 items-center justify-center"
              >
                <div className="bg-[#F0F0F0] p-3 flex items-center justify-center w-20 h-24 sm:w-[90px] sm:h-[104px] rounded-md flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h6 className="text-xl sm:text-2xl font-semibold text-[var(--secondary)] mb-2 sm:mb-3">
                    {service.title}
                  </h6>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 mt-20 text-center">
          Cara Mudah Mulai Berjualan
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              number: "01",
              text: "Daftar gratis dan buat akun Anda",
              icon: <DolarIcon />,
            },
            {
              number: "02",
              text: "Upload foto produk yang ingin dijual",
              icon: <DolarIcon />,
            },
            {
              number: "03",
              text: "Isi detail dan harga barang",
              icon: <DolarIcon />,
            },
            {
              number: "04",
              text: "Posting iklan dan tunggu pembeli",
              icon: <DolarIcon />,
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-[#F0F0F0] p-4 flex flex-col items-center justify-center rounded-md"
            >
              {step.icon}
              <p className="text-center mt-2 text-sm sm:text-base">
                <span className="font-semibold">{step.number}.</span>{" "}
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div>
       
        </div>
      </div>
    </section>
  );
};

export default ServiceOnbording;
