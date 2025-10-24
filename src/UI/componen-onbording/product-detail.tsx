import ButtonPrimary from "../global/button-primary";
import CardImageProductDetail from "../global/card-image-product-detail";

const ProductDetail = () => {
  const typeProduct = ["GT Sport", "VIP", "Class A", "Premium"];
  const category = "Mobil";
  const price = 150000;
  const originalPrice = 200000;
  const discountPercentage = Math.round(
    ((originalPrice - price) / originalPrice) * 100
  );

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <CardImageProductDetail />
          <div className="md:pl-8">
            <h3 className="text-2xl font-bold text-gray-900 mt-6">
              Toyota Avanza 2023 - Mobil Keluarga Nyaman & Irit
            </h3>
            <div className="mt-4 flex items-center border-b pb-4 border-b-gray-300">
              <div className="flex items-center gap-3 justify-between w-full">
                <div>
                  <p className="font-medium text-gray-600">Price:</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-sm sm:text-2xl font-bold text-[var(--primary)]">
                    Rp {price.toLocaleString("id-ID")}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 line-through">
                    Rp {originalPrice.toLocaleString("id-ID")}
                  </p>
                  <span className="bg-red-500 text-white px-4 py-2 rounded-md text-xs font-bold">
                    -{discountPercentage}%
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-b pb-4 border-b-gray-300">
              <div className="flex items-center gap-3">
                <p className="font-medium text-gray-600">Category:</p>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-700">
                {category}
              </div>
            </div>
            <div className="mt-4">
              <p className="font-medium text-gray-600 mb-2">Type:</p>
              <div className="flex flex-wrap gap-2">
                {typeProduct.map((type, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all cursor-pointer"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 w-full">
              <ButtonPrimary
                text="Chat Penjual"
                width="100%"
                className="px-3 py-4 bg-[var(--primary)] text-white rounded-md font-medium hover:bg-[var(--primary)]/90 transition text-[17px]"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mt-6">
            Deskripsi Produk
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Toyota Avanza 2023 adalah pilihan sempurna untuk keluarga yang
            menginginkan kenyamanan dan efisiensi bahan bakar. Dengan desain
            modern dan ruang kabin yang luas, mobil ini menawarkan pengalaman
            berkendara yang menyenangkan bagi seluruh anggota keluarga.
            Ditenagai oleh mesin yang irit bahan bakar, Avanza 2023 membantu
            Anda menghemat biaya operasional tanpa mengorbankan performa.
            Fitur-fitur keselamatan canggih juga disematkan untuk memberikan
            perlindungan maksimal selama perjalanan. Pilih Toyota Avanza 2023
            dan rasakan kenyamanan berkendara yang tak tertandingi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
