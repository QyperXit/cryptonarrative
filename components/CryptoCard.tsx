import React from "react";

interface CryptoCardProps {
  coin: string;
  symbol: string;
  price: number;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ coin, symbol, price }) => {
  return (
    <div className="crypto-card flex items-center justify-between bg-[#2d2d2d] rounded-lg p-4 mb-2 hover:bg-[#3e3e3e] transform hover:-translate-y-1 transition-all duration-200">
      <div className="flex items-center">
        <i className="fas fa-coins text-[#61afef] mr-3 text-lg"></i>
        <div>
          <h3 className="font-medium">{coin}</h3>
          <p className="text-[#9cdcfe] text-sm">{symbol}</p>
        </div>
      </div>
      <span className="text-[#61afef] font-medium">${price.toFixed(4)}</span>
    </div>
  );
};

export default CryptoCard;
