<template>
<div class="task">
    <h3>{{ task.text }}</h3>
    <p>{{ task.day}}</p>
</div>
</template>

<script>
export default{
    name: 'Task',
    props:{
        task: Object
    }
}
</script>
<style scope>
.fas {
    color: red;
}
.task {
  `
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>