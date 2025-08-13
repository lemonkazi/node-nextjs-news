'use client'
// React / Next Components or Hooks
import Image from 'next/image'
import Link from 'next/link'

// Services

// Utilities
// import { detectLanguage, getLocale } from '@/utils/lang/languageDetector'
import { FormattedMessage, IntlProvider } from 'react-intl'

// Images
import Logo from '/public/images/logo.svg'
import instagramImage from '/public/images/social-icons/instagram.svg'
import lineImage from '/public/images/social-icons/line.svg'
import tiktokImage from '/public/images/social-icons/tiktok.svg'
import twitterImage from '/public/images/social-icons/twitter.svg'
import youtubeImage from '/public/images/social-icons/youtube.svg'

// Utils

const FooterSection = () => {
  // const locale = getLocale()
  // const lang = detectLanguage(locale)

  const icons = [
    {
      src: instagramImage,
      alt: 'Instagram icon',
      link: 'https://www.instagram.com/warple_official/',
    },
    {
      src: tiktokImage,
      alt: 'Tiktok icon',
      link: 'https://www.tiktok.com/@lagom_study',
    },
    {
      src: twitterImage,
      alt: 'Twitter icon',
      link: 'https://twitter.com/warple_official',
    },
    {
      src: lineImage,
      alt: 'Line icon',
      link: 'https://line.me/R/ti/p/@825xfbdv',
    },
    {
      src: youtubeImage,
      alt: 'youtube icon',
      link: 'https://www.youtube.com/@warple_official',
    },
  ]

  // const countries = [
  //   { id: 'Top.Footer.America', defaultMessage: 'アメリカ' },
  //   { id: 'Top.Footer.Canada', defaultMessage: 'カナダ' },
  //   { id: 'Top.Footer.England', defaultMessage: 'イギリス' },
  //   { id: 'Top.Footer.Australia', defaultMessage: 'オーストラリア' },
  //   { id: 'Top.Footer.Malta', defaultMessage: 'マルタ' },
  //   { id: 'Top.Footer.Ireland', defaultMessage: 'アイルランド' },
  //   { id: 'Top.Footer.NewZealand', defaultMessage: 'ニュージーランド' },
  //   { id: 'Top.Footer.Dubai', defaultMessage: 'ドバイ' },
  //   { id: 'Top.Footer.Philippines', defaultMessage: 'フィリピン' },
  // ]

  return (
    <>
      <div className='py-[40px]'>
        <div className='mx-auto w-full max-w-[1080px] justify-between max-xl:px-5 md:flex'>
          <div className='flex justify-center'>
            <div className='w-[160px] items-center sm:w-[242px]'>
              <Image src={Logo} width={242} height={57} alt='warple image' />
            </div>
          </div>
          <div className='items-center justify-center max-[767px]:px-5 md:flex'>
            <div className='font-roboto mr-5 text-[16px] font-bold leading-[48px] text-[#333333] max-[767px]:text-center'>
              -Follow Us-
            </div>
            <div className='flex justify-between'>
              {icons.map((icon, index) => (
                <Link key={index} href={icon.link}>
                  {icon.src ? (
                    <Image
                      src={icon.src}
                      width={48}
                      height={48}
                      alt={icon.alt}
                      className={index == 0 ? '' : 'sm:ml-3 lg:ml-[33px]'}
                    />
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#FCFCFC] py-[40px]'>
        <div className='mx-auto w-full max-w-[1080px] max-xl:px-5'>
          <div>
            <div className='font-yugothic text-[16px] font-bold leading-[24px] max-[767px]:mb-[10px]'>
              {/* <IntlProvider locale={locale} messages={lang}>
                <FormattedMessage
                  id='Top.Footer.AboutWarple'
                  defaultMessage='warpleについて'
                />
              </IntlProvider> */}
              About
            </div>
            <div className='font-yugothic mr-[16px] mt-[18px] text-[14px] font-medium leading-[21px] md:flex'>
              <div className='mr-5'>
                <Link href='/about'>
                  {/* <IntlProvider locale={locale} messages={lang}>
                    <FormattedMessage
                      id='Top.Footer.WhyWarple'
                      defaultMessage='初めての方へ/warpleが選ばれるわけ'
                    />
                  </IntlProvider> */}
                  about
                </Link>
              </div>
              <div className='max-sm:mt-[15px]'>
                {/* <Link href='/user-guide'>
                  <IntlProvider locale={locale} messages={lang}>
                    <FormattedMessage
                      id='Top.Footer.WarpleGuide'
                      defaultMessage='使い方ガイド'
                    />
                  </IntlProvider>
                </Link> */}
              </div>
            </div>
          </div>
          <div className='mt-[38px]'>
            <div className='font-yugothic text-[16px] font-bold leading-[24px] max-[767px]:mb-[10px]'>
              {/* <IntlProvider locale={locale} messages={lang}>
                <FormattedMessage
                  id='Top.Footer.SearchStudyAbroadDestination'
                  defaultMessage='国から留学先をさがす'
                />
              </IntlProvider> */}
            </div>
          </div>
          <div className='mt-[38px]'>
            <div className='font-yugothic text-[16px] font-bold leading-[24px] max-[767px]:mb-[10px]'>
              {/* <IntlProvider locale={locale} messages={lang}>
                <FormattedMessage
                  id='Top.Footer.Help'
                  defaultMessage='ヘルプ'
                />
              </IntlProvider> */}
            </div>
            <div className='font-yugothic mr-[16px] mt-[18px] text-[14px] font-medium leading-[21px] md:flex'>
              <div className='mr-5'>
                <Link href='/faq'>
                  {/* <IntlProvider locale={locale} messages={lang}>
                    <FormattedMessage
                      id='Top.Footer.FAQ'
                      defaultMessage='よくある質問'
                    />
                  </IntlProvider> */}
                </Link>
              </div>
              <div className='mr-5 max-sm:mt-[15px]'>
                <Link href='/contact-us'>
                  {/* <IntlProvider locale={locale} messages={lang}>
                    <FormattedMessage
                      id='Top.Footer.ContactUs'
                      defaultMessage='お問い合わせ'
                    />
                  </IntlProvider> */}
                </Link>
              </div>
            </div>
          </div>
          <div className='mt-[20px] border-b border-[#D0D0D0] lg:mt-[62px]'></div>
          <div className='text-[12px] font-medium text-[#333333] md:flex lg:justify-between lg:leading-[48px]'>
            <div className='font-yugothic flex max-[767px]:mt-3 max-[767px]:flex-col'>
              <div className='mr-3'>
                <Link href='/company'>
                  {/* <IntlProvider locale={locale} messages={lang}>
                    <FormattedMessage
                      id='Top.Footer.OperatingCompany'
                      defaultMessage='運営会社'
                    />
                  </IntlProvider> */}
                </Link>
              </div>
              <div className='mr-3 max-[767px]:mt-3'>
                <Link href='/privacy-policy'>
                  {/* <IntlProvider locale={locale} messages={lang}>
                    <FormattedMessage
                      id='Top.Footer.PrivacyPolicy'
                      defaultMessage='プライバシーポリシー'
                    />
                  </IntlProvider> */}
                </Link>
              </div>
              <div className='mr-3 max-[767px]:mt-3'>
                <Link href='/terms-of-service'>
                  {/* <IntlProvider locale={locale} messages={lang}>
                    <FormattedMessage
                      id='Top.Footer.Terms'
                      defaultMessage='利用規約　'
                    />
                  </IntlProvider> */}
                </Link>
              </div>
              <div className='mr-3 max-[767px]:mt-3'>
                <Link href='/special-commercial-law'>
                  {/* <IntlProvider locale={locale} messages={lang}>
                    <FormattedMessage
                      id='Top.Footer.DescriptionSCTL'
                      defaultMessage='特定商取引法に基づく表記'
                    />
                  </IntlProvider> */}
                </Link>
              </div>
            </div>
            <div className='font-roboto tracking-[2px] max-[767px]:mt-5'>
              ©︎2024 warple. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterSection
