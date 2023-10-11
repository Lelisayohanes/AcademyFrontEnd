import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

function LoginComponents() {
  const playerRef = useRef(null);

  useEffect(() => {
    // You can use any user interaction event to trigger the play
    // For example, here we use a setTimeout to start playing after 2 seconds.
    const playVideo = setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.play();
      }
    }, 2000);

    return () => clearTimeout(playVideo);
  }, []);

  return (
    <div className="min-h-screen  bg-[#164D63] py-[2em] ">
      <div className='bg-[#05B9E0] h-[96%] flex mx-auto lg:min-h-[600px] w-full  md:w-[90%] flex items-center justify-center'>
        <div className='w-[50%] lg:w-[63%] h-full  md:flex justify-center items-center hidden '>
          <ReactPlayer
            ref={playerRef}
            url="https://youtu.be/hoKDrFyQDy0?t=34"
            className='h-full'
            // playing 
          />
        </div>
        <div className='w-[50%]  lg:w-[37%]  bg-white justify-center items-center space-y-8'>
          <div className="w-full  md:w-[90%] mx-auto flex flex-col justify-between gap-[3em] text-center">
            <div className='flex justify-center pt-[4em]'>
              <h2 className=" text-center text-4xl font-bold text-gray-700">Signup</h2>
            </div>
            <div className='flex justify-center items-center  '>
              <form className="md:m-6 space-y-6 flex w-[80%] mx-auto justify-center flex-col gap-[2em] lg:max-w-[500px]  lg:p-8" action="#" method="POST">
                <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-[2em] max-w-[460px] justify-center ">
                  
                <div className='flex justify-center  '>
                    <label htmlFor="email" className="sr-only">Given ID</label>
                    <input
                      id="text"
                      name="id"
                      type="text"
                      // autoComplete="email"
                      required
                      className="
                    appearance-none relative  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 
                    text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "

                      placeholder="Given ID"
                    />
                  </div>
                  <div className='flex justify-center  '>
                    <label htmlFor="email" className="sr-only">Given ID</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="
                    appearance-none relative  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 
                    text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"

                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">Confirm Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group relative mb-2 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium  text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign up
                    </button>
                  </div>

                </div>




              </form>
            </div>
            <div className='pb-[2em] '>
              <div className=' justify-between px-[2em] lg:max-w-[500px] mx-auto'>
                <div className='flex justify-between '>
                  <div className='text-start'>Already have acount? </div>
                  <a href='/login'> <div className='text-bold text-blue-500 focus:pointer'>Signin</div></a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponents;
