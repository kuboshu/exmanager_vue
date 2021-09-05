<template>
    <button v-on:click="jump_to(path)">{{value}}</button>
</template>

<script>
export default ({
    name: 'JumpButton',
    props: ['path', 'value'],
    methods: {
        jump_to: function(path) {
            this.$router.push({path: path});
        }
    }
});
</script>
