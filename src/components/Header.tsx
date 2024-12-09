import {
  MagnifyingGlassIcon,
  LightBulbIcon,
  HeartIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);

  const navItems = [
    'ART DE LA TABLE',
    'MOBILIER',
    'NAPPAGE',
    'MATÉRIEL DE SALLE',
    'CUISINE',
    'BARBECUE',
    'TENTE',
    'CHAUFFAGE',
    'PODIUM - PISTE DE DANSE',
    'SON ET LUMIÈRE',
    'PACKS',
    'CONSOMMABLES',
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 w-12 sm:h-20 sm:w-20 object-contain"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex flex-1 mx-4 max-w-lg">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Rechercher un produit"
              className="w-full rounded border-gray-300 bg-gray-100 px-4 py-2 pl-4 pr-10 text-sm"
            />
            <MagnifyingGlassIcon className="absolute right-3 top-2 h-5 w-5 text-gray-500" />
          </div>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Inspirations */}
          <div className="flex items-center space-x-1">
            <LightBulbIcon className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium hidden xs:inline">Inspirations</span>
          </div>

          {/* Favorites */}
          <div className="flex items-center space-x-1">
            <HeartIcon className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium hidden xs:inline">Mes favoris</span>
            <span className="text-xs text-gray-600 bg-gray-200 px-2 py-0.5 rounded-full font-semibold">24</span>
          </div>

          {/* Cart */}
          <button className="flex items-center space-x-2 bg-blue-500 px-4 py-2 rounded-lg text-white">
            <ShoppingCartIcon className="h-5 w-5" />
            <span className="text-sm font-medium hidden sm:inline">Panier</span>
          </button>

          {/* Profile */}
          <div className="relative group flex items-center space-x-2 cursor-pointer">
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
            <span className="text-sm font-medium">FR</span>
            <ChevronDownIcon className="h-4 w-4 text-gray-600" />
            {/* Dropdown */}
            <div className="absolute top-10 right-0 hidden group-hover:block bg-white border shadow-md rounded-md">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar for Mobile */}
      <div className="flex sm:hidden px-4 mt-2">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Rechercher un produit"
            className="w-full rounded border-gray-300 bg-gray-100 px-4 py-2 pl-4 pr-10 text-sm"
          />
          <MagnifyingGlassIcon className="absolute right-3 top-2 h-5 w-5 text-gray-500" />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex overflow-x-auto px-4 sm:px-6 border-b border-gray-200 space-x-6">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`whitespace-nowrap text-sm font-medium py-3 cursor-pointer ${
              index === activeTab
                ? 'border-b-2 border-blue-500 text-blue-500 font-semibold'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
