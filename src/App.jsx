import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import "./styles/App.css"
import Caroussel from "./components/Caroussel/Caroussel"
import About from "./components/About/About"
import Padrao from "./components/Padrao/Padrao"
import Novidade from "./components/Novidade/Novidade"
import Inspiracao from "./components/Inspiracao/Inspiração"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Caroussel />
        <About />
        <Padrao />
        <Novidade />
        <Inspiracao />
      </main>
      <Footer />
    </>
  )
}

export default App
