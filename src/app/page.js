import Image from 'next/image'
import { Suspense } from 'react'
import Loading from './loading'
import styles from './page.module.css'
import Products from './products/page'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* loading UI */}
      <h1>My customKey are: {process.env.customKey}</h1>
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </main>
  )
}
