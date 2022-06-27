<template>
    <h1>Counter: {{ count }}</h1>
    <button @click="increaseCount">Increase</button>&nbsp;
    <button @click="decreaseCount">Decrease</button>
</template>

<script>
    export default {
        name: 'NumCounter',
        
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increaseCount() {
                console.log('clicked increase button!');
                this.count++
            },
            decreaseCount() {
                console.log('clicked decrease button');
                
            }
        }
    }
</script>