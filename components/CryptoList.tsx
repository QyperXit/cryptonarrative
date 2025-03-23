import React, { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";

interface CryptoData {
  id: number;
  coin: string;
  symbol: string;
  price: number;
}

interface CryptoListProps {
  category: string;
}

const ITEMS_PER_PAGE = 5;

const CryptoList: React.FC<CryptoListProps> = ({ category }) => {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCryptos = async () => {
      setLoading(true);
      try {
        // First trigger the data fetch for the category
        await fetch(`http://localhost:5079/api/CryptoDataService/${category}`, {
          method: "POST",
        });

        // Then fetch the actual data
        const response = await fetch("http://localhost:5079/api/CoinData");
        const data = await response.json();
        setCryptos(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
    setCurrentPage(1); // Reset to 1st page when category changes
  }, [category]);

  // Skeleton loader that matches the height of 5 CryptoCards
  const skeletonLoader = (
    <div className="space-y-2 mb-4">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="h-[72px] bg-[#2d2d2d] rounded-lg animate-pulse"
        ></div>
      ))}
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-[400px]">
        {skeletonLoader}
        <div className="flex justify-center items-center gap-2 mt-6">
          <div className="px-3 py-1 bg-[#2d2d2d] rounded-md opacity-50">
            Previous
          </div>
          <div className="text-sm text-gray-400">Page 1 of 1</div>
          <div className="px-3 py-1 bg-[#2d2d2d] rounded-md opacity-50">
            Next
          </div>
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil(cryptos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedCryptos = cryptos.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div>
      <div className="space-y-2 mb-4">
        {displayedCryptos.map((crypto) => (
          <CryptoCard
            key={crypto.id}
            coin={crypto.coin}
            symbol={crypto.symbol}
            price={crypto.price}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-[#2d2d2d] rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3e3e3e] transition-colors"
          >
            Previous
          </button>
          <span className="text-sm text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-[#2d2d2d] rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3e3e3e] transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CryptoList;
