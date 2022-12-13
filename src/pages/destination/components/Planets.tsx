import Image from 'next/image'
import MotionDiv from '../../../components/MotionDiv'

interface PlanetsProps {
  destIdx: number
  planetAlt: string
  planetUrl: string
}

const Planets = ({ destIdx, planetAlt, planetUrl }: PlanetsProps) => {
  return (
    <div className='my-6 md:my-14 w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px] place-self-center lg:place-self-start'>
      <MotionDiv motionKey={destIdx}>
        <Image
          src={planetUrl}
          alt={planetAlt}
          // width={445}
          // height={445}
          width={0}
          height={0}
          sizes={`(min-width: 992px) 445px, (min-width: 768px) 300px, 170px`}
          className='object-cover w-full h-full'
        />
      </MotionDiv>
    </div>
  )
}

export default Planets
