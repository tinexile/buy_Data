import "./App.css";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Head from "./Components/Head";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Newsletters from "./Components/Newsletters";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Head />
      <Newsletters />
      <Card />
      <Footer />
    </>

  );
}

export default App;
