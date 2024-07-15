import BgChanger from "./components/BgChanger";
import Card from "./components/Card";
import Counter from "./components/Counter";
import PasswordGenerator from "./components/PasswordGenerator";
import ToggleButton from "./components/ToggleButton";
function App() {
  const info = {
    name: "Fido",
    cap: "My dog's love is like a warm hug every day.",
    places: ["Pune", "Ahemdabad", "Gadchiroli"],
    btnText: "Read about me",
  };
  return (
    <>
      <PasswordGenerator />
    </>
  );
}

export default App;
