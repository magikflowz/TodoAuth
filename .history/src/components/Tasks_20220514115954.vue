<template>
<div v-bind:key="task" v-for="task in tasks">
    <h3> </h3>
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