import Image from 'next/image'
import { useState } from 'react'
import { prisma } from '../../../lib/prisma'
import Layout from '../../components/Layout'
import MotionDiv from '../../components/MotionDiv'
import CrewContent from './components/CrewContent'
import CrewPic from './components/CrewPic'

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
        <div className='grid content-center w-full grid-cols-1 mx-auto lg:grid-cols-2 max-w-[95%] lg:h-screen lg:content-between'>
          <h1 className='text-center text-white uppercase lg:mt-36 lg:text-left lg:col-span-2 md:text-xl md:text-left'>
            <span className='mr-4 text-white/25'>02</span>Meet your crew
          </h1>

          <CrewPic
            idx={crew[content].id}
            imgAlt={crew[content].name}
            imgUrl={crew[content].imgWebp}
          />

          <div className='flex flex-col items-center lg:flex-col-reverse lg:w-[526px] lg:items-start justify-self-center place-self-center'>
            <div className='flex gap-4 md:gap-8'>
              {crew.map((item, index) => (
                <button
                  className={`cursor-pointer w-3 h-3 md:w-4 md:h-4 rounded-full flex items-center justify-center text-white/0 ${
                    content === index ? 'bg-white' : ' bg-white/20'
                  }`}
                  key={item.id}
                  onClick={() => setContent(index)}
                  role={'button'}>
                  {item.id}
                </button>
              ))}
            </div>
            <CrewContent
              bio={crew[content].bio}
              idx={crew[content].id}
              name={crew[content].name}
              role={crew[content].role}
            />
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
