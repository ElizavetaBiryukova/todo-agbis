import { createContext, useContext } from 'react'

import { Task } from './task'
import { Language } from './languages'

const ctx = createContext({
    theme: new Language(),
    task: new Task()
})

export const useStore = () => useContext(ctx)