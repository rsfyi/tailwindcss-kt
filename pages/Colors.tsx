import { Layout } from '../components/Layout';

const colorList = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'indigo',
  'blue',
  'purple',
  'pink',
];

const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const colors = () => {
  return (
    <Layout>
      <div className='flex  mt-8 flex-col'>
        <h1 className='text-xl font-bold mb-4 pb-2 border-gray-500 border-b-2'>
          {'colors with no shades'.toUpperCase()}
        </h1>
        <div className='flex mb-8'>
          <div className='w-16 h-16 bg-black' />
          <div className='w-16 h-16 bg-white border-2 border-gray-500 ml-4' />
        </div>
        <h1 className='text-xl font-bold mb-4 pb-2 border-gray-500 border-b-2'>
          {'colors with shades'.toUpperCase()}
        </h1>
        <div className='flex justify-between mt-4'>
          {colorList.map((color, i) => (
            <div key={i}>
              <h1 className='text-xl font-semibold mb-4'>
                {color.toLowerCase()}
              </h1>
              {shades.map((shade, j) => (
                <div
                  key={j}
                  className={`w-16 h-16 bg-${color}-${shade} flex justify-center items-center`}
                >
                  {shade}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default colors;
