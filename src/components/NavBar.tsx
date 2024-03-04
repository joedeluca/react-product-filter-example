import IconCircleUser from "./IconCircleUser";
import IconShoppingBag from "./IconShoppingBag";
import Logo from "./Logo";
import LogoText from "./LogoText";

function NavBar() {
  return (
    <header className='fixed z-50 p-2 top-0 flex flex-col bg-white text-center items-center text-black text-2xl w-full'>
      <div className='grid grid-cols-[70px_minmax(100px,_1fr)_50px] grid-flow-col gap-1 w-full'>
        <div className='row-span-3 bg-black max-w-12'>
          <Logo width='2.9em' height='2.7em' />
        </div>
        <div className='col-span-2 w-full border-t-8 border-black pt-1'>
          <div className='flex justify-between leading-[1rem]'>
            <div className='basis-1/2'>
              <LogoText />
            </div>
            <div className=''>
              <div className='flex'>
                <IconCircleUser
                  className='text-black'
                  width='24px'
                  height='16px'
                />
                <IconShoppingBag
                  className='text-black'
                  width='24px'
                  height='16px'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row-span-2 col-span-2'>
          <ul className='flex justify-evenly text-xs items-baseline'>
            <li className='border-b-8 border-black w-full mr-1'>Latest</li>
            <li className='border-b-8 border-black w-full'>Browse</li>
            <li className='border-b-8 border-black w-full'>Reviews</li>
            <li className='border-b-8 border-black w-full'>Community</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
