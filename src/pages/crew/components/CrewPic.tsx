import Image from 'next/image'
import MotionDiv from '../../../components/MotionDiv'

interface CrewPicProps {
  idx: number
  imgUrl: string
  imgAlt: string
}

const CrewPic = ({ imgAlt, imgUrl, idx }: CrewPicProps) => {
  return (
    <>
      {/* <div className='h-56 my-6 w-44 md:my-14 place-self-center lg:place-self-start  md:w-[456px] md:h-[532px] border bg-blue-700'> */}
      <div className='relative w-full h-56 my-6 place-self-center md:my-14 lg:my-0 md:h-[532px] xl1:h-[660px] lg:place-self-start border-b-[1px] border-gray_900 lg:border-none'>
        <MotionDiv motionKey={idx}>
          <Image
            src={imgUrl}
            alt={imgAlt}
            fill
            className='object-scale-down md:object-contain lg:object-fit'
          />
        </MotionDiv>
      </div>
    </>
  )
}

export default CrewPic
