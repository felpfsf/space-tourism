import MotionDiv from '../../../components/MotionDiv'

interface TechnologyContentProps {
  description: string
  idx: number
  name: string
}

const TechnologyContent = ({
  description,
  idx,
  name
}: TechnologyContentProps) => {
  return (
    <MotionDiv motionKey={idx}>
      <div className='flex flex-col items-center lg:items-start px-6 mb-5 max-w-[470px] lg:px-0 md:gap-4 lg:gap-8 lg:h-64'>
        <h2 className='text-sm md:text-base tracking-[2.14px] font-barlowCond '>
          THE TERMINOLOGY…
        </h2>
        <h1 className='text-2xl text-white uppercase md:text-[40px] leading-[46px] lg:text-[56px] font-belleFair'>
          {name}
        </h1>
        <p className='text-center lg:text-left lg:text-lg lg:leading-8'>
          {description}
        </p>
      </div>
    </MotionDiv>
  )
}

export default TechnologyContent
