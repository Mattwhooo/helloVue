<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <router-link :to="{name: 'heroes'}">Heroes</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Hello',
        data () {
            return {
                msg: 'Welcome to Crypto Info'
            }
        }
    }
</script>