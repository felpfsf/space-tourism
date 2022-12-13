import MotionDiv from '../../../components/MotionDiv'

interface CrewContentProps {
  bio: string
  idx: number
  name: string
  role: string
}

const CrewContent = ({ bio, idx, name, role }: CrewContentProps) => {
  return (
    <MotionDiv motionKey={idx}>
      <div className='flex flex-col items-center h-40 my-8 lg:h-[354px] lg:items-start'>
        <h2 className='uppercase md:text-2xl lg:text-[32px] lg:leading-9 font-belleFair text-white/50'>
          {role}
        </h2>
        <h1 className='text-2xl text-white uppercase md:text-[40px] lg:text-5xl font-belleFair lg:text-left md:mt-2 lg:mt-4'>
          {name}
        </h1>
        <p className='max-w-md mt-4 text-center lg:text-left lg:text-lg'>
          {bio}
        </p>
      </div>
    </MotionDiv>
  )
}

export default CrewContent
