"use client";
import { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';

export default function Home() {
  const [apiResponse, setApiResponse] = useState('');

  useEffect(() => {
    fetch("http://localhost:5001/api/articles")
      .then(res => res.text())
      .then(res => setApiResponse(res))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={'./logo.svg'} className={styles['App-logo']} alt="logo" />
        <h1 className={styles['App-title']}>Welcome to Next.js</h1>
      </header>
      <p className={styles['App-intro']}>{apiResponse}</p>
    </div>
  );
}


// export default function Home() {
//   return (
//     <div>
//       HOME PAGE
//     </div>
//   );
// }
