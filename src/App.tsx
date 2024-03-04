import { useState } from "react";
import CheckboxFilter from "./components/CheckFilter";
import DynamicFilter from "./components/DynamicFilter";
import NavBar from "./components/NavBar";
import IconFilter from "./components/IconFilter";
import IconCloseCircle from "./components/IconCloseCircle";
import Footer from "./components/Footer";
import Card from "./components/Card";

interface Product {
  id: string;
  name: string;
  author: string;
  description: string;
  platform: string[];
  genres: string[];
  price: number;
  players: number;
  available: boolean;
  preorder: boolean;
  restock_date: Date;
  player_max: number;
  cover_art: string;
}

const products: Product[] = [
  {
    id: "5bf14hd7f9cs79s1",
    name: "Cosmic Collapse",
    author: "Xenode",
    description: "It's the end of the world. Yawn. Did somebody say, 'tacos?'",
    platform: ["macOS", "iOS"],
    genres: ["RPG", "Horror"],
    price: 15,
    players: 16,
    available: true,
    preorder: false,
    restock_date: new Date(2024, 5, 14),
    player_max: 1,
    cover_art: "cosmic-collapse-cover.jpg",
  },
  {
    id: "5bf14hd7f9cs79v2",
    name: "The Shadow King",
    author: "Xenode",
    description: "There are two kings. That's one too many.",
    platform: ["Win", "Android"],
    genres: ["Puzzle"],
    price: 12,
    players: 16,
    available: true,
    preorder: false,
    restock_date: new Date(2024, 5, 14),
    player_max: 1,
    cover_art: "shadow-king-cover.jpg",
  },
  {
    id: "5bf14hd7f9cs79v3",
    name: "Hellgineers",
    author: "Xenode",
    description: "Satan's atelier. Your Hellegantly designed nightmare.",
    platform: ["Win", "Android"],
    genres: ["Adventure"],
    price: 25,
    players: 1,
    available: true,
    preorder: false,
    restock_date: new Date(2024, 5, 14),
    player_max: 1,
    cover_art: "hellgineers-cover.jpg",
  },
  {
    id: "5bf14hd7f9cs79v4",
    name: "Golf Monday",
    author: "Xenode",
    description:
      "A quirky combination of murder and sport. Choosing the right club is more important than ever.",
    platform: ["Win", "Android", "Linux"],
    genres: ["RPG", "Platformer"],
    price: 28,
    players: 16,
    available: true,
    preorder: false,
    restock_date: new Date(2024, 5, 14),
    player_max: 2,
    cover_art: "golf-monday-cover.jpg",
  },
  {
    id: "5bf14hd7f9cs79v5",
    name: "Lorem Ipsum Demo 1",
    author: "Xenode",
    description: "Lorem ipsum magic glipsum.",
    platform: ["Win", "Android", "Linux", "iOS", "macOS"],
    genres: ["Strategy"],
    price: 35,
    players: 1,
    available: true,
    preorder: false,
    restock_date: new Date(2024, 5, 14),
    player_max: 1,
    cover_art: "cosmic-collapse-cover.jpg",
  },
  {
    id: "5bf14hd7f9cs79v6",
    name: "Lorem Ipsum Demo 2",
    author: "Xenode",
    description: "Lorem ipsum magic glipsum.",
    platform: ["Win", "Android", "Linux", "iOS", "macOS"],
    genres: ["Sports"],
    price: 32,
    players: 2,
    available: true,
    preorder: false,
    restock_date: new Date(2024, 5, 14),
    player_max: 1,
    cover_art: "cosmic-collapse-cover.jpg",
  },
  {
    id: "5bf14hd7f9cs79v7",
    name: "Lorem Ipsum Demo 3",
    author: "Xenode",
    description: "Lorem ipsum magic glipsum.",
    platform: ["Win", "Android", "Linux", "iOS", "macOS"],
    genres: ["RPG"],
    price: 45,
    players: 16,
    available: true,
    preorder: false,
    restock_date: new Date(2024, 5, 14),
    player_max: 1,
    cover_art: "cosmic-collapse-cover.jpg",
  },
  {
    id: "5bf14hd7f9cs79v8",
    name: "Lorem Ipsum Demo 4",
    author: "Xenode",
    description: "Lorem ipsum magic glipsum.",
    platform: ["Win", "Android", "Linux", "iOS", "macOS"],
    genres: ["Action", "Adventure"],
    price: 50,
    players: 6,
    available: true,
    preorder: false,
    restock_date: new Date(2024, 5, 14),
    player_max: 1,
    cover_art: "cosmic-collapse-cover.jpg",
  },
  {
    id: "5bf14hd7f9cs79v0",
    name: "Lorem Ipsum Demo 6",
    author: "Xenode",
    description: "Lorem ipsum magic glipsum.",
    platform: ["Android", "iOS"],
    genres: ["Sports", "Simulation"],
    price: 99,
    players: 1,
    available: true,
    preorder: true,
    restock_date: new Date(2024, 5, 14),
    player_max: 1,
    cover_art: "cosmic-collapse-cover.jpg",
  },
  {
    id: "5bf14hd7f9cs79v9",
    name: "Lorem Ipsum Demo 5",
    author: "Xenode",
    description: "Lorem ipsum magic glipsum.",
    platform: ["Win", "Android", "Linux", "iOS", "macOS"],
    genres: ["Puzzle"],
    price: 42,
    players: 16,
    available: false,
    preorder: false,
    restock_date: new Date(2024, 5, 14),
    player_max: 1,
    cover_art: "cosmic-collapse-cover.jpg",
  },
];

function App() {
  // filter state
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [selectedPlayerRange, setSelectedPlayerRange] = useState<string>("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  // actual filter action
  const filteredProducts = products
    .filter(
      (product) =>
        selectedPriceRange === "" ||
        product.price <= parseFloat(selectedPriceRange)
    )
    .filter(
      (product) =>
        selectedPlayerRange === "" ||
        product.players <= parseFloat(selectedPlayerRange)
    )
    .filter(
      (product) =>
        selectedPlatforms.length === 0 ||
        selectedPlatforms.every((platform) =>
          product.platform.includes(platform)
        )
    )
    .filter(
      (product) =>
        selectedGenres.length === 0 ||
        selectedGenres.every((size) => product.genres.includes(size))
    );

  const platforms = [
    ...new Set(products?.flatMap((val: Product) => val.platform)),
  ];
  const genres = [...new Set(products?.flatMap((val: Product) => val.genres))];

  const resetFilters = () => {
    setSelectedPriceRange("");
    setSelectedPlayerRange("");
    setSelectedPlatforms([]);
    setSelectedGenres([]);
  };
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <NavBar />
      <main className="sm:px-[8px] px-[8px] max-w-[1200px] mx-auto mt-24">
        <section>
          <div className="flex w-full justify-between mb-3">
            <h1 className="text-white">Latest</h1>
            <button onClick={toggle}>
              {isOpen ? (
                <div className="flex">
                  <span className="pr-2 text-xs text-zinc-200 pt-1">Close</span>
                  <IconCloseCircle
                    className="text-white"
                    width="24px"
                    height="24px"
                  />
                </div>
              ) : (
                <div className="flex">
                  <span className="pr-2 text-xs text-zinc-200 pt-1">
                    Filter
                  </span>
                  <IconFilter
                    className="text-zinc-200"
                    width="24px"
                    height="24px"
                  />
                </div>
              )}
            </button>
          </div>
          <div className="flex sm:flex-row flex-col items-start sm:space-x-5 sm:space-y-0 space-y-5">
            {isOpen && (
              <aside className="border border-white rounded-md sm:min-w-[250px] min-w-full bg-zinc-200">
                <div className="py-4 px-3">
                  <DynamicFilter
                    label="Price"
                    isPriceRange={true}
                    selectedOptions={selectedPriceRange}
                    setSelectedOptions={setSelectedPriceRange}
                    filteredProducts={filteredProducts}
                    products={products}
                    options={[]}
                  />
                  <DynamicFilter
                    label="Players"
                    selectedOptions={selectedPlayerRange}
                    setSelectedOptions={setSelectedPlayerRange}
                    filteredProducts={filteredProducts}
                    products={products}
                    options={[]}
                  />
                  <div className="flex">
                    <div className="basis-1/2">
                      <CheckboxFilter
                        label="Genre"
                        options={genres}
                        selectedOptions={selectedGenres}
                        setSelectedOptions={setSelectedGenres}
                        isPlatform={false}
                      />
                    </div>
                    <CheckboxFilter
                      label="Platform"
                      options={platforms}
                      selectedOptions={selectedPlatforms}
                      setSelectedOptions={setSelectedPlatforms}
                      isPlatform={true}
                    />
                  </div>
                </div>
                <div className="flex border-t border-white text-zinc-200 mt-3">
                  <div className="border-r border-white basis-1/2">
                    <div className=" bg-black cursor-pointer p-3 items-center text-center hover:text-black hover:bg-white rounded-bl-md h-14">
                      <button className="w-full h-full" onClick={toggle}>
                        Close
                      </button>
                    </div>
                  </div>
                  <div className="w-full basis-1/2">
                    <div className=" bg-black cursor-pointer p-3 items-center text-center hover:text-black hover:bg-white rounded-br-md h-14">
                      <button className="w-full h-full" onClick={resetFilters}>
                        Reset ({filteredProducts?.length})
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            )}
            <aside className="border rounded-md p-4 min-h-screen w-full">
              {filteredProducts.length > 0 ? (
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                  {filteredProducts.map((product) => (
                    <Card {...product} />
                  ))}
                </div>
              ) : (
                <div>No Match found</div>
              )}
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
