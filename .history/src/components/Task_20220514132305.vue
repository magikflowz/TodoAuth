<template>
<div class="task">
    <h3>{{ task.text }}</h3>
</template>
</div>
<script>
export default{
    name: 'Task',
    props:{
        task: Object
    }
}
</script>