import { observer } from 'mobx-react'
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'
import Header from './Header'
// import { useTranslation } from 'react-i18next';

export const App = observer(() => {
  // const { t, i18n } = useTranslation();

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
