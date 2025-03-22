import React, { useState } from "react";

interface CategorySelectorProps {
  onCategoryChange: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  onCategoryChange,
}) => {
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([
    { value: "depin", label: "DePIN" },
    { value: "gaming-utility-token", label: "Gaming Utility" },
    { value: "ai-agents", label: "AI Agents" },
    { value: "real-world-assets-rwa", label: "RWA" },
  ]);

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      const value = newCategory.toLowerCase().replace(/\s+/g, "-");
      setCategories([...categories, { value, label: newCategory.trim() }]);
      setNewCategory("");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Select Narrative:
        </label>
        <select
          id="category"
          className="bg-[#252526] border border-[#3c3c3c] rounded-md p-2 w-full text-[#d4d4d4] outline-none focus:border-[#61afef] transition-colors"
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="flex-1 bg-[#252526] border border-[#3c3c3c] rounded-md p-2 text-[#d4d4d4] outline-none"
          placeholder="Add new category"
        />
        <button
          onClick={handleAddCategory}
          className="bg-[#61afef] text-[#1e1e1e] px-4 py-2 rounded-md hover:bg-[#82cfff] transform hover:scale-105 transition-all duration-200"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CategorySelector;
