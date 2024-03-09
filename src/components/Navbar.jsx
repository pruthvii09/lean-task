import React from "react";

const Navbar = () => {
  return (
    <div className="flex text-white items-center justify-between py-4 px-8 border-b-2 border-gray-800">
      <div className="font-bold sm:text-base text-sm">
        THE <span className="bg-white text-black px-1">PRODUCT</span> PLATFORM
      </div>
      <div className="flex items-center justify-evenly gap-6">
        <div className="cursor-pointer sm:block hidden">Learn</div>
        <div className="cursor-pointer sm:block hidden">Practice</div>
        <img
          className="h-10 w-10 cursor-pointer"
          src="https://s3-alpha-sig.figma.com/img/75b9/e5a0/96e8fac2a30399afa235d655b5f5b396?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R-EZqRxU4gkBSnZHOJiH4mHns6UCxN9pSlZ82qEfT1iqmH9cyLPVwX8oNJWWPTcKXlOJ3FRsg4il~0Uf9DXsCcqGDgermUg84dvjM7NTEFc0D-kz1rKEYRZS5Kl0JcmXPGtEPmNSFDcHT5hG398BGUyVFDPd7TumLfX-LOro7aZCbNIzHUiJv-F0W3OzvVbWXTHYT9S52oC~6V1PrWMqZERu6i1GybqvKfLKSzUaYjiF59k-vMPwT3vqFYCKT4HLWcPCreK5l6P1AKEpoHrA3YY2fEvIIFs4T14vgg2VJJVpylpySAwpGmaWzA0dUdVnq7wCQafObFDEC-oeycbhhA__"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
