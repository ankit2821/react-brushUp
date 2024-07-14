import Card from "./components/Card";
import Counter from "./components/Counter";
function App() {
  const info = {
    name: "Fido",
    cap: "My dog's love is like a warm hug every day.",
    places: ["Pune", "Ahemdabad", "Gadchiroli"],
    btnText: "Read about me",
  };
  return (
    <>
      <Card details={info} />
    </>
  );
}

export default App;
