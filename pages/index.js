/* eslint-disable */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Email, Twitter, Dribbble, LinkedIn, Github } from '../components/icons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Panshak Solomon - Full stack Developer (React/Nodejs) </title>
        <meta name="description" content="Panshak Solomon - Conservation Biologist / Software Developer" />
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="panshak" data-color="#FFDD00" data-emoji=""  data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
       Hello,
        </h1>

        <p className={styles.description}>
        I am Panshak Solomon, a full stack developer based in Jos, Nigeria.
        I utilize the power of the MERN Stack (MongoDB, Express, React & Nodejs) to build scalable and 
        dynamic web applications.
        Aside from software development, I enjoy spending my time watching birds and going for hiking.
        </p>
        {/* <p style={{fontFamily: 'Roboto', fontWeight: '500'}}>Let's connect</p> */}
        <img className={styles.picture} src="https://i.postimg.cc/Qd7QjBr5/Peekay2.jpg" alt="Panshak Solomon" />

      <div className={styles.socials}>
          <ul className={styles.autoGrid}>

          <a target="_blank" href="https://github.com/Panshak" rel="noopener noreferrer">
              <li className={styles.listItem}>
                <Github />
              </li>
            </a>

            <a target="_blank" href="mailto:ipanshak@gmail.com" rel="noopener noreferrer">
              <li className={styles.listItem}>
                <Email />
              </li>
            </a>

            <a target="_blank" href="https://linkedin/in/Panshak" rel="noopener noreferrer">
              <li className={styles.listItem}>
                <LinkedIn />
              </li>
            </a>

            <a target="_blank" href="https://dribbble.com/panshak" rel="noopener noreferrer">
              <li className={styles.listItem}>
                <Dribbble />
              </li>
            </a>


            <a target="_blank" href="https://twitter.com/panshak_" rel="noopener noreferrer">
              <li className={styles.listItem}>
                <Twitter />
              </li>
            </a>

          </ul>

      </div>

      </main>

      <footer className={styles.footer}>
        <p>©Panshak Solomon</p>
        
      </footer>
    </div>
  )
}
