<template>
    <div>
        <input type="text" v-on:change="toSearchResult" placeholder="検索">
    </div>
</template>

<script>
export default ({
    name: 'Search',

    methods: {
        toSearchResult: function() {
            this.$router.push("result");
        }
    }
});
</script>