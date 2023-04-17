import Head from 'next/head'
import React from 'react'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Browse() {
  const films = [
    '28daysLater',
    '500DaysOfSummer',
    'IT',
    'arrival',
    'chariotsOfFire',
    'chungkingExpress',
    'hotFuzz',
    'interstellar',
    'liloAndStitch',
    'manOfSteel',
    'matrix',
    'minions',
    'pocahontas',
    'scarface',
    'screamVI',
    'teletubbies',
    'theIronGiant',
    'theMandalorian',
    'thePursuitOfHappiness',
    'whiplash',
  ]

  // function to shuffle an array
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return [...array]
  }

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // other settings...
  }

  return (
    <>
      <Head>
        <title>Notflix</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='flex-col items-center justify-center p-12 bg-neutral-900'>
        <div>
          <h2 className='text-[1.4vw] text-neutral-100 mb-4 mt-12'>My List</h2>
          <Slider {...settings} className=''>
            {shuffle(films).map((film) => (
              <div key={film}>
                <Image
                  key={film}
                  width={272}
                  height={152}
                  src={`/content/${film}.webp`}
                  alt='arrival'
                  className='rounded'
                />
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <h2 className='text-[1.4vw] text-neutral-100 mb-4 mt-12'>Films That Pair Well With a Carrot Based Lunch</h2>
          <Slider {...settings} className=''>
            {shuffle(films).map((film) => (
              <div key={film}>
                <Image
                  key={film}
                  width={272}
                  height={152}
                  src={`/content/${film}.webp`}
                  alt='arrival'
                  className='rounded'
                />
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <h2 className='text-[1.4vw] text-neutral-100 mb-4 mt-12'>Critically-acclaimed Films</h2>
          <Slider {...settings} className=''>
            {shuffle(films).map((film) => (
              <div key={film}>
                <Image
                  key={film}
                  width={272}
                  height={152}
                  src={`/content/${film}.webp`}
                  alt='arrival'
                  className='rounded'
                />
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <h2 className='text-[1.4vw] text-neutral-100 mb-4 mt-16'>Gems For You</h2>
          <Slider {...settings} className=''>
            {shuffle(films).map((film) => (
              <div key={film}>
                <Image
                  key={film}
                  width={272}
                  height={152}
                  src={`/content/${film}.webp`}
                  alt='arrival'
                  className='rounded'
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}
