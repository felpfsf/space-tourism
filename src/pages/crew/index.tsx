import Image from 'next/image'
import { useState } from 'react'
import { prisma } from '../../../lib/prisma'
import Layout from '../../components/Layout'
import MotionDiv from '../../components/MotionDiv'

interface ICrew {
  bio: string
  id: number
  imgWebp: string
  index: number
  name: string
  role: string
}

interface ICrewProps {
  crew: ICrew[]
}

export default function Crew({ crew }: ICrewProps) {
  const [content, setContent] = useState(0)
  return (
    <Layout>
      <main className='w-full h-screen px-6 pt-28 lg:pt-0 crew_background'>
        <div className='grid content-center w-full grid-cols-1 mx-auto lg:grid-cols-2 max-w-[90%] lg:h-screen lg:content-between'>
          <h1 className='text-center text-white uppercase lg:mt-36 lg:text-left lg:col-span-2 md:text-xl md:text-left lg:top-'>
            <span className='mr-4 text-white/25'>02</span>Meet your crew
          </h1>

          {/* <div className='h-56 my-6 w-44 md:my-14 place-self-center lg:place-self-start  md:w-[456px] md:h-[532px] border bg-blue-700'> */}
          <div className='relative w-full h-56 my-6 place-self-center md:my-14 lg:my-0 md:h-[532px] lg:h-[712px] lg:place-self-start'>
            <MotionDiv motionKey={crew[content].id}>
              <Image
                src={crew[content].imgWebp}
                alt={crew[content].name}
                fill
                className='object-scale-down md:object-contain lg:object-fit'
              />
            </MotionDiv>
          </div>

          <div className='flex flex-col items-center lg:flex-col-reverse max-w-[612px] lg:items-start justify-self-center place-self-center lg:justify-self-end'>
            <div className='flex gap-4 md:gap-8'>
              {crew.map((item, index) => (
                <button
                  className={`cursor-pointer w-3 h-3 md:w-4 md:h-4 rounded-full ${
                    content === index ? 'bg-white' : ' bg-white/20'
                  }`}
                  key={item.id}
                  onClick={e => {
                    setContent(index)
                  }}
                  role={'button'}></button>
              ))}
            </div>
            <MotionDiv motionKey={crew[content].id}>
              <div className='flex flex-col items-center h-40 my-8 lg:h-[354px] lg:items-start'>
                <h2 className='uppercase md:text-2xl lg:text-[32px] lg:leading-9 font-belleFair text-white/50'>
                  {crew[content].role}
                </h2>
                <h1 className='text-2xl text-white uppercase md:text-[40px] lg:text-5xl font-belleFair lg:text-left'>
                  {crew[content].name}
                </h1>
                <p className='max-w-md mt-4 text-center lg:text-left lg:text-lg'>
                  {crew[content].bio}
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const crew = await prisma.crew.findMany()
  return {
    props: { crew }
  }
}
