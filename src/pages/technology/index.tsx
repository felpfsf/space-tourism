import { useState } from 'react'
import { prisma } from '../../../lib/prisma'
import Layout from '../../components/Layout'
import TechnologyPic from './components/TechnologyPic'
import TechnologyContent from './components/TechologyContent'

interface IDestination {
  description: string
  id: number
  name: string
  imgLandscape: string
  imgPortrait: string
  index: number
}

interface IDestinationProps {
  technology: IDestination[]
}

export default function Technology({ technology }: IDestinationProps) {
  const [content, setContent] = useState(0)

  return (
    <Layout>
      <main className='w-full h-screen lg:grid lg:px-6 pt-28 tech_background lg:grid-cols-2 lg:content-start'>
        <h1 className='text-center text-white uppercase tracking-[3.37px] lg:mt-10 lg:text-left lg:col-span-2 md:text-xl md:text-left md:ml-6 font-barlowCond'>
          <span className='mr-4 text-white/25'>03</span>SPACE LAUNCH 101
        </h1>
        <TechnologyPic
          idx={technology[content].id}
          imgAlt={technology[content].name}
          imgLandscapeUrl={technology[content].imgLandscape}
          imgPortraitUrl={technology[content].imgPortrait}
        />
        <div className='flex flex-col items-center gap-8 mt-8 place-self-center lg:row-start-2 lg:flex-row lg:justify-self-center'>
          <div className='flex justify-center gap-4 lg:flex-col md:gap-8 lg:mt-12'>
            {technology.map((item, index) => (
              <button
                className={`cursor-pointer w-10 lg:w-20 lg:h-20 h-10 rounded-full flex items-center justify-center font-belleFair lg:text-[32px] ${
                  content === index
                    ? 'bg-white text-black'
                    : ' border border-white/25 text-white'
                }`}
                key={item.id}
                onClick={() => setContent(index)}
                role={'button'}>
                {item.id}
              </button>
            ))}
          </div>
          <TechnologyContent
            description={technology[content].description}
            idx={technology[content].id}
            name={technology[content].name}
          />
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const technology = await prisma.technology.findMany()
  return {
    props: { technology }
  }
}
