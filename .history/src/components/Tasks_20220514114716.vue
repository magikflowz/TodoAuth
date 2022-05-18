<template>
    <div v-for="task in tasks">
    {}
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