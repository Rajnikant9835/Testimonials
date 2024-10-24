import React, { useState } from "react";
import Title from "./Title";

const Cards = ({ name, image, domain, about }) => {
  // let name = props.name;
  // let image = props.image;
  // let domain = props.domain;
  // let about = props.about;

  return (
    <div className=" flex flex-col items-center justify-center relative z-1 p-2">
      <Title />
      <div>
        <img
          src={image}
          alt="#"
          className="rounded-full w-32 h-32 object-cover relative mb-[-60px] ml-5"
        ></img>
        <div className="flex flex-col items-center border-4 rounded-lg border-blue-950  bg-white  max-w-[550px]  px-10 py-14">
          <p className="text-wrap  text-2xl font-bold ">{name}</p>
          <p className="text-blue-900 ">{domain}</p>
          <p className="text-4xl">❝</p>
          <div>
            <p>{about}</p>
          </div>
          <p className="text-4xl text-blue-900">❞</p>
          <button className="border-sky-500 bg-blue-700 p-2 mt-8 ">
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
