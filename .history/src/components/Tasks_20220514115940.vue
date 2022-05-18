<template>
<div v-bind:key="task" v-for="task in tasks">

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