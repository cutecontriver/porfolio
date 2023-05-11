import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Certificates, Hero, Navbar, Tech, Works, StarsCanvas, Socials } from "./components";
const App=() => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Certificates/>
        <div className="relative z-0">
        <Contact/>
        <Socials/>
        <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;