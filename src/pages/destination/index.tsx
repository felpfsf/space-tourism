import { prisma } from '../../../lib/prisma'

interface IDestinationProps {
  destination: string
}

export default function Destination({ destination }: IDestinationProps) {
  console.log(destination[0])
  return (
    <main className='max-w-[1440px] w-full h-screen mx-auto px-6'>
      <h1>Destination</h1>
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
