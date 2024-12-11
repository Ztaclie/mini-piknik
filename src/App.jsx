import "./App.css";
//import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App bg-slate-600">
      {/* <Header /> */}
      <Hero />
      <Gallery />
      {/* <ContactUs /> */}
    </div>
  );
}

export default App;
