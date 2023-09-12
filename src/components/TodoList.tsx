import { observer } from 'mobx-react'

import { useStore } from '../stores'
import { BaseText } from './BaseText'
import { TodoItem } from './TodoItem'

export const TodoList = observer(() => {
  const store = useStore()

  return (
    <div className="mt-6 px-7">
      {store.task.tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
      <BaseText className="p-3">
        Completed ({store.task.completedTasks.length})
      </BaseText>
      {store.task.completedTasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  )
})
