import React from "react";

const Card = ({item,index}) => {
  return (
    <div
      key={item.id}
      className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg flex flex-col relative"
    >
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <img
            src={item.image}
            alt=""
            className="w-[200px] h-[200px] object-cover rounded-xl"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {item.title}
          </h2>
          <p className="text-gray-600 mb-4">{item.description}</p>
          <span className="text-gray-500">{item.product_name}</span>
        </div>
      </div>
      <button className="absolute bottom-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition hover:translate-y-1 duration-300 ml-10">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
