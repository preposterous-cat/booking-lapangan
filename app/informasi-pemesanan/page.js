import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const InformasiPemesananHome = () => {
  return (
    <main className="flex min-h-screen px-16 py-10 bg-gray-100 justify-center">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <svg
            width="54"
            height="53"
            viewBox="0 0 54 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" self-center"
          >
            <path
              d="M41.7979 28.426C35.0522 28.426 29.5958 33.8994 29.5958 40.6281C29.5958 47.3738 35.0522 52.8302 41.7979 52.8302C48.5436 52.8302 54 47.3738 54 40.6281C54 33.8994 48.5436 28.426 41.7979 28.426ZM41.7979 50.1319C36.5465 50.1319 32.2941 45.8795 32.2941 40.6281C32.2941 35.3767 36.5465 31.1243 41.7979 31.1243C47.0493 31.1243 51.3017 35.3767 51.3017 40.6281C51.3017 45.8795 47.0493 50.1319 41.7979 50.1319ZM46.87 5.21727C46.87 2.33966 44.5389 0 41.6528 0H5.21727C2.33966 0 0 2.33112 0 5.21727V8.89753H46.87V5.21727ZM30.5949 5.10626H16.2751C15.9165 5.10626 15.6262 4.81594 15.6262 4.45731C15.6262 4.09867 15.9165 3.79981 16.2751 3.79981H30.5949C30.9535 3.79981 31.2524 4.09013 31.2524 4.45731C31.2524 4.81594 30.9535 5.10626 30.5949 5.10626Z"
              fill="#6EAA44"
            />
            <path
              d="M47.1603 40.1328H43.3605C43.2154 39.6717 42.8824 39.3045 42.4469 39.1166V33.481C42.4469 33.1223 42.1565 32.8235 41.7894 32.8235C41.4307 32.8235 41.1404 33.1138 41.1404 33.481V39.1166C40.5512 39.3728 40.1414 39.9535 40.1414 40.6366C40.1414 41.5502 40.8842 42.2931 41.7979 42.2931C42.4127 42.2931 42.9421 41.9516 43.2239 41.4478H47.1603C47.519 41.4478 47.8178 41.1574 47.8178 40.7903C47.8178 40.4231 47.519 40.1328 47.1603 40.1328ZM41.7979 26.7182C43.5911 26.7182 45.2989 27.0683 46.8786 27.6916V10.6053H0V38.9971C0 41.8747 2.33112 44.2058 5.21727 44.2058H28.3662C28.0588 43.0616 27.8795 41.8662 27.8795 40.628C27.888 32.9601 34.1214 26.7182 41.7979 26.7182ZM37.1784 13.0303H43.2068V18.8368H37.1784V13.0303ZM26.334 13.0303H32.3624V18.8368H26.334V13.0303ZM10.6822 38.9032H4.6537V33.0967H10.6822V38.9032ZM10.6822 28.87H4.6537V23.0635H10.6822V28.87ZM10.6822 18.8368H4.6537V13.0303H10.6822V18.8368ZM21.5266 38.9032H15.4981V33.0967H21.5266V38.9032ZM21.5266 28.87H15.4981V23.0635H21.5266V28.87ZM21.5266 18.8368H15.4981V13.0303H21.5266V18.8368ZM26.334 23.0635H32.3624V28.87H26.334V23.0635Z"
              fill="#F58465"
            />
          </svg>
          <h1 className=" text-xl font-bold text-center">
            Booking Lapangan Segera!
          </h1>
        </div>

        <div className="flex gap-4">
          <div className="  flex flex-col p-5 gap-5">
            <p className="bg-white font-bold p-3">
              Untuk menyimpan reservasi Anda, kami memerlukan data diri anda.
            </p>
            <div className="bg-white p-5 flex flex-col gap-5">
              <h4 className="font-bold">Informasi Pemesan</h4>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="font-bold">Nama Pemesan*</label>
                <Input
                  type="text"
                  placeholder="Masukkan nama pemesan yang bertanggung jawab"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="font-bold">Contact Person*</label>
                <Input
                  type="text"
                  placeholder="Masukkan nomor hp aktif pemesan"
                />
              </div>
            </div>

            <div className="bg-white p-5 flex flex-col gap-5">
              <h4 className="font-bold">Catatan</h4>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="font-bold">Catatan Pemesan*</label>
                <Input
                  type="text"
                  placeholder="Masukkan catatan tambahan bila ada"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <Link
                className=" bg-white border-blue-300 rounded-full py-3 px-10 "
                href={"/booking-lapangan"}
              >
                Kembali
              </Link>
              <Link
                className=" bg-blue-300 rounded-full p-3 text-white"
                href={"/pembayaran"}
              >
                Lanjut Ke Pembayaran
              </Link>
            </div>
          </div>

          <div className="  flex flex-col p-5 gap-5 bg-white">
            <h2 className="font-bold text-xl">Detail Lapangan</h2>
            <div className="flex gap-3 py-5 border-b border-gray-200">
              <Image
                src={"/images/lapangan.png"}
                width={200}
                height={300}
                alt="lapangan"
              />
              <div className="flex flex-col justify-between gap-5">
                <h4>Lapangan Bola Kamboja</h4>
                <div className="flex flex-col max-w-72">
                  <p>Lokasi Lapangan: </p>
                  <p className=" text-clip text-xs">
                    Jl. Mayor Santoso, 20 Ilir D. III, Kec. Ilir Tim. I, Kota
                    Palembang, Sumatera Selatan 30129
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pb-5 pt-3 border-b border-gray-200">
              <div className="flex justify-between">
                <p>Tanggal Pemesanan</p>
                <p className=" text-gray-600">23 Agustus 2023</p>
              </div>
              <div className="flex justify-between">
                <p>Waktu Dipesan</p>
                <p className=" text-gray-600">06:00 - 12:00</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pb-5 pt-3 border-b border-gray-200">
              <div className="flex justify-between">
                <p className="font-bold">Total</p>
                <p className=" text-2xl text-orange-400">IDR 1.015.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InformasiPemesananHome;
