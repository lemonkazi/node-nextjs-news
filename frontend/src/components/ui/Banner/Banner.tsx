'use client'
// Styles
import css from '@/components/page/Top/TopPage.module.css'

// Utilities
import { IntlProvider, FormattedMessage } from 'react-intl'
// import { getLocale, detectLanguage } from '@/utils/lang/languageDetector'

// React / Next Components or Hooks
import Link from 'next/link'

const Banner = () => {
  // const locale = getLocale()
  // const lang = detectLanguage(locale)

  return (
    <>
      <div className={`h-[250px] lg:h-[232] ${css.banner}`}>
        <div className='h-[250px] bg-[#3D3D3D99] lg:h-[232]'>
          <div className='py-[78px] lg:py-[69px]'>
            <div className='font-yugothic text-center text-[28px] font-bold leading-[42px] text-white'>
              {/* <IntlProvider locale={locale} messages={lang}>
                <FormattedMessage
                  id='Top.Banner.Title'
                  defaultMessage='会員登録ですぐに見積り'
                />
              </IntlProvider> */}
              top banner title
            </div>
            <div className='mt-[16px] flex justify-center'>
              <Link href='/line/signup'>
                <button className='font-yugothic rounded-3xl bg-[#FF7064] px-8 py-3 text-base font-bold text-white'>
                  {/* <IntlProvider locale={locale} messages={lang}>
                    <FormattedMessage
                      id='Top.Banner.Button'
                      defaultMessage='無料で会員登録'
                    />
                  </IntlProvider> */}
                  signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
