import { prisma } from '../../../lib/prisma'
import { useState } from 'react'
import Layout from '../../components/Layout'
import Planets from './components/Planets'
import PlanetContent from './components/PlanetContent'

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

  return (
    <Layout>
      <main className='w-full h-screen px-6 pt-28 lg:pt-0 destination_background'>
        <div className='grid w-full lg:h-screen grid-cols-1 mx-auto max-w-[1350px] lg:grid-cols-2 content-center'>
          <h1 className='text-center text-white uppercase lg:mt-10 lg:text-left lg:col-span-2 md:text-xl'>
            <span className='mr-4 text-white/25'>01</span>Pick your destination
          </h1>

          <Planets
            destIdx={destination[content].id}
            planetUrl={destination[content].imgWebp}
            planetAlt={destination[content].name}
          />
          <div className='flex flex-col items-center lg:items-start lg:max-w-md justify-self-center place-self-center'>
            <div className='flex items-center gap-4 md:gap-8'>
              {destination.map((item, index) => (
                <button
                  className={`cursor-pointer uppercase text-sm tracking-[2.36px] md:text-base ${
                    content === index ? 'border-b-2 pb-2 text-white' : ''
                  }`}
                  key={item.id}
                  onClick={() => setContent(index)}
                  role='button'>
                  {item.name}
                </button>
              ))}
            </div>
            <PlanetContent
              description={destination[content].description}
              distance={destination[content].distance}
              idx={destination[content].id}
              name={destination[content].name}
              travel={destination[content].travel}
            />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const destination = await prisma.destinations.findMany()
  return {
    props: { destination }
  }
}
