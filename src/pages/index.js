// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Profile from './components/profile'
import Profile from './qcomps/updObjectsForm'


export default function Home() {
  return (
    <div className={styles.main}>
        <Profile />
    </div>
  )
}
