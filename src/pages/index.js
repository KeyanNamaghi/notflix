import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <div id='backdrop'>
          <Image className='w-full h-auto object-cover' fill src='/backdrop.jpeg' alt='backdrop' />
          <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        </div>
        <div className='absolute top-0 left-0 w-full bg-gradient-to-b from-black via-transparent to-transparent border-b-0'>
          <svg
            className='h-24 ml-4 p-6'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 111 30'
            data-uia='netflix-logo'
            aria-hidden='true'
            focusable='false'>
            <g
              data-bx-workspace='master'
              viewBox='0 0 111 30'
              data-uia='netflix-logo'
              aria-hidden='true'
              focusable='false'>
              <g id='netflix-logo'>
                <path
                  fill='#e50914'
                  d='M 105.062 14.281 L 110.999 30 C 109.249 29.75 107.5 29.437 105.718 29.155 L 102.374 20.469 L 98.937 28.438 C 97.25 28.156 95.593 28.062 93.906 27.843 L 99.937 14.093 L 94.468 0 L 99.531 0 L 102.593 7.874 L 105.875 0 L 110.999 0 L 105.062 14.281 Z M 90.469 0 L 85.875 0 L 85.875 27.25 C 87.375 27.344 88.937 27.406 90.469 27.593 L 90.469 0 Z M 81.906 26.937 C 77.719 26.656 73.531 26.406 69.25 26.312 L 69.25 0 L 73.937 0 L 73.937 21.875 C 76.625 21.937 79.312 22.156 81.906 22.28 L 81.906 26.937 Z M 64.25 10.656 L 64.25 15.344 L 57.844 15.344 L 57.844 26 L 53.219 26 L 53.219 0 L 66.344 0 L 66.344 4.687 L 57.844 4.687 L 57.844 10.656 L 64.25 10.656 Z M 45.344 4.687 L 45.344 26.25 C 43.781 26.25 42.188 26.25 40.656 26.312 L 40.656 4.687 L 35.812 4.687 L 35.812 0 L 50.218 0 L 50.218 4.687 L 45.344 4.687 Z M 24.5 10.999 C 24.4 22.448 24.62 4.645 24.5 15.688 L 24.412 22.428 C 27.162 22.24 30 22.25 32.781 22.156 L 32.781 26.656 L 19.813 27.688 L 19.813 0 L 32.781 0 L 32.781 4.687 L 24.5 4.687 L 24.5 10.999 Z M 4.781 12.968 L 4.781 29.343 C 3.094 29.531 1.593 29.75 0 30 L 0 0 L 4.469 0 L 10.562 17.032 L 10.562 0 L 15.25 0 L 15.25 28.062 C 13.594 28.344 11.906 28.438 10.125 28.687 L 4.781 12.968 Z'></path>
              </g>
              <rect fill='#e50914' x='28.964' y='4.459' width='3.817' height='17.889'></rect>
            </g>
          </svg>
        </div>
        <div
          id='login-body'
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[-30px]'>
          <div
            style={{ minWidth: 'min(100vw, 450px)' }}
            className='flex top-0 left-0 w-full h-full flex flex-col items-center text-center p-16 bg-black bg-opacity-75 rounded min-h-[660px] min-w-[450px] max-w-md'>
            <h1 className='text-white text-3xl font-medium mb-7 text-left w-full'>Sign In</h1>
            <div className='relative w-full pb-4'>
              <input
                className='border-0 rounded text-black h-12 leading-[50px] px-5 pt-4 w-full hover:border-0 focus:border-0'
                value='sharedaccount@notflix.com'
              />
              <label className='absolute top-1 left-5 text-[11px]	text-black'>Email or phone number</label>
            </div>
            <div className='relative w-full pb-4'>
              <input
                className='border-0 rounded text-black h-12 leading-[50px] px-5 pt-4 w-full hover:border-0 focus:border-0'
                type='password'
                value='password'
              />
              <label className='absolute top-1 left-5 text-[11px]	text-black'>Password</label>
            </div>
            <a href='/browse' className='bg-[#e50914] text-white text-sm font-medium rounded h-12 w-full mt-4 p-3'>
              <span>Sign In</span>
            </a>
            <div className='flex items-center justify-between w-full mt-4'>
              <div className='flex items-center'>
                <input type='checkbox' className='h-4 w-4' />
                <label className='text-neutral-400 text-sm ml-2'>Remember me</label>
              </div>
              <a className='text-neutral-400 text-sm'>You don&apos;t need help</a>
            </div>
            <div className='flex w-full mt-16 text-neutral-400'>
              New to Notflix?
              <span className='text-white ml-2'>Don&apos;t sign up.</span>
            </div>
            <div className='flex w-full mt-4 text-neutral-400 text-xs text-left'>
              This page is not protected by Google reCAPTCHA to ensure you&apos;re probably a bot.
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
