import { action, computed, makeAutoObservable, observable } from 'mobx'

import { TodoInterface } from '../types/types'

const STORAGE_KEY = '@tasks'

export class Task {
    constructor() {
        this.fetchs()
        makeAutoObservable(this)
    }

    protected fetchs() {
        this._tasks = JSON.parse(localStorage[STORAGE_KEY])
    }

    protected sync() {
        localStorage[STORAGE_KEY] = JSON.stringify(this._tasks)
    }

    @observable
    protected _tasks: TodoInterface[] = []

    @observable
    protected _taskEdit?: TodoInterface

    @computed
    get taskEdit() {
        return this._taskEdit
    }

    @action
    edit(task: TodoInterface) {
        this._taskEdit = task
    }

    @computed
    get tasks() {
        return this._tasks.filter((task) => !task.isDone)
            .sort((a, b) => b.updatedAt - a.updatedAt)
    }

    @computed
    get completedTasks() {
        return this._tasks.filter((task) => task.isDone)
            .sort((a, b) => b.updatedAt - a.updatedAt)
    }

    protected generateId(): number {
        let rand = Math.random()

        while (this._tasks.find(task => task.id === rand)) {
            rand = Math.random()
        }

        return rand
    }

    protected find(id: TodoInterface['id'], callback: (task: TodoInterface, index: number) => void) {
        const index = this._tasks.findIndex((task) => task.id === id)

        if (index !== -1) {
            callback(this._tasks[index], index)
        }
    }

    @action
    add(text: string) {
        this._tasks.push({
            text,
            id: this.generateId(),
            isDone: false,
            updatedAt: new Date().getTime()
        })

        this.sync()
    }

    @action
    update(id: TodoInterface['id'], text: string) {
        this.find(id, (task, i) => {
            this._tasks[i] = {
                ...task,
                text,
            }

            this._taskEdit = undefined
            this.sync()
        })
    }

    @action
    remove(id: TodoInterface['id']) {
        this.find(id, (_, i) => {
            this._tasks.splice(i, 1)
            this.sync()
        })
    }

    @action
    toggleDone(id: TodoInterface['id']) {
        this.find(id, (task, i) => {
            this._tasks[i] = {
                ...task,
                isDone: !task.isDone,
                updatedAt: !task.isDone ? new Date().getTime() : task.updatedAt
            }

            this.sync()
        })
    }
}