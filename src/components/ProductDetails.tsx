import React, { useState } from "react";
import {
  HeartIcon,
} from "@heroicons/react/24/outline";

const ProductDetails = () => {
  const images = [
    "/product/image-1.webp",
    "/product/image-2.webp",
    "/product/image-3.webp",
    "/product/image-4.webp",
  ];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-full p-6">
      {/* Heading */}
      <div className="text-gray-500 text-sm mb-4">
        Home <span className="mx-1">•</span> Art de la table
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-row space-x-4">
          {/* Thumbnails */}
          <div className="flex flex-col items-start space-y-4">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(index)}
                className={`cursor-pointer border p-1 rounded-md ${
                  index === activeImage ? "bg-white" : "bg-gray-200"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="bg-white border p-4 rounded-md w-full">
            <img
              src={images[activeImage]}
              alt="Product"
              className="w-full h-74 object-contain"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between h-full">
          {/*  Title and Icon */}
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-medium">
              Cheese – appareil à raclette 1/2 roue
            </h1>
            <HeartIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
          </div>

          {/* Price */}
          <div className="text-xl font-medium mb-4">
            39,50€ <span className="text-gray-500 font-normal">/pièce</span>
          </div>

          {/* Description with Icons */}
          <div className="border-t py-4 text-gray-600 space-y-2">
            <div className="flex items-center">
              <img src="/icon-1.webp" className="h-10 w-10 mr-2" />
              <span className="mr-4 text-sm font-semibold">
                20<sup>cm</sup>
              </span>{" "}
              <img src="/icon-2.webp" className="h-10 w-10 mr-2" />
              <span className="mr-4 text-sm font-semibold">
                50<sup>cm</sup>
              </span>{" "}
              <span className="text-xs ml-auto text-grey-500">RÉF: VABGN5</span>
            </div>
            <p className="text-sm border-t pt-2 mt-6">
              Location appareil à raclette - Raclette traditionnelle 1/2 roue{" "}
              <br />
              Réglable en hauteur <br />
              Appareil à raclette professionnel <br />
              Boîtier de chauffe horizontal réglable en hauteur
            </p>
            <p className="text-sm">
              220V <br /> 900W
            </p>
          </div>

          {/* Quantity and Button */}
          <div className="flex items-center space-x-4 mt-auto border-t pt-5">
            <div className="flex items-center border px-4 py-2 rounded-md">
              <button className="text-lg">-</button>
              <input
                type="number"
                defaultValue={1}
                className="w-12 text-center outline-none mx-2"
              />
              <button className="text-lg">+</button>
            </div>
            <button className="bg-blue-400 text-white px-6 py-3 rounded-md text-sm w-full">
              AJOUTER AU PANIER
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-8">
        {/* Description Produit */}
        <div>
          <h2 className="text-lg font-normal mb-2">Description produit</h2>
          <p className="text-sm text-gray-400">
            Festi vous propose à la location un/une "Jewel grand couteau/10pc
            pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit
            pour votre mariage, une fête d anniversaire ou du personnel, ce
            produit a fait l objet d une sélection rigoureuse par notre équipe.
            Il est en location chez nous sous la référence VAJGC . Nous sommes à
            votre disposition pour que les événements de nos clients, même en
            last-minute, soient toujours une réussite. Vous pourrez trouver tout
            une série d autre produit à louer de ce type dans la catégorie Art
            de la Table .
          </p>
        </div>

        {/* Livraisons & Questions */}
        <div className="space-y-1 mt-6">
          <button className="flex justify-between items-center w-full bg-gray-100 px-4 py-3 rounded-md text-sm uppercase">
            <span>Livraisons</span>
            <span>+</span>
          </button>
          <button className="flex justify-between items-center w-full bg-gray-100 px-4 py-3 rounded-md text-sm uppercase">
            <span>Questions</span>
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
