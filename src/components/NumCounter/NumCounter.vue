<template>
    <h1>Counter: {{ count }}</h1>
</template>

<script>
    export default {
        name: 'NumCounter',
        data() {
            return {
                count: 0
            }
        }
    }
</script>