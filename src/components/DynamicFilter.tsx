/*
We track Genre, Players, Platform, Price
*/

import { useEffect, useState } from "react";

interface Product {
  price: number;
  players: number;
}

interface DynamicFilterProps<T> {
  label: string;
  options: string[];
  selectedOptions: T;
  setSelectedOptions: (value: T) => void;
  isPriceRange?: boolean;
  filteredProducts: Product[];
  products: Product[];
}

function DynamicFilter<T extends string | [string, string]>({
  label,
  setSelectedOptions,
  isPriceRange = false,
  filteredProducts,
  products,
}: DynamicFilterProps<T>) {
  // Calculate the highest price / players from products
  const getMaxPrice = () =>
    Math.max(...products.map((product) => product.price), 0);
  const getSelectionPrice = () =>
    Math.max(...filteredProducts.map((product) => product.price), 0);
  const getMaxPlayers = () =>
    Math.max(...products.map((product) => product.players), 0);
  const getSelectionPlayers = () =>
    Math.max(...filteredProducts.map((product) => product.players), 0);

  // State to store the initial max value for the price range slider
  const [maxPrice, setMaxPrice] = useState(getMaxPrice());
  const [selectionPrice, setSelectionPrice] = useState(getSelectionPrice());

  const [maxPlayers, setMaxPlayers] = useState(getMaxPlayers());
  const [selectionPlayers, setSelectionPlayers] = useState(
    getSelectionPlayers()
  );
  // State to track the current value of the range slider
  const [sliderValue, setSliderValue] = useState(maxPrice.toString());
  const [playerSliderValue, setPlayerSliderValue] = useState(
    maxPlayers.toString()
  );

  useEffect(() => {
    // updates the max value of the price / players range slider when prods change
    setMaxPrice(getMaxPrice());
    setSelectionPrice(getSelectionPrice());
    setMaxPlayers(getMaxPlayers());
    setSelectionPlayers(getSelectionPlayers());
  }, [filteredProducts, products]);

  return (
    <div className="mb-2">
      {isPriceRange ? (
        <div className="block">
          <p className="font-digicat text-xs whitespace-nowrap">
            {label}
            {": "}
            {selectionPrice === 0 ? "Free" : "Free to $" + selectionPrice}
          </p>
          <input
            className="h-2.5 w-full cursor-pointer"
            type="range"
            min="0"
            max={maxPrice.toString()}
            step="1"
            value={sliderValue as string}
            onChange={(e) => {
              const minPrice = e.target.value;
              setSliderValue(minPrice);
              setSelectedOptions([
                minPrice,
                (sliderValue as unknown as [string, string])[1],
              ] as T);
            }}
          />
        </div>
      ) : (
        <div className="block w-full">
          <p className="font-digicat text-xs whitespace-nowrap">
            {label}
            {": "}
            {selectionPlayers < 2
              ? "Single Player"
              : "1 to " + selectionPlayers}
          </p>
          <input
            className="w-full"
            type="range"
            min="1"
            max={maxPlayers.toString()}
            step="1"
            value={playerSliderValue as string}
            onChange={(e) => {
              const minPlayers = e.target.value;
              setPlayerSliderValue(minPlayers);
              setSelectedOptions([
                minPlayers,
                (playerSliderValue as unknown as [string, string])[1],
              ] as T);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default DynamicFilter;
