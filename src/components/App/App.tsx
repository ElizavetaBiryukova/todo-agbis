import Header from "../Header/Header"
import NewTodoButton from "../NewTodoButton/NewTodoButton"
import TodoList from "../TodoList/TodoList"

function App() {


  return (
    <>
      <Header />
      <main>
        <TodoList />
        <NewTodoButton />
      </main>
    </>
  )
}

export default App
