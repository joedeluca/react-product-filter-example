interface CardNavigationProps {
  isPreorder?: boolean;
}
function CardNavigation({ isPreorder }: CardNavigationProps) {
  return (
    <div className='flex border-t border-zinc-700 text-zinc-200 mt-3'>
      <div className='border-r border-zinc-700 basis-1/2'>
        <div className='cursor-pointer p-3 items-center text-center hover:text-black hover:bg-white rounded-bl-lg h-14'>
          <button className='w-full h-full'>Details</button>
        </div>
      </div>
      <div className='w-full basis-1/2'>
        <div className='cursor-pointer items-center text-center hover:text-black hover:bg-white rounded-br-lg h-14'>
          {isPreorder ? (
            <button className='w-full h-full'>Pre-Order</button>
          ) : (
            <button className='w-full h-full'>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardNavigation;
