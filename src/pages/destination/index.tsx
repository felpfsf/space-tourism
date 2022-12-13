import Image from 'next/image'
import { prisma } from '../../../lib/prisma'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface IDestination {
  description: string
  distance: string
  id: number
  name: string
  travel: string
  imgWebp: string
  index: number
}

interface IDestinationProps {
  destination: IDestination[]
}

export default function Destination({ destination }: IDestinationProps) {
  const [content, setContent] = useState(0)

  const variations = {
    enter: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '-100vw' }
  }

  return (
    // <main className='flex flex-col items-center justify-center w-full px-6 mx-auto mb-4 pt-28 lg:pt-36 destination_background'>
    // <main className='grid w-full h-screen grid-cols-1 px-6 mx-auto mb-4 pt-28 lg:grid-cols-2 place-items-center destination_background'>
    <main className='w-full h-screen px-6 pt-28 lg:pt-0 destination_background'>
      <div className='grid w-full lg:h-screen grid-cols-1 mx-auto max-w-[1350px] lg:grid-cols-2 content-center'>
        <h1 className='text-center text-white uppercase lg:mt-10 lg:text-left lg:col-span-2 md:text-xl'>
          <span className='mr-4 text-white/25'>01</span>Pick your destination
        </h1>

        <AnimatePresence initial={false} mode='wait'>
          <motion.div
            variants={variations}
            initial='enter'
            animate='visible'
            exit='exit'
            key={destination[content].id}
            transition={{ type: 'tween' }}
            // mt-8 md:mt-[60px] mb-6 md:mb-14
            className='my-6 md:my-14 w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px] place-self-center lg:place-self-start'>
            <Image
              src={destination[content].imgWebp}
              alt={''}
              width={445}
              height={445}
              className='object-cover w-full h-full'
            />
          </motion.div>
        </AnimatePresence>

        <div className='flex flex-col items-center lg:items-start lg:max-w-md justify-self-center place-self-center'>
          <div className='flex gap-4 md:gap-8'>
            {destination.map((item, index) => (
              <span
                className={`cursor-pointer uppercase text-sm tracking-[2.36px] md:text-base ${
                  content === index ? 'border-b-2 pb-2 text-white' : ''
                }`}
                key={item.id}
                onClick={e => {
                  setContent(index)
                }}>
                {item.name}
              </span>
            ))}
          </div>
          <AnimatePresence initial={false} mode='wait'>
            <motion.div
              variants={variations}
              initial='enter'
              animate='visible'
              exit='exit'
              key={destination[content].id}
              transition={{ type: 'tween' }}
              className='mt-5 md:mt-8 flex flex-col divide-y-[1px] divide-gray-700 max-w-lg'>
              <div className='flex flex-col pb-8 md:pb-12'>
                <h1 className='text-white font-belleFair text-[56px] uppercase leading-[64px] md:text-[80px] md:leading-[90px] lg:text-[100px] lg:leading-[115px] text-center lg:text-start'>
                  {destination[content].name}
                </h1>
                <p className='text-center lg:leading-[32px] lg:text-start lg:text-lg'>
                  {destination[content].description}
                </p>
              </div>
              <div className='flex flex-col items-center justify-center gap-8 pt-8 place-items-center md:flex-row md:gap-28 lg:justify-start'>
                <div className='flex flex-col items-center gap-3'>
                  <h3 className='tracking-[2.36px] leading-4 font-barlowCond'>
                    AVG. DISTANCE
                  </h3>
                  <h2 className='uppercase font-belleFair text-[28px] text-white leading-8'>
                    {destination[content].distance}
                  </h2>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <h3 className='tracking-[2.36px] leading-4 font-barlowCond uppercase'>
                    Est. travel time
                  </h3>
                  <h2 className='uppercase font-belleFair text-[28px] text-white leading-8'>
                    {destination[content].travel}
                  </h2>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const destination = await prisma.destinations.findMany()
  return {
    props: { destination }
  }
}

// description, distance, id, name, travel
