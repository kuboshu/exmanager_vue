<template>
    <button v-on:click="jump">ユーザー登録</button>
</template>

<script>
export default ({
    name: 'ButtonUserRegistration',
    methods: {
        jump: function() {
            this.$router.push({path: 'reg'});
        }
    }
});
</script>
