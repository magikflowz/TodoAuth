<template>
    <button class="btn">{{}}</button>
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