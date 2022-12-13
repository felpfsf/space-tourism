import MotionDiv from '../../../components/MotionDiv'

interface IPlanetContentProps {
  idx: number
  name: string
  description: string
  distance: string
  travel: string
}

const PlanetContent = ({
  idx,
  name,
  description,
  distance,
  travel
}: IPlanetContentProps) => {
  return (
    <MotionDiv motionKey={idx}>
      <div className='mt-5 md:mt-8 flex flex-col divide-y-[1px] divide-gray-700 max-w-lg'>
        <div className='flex flex-col pb-8 md:pb-12'>
          <h1 className='text-white font-belleFair text-[56px] uppercase leading-[64px] md:text-[80px] md:leading-[90px] lg:text-[100px] lg:leading-[115px] text-center lg:text-start'>
            {name}
          </h1>
          <p className='text-center lg:leading-[32px] lg:text-start lg:text-lg'>
            {description}
          </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-8 pt-8 place-items-center md:flex-row md:gap-28 lg:justify-start'>
          <div className='flex flex-col items-center gap-3'>
            <h3 className='tracking-[2.36px] leading-4 font-barlowCond'>
              AVG. DISTANCE
            </h3>
            <h2 className='uppercase font-belleFair text-[28px] text-white leading-8'>
              {distance}
            </h2>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <h3 className='tracking-[2.36px] leading-4 font-barlowCond uppercase'>
              Est. travel time
            </h3>
            <h2 className='uppercase font-belleFair text-[28px] text-white leading-8'>
              {travel}
            </h2>
          </div>
        </div>
      </div>
    </MotionDiv>
  )
}

export default PlanetContent
