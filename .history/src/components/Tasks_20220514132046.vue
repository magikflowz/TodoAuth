<template>
<h1>Tasks:</h1>
<div  v-for="task in tasks">
    <h3> Task: {{task.text}}</h3>
    </div>
</template>

<script>
import Task 
export default{
    name: 'Tasks',
    props: {
        tasks: Array,
    }
}
</script>