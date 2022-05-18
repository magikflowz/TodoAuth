<template>
    <div v-for="task in tasks" v-bid:key>
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