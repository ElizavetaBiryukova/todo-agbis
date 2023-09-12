import { createContext, useContext } from 'react'

import { Task } from './task'

const ctx = createContext({
    task: new Task()
})

export const useStore = () => useContext(ctx)