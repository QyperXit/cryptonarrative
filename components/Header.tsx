import React from "react";

const Header: React.FC = () => {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-2xl font-semibold mb-2 font-mono">
        Crypto Narrative Explorer
      </h1>
      <p className="text-gray-400 text-sm">
        Discover coins by trending narratives.
      </p>
    </div>
  );
};

export default Header;
