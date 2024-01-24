import {
  CarFilter,
  Hero,
  Featured,
  Offers,
  BestSelling,
  Testimonials,
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
    </main>
  );
};

export default Home;
