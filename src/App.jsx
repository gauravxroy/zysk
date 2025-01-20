import Blog from "./components/Blogs";
import Clients from "./components/Clients";
import Faqs from "./components/Faqs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Testimonials from "./components/Testimonials";
import Trial from "./components/Trial";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Clients />
      <hr />
      <Features />
      <Testimonials />
      <Faqs />
      <Blog />
      <Trial />
      <Footer />
    </>
  );
}

export default App;
