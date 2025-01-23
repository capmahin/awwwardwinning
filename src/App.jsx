import About from "./components/About";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="relative w-screen min-h-screen overflow-hidden ">
      <Hero />

      <About />
    </main>
  );
};

export default App;
