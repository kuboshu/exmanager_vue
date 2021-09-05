<template>
    <div>
        <input class="rounded-lg pl-2 pt-2 pb-2" type="search" v-on:change="toSearchResult" v-bind:size="size" placeholder="検索">
    </div>
</template>

<script>
export default ({
    name: 'Search',
    props: ["size"],
    methods: {
        toSearchResult: function() {
            this.$router.push("result");
        }
    }
});
</script>