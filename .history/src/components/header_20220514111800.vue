<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
import Button from './components/Buttom'

export default {
    name: 'Header',
    props: {
        title: String,
        }
    components:
}
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>