<template>
<h1>Tasks:</h1>
<div v-bind:key="task.id" v-for="task in tasks">
    <Task @delete-task="$emit('delete-task', task.id)" :task="task"/>
    <t
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
    },
    emits: ['delete-task'],
}
</script>