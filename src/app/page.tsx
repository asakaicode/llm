import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  if (typeof window !== 'undefined') {
    localStorage?.getItem('0', true)
  }

  return (
    <>
      <h1>OpenAI お試し環境</h1>
    </>
  )
}
