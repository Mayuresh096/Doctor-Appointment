import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    // <main className={styles.main}>

    // </main>
    <div>
      <div><Link href="/contact">Contact Us</Link></div>
      <br></br>
      <div><Link href="/about">About Us</Link></div>
    </div>
  )
}
