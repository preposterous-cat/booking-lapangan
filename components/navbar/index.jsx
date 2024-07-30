import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between border-b border-gray-200 px-16 pb-5">
      <div>
        <Image src={"/images/logo.png"} width={200} height={200} alt="logo" />
      </div>
      <div className="flex">
        <div className=" flex gap-5 items-center p-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5675 13.856C15.5249 13.874 16.4166 14.6154 16.5869 15.5673C16.7523 16.4936 16.2013 17.5009 15.3262 17.8588C14.3598 18.2541 13.1261 17.7861 12.6679 16.8356C12.1936 15.8519 12.6547 14.5213 13.662 14.0505C13.9285 13.9259 14.2213 13.8616 14.5142 13.856C14.5405 13.856 14.5405 13.856 14.5675 13.856ZM5.22721 11.0848L1.58996 1.38526H0.68446C0.68446 1.38526 0.214401 1.33126 0.0544841 0.980271C-0.118586 0.602285 0.140327 0.0920734 0.553619 0.012461C0.611079 0.00138448 0.626309 0.00276913 0.68446 0H2.07041C2.09187 0.000692282 2.11333 0.00207681 2.13479 0.00276909C2.19156 0.0110765 2.2061 0.0110765 2.26148 0.026999C2.46847 0.0865352 2.63254 0.247837 2.71908 0.449291L6.70731 11.0848H15.3394L16.4941 4.15646H6.22687L6.1611 4.15369C6.10295 4.14538 6.08841 4.14538 6.03164 4.12877C5.51728 3.97785 5.36636 3.12842 5.9098 2.84805C6.00672 2.7982 6.11541 2.77674 6.22687 2.7712H17.3117C17.7181 2.79059 18.0448 3.15265 17.995 3.57771L16.6097 11.8913C16.5398 12.216 16.2587 12.4548 15.9264 12.4701C15.9264 12.4701 5.29713 12.4673 4.83261 12.4701C4.30925 12.4805 3.93818 13.208 4.33348 13.6345C4.46293 13.7736 4.64985 13.8546 4.84369 13.856H10.384C10.9192 13.8726 11.2902 14.5954 10.8887 15.0232C10.7793 15.1395 10.6291 15.2164 10.4706 15.2357C10.4325 15.2406 10.4228 15.2406 10.384 15.2413H8.18395C8.22272 15.3465 8.25318 15.4552 8.27325 15.5673C8.43871 16.4936 7.88834 17.5009 7.01261 17.8588C6.04687 18.2541 4.81254 17.7861 4.35425 16.8356C4.10433 16.3171 4.11402 15.7023 4.32655 15.1672C3.49097 14.9297 2.80977 14.1509 2.76546 13.2662C2.71077 12.1572 3.66404 11.0924 4.83953 11.0848H5.22721ZM6.21787 15.2413C5.68758 15.2517 5.30959 16.0062 5.74365 16.4299C6.10018 16.7781 6.83677 16.5788 6.91292 16.0319C6.9683 15.6393 6.65262 15.2385 6.21787 15.2413ZM14.5315 15.2413C14.0012 15.2517 13.6232 16.0062 14.0566 16.4299C14.4131 16.7774 15.1504 16.5788 15.2265 16.0319C15.2819 15.6393 14.9662 15.2385 14.5315 15.2413Z"
              fill="black"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0546 9.77929C13.8244 9.55029 13.6419 9.27793 13.5176 8.97795C13.3934 8.67798 13.3299 8.35634 13.3307 8.03166V5.99875C13.3307 4.40778 12.6987 2.88198 11.5737 1.75699C10.4487 0.632009 8.92293 0 7.33196 0C5.741 0 4.21519 0.632009 3.09021 1.75699C1.96522 2.88198 1.33322 4.40778 1.33322 5.99875V8.03166C1.33406 8.35634 1.27053 8.67798 1.14628 8.97795C1.02203 9.27793 0.839545 9.55029 0.609367 9.77929C0.318409 10.0702 0.12026 10.4409 0.0399808 10.8444C-0.0402987 11.248 0.000897111 11.6663 0.158358 12.0464C0.315819 12.4265 0.582472 12.7514 0.924594 12.98C1.26672 13.2086 1.66894 13.3306 2.08039 13.3305H4.06598C4.21896 14.0839 4.62768 14.7612 5.2229 15.2477C5.81811 15.7342 6.56322 16 7.33196 16C8.10071 16 8.84581 15.7342 9.44103 15.2477C10.0362 14.7612 10.445 14.0839 10.5979 13.3305H12.5842C12.9957 13.3306 13.3979 13.2086 13.74 12.98C14.0821 12.7514 14.3488 12.4265 14.5062 12.0464C14.6637 11.6663 14.7049 11.248 14.6246 10.8444C14.5443 10.4409 14.3455 10.0702 14.0546 9.77929ZM7.33196 14.6636C6.91988 14.6619 6.51838 14.5329 6.1824 14.2943C5.84643 14.0557 5.59238 13.7191 5.45502 13.3305H9.2089C9.07154 13.7191 8.8175 14.0557 8.48152 14.2943C8.14555 14.5329 7.74405 14.6619 7.33196 14.6636ZM12.5835 11.9975H2.08039C1.93255 11.9976 1.788 11.9538 1.66505 11.8717C1.5421 11.7896 1.44626 11.6729 1.38967 11.5363C1.33308 11.3997 1.31829 11.2494 1.34715 11.1044C1.37602 10.9594 1.44725 10.8263 1.55184 10.7218C1.90619 10.3693 2.18714 9.95006 2.37843 9.48831C2.56972 9.02656 2.66756 8.53146 2.66627 8.03166V5.99875C2.66627 4.76133 3.15783 3.57459 4.03282 2.6996C4.90781 1.82462 6.09454 1.33305 7.33196 1.33305C8.56938 1.33305 9.75612 1.82462 10.6311 2.6996C11.5061 3.57459 11.9977 4.76133 11.9977 5.99875V8.03166C11.9964 8.53146 12.0942 9.02656 12.2855 9.48831C12.4768 9.95006 12.7577 10.3693 13.1121 10.7218C13.2167 10.8263 13.2879 10.9594 13.3168 11.1044C13.3456 11.2494 13.3308 11.3997 13.2743 11.5363C13.2177 11.6729 13.1218 11.7896 12.9989 11.8717C12.8759 11.9538 12.7314 11.9976 12.5835 11.9975Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="flex gap-2 p-3 border-l border-gray-200">
          <div className="flex flex-col">
            <p>Harry Maguire, S.Kom</p>
            <p>NIK: 16712325848493033</p>
          </div>
          <Image
            src={"/images/profile.png"}
            width={50}
            height={50}
            alt="profile"
            className=" rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;