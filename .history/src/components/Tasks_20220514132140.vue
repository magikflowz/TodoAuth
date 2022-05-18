<template>
<h1>Tasks:</h1>
<div  v-for="task in tasks">
    
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