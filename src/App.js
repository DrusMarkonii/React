import "./App.css";
import "./scss/app.scss";
import TaskDescription from "./List/task-description"



const tasks = [
  {   id: 1,
      taskName: 'Cходить в магазин',
      isImportant: true
  },
  {
      id: 2,
      taskName: 'Посмотреть фильм',
      isImportant: false
  },
  {
      id: 3,
      taskName: 'Сходить на рыбалку',
      isImportant: false
  },
  {
      id: 4,
      taskName: 'Помыть посуду',
      isImportant: true
  },
  {
    id: 5,
    taskName: 'Прочитать книгу',
    isImportant: true
}
]


function App() {

  const btnClick = (event) => {
    alert("Спасибо, что нажал!!!!")
  }


  return (
    <div>
      <input type="text" />
      {tasks.map((item, index)=> {
        return (
          <TaskDescription 
            user={item}
          />
        )
      })}
      <button 
        className="button"
        type="btn"
        onClick= {btnClick}
        // disabled
      >
        Жми
      </button>
    </div>
    
    
  )
}
    


export default App;
