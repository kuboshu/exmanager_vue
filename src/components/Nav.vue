<template>
    <nav>
        <button v-for="menu in menus" v-bind:key="menu">{{menu}}</button>
    </nav>
</template>

<script>
export default ({
    name: 'Nav',
    data: function() {
        return {
            menus: ['ログイン', 'ユーザー登録']
        };
    }
});
</script>
