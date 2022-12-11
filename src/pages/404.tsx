import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='flex flex-col items-center justify-center w-full h-screen gap-4 px-6 mx-auto'>
      <h1 className='text-4xl tracking-widest text-white uppercase font-belleFair'>
        Are you lost?
      </h1>
      <p className='text-xl'>Please comeback to home page</p>
      <Link href={'/'} className='text-xl relative before:absolute before:hover:block before:text-2xl before:content-["Return"] before:hidden hover:before:animate-ping'>Return</Link>
    </main>
  )
}
