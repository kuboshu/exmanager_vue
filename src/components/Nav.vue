<template>
    <nav>
        <button v-for="menu in menus" v-on:click="changePage(menu[1])" v-bind:key="menu">{{menu[0]}}</button>
    </nav>
</template>

<script>
export default ({
    name: 'Nav',
    props: ['menus'],
    methods: {
        changePage: function(path) {
            this.$router.push({path: path});
        }
    }
});
</script>
