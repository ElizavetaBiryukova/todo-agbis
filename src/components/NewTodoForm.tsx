import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useStore } from '../stores'

export const NewTodoForm = observer(() => {
  const store = useStore()

  const { t } = useTranslation();

  const [title, setTitle] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const submit = () => {
    if (title) {
      if (store.task.taskEdit) {
        store.task.update(store.task.taskEdit.id, title)
      } else {
        store.task.add(title)
      }

      setTitle('')
    }
  }

  useEffect(() => {
    if (store.task.taskEdit) {
      setTitle(store.task.taskEdit?.title)
      inputRef.current?.focus()
    }
  }, [store.task.taskEdit])

  return (
    <div
      className="
            text-xl
            p-3 
            bg-component 
            text-dark
            flex 
            items-center
            shadow-lg
            rounded-lg
            mt-7
            mx-7
            border-t-2 border-t-pink-500
        "
    >
      <input
        value={title}
        onInput={(e) => setTitle(e.currentTarget.value)}
        onKeyDown={(e) => (e.key === 'Enter' ? submit() : '')}
        type="text"
        placeholder={t("add new task")}
        className="bg-transparent outline-0 flex-1 px-3"
      />

      <button
        onClick={() => submit()}
        className="px-3 py-1.5 text-xl text-light rounded-lg"
      >
        {store.task.taskEdit ? `${t("update")}` : `${t("add")}`}
      </button>
    </div>
  )
})
