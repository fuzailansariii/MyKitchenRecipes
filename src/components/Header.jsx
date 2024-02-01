import React from "react";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";

const banners = [image1, image2, image4, image5];

const randomImage = banners[Math.floor(Math.random() * banners.length)];

function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-gray-100 rounded-lg mx-5 md:mx-56 md:space-x-10 md:items-center my-10">
      <div className="w-full h-[40vh] md:h-[65vh] overflow-hidden md:w-[60%]">
        <img
          src={randomImage}
          alt="Recipes"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-[40%] mt-5 text-left mx-3 my-5 space-y-3 md:space-y-10">
        <h1 className="font-bold text-4xl font-amaticSC">
          Explore Culinary Delights with My Kitchen
        </h1>
        <p className="text-md font-alata font-extralight">
          Welcome to My Kitchen, your go-to destination for a diverse range of
          mouthwatering recipes. From quick and easy meals to gourmet delights,
          embark on a culinary journey with us.
        </p>
        <button className="border rounded-lg bg-black px-4 py-2 font-alata text-white hover:bg-gray-800">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Header;
