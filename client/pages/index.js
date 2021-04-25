import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.outer}>
      <Head>
        <title>MusicBot</title>
        <meta name="description" content="A musicbot thats fun at parties!" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <div className={styles.logoBox}>
          <img src="/images/logo.png" className={styles.logo} />
          <h3 className={styles.title}>MusicBot</h3>
          <h5 className={styles.tagline}>A music bot thats fun at parties</h5>
        </div>

        <div className={styles.buttonCol}>
          <div className={styles.buttonBox}>
            <button className="btn-primary" >Create a Room</button>
          </div>

          <div className={styles.orSpace}> <hr/> OR <hr/> </div>

          <div className={styles.buttonBox}>
            <input type="text" />
            <button className="btn-primary" >Join a Room</button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <a href="https://ahnafone.github.io/portfolio-site-angular/" target="_blank" >Site created by Ahnaf Ahmed.</a>
      </footer>
    </div>
  )
}
