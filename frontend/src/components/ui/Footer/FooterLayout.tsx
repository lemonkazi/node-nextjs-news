// React / Next Components or Hooks
import Image from 'next/image'

// Images
import Logo from '/public/images/logo.svg'

const FooterLayout = () => {
  return (
    <div className='bg-[#FCFCFC] py-[40px]'>
      <div className='mx-auto w-full max-w-[1080px] max-xl:px-5 sm:justify-between md:flex'>
        <div>
          <Image
            src={Logo}
            width={242}
            height={57}
            alt='warple image'
            className='h-[37px] w-[160px] max-[767px]:mx-auto max-[767px]:block sm:h-[57px] sm:w-[242px]'
          />
        </div>
        <div className='font-yugothic mt-[18px] text-[14px] font-normal leading-[21px]'>
          <div className='font-roboto text-center tracking-[2px] max-[767px]:mt-5'>
            ©︎2024 warple. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterLayout
