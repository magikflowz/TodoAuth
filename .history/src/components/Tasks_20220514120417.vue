<template>
<div v-for="task in tasks">
    <h3> {{tasks.text}}</h3>
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