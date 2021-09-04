<template>
    <button v-on:click="jump">ログイン</button>
</template>

<script>
export default ({
    name: 'ButtonLogin',
    methods: {
        jump: function() {
            this.$router.push({path: 'login'});
        }
    }
});
</script>
