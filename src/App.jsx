import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Prazer from './components/Prazer/Prazer'
import Projetos from './components/Projetos/Projetos'
import Arquitetura from './components/Arquitetura/Arquitetura'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <Prazer />
        <Projetos />
        <Arquitetura />
      </main>
      <Footer />
    </div>
  )
}

export default App
