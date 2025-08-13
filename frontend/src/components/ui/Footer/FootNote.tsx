// Utilities
import Image from 'next/image'

// Images

const FootNote = () => {
  return (
    <div className='py-[48px] text-[#333333] max-sm:px-[10px] sm:border-t-2'>
      <div className='font-yugothic text-center text-[16px] font-bold leading-[24px] text-[#333333] max-sm:text-[12px] max-sm:leading-[21px]'>
        warpleは年間9000人の留学生をサポートしてきた
        <span className='max-sm:block'>
          <span className='text-[#FF9B16]'>株式会社リアブロード運営</span>
          の留学個人手配サービスです。
        </span>
      </div>
    </div>
  )
}

export default FootNote
