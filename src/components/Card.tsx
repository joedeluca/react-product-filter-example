import CardNavigation from "./CardNavigation";
import OutOfStock from "./OutOfStock";

interface ProductProps {
  cover_art: string;
  description: string;
  name: string;
  platform: string[];
  genres: string[];
  author: string;
  available: boolean;
  preorder: boolean;
  price: number;
}

function Card({
  cover_art,
  description,
  name,
  platform,
  author,
  genres,
  available,
  preorder,
  price,
}: ProductProps) {
  return (
    <div className='min-w-[250px] w-full border rounded-lg shadow bg-zinc-950 border-zinc-700 hover:border-zinc-400 cursor-pointer'>
      <div className='relative'>
        <div className='absolute text-xl text-zinc-200 bg-zinc-950 p-2 absolute top-0 right-0 rounded-tr-lg rounded-bl-lg'>
          {price === 0 ? (
            "Free"
          ) : (
            <div>
              <span className='text-sm align-text-top'>&euro;</span>
              {price}
            </div>
          )}
        </div>
      </div>
      <a href='#'>
        <img className='rounded-t-lg' src={cover_art} alt={description} />
      </a>
      <div className='p-5 h-40'>
        <a href='#'>
          <h5 className='mb-1 font-bold tracking-tight text-zinc-300 text-zinc-200'>
            {name}
          </h5>
        </a>
        <div className='text-xs text-zinc-400 mb-2 flex'>
          <div>
            <span className='block'>By {author}</span>
            <span className='block'>Genre: {genres.join(", ")}</span>
            <span className='block'>Platform: {platform.join(", ")}</span>
          </div>
        </div>
        <p className='mb-3 font-normal text-zinc-400'>{description}</p>
      </div>
      {available ? <CardNavigation isPreorder={preorder} /> : <OutOfStock />}
    </div>
  );
}

export default Card;
