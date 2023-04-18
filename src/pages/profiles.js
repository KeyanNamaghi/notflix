import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Profiles() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center sm:p-24 p-8 bg-neutral-900'>
      <Head>
        <title>Notflix</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='preload' href='/content/28daysLater.webp' as='image' />
        <link rel='preload' href='/content/500DaysOfSummer.webp' as='image' />
        <link rel='preload' href='/content/IT.webp' as='image' />
        <link rel='preload' href='/content/arrival.webp' as='image' />
        <link rel='preload' href='/content/chariotsOfFire.webp' as='image' />
        <link rel='preload' href='/content/chungkingExpress.webp' as='image' />
        <link rel='preload' href='/content/hotFuzz.webp' as='image' />
        <link rel='preload' href='/content/interstellar.webp' as='image' />
        <link rel='preload' href='/content/liloAndStitch.webp' as='image' />
        <link rel='preload' href='/content/manOfSteel.webp' as='image' />
        <link rel='preload' href='/content/matrix.webp' as='image' />
        <link rel='preload' href='/content/minions.webp' as='image' />
        <link rel='preload' href='/content/pocahontas.webp' as='image' />
        <link rel='preload' href='/content/scarface.webp' as='image' />
        <link rel='preload' href='/content/screamVI.webp' as='image' />
        <link rel='preload' href='/content/teletubbies.webp' as='image' />
        <link rel='preload' href='/content/theIronGiant.webp' as='image' />
        <link rel='preload' href='/content/theMandalorian.webp' as='image' />
        <link rel='preload' href='/content/thePursuitOfHappiness.webp' as='image' />
        <link rel='preload' href='/content/whiplash.webp' as='image' />
      </Head>
      <div className='text-center'>
        <h1 className='text-[30px] sm:text-[3.5vw] font-normal text-neutral-100 mb-8 text-center'>
          Who&apos;s watching?
        </h1>
        <ul className='flex gap-[2vw] flex-wrap justify-center'>
          <li className='min-w-[84px] w-[10vw] avatar-logo'>
            <Link href='/browse'>
              <Image width={175} height={175} src='/avatar1.png' alt='avatar' className='rounded' />
              <p className='leading-none font-light text-neutral-500 text-center mt-4 text-[12px] sm:text-[1.2vw]'>
                Moneybags
              </p>
            </Link>
          </li>
          <li className='min-w-[84px] w-[10vw] avatar-logo'>
            <Link href='/browse'>
              <Image width={175} height={175} src='/avatar2.png' alt='avatar' className='rounded' />
              <p className='leading-none font-normal text-neutral-500 text-center mt-4 text-[12px] sm:text-[1.2vw]'>
                Cheapskate
              </p>
            </Link>
          </li>
          <li className='min-w-[84px] w-[10vw] avatar-logo'>
            <Link href='/browse'>
              <Image width={175} height={175} src='/avatar3.png' alt='avatar' className='rounded' />
              <p className='leading-none font-normal text-neutral-500 text-center mt-4 text-[12px] sm:text-[1.2vw]'>
                old housemate
              </p>
            </Link>
          </li>
          <li className='min-w-[84px] w-[10vw] avatar-logo'>
            <Link href='/browse'>
              <Image width={175} height={175} src='/avatar4.png' alt='avatar' className='rounded' />
              <p className='leading-none font-normal text-neutral-500 text-center mt-4 text-[12px] sm:text-[1.2vw]'>
                Disney+ hookup
              </p>
            </Link>
          </li>
          <li className='min-w-[84px] w-[10vw] avatar-logo'>
            <Link href='/browse'>
              <Image width={175} height={175} src='/avatar5.png' alt='avatar' className='rounded' />
              <p className='leading-none font-normal text-neutral-500 text-center mt-4 text-[12px] sm:text-[1.2vw]'>
                Omar
              </p>
            </Link>
          </li>
        </ul>
        <button
          disabled
          className='font-normal text-neutral-500 border-neutral-500 border-[1px] px-8 py-2 text-[12px] sm:text-[1.2vw] mt-28 cursor-not-allowed'>
          Unmanageable Profiles
        </button>
      </div>
    </div>
  )
}
