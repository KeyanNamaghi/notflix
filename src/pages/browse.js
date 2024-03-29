import Head from 'next/head'
import React from 'react'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { rows } from '@/utils/films'
import Link from 'next/link'

export default function Browse() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style }} onClick={onClick} />
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style }} onClick={onClick} />
  }

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: false,
    infinite: true,
    speed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Notflix</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='absolute top-0 left-0 flex items-center w-full bg-gradient-to-b from-black via-transparent to-transparent border-b-0'>
        <Link href='/'>
          <svg
            className='h-20 ml-4 mr-4 p-6'
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
        </Link>
        <Link className='text-neutral-100 text-[14px] mr-4 font-bold' href='/'>
          Home
        </Link>
        <a className='text-neutral-100 text-[14px] mr-4' href='https://github.com/KeyanNamaghi'>
          Github
        </a>
        <a className='text-neutral-100 text-[14px] mr-4' href='https://twitter.com/jaythechou'>
          Art
        </a>
      </div>
      <div className='flex-col items-center justify-center p-6 pt-24 md:p-24 bg-neutral-900 min-h-screen'>
        {rows.map(({ title, films }) => (
          <div key={title}>
            <h2 className='text-[12px] md:text-[1.4vw] text-neutral-100 mb-4  md:mt-12'>{title}</h2>
            <Slider {...settings} className=''>
              {films.map((film) => (
                <div key={film} className='p-2 w-[272px]'>
                  <Image
                    key={film}
                    width={272}
                    height={152}
                    loading='eager'
                    src={`/content/${film}.webp`}
                    alt='film'
                    className='rounded'
                  />
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </>
  )
}
