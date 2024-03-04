import Logo from "./Logo";

function Footer() {
  return (
    <div className='border-t border-white p-2 mt-6'>
      <footer className='p-4 md:p-8 lg:p-10'>
        <div className='mx-auto max-w-screen-xl text-center'>
          <Logo className='mx-auto' width='4.7em' height='4.7em' />
          <p className='my-6 text-gray-500 dark:text-gray-400'>
            Thank you for making DigiCat the world's most popular indie game
            source.
          </p>
          <ul className='flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white'>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6 '>
                About
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                Browse
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                Reviews
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                Community
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                FAQs
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                Contact
              </a>
            </li>
          </ul>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2023-2024{" "}
            <a href='#' className='hover:underline'>
              DigiCat Games™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
