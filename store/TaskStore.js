import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {id: 1, title: "buy some milk", isFav: false},
      {id: 2, title: "play Football", isFav: true}
    ]
  }),
  getters: {
    favs() {
      return this.tasks.filter(t => t.isFav)
    },
    
    totalCount: (state) => {
      return state.tasks.length
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p
      }, 0)
    }
    },
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    deleteTask(id){
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    favTask(id){
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.isFav = !task.isFav
      }

    }

  }
})