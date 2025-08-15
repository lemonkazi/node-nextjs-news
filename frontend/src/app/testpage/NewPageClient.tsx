'use client'

import { useEffect, useState } from 'react'
import styles from './newPage.module.css'

const NewPageClient = () => {
  const [showScroll, setShowScroll] = useState(false)

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScroll])

  const handleSeeMore = (event: React.MouseEvent<HTMLSpanElement>) => {
    const target = event.target as HTMLSpanElement
    const contentParagraph =
      target.previousElementSibling as HTMLParagraphElement
    if (contentParagraph.classList.contains(styles.expanded)) {
      contentParagraph.classList.remove(styles.expanded)
      target.textContent = 'See More ▼'
      target.setAttribute('aria-expanded', 'false')
    } else {
      contentParagraph.classList.add(styles.expanded)
      target.textContent = 'See Less ▲'
      target.setAttribute('aria-expanded', 'true')
    }
  }

  const handlePagination = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.target as HTMLButtonElement
    if (button.disabled) return

    const pagination = button.parentElement as HTMLElement
    const pageButtons = pagination.querySelectorAll('button')

    pageButtons.forEach((btn) => btn.removeAttribute('aria-current'))
    button.setAttribute('aria-current', 'page')

    pageButtons.forEach((btn) => (btn.disabled = false))

    if (button.textContent?.toLowerCase().includes('prev')) {
      alert('Previous page clicked')
    } else if (button.textContent?.toLowerCase().includes('next')) {
      alert('Next page clicked')
    } else {
      alert(`Page ${button.textContent} clicked`)
    }
  }

  return (
    <>
      <main className={`${styles.container} ${styles.main}`} role='main'>
        <section
          aria-label='News articles'
          id='news-articles'
          className={styles.articles}
        >
          <article
            className={styles.newsArticle}
            itemScope
            itemType='https://schema.org/NewsArticle'
          >
            <header>
              <h2 itemProp='headline'>
                <a
                  href='article-detail.html'
                  itemProp='url'
                  aria-describedby='desc1'
                >
                  Global Tech Conference 2024 Highlights
                </a>
              </h2>
              <div className={styles.meta} aria-label='Article metadata'>
                <time dateTime='2024-06-15' itemProp='datePublished'>
                  June 15, 2024
                </time>{' '}
                |
                <span
                  itemProp='author'
                  itemScope
                  itemType='https://schema.org/Person'
                >
                  By <span itemProp='name'>Jane Doe</span>
                </span>{' '}
                |<span itemProp='articleSection'>Technology</span>
              </div>
            </header>
            <div className={styles.content} itemProp='articleBody'>
              <p className={`${styles.largeText}`} id='desc1'>
                The Global Tech Conference 2024 brought together leading
                innovators and thinkers from across the globe to discuss the
                future of technology. From AI advancements to sustainable
                development, keynotes and workshops covered significant topics
                shaping the industry. Delegates had the opportunity to network
                and explore cutting-edge products and services. The event
                emphasized collaboration and the role of technology in driving
                social progress.
              </p>
              <span
                className={styles.seeMore}
                role='button'
                tabIndex={0}
                aria-expanded='false'
                aria-controls='desc1'
                aria-label='Expand to read more'
                onClick={handleSeeMore}
              >
                See More ▼
              </span>
            </div>
          </article>

          <article
            className={styles.newsArticle}
            itemScope
            itemType='https://schema.org/NewsArticle'
          >
            <header>
              <h2 itemProp='headline'>
                <a
                  href='article-detail.html'
                  itemProp='url'
                  aria-describedby='desc2'
                >
                  Local Sports Team Wins Championship
                </a>
              </h2>
              <div className={styles.meta} aria-label='Article metadata'>
                <time dateTime='2024-06-10' itemProp='datePublished'>
                  June 10, 2024
                </time>{' '}
                |
                <span
                  itemProp='author'
                  itemScope
                  itemType='https://schema.org/Person'
                >
                  By <span itemProp='name'>John Smith</span>
                </span>{' '}
                |<span itemProp='articleSection'>Sports</span>
              </div>
            </header>
            <div className={styles.content} itemProp='articleBody'>
              <p id='desc2'>
                In a thrilling final, the local sports team clinched the
                championship title after a nail-biting match that kept fans on
                edge until the very last minute. The team&apos;s exceptional
                performance was lauded by supporters and critics alike,
                highlighting the power of teamwork and perseverance.
              </p>
            </div>
          </article>

          <article
            className={styles.newsArticle}
            itemScope
            itemType='https://schema.org/NewsArticle'
          >
            <header>
              <h2 itemProp='headline'>
                <a
                  href='article-detail.html'
                  itemProp='url'
                  aria-describedby='desc3'
                >
                  Business Growth Trends in 2024
                </a>
              </h2>
              <div className={styles.meta} aria-label='Article metadata'>
                <time dateTime='2024-06-12' itemProp='datePublished'>
                  June 12, 2024
                </time>{' '}
                |
                <span
                  itemProp='author'
                  itemScope
                  itemType='https://schema.org/Person'
                >
                  By <span itemProp='name'>Alice Johnson</span>
                </span>{' '}
                |<span itemProp='articleSection'>Business</span>
              </div>
            </header>
            <div className={styles.content} itemProp='articleBody'>
              <p className={`${styles.largeText}`} id='desc3'>
                Businesses worldwide are adjusting to rapidly changing markets
                with new strategies focused on digital transformation and
                sustainability initiatives. The year 2024 sees an increase in
                remote work, AI integration, and eco-friendly policies driving
                growth. Companies that embrace innovation and prioritize
                customer experience are positioned for success amid competitive
                pressures.
              </p>
              <span
                className={styles.seeMore}
                role='button'
                tabIndex={0}
                aria-expanded='false'
                aria-controls='desc3'
                aria-label='Expand to read more'
                onClick={handleSeeMore}
              >
                See More ▼
              </span>
            </div>
          </article>
        </section>

        <nav className={styles.pagination} aria-label='Pagination navigation'>
          <button
            type='button'
            aria-label='Previous page'
            disabled
            onClick={handlePagination}
          >
            &laquo; Prev
          </button>
          <button
            type='button'
            aria-label='Page 1'
            aria-current='page'
            onClick={handlePagination}
          >
            1
          </button>
          <button type='button' aria-label='Page 2' onClick={handlePagination}>
            2
          </button>
          <button type='button' aria-label='Page 3' onClick={handlePagination}>
            3
          </button>
          <button
            type='button'
            aria-label='Next page'
            onClick={handlePagination}
          >
            Next &raquo;
          </button>
        </nav>
      </main>

      <button
        id={styles.scrollTopBtn}
        onClick={scrollTop}
        style={{ display: showScroll ? 'flex' : 'none' }}
        aria-label='Scroll to top'
        title='Go to top'
      >
        &#8679;
      </button>
    </>
  )
}

export default NewPageClient
