import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { promises } from "fs";
import Link from "next/link";

const HomeComponent = async () => {
  const file = await promises.readFile(
    process.cwd() + "/data/list-lapangan.json",
    "utf8"
  );
  const data = JSON.parse(file);

  const file_booking = await promises.readFile(
    process.cwd() + "/data/list-booking-by-username.json",
    "utf8"
  );

  const data_booking = JSON.parse(file_booking);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-10 border-b border-gray-200 pb-10">
        <h1 className=" font-bold text-lg">
          Selamat Datang Dibooking Lapangan Kota Palembang
        </h1>
        <Link
          href={"/booking-lapangan"}
          className=" text-center shadow-lg p-10 w-56"
        >
          <svg
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path
              d="M23.7211 15.7922C19.9734 15.7922 16.9421 18.833 16.9421 22.5712C16.9421 26.3188 19.9734 29.3501 23.7211 29.3501C27.4687 29.3501 30.5 26.3188 30.5 22.5712C30.5 18.833 27.4687 15.7922 23.7211 15.7922ZM23.7211 27.851C20.8036 27.851 18.4412 25.4886 18.4412 22.5712C18.4412 19.6537 20.8036 17.2913 23.7211 17.2913C26.6385 17.2913 29.0009 19.6537 29.0009 22.5712C29.0009 25.4886 26.6385 27.851 23.7211 27.851ZM26.5389 2.89848C26.5389 1.29981 25.2438 0 23.6404 0H3.39848C1.79981 0 0.5 1.29507 0.5 2.89848V4.94307H26.5389V2.89848ZM17.4972 2.83681H9.54175C9.34251 2.83681 9.18122 2.67552 9.18122 2.47628C9.18122 2.27704 9.34251 2.11101 9.54175 2.11101H17.4972C17.6964 2.11101 17.8624 2.2723 17.8624 2.47628C17.8624 2.67552 17.6964 2.83681 17.4972 2.83681Z"
              fill="#6EAA44"
            />
            <path
              d="M26.7002 22.296H24.5892C24.5085 22.0398 24.3235 21.8358 24.0816 21.7315V18.6005C24.0816 18.4013 23.9203 18.2353 23.7163 18.2353C23.5171 18.2353 23.3558 18.3966 23.3558 18.6005V21.7315C23.0285 21.8738 22.8008 22.1964 22.8008 22.5759C22.8008 23.0835 23.2135 23.4962 23.7211 23.4962C24.0626 23.4962 24.3567 23.3064 24.5133 23.0265H26.7002C26.8994 23.0265 27.0655 22.8653 27.0655 22.6613C27.0655 22.4573 26.8994 22.296 26.7002 22.296ZM23.7211 14.8434C24.7173 14.8434 25.666 15.0379 26.5436 15.3842V5.89182H0.5V21.6651C0.5 23.2637 1.79507 24.5588 3.39848 24.5588H16.259C16.0882 23.9231 15.9886 23.259 15.9886 22.5711C15.9934 18.3112 19.4564 14.8434 23.7211 14.8434ZM21.1546 7.23906H24.5038V10.4649H21.1546V7.23906ZM15.13 7.23906H18.4791V10.4649H15.13V7.23906ZM6.43453 21.6129H3.08539V18.3871H6.43453V21.6129ZM6.43453 16.0389H3.08539V12.8131H6.43453V16.0389ZM6.43453 10.4649H3.08539V7.23906H6.43453V10.4649ZM12.4592 21.6129H9.11006V18.3871H12.4592V21.6129ZM12.4592 16.0389H9.11006V12.8131H12.4592V16.0389ZM12.4592 10.4649H9.11006V7.23906H12.4592V10.4649ZM15.13 12.8131H18.4791V16.0389H15.13V12.8131Z"
              fill="#F58465"
            />
          </svg>

          <p>Booking Lapangan</p>
        </Link>
      </div>

      <div className="flex flex-col gap-10 border-b border-gray-200 pb-10 pt-10">
        <h2 className=" font-bold">Lapangan Di kota Palembang</h2>
        <div className="flex flex-wrap gap-2">
          {data.map((item, i) => (
            <Card key={i} className=" w-80 rounded-xl">
              <Image
                src={`/images/lapangan.png`}
                width={500}
                height={500}
                alt="lapangan"
                className=" object-fill rounded-t-xl"
              />
              <CardContent className="py-5 flex flex-col gap-3">
                <Badge
                  variant="outline"
                  className=" bg-orange-400 text-white w-36 text-nowrap"
                >
                  {item.sportsFieldCategory}
                </Badge>
                <p className=" font-bold">{item.sportsFieldName}</p>
                <p>{item.sportsFieldAddress}</p>
              </CardContent>
              <CardFooter className>
                <button className="flex justify-between w-full items-center">
                  <p className=" text-orange-400">Lihat Lapangan</p>
                  <p>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.02679 9.05367H12.4961L7.48532 14.1956C7.08487 14.6065 7.08487 15.2809 7.48532 15.6918C7.88577 16.1027 8.53265 16.1027 8.9331 15.6918L15.6997 8.74811C16.1001 8.33718 16.1001 7.67336 15.6997 7.26243L8.94337 0.308199C8.54292 -0.102733 7.89604 -0.102733 7.49559 0.308199C7.09514 0.719131 7.09514 1.38294 7.49559 1.79388L12.4961 6.94633H1.02679C0.462057 6.94633 0 7.42048 0 8C0 8.57952 0.462057 9.05367 1.02679 9.05367Z"
                        fill="#F58465"
                      />
                    </svg>
                  </p>
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10 pb-10 pt-10">
        <div className="flex justify-between">
          <h2 className="font-bold">Berkas Baru</h2>
          <button className=" text-orange-400">Lihat Semua</button>
        </div>

        <div className="flex flex-wrap gap-2">
          {data_booking.bookings.map((item, i) => (
            <div className="flex flex-col shadow-lg p-3 w-96" key={i}>
              <div className="flex gap-2 border-b border-gray-200 py-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="16" fill="#F9F9F9" />
                  <path
                    d="M20.1105 16.3961C18.2367 16.3961 16.7211 17.9165 16.7211 19.7856C16.7211 21.6594 18.2367 23.175 20.1105 23.175C21.9843 23.175 23.5 21.6594 23.5 19.7856C23.5 17.9165 21.9843 16.3961 20.1105 16.3961ZM20.1105 22.4255C18.6518 22.4255 17.4706 21.2443 17.4706 19.7856C17.4706 18.3268 18.6518 17.1456 20.1105 17.1456C21.5693 17.1456 22.7505 18.3268 22.7505 19.7856C22.7505 21.2443 21.5693 22.4255 20.1105 22.4255ZM21.5194 9.94924C21.5194 9.14991 20.8719 8.5 20.0702 8.5H9.94924C9.14991 8.5 8.5 9.14753 8.5 9.94924V10.9715H21.5194V9.94924ZM16.9986 9.91841H13.0209C12.9213 9.91841 12.8406 9.83776 12.8406 9.73814C12.8406 9.63852 12.9213 9.5555 13.0209 9.5555H16.9986C17.0982 9.5555 17.1812 9.63615 17.1812 9.73814C17.1812 9.83776 17.0982 9.91841 16.9986 9.91841Z"
                    fill="#6EAA44"
                  />
                  <path
                    d="M21.6001 19.648H20.5446C20.5043 19.5199 20.4118 19.4179 20.2908 19.3657V17.8003C20.2908 17.7006 20.2102 17.6176 20.1082 17.6176C20.0085 17.6176 19.9279 17.6983 19.9279 17.8003V19.3657C19.7642 19.4369 19.6504 19.5982 19.6504 19.7879C19.6504 20.0417 19.8567 20.2481 20.1105 20.2481C20.2813 20.2481 20.4284 20.1532 20.5066 20.0133H21.6001C21.6997 20.0133 21.7827 19.9326 21.7827 19.8306C21.7827 19.7286 21.6997 19.648 21.6001 19.648ZM20.1105 15.9217C20.6086 15.9217 21.083 16.0189 21.5218 16.1921V11.4459H8.5V19.3325C8.5 20.1319 9.14753 20.7794 9.94924 20.7794H16.3795C16.2941 20.4615 16.2443 20.1295 16.2443 19.7856C16.2467 17.6556 17.9782 15.9217 20.1105 15.9217ZM18.8273 12.1195H20.5019V13.7324H18.8273V12.1195ZM15.815 12.1195H17.4896V13.7324H15.815V12.1195ZM11.4673 19.3064H9.79269V17.6935H11.4673V19.3064ZM11.4673 16.5194H9.79269V14.9065H11.4673V16.5194ZM11.4673 13.7324H9.79269V12.1195H11.4673V13.7324ZM14.4796 19.3064H12.805V17.6935H14.4796V19.3064ZM14.4796 16.5194H12.805V14.9065H14.4796V16.5194ZM14.4796 13.7324H12.805V12.1195H14.4796V13.7324ZM15.815 14.9065H17.4896V16.5194H15.815V14.9065Z"
                    fill="#F58465"
                  />
                </svg>
                <button className="flex flex-col">
                  <p className="font-bold">{item.userId.fullName}</p>
                  <p className="flex items-center gap-2">
                    25 Januari{" "}
                    <svg
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                    </svg>
                    10:28
                  </p>
                </button>
              </div>

              <div className="flex gap-2 py-2 justify-between">
                <div></div>
                <button className="flex flex-col items-center">
                  <p className="font-bold text-start">
                    {item.sportsFieldId.sportsFieldName}
                  </p>
                  <p className="flex items-center gap-2 justify-start">
                    Sesi {item.totalSessionBooking}{" "}
                    <svg
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                    </svg>
                    06:00 - 12:00
                  </p>
                </button>
                <p className="self-end bg-orange-400 text-white rounded-full px-2">
                  {item.bookingStatus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
