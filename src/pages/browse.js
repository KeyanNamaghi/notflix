import Head from 'next/head'
import React from 'react'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { rows } from '@/utils/films'

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
      <div className='flex-col items-center justify-center p-10 bg-neutral-900 min-h-screen'>
        {rows.map(({ title, films }) => (
          <div key={title}>
            <h2 className='text-[12px] md:text-[1.4vw] text-neutral-100 mb-4 mt-12'>{title}</h2>
            <Slider {...settings} className=''>
              {films.map((film) => (
                <div key={film} className='p-2 w-[272px]'>
                  <Image
                    key={film}
                    width={272}
                    height={152}
                    loading='eager'
                    src={`/content/${film}.webp`}
                    alt='arrival'
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
