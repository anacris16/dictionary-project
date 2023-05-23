import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by Ana Cristina Altuve and is{" "}
          <a href="https://github.com/anacris16/dictionary-project" target="_blank" rel="noreferrer">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
