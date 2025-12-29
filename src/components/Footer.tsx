import React from 'react';
import { Hammer } from 'lucide-react';

interface FooterProps {
  navigateToPage?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateToPage }) => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">IN - STAN</h3>
                <p className="text-sm text-orange-500">Nameštaj po meri</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              IN-STAN Vrnjačka Banja - Vrhunski kvalitet u izradi nameštaja po meri, kantovanje, rezanje MDF/HDF ploča. 20 godina iskustva u stolariji.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Proizvodi</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Pločasti materijali</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Radne površine</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Usluge</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => navigateToPage?.('services')} className="hover:text-orange-500 transition-colors text-left">Pravolinijsko sečenje</button></li>
              <li><button onClick={() => navigateToPage?.('services')} className="hover:text-orange-500 transition-colors text-left">Krivolinijsko sečenje</button></li>
              <li><button onClick={() => navigateToPage?.('services')} className="hover:text-orange-500 transition-colors text-left">Izrada namestaja po meri</button></li>
              <li><button onClick={() => navigateToPage?.('services')} className="hover:text-orange-500 transition-colors text-left">CNC usluge bušenja i sečenja</button></li>
              <li><button onClick={() => navigateToPage?.('services')} className="hover:text-orange-500 transition-colors text-left">Kantovanje</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+381 63 1125490</li>
              <li>instanstolarija@gmail.com</li>
              <li>Витојевачки Пут 10, Vrnjačka Banja</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 IN - STAN. Sva prava zadržana. | Sajt izradio <a href="https://aisajt.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors">aisajt.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;