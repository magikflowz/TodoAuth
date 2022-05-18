<template>
    <button v-on:click="":style="{background: color}" class="btn">{{ text }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: String
    }
    
}
</script>