import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="App bg-black">
      <Header />
      <Hero />
      <Gallery />
      <ContactUs />
      <SocialMedia />
    </div>
  );
}

export default App;
