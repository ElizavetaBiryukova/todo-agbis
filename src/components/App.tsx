import { observer } from 'mobx-react'
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'
import Header from './Header'


export const App = observer(() => {
  return (
    <>
      <Header />
      <div className="max-w-screen-md mx-auto p-3 ">
        <NewTodoForm />
        <TodoList />
      </div>
    </>
  )
})
