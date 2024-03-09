import "./App.css";
import Feedback from "./components/Feedback";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="bg-black h-screen w-screen ">
      <HomePage />
      <Feedback />
    </div>
  );
}

export default App;
