
<template>
  <main>

    <!-- heading -->
    <header>
      <img src="/task.png" alt="task icon">
      <h1>My Tasks Board</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do.</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} tasks in your favs list.</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <!-- for provide button -->
    <div class="provide">
      <nuxt-link class='pbtn' to='/stock'>Provide</nuxt-link>
    </div>
  </main>
</template>

<script setup>
  import { useTaskStore } from '~/store/TaskStore';
  import { ref, provide } from 'vue';
  const taskStore = useTaskStore()

  const filter = ref('all')
  provide('favs', taskStore.favs);  
  console.log(taskStore.task)

</script>