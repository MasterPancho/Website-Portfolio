import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Achievements, Feedbacks, Hero, 
  Navbar, Tech, Works, StarsCanvas } from './components';
import herobg from './assets/herobg.webm'; // Import the video

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Video background container */}
        <div className="relative">
          {/* Add video background */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={herobg} // Use the imported video
            autoPlay
            loop
            muted
          ></video>

          <div className="relative z-20">
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
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
