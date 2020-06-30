import { useState } from 'react';

const avatars = [
  'https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/flagged/photo-1557427705-88c1e5a11a52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
];

const slideOverPanel = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        type='button'
        className='border border-gray-300 rounded-md py-2 px-4 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-800 transition duration-150 ease-in-out'
      >
        Open SlidePanel
      </button>
      <div
        className={`fixed inset-0 overflow-hidden ${
          isPanelOpen ? '' : 'hidden'
        }`}
      >
        {/* Panel */}
        <section className='max-w-xs absolute right-0 inset-y-0 translate-x-10'>
          <div className='shadow-xl bg-white h-full'>
            <header className='space-y-1 py-6 px-4 bg-indigo-600'>
              <div className='flex justify-between items-center'>
                <h2 className='text-white font-medium text-lg leading-7'>
                  New Project
                </h2>
                <button
                  aria-label='Close Panel'
                  className='text-indigo-200 hover:text-white'
                  onClick={() => setIsPanelOpen(!isPanelOpen)}
                >
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M6 18L18 6M6 6l12 12'></path>
                  </svg>
                </button>
              </div>
              <p className='text-sm leading-5 text-indigo-300'>
                Get started by filling in the information below to create your
                new project.
              </p>
            </header>
            <div className='divide-y divide-gray-200'>
              <div className='px-4 divide-y divide-gray-200'>
                <div className='space-y-6 pt-6 pb-5'>
                  {/* label and input field */}
                  <div className='space-y-2'>
                    <label
                      htmlFor='project_name'
                      className='block text-sm font-medium leading-5 text-gray-900'
                    >
                      Project name
                    </label>
                    <div className='rounded-md shadow-sm relative'>
                      <input
                        id='project_name'
                        className='form-input block w-full sm:text-sm leading-5 pt-1 pb-1 border border-gray-300 rounded'
                      />
                    </div>
                  </div>
                  {/* label and textarea */}
                  <div className='space-y-2'>
                    <label
                      htmlFor='description'
                      className='block text-sm font-medium leading-5 text-gray-900'
                    >
                      Description
                    </label>
                    <div className='rounded-md shadow-sm relative'>
                      <textarea
                        rows={4}
                        id='description'
                        className='form-input block w-full sm:text-sm leading-5 border border-gray-300 rounded'
                      ></textarea>
                    </div>
                  </div>

                  {/* team member section */}
                  <div className='space-y-2'>
                    <h3 className='text-sm font-medium leading-5 text-gray-900'>
                      Team members
                    </h3>
                    {/* avatar groups */}
                    <div>
                      <div className='flex space-x-3'>
                        {avatars.map((av, i) => (
                          <a href='#' key={i}>
                            <img
                              className='inline-block h-8 w-8 rounded-full'
                              src={av}
                              alt='avatar-one'
                            />
                          </a>
                        ))}
                        <button
                          type='button'
                          className='text-gray-400 inline-flex w-8 h-8 items-center justify-center border-2 border-dashed rounded-full border-gray-200'
                        >
                          <img
                            className='h-5 w-5'
                            src='https://www.freepnglogos.com/uploads/plus-icon/plus-booking-mary-mary-snyder-37.png'
                            alt='plus'
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* privacy */}
                  <fieldset className='space-y-2'>
                    <legend className='text-sm leading-5 font-medium text-gray-900'>
                      Privacy
                    </legend>
                    <div className='space-y-5'>
                      <div className='flex items-start'>
                        <div className='absolute flex items-center h-5'>
                          <input
                            id='public_access'
                            aria-describedby='privacy_public_access_description'
                            className='form-radio h-4 w-4 text-indigo-600 transition duration-1500 ease-in-out'
                            type='radio'
                            name='privacy'
                          />
                        </div>
                        <div className='pl-6 text-sm leading-5'>
                          <label
                            htmlFor='public_access'
                            className='font-medium text-gray-900'
                          >
                            Public access
                          </label>
                          <p
                            id='privacy_public_access_description'
                            className='text-gray-500'
                          >
                            Everyone with the link will see this project
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className='flex items-start'>
                        <div className='absolute flex items-center h-5'>
                          <input
                            id='private_to_project_members'
                            aria-describedby='privacy_private_to_project_members_description'
                            className='form-radio h-4 w-4 text-indigo-600 transition duration-1500 ease-in-out'
                            type='radio'
                            name='privacy'
                          />
                        </div>
                        <div className='pl-6 text-sm leading-5'>
                          <label
                            htmlFor='private_to_project_members'
                            className='font-medium text-gray-900'
                          >
                            Private to Project Members
                          </label>
                          <p
                            id='privacy_private_to_project_members_description'
                            className='text-gray-500'
                          >
                            Only members of this project would be able to access
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='flex items-start'>
                        <div className='absolute flex items-center h-5'>
                          <input
                            id='private_to_you'
                            aria-describedby='privacy_private_to_you_description'
                            className='form-radio h-4 w-4 text-indigo-600 transition duration-1500 ease-in-out'
                            type='radio'
                            name='privacy'
                          />
                        </div>
                        <div className='pl-6 text-sm leading-5'>
                          <label
                            htmlFor='private_to_you'
                            className='font-medium text-gray-900'
                          >
                            Private to you
                          </label>
                          <p
                            id='privacy_private_to_you_description'
                            className='text-gray-500'
                          >
                            You are the only one able to access this project
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className='space-y-4 pt-4 pb-6'>
                  <div className='flex text-sm leading-5'>
                    <a
                      href='#'
                      className='space-x-2 inline-flex items-center text-indigo-600 font-medium'
                    >
                      <svg
                        className='w-5 h-5 stroke-current text-indigo-500'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'></path>
                      </svg>
                      <span>Copy link</span>
                    </a>
                  </div>
                  <div className='flex text-sm leading-5'>
                    <a
                      href='#'
                      className='space-x-2 inline-flex items-center text-gray-500'
                    >
                      <svg
                        className='h-5 w-5 fill-stroke text-gray-500'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                      </svg>
                      <span>Learn more about sharing</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='px-4 py-4 space-x-4 flex justify-end'>
                <span className='inline-flex rounded-md shadow-sm'>
                  <button
                    type='button'
                    className='border border-gray-300 rounded-md py-2 px-4 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-800 transition duration-150 ease-in-out'
                  >
                    Cancel
                  </button>
                </span>
                <span className='inline-flex rounded-md shadow-sm'>
                  <button
                    type='button'
                    className='border border-gray-300 rounded-md py-2 px-4 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-800 transition duration-150 ease-in-out'
                  >
                    Create
                  </button>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default slideOverPanel;
