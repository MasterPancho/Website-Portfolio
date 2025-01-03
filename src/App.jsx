import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Achievements, Hero, 
  Navbar, Tech, Works, StarsCanvas } from './components';
import herobg from './assets/herobg.webm'; // Import the video

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        
        {/* Video background container */}
        <div className="relative">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={herobg} // Use the imported video
            autoPlay
            loop
            muted
            playsInline       //To make the video play on Iphone
          ></video>

          <div className="relative z-20 overflow-hidden">
            <Navbar />
            <Hero />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-10">
          <Achievements />
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
