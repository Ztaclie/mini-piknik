import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="App bg-black">
      <Header />
      <Hero />
      <Gallery />
      <SocialMedia />
    </div>
  );
}

export default App;
