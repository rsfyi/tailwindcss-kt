import { useState } from 'react';

import { Layout } from '../components/Layout';

const flexbox = () => {
  const [flexProperty, setFlexProperty] = useState('');

  return (
    <Layout>
      <div className='flex w-1/2 mb-4 mt-4'>
        <button
          className='px-3 py-1 border-2 border-red-200 rounded-full'
          onClick={() => setFlexProperty('flex')}
        >
          flex
        </button>
        <button className='px-3 py-1 border-2 border-red-200 rounded-full'>
          justify-center
        </button>
        <button
          className='px-3 py-1 border-2 border-red-200 rounded-full'
          onClick={() => setFlexProperty('flex items-center')}
        >
          items-center
        </button>
      </div>
      <div className={`w-1/2 h-64 bg-gray-300 ${flexProperty}`}>
        <div className='h-16 w-16 bg-teal-300'></div>
        <div className='h-16 w-16 bg-orange-300'></div>
        <div className='h-16 w-16 bg-red-300'></div>
      </div>
    </Layout>
  );
};

export default flexbox;
