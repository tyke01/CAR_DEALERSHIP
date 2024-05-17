import {
  CarFilter,
  Hero,
  Featured,
  Offers,
  BestSelling,
  Testimonials,
  Footer,
} from "../components";
import About from "../components/About";

const Home = () => {
  return (
    <main>
      <Hero />
      
      <CarFilter />

      <About />

      <Featured />

      <Offers />

      <BestSelling />

      <Testimonials />

      <Footer />
    </main>
  );
};

export default Home;
