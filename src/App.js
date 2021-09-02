import "./App.css";
import "./scss/app.scss";
import List from "./List"

function App() {
  const btnClick = (event) => {
    alert("И тебе привет!!!!")
  }

  return (
    <div>
      <List />
      <button 
        className="button"
        type="btn"
        onClick= {btnClick}
        // disabled
      >
        Привет
      </button>
    </div>
    
    
  )
}
    


export default App;
