import Link from 'next/link'

export default function App() {
  return (
    <main className='w-full h-screen mx-auto px-6 lg:px-[165px] flex flex-col lg:flex-row justify-center lg:justify-between items-center home_background'>
      <div className='flex flex-col items-center lg:items-start gap-4 max-w-[450px] min-w-[327px] w-full'>
        <h2 className='md:text-[28px] tracking-widest md:tracking-[3.4px] lg:tracking-[4.7008px] font-barlowCond'>
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className='text-white font-belleFair text-[80px] md:text-[150px]'>
          SPACE
        </h1>
        <p className='text-center md:text-lg lg:leading-8 lg: lg:text-left'>
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <Link
        href={'/destination'}
        className='top-[8%] z-10 relative flex items-center justify-center text-xl text-black uppercase bg-white rounded-full font-belleFair w-36 h-36 sm:w-[274px] sm:h-[274px] before:inset-0 before:absolute lg:hover:before:-inset-1 hover:before:bg-white/20 before:rounded-full lg:before:hover:animate-ping'>
        Explore
      </Link>
    </main>
  )
}
