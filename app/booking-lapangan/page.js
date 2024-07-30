import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { promises } from "fs";
import Link from "next/link";

export default async function BookingLapanganHome() {
  const file = await promises.readFile(
    process.cwd() + "/data/list-lapangan.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return (
    <>
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
            <div className=" bg-white flex flex-col p-5 gap-5">
              <Image
                src={"/images/diaspora.png"}
                width={200}
                height={200}
                alt="diaspora"
                className=" self-center"
              />
              <p className="text-sm">
                Pilih tanggal booking lapangan yang anda inginkan
              </p>
              <Calendar mode="single" className="rounded-md self-center" />
            </div>
            <div className=" bg-white flex flex-col p-5 gap-5">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold">Pilih Jenis Penyewaan</h3>
                <RadioGroup defaultValue="option-one" className=" flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="option-one"
                      id="option-one"
                      className=" text-orange-400 border-orange-400"
                    />
                    <label>Per Sesi</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="option-two"
                      id="option-two"
                      className=" text-orange-400 border-orange-400"
                    />
                    <label>Per Event (ex: pameran)</label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex flex-col gap-3">
                {data.map((item, i) => (
                  <button
                    key={i}
                    className="flex gap-2 border border-gray-400 p-3 rounded-md items-center"
                  >
                    <Image
                      src={"/images/lapangan.png"}
                      width={50}
                      height={50}
                      alt="lapngan"
                    />
                    <div className="flex flex-col">
                      <h4 className="font-bold text-start">
                        {item.sportsFieldName}
                      </h4>
                      <p>{item.sportsFieldAddress}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-bold">Pilih Waktu Pemesanan</h3>
                <p className=" text-orange-400">
                  Silahkan pilih lapangan terlebih dahulu
                </p>
                <button className="flex gap-2 border border-orange-400 p-3 rounded-md items-center text-center text-orange-400 justify-center">
                  06:00 - 12:00
                </button>
                <button className="flex gap-2 border border-orange-400 p-3 rounded-md items-center text-center text-orange-400 justify-center">
                  12:00 - 18:00
                </button>
              </div>

              <div className="flex justify-end">
                <Link
                  className=" bg-blue-300 rounded-full p-3 text-white"
                  href={"/informasi-pemesanan"}
                >
                  Lanjut Konfirmasi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
