<template>
    <button v-on:click="jump">トップへ戻る</button>
</template>

<script>
export default ({
    name: 'ButtonTop',
    methods: {
        jump: function() {
            this.$router.push({path: '/'});
        }
    }
});
</script>
