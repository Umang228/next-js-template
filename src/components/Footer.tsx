import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 bg-white py-8 w-full">
      <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 mb-8 mr-5 md:mb-0">
            <img 
              src="/logo.webp" 
              alt="weframetech logo" 
              className="h-16 md:h-24" 
            />
          </div>

          <div className="w-full md:w-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Infos Pratiques */}
            <div>
              <h3 className="font-semibold mb-2">INFOS PRATIQUES</h3>
              <ul className="space-y-2">
                <li><a href="#">À propos</a></li>
                <li><a href="#">Livraisons & Reprises</a></li>
                <li><a href="#">Mode d’emploi</a></li>
                <li><a href="#">F.A.Q</a></li>
              </ul>
            </div>

            {/* Légal */}
            <div>
              <h3 className="font-semibold mb-2">LÉGAL</h3>
              <ul className="space-y-2">
                <li><a href="#">Mentions légales</a></li>
                <li><a href="#">CGU</a></li>
                <li><a href="#">CGV</a></li>
                <li><a href="#">Politique de confidentialité</a></li>
              </ul>
            </div>

            {/* Mon Compte */}
            <div className="md:text-center">
              <h3 className="font-semibold mb-2">MON COMPTE</h3>
              <ul className="space-y-2">
                <li><a href="#">Accéder à mon compte</a></li>
                <li><a href="#">Ma liste d’envie</a></li>
                <li><a href="#">Créer un compte</a></li>
                <li><a href="#">Mot de passe oublié</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0 text-center md:text-right">
          <h3 className="font-semibold mb-4">NOUS SUIVRE</h3>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" aria-label="Twitter" className="pr-4 border-r border-gray-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" aria-label="Instagram" className="pl-4 border-l border-gray-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
