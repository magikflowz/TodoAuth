<template>
<h1>Tasks:</h1>
<div v-bind:key="task.id" v-for="task in tasks">
    <Task @delete-task="task":task="task"/>
    </div>
</template>

<script>
import Task from './Task'
export default{
    name: 'Tasks',
    props: {
        tasks: Array,
    },
    components: {
        Task
    }
}
</script>