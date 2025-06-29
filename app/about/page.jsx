import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-orange-500 h-[300px] flex justify-center items-center ">
        <p className="text-white text-4xl">About page isn't available</p>
      </div>
      <Footer />
    </div>
  );
};

export default page;