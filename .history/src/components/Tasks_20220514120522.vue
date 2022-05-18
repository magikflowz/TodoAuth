<template>
<div v-for="task in tasks">
    <h1>Tasks:</h1>
    <h3> Task{{task.text}}</h3>
    </div>
</template>

<script>
export default{
    name: 'Tasks',
    props: {
        tasks: Array,
    }
}
</script>