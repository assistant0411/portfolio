/* eslint-disable */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Email, Twitter, Dribbble, LinkedIn, Github, Arrow } from '../components/icons'
// import Projects from '../components/Projects'

export default function Home() {



  return (
    <div className={styles.container}>
      <Head>
        <title>Panshak Solomon - Conservation Biologist / Software Developer </title>
        <meta name="description" content="Panshak Solomon - Conservation Biologist / Software Developer" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="panshak" data-color="#FFDD00" data-emoji=""  data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
       Hello,
        </h1>

        <p className={styles.description}>
        I am Panshak Solomon, a trained Conservation Biologist, Webmaster and a Google Certified Digital Marketer, 
        with proven experience developing and managing consumer-focused web applications using 
        modern web frameworks and content management systems (CMS). 
       When I'm not building products, I'm actively invlove in conservation research. 
       <span>
       <a style={{color: '#0070F3', paddingRight: '8px'}} href="https://doi.org/10.1016/j.ufug.2021.127092" target="_blank"> Read my recent publication here.</a>
       </span>
        </p>
       
       <div className={styles.avatar}>
          <img className={styles.picture} src="https://i.postimg.cc/Qd7QjBr5/Peekay2.jpg" alt="Panshak Solomon" />
       </div>


        {/* <div>
            <Projects />
        </div> */}

        <div className={styles.buttonContainer}>
          <a className={styles.button} href="https://www.scrept.com" target="_blank">View Portfolio <span><Arrow /></span> </a>
        </div>

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

            <a target="_blank" href="https://linkedin.com/in/Panshak" rel="noopener noreferrer">
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
