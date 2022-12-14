import Image from 'next/image'
import MotionDiv from '../../../components/MotionDiv'

interface TechnologyPicProps {
  idx: number
  imgAlt:string
  imgLandscapeUrl: string
  imgPortraitUrl: string
}

const TechnologyPic = ({
  idx,
  imgAlt,
  imgLandscapeUrl,
  imgPortraitUrl
}: TechnologyPicProps) => {
  return (
    <div className='relative w-full mt-8 h-44 md:h-80 lg:h-[527px] lg:w-[515px] lg:col-start-2 justify-self-center'>
      <MotionDiv motionKey={idx}>
        <Image
          src={imgLandscapeUrl}
          alt={imgAlt}
          fill
          className='object-center md:object-fill lg:hidden'
        />
        <Image
          src={imgPortraitUrl}
          alt={imgAlt}
          fill
          className='hidden lg:block'
        />
      </MotionDiv>
    </div>
  )
}

export default TechnologyPic