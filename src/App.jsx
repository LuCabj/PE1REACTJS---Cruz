import NavegationBar from "./components/layouts/navbar/NavegationBar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
function App() {
  let saludo = "alo sans"
  return (
    <div>
      <NavegationBar />
      <ItemListContainer greeting={saludo}/>
    </div>

  );
}

export default App;