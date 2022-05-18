<template>
<div v-bind:key="tasks" v-for="task in tasks">
    <h3> {{task.text}}</h3>
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