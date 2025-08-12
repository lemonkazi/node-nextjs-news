
'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './TopPage.module.css'
import BlogLayoutComponent from '@/components/page/Top/BlogLayout'

const Top = () => {
    const [apiResponse, setApiResponse] = useState('');
    const [isBlogLayoutView, setIsBlogLayoutView] = useState(false)

    useEffect(() => {
        fetch("http://localhost:5000/api/articles")
            .then(res => res.text())
            .then(res => setApiResponse(res))
            .catch(err => console.error(err));
        
        setIsBlogLayoutView(true)
    }, []);
    return (
        <main className={styles.container}>
            {/* <div className={styles.App}>
                <header className={styles['App-header']}>
                    <img src={'./logo.svg'} className={styles['App-logo']} alt="logo" />
                    <h1 className={styles['App-title']}>Welcome to Next.js</h1>
                </header>
                <p className={styles['App-intro']}>{apiResponse}</p>
            </div> */}
            <div className={isBlogLayoutView ? 'block' : 'hidden'}>
                <BlogLayoutComponent />
            </div>
            
        </main>
    )
}

export default Top