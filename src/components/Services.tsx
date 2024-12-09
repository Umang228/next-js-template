import React from "react";

const Services = () => {
  return (
    <section className="bg-gray-50 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-medium mb-6">
          On s’occupe de <span className="text-teal-500">tout</span>
        </h2>
        <p className="text-gray-500 mb-12">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:gap-16 relative">
          {/* Livraison & Reprise */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <img
              src="/services/1.png"
              alt="Livraison & Reprise"
              className="h-20 mb-4"
            />
            <h3 className="font-medium text-lg">Livraison & Reprise</h3>
            <p className="text-gray-500">Selon vos besoins</p>
          </div>

          {/* Horizontal Line */}
          <div className="h-[1px] w-32 bg-gray-300 md:w-[1px] md:h-32 md:rotate-90 md:my-4 md:-mt-14"></div>

          {/* Nettoyage */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <img
              src="/services/2.png"
              alt="Nettoyage"
              className="h-20 mb-4"
            />
            <h3 className="font-medium text-lg">Nettoyage</h3>
            <p className="text-gray-500">Selon vos besoins</p>
          </div>

          {/* Horizontal Line */}
          <div className="h-[1px] w-32 bg-gray-300 md:w-[1px] md:h-32 md:rotate-90 md:my-4 md:-mt-14"></div>

          {/* Commande Illimitée */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <img
              src="/services/3.png"
              alt="Commande Illimitée"
              className="h-20 mb-4"
            />
            <h3 className="font-medium text-lg">Commande Illimitée</h3>
            <p className="text-gray-500">Tout est possible</p>
          </div>

          {/* Horizontal Line */}
          <div className="h-[1px] w-32 bg-gray-300 md:w-[1px] md:h-32 md:rotate-90 md:my-4 md:-mt-14"></div>

          {/* Transport & Enlèvement */}
          <div className="flex flex-col items-center">
            <img
              src="/services/4.png"
              alt="Transport & Enlèvement"
              className="h-20 mb-4"
            />
            <h3 className="font-medium text-lg">Transport & Enlèvement</h3>
            <p className="text-gray-500">On s’occupe de tout.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
