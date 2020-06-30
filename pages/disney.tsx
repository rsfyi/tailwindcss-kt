import { DisneySidebar } from '../components/DisneySidebar';

const disney = () => {
  return (
    <div className='bg-gray-900 flex min-h-screen text-white h-screen'>
      <DisneySidebar />
      <section className='flex-1 overflow-auto'>
        <div className='container mx-auto p-4 my-8 space-y-12'>
          <div>
            <img
              className='rounded'
              src='/assets/slide1.jpg'
              alt='mandalorian'
            />
          </div>
          <article className='flex items-center space-x-4'>
            <div className='w-1/5'>
              <a
                href='#'
                className='bg-gray-800 h-32 flex justify-center item-center rounded-lg hover:bg-gray-900 border border-gray-700 shadow-custom'
              >
                <img src='/assets/disney_logo.svg' alt='disney_logo' />
              </a>
            </div>
            <div className='w-1/5'>
              <a
                href='#'
                className='bg-gray-800 h-32 flex justify-center item-center rounded-lg hover:bg-gray-900 border border-gray-700 shadow-custom'
              >
                <img src='/assets/pixar_logo.svg' alt='pixar_logo' />
              </a>
            </div>
            <div className='w-1/5'>
              <a
                href='#'
                className='bg-gray-800 h-32 flex justify-center item-center rounded-lg hover:bg-gray-900 border border-gray-700 shadow-custom'
              >
                <img src='/assets/marvel_logo.svg' alt='marvel_logo' />
              </a>
            </div>
            <div className='w-1/5'>
              <a
                href='#'
                className='bg-gray-800 h-32 flex justify-center item-center rounded-lg hover:bg-gray-900 border border-gray-700 shadow-custom'
              >
                <img src='/assets/star_wars_logo.svg' alt='star_wars_logo' />
              </a>
            </div>
            <div className='w-1/5'>
              <a
                href='#'
                className='bg-gray-800 h-32 flex justify-center item-center rounded-lg hover:bg-gray-900 border border-gray-700 shadow-custom'
              >
                <img
                  src='/assets/national_geographic_logo.svg'
                  alt='national_geographic_logo'
                />
              </a>
            </div>
          </article>
          <section className='px-6'>
            <h2 className='text-gray-500 mb-2'>Recommended For You</h2>
            <article className='flex items-center space-x-6'>
              <div className='shadow-xl rounded overflow-hidden'>
                <a href='#'>
                  <img
                    src='/assets/star_wars_a_new_hope.jpg'
                    alt='star_wars_a_new_hope'
                  />
                </a>
              </div>
              <div className='shadow-xl rounded overflow-hidden'>
                <a href='#'>
                  <img
                    src='/assets/avengers_endgame.jpg'
                    alt='avengers_endgame'
                  />
                </a>
              </div>
              <div className='shadow-xl rounded overflow-hidden'>
                <a href='#'>
                  <img src='/assets/black_panther.jpg' alt='black_panther' />
                </a>
              </div>
              <div className='shadow-xl rounded overflow-hidden'>
                <a href='#'>
                  <img src='/assets/cinderella.jpg' alt='cinderella' />
                </a>
              </div>
              <div className='shadow-xl rounded overflow-hidden'>
                <a href='#'>
                  <img
                    src='/assets/high_school_musical.jpg'
                    alt='high_school_musical'
                  />
                </a>
              </div>
            </article>
          </section>
          <section className='px-6'>
            <h2 className='text-gray-500 mb-2'>Original For You</h2>
            <article className='flex items-center space-x-6'>
              <div className='shadow-xl rounded overflow-hidden'>
                <a href='#'>
                  <img
                    src='/assets/star_wars_a_new_hope.jpg'
                    alt='star_wars_a_new_hope'
                  />
                </a>
              </div>
              <div className='shadow-xl rounded overflow-hidden'>
                <a href='#'>
                  <img
                    src='/assets/avengers_endgame.jpg'
                    alt='avengers_endgame'
                  />
                </a>
              </div>
              <div className='shadow-xl rounded overflow-hidden'>
                <a href='#'>
                  <img src='/assets/black_panther.jpg' alt='black_panther' />
                </a>
              </div>
              <div className='shadow-xl rounded overflow-hidden'>
                <a href='#'>
                  <img src='/assets/cinderella.jpg' alt='cinderella' />
                </a>
              </div>
              <div className='shadow-xl rounded overflow-hidden'>
                <a href='#'>
                  <img
                    src='/assets/high_school_musical.jpg'
                    alt='high_school_musical'
                  />
                </a>
              </div>
            </article>
          </section>
          <section className='px-6'>
            <h2 className='text-gray-500 mb-2'>Continue watching</h2>
            <article className='flex items-center space-x-6'>
              <div className='shadow-xl rounded overflow-hidden'>
                <a href='#'>
                  <img
                    src='/assets/star_wars_a_new_hope.jpg'
                    alt='star_wars_a_new_hope'
                  />
                </a>
              </div>
              <div className='shadow-xl rounded overflow-hidden'>
                <a href='#'>
                  <img
                    src='/assets/avengers_endgame.jpg'
                    alt='avengers_endgame'
                  />
                </a>
              </div>
              <div className='shadow-xl rounded overflow-hidden'>
                <a href='#'>
                  <img src='/assets/black_panther.jpg' alt='black_panther' />
                </a>
              </div>
              <div className='shadow-xl rounded overflow-hidden'>
                <a href='#'>
                  <img src='/assets/cinderella.jpg' alt='cinderella' />
                </a>
              </div>
              <div className='shadow-xl rounded overflow-hidden'>
                <a href='#'>
                  <img
                    src='/assets/high_school_musical.jpg'
                    alt='high_school_musical'
                  />
                </a>
              </div>
            </article>
          </section>
        </div>
      </section>
    </div>
  );
};

export default disney;
