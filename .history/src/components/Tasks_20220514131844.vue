<template>
<h1>Tasks:</h1>
<div  v-for="task in tasks">
    <h3> Task: {{tass.text}}</h3>
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