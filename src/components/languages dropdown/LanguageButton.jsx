import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const LanguageButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="flex flex-row w-full justify-between gap-1 items-center rounded-md border bg-NavyN600 px-3 py-2 text-sm font-semibold text-white hover:bg-NavyN700"
        onClick={toggleDropdown}
      >
        {selectedLanguage}
        <IoIosArrowDown className="text-white w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-full origin-top-right rounded-md bg-NavyN600 shadow-lg">
          <div className="p-1">
            <button
              type="button"
              className="block w-full px-4 py-2 text-sm text-white hover:bg-NavyN700"
              onClick={() => selectLanguage("English")}
            >
              English
            </button>
            <button
              type="button"
              className="block w-full px-4 py-2 text-sm text-white hover:bg-NavyN700"
              onClick={() => selectLanguage("Arabic")}
            >
              Arabic
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageButton;
