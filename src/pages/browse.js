import Head from 'next/head'

export default function Browse() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center sm:p-24 p-8 bg-neutral-900'>
      <Head>
        <title>Notflix</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='text-center'>
        <h1 className='text-[30px] sm:text-[3.5vw] font-normal text-neutral-100 mb-8 text-center'>Browse</h1>
      </div>
    </div>
  )
}
