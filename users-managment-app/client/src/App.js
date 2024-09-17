import { Header } from "./components/core/Header";
import "./App.css"
import { Footer } from "./components/core/Footer";
import { SerachBar } from "./components/search/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
         <SerachBar />
      </main>

      <Footer />
    </div>
  );
}

export default App;
