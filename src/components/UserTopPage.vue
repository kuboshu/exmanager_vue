<template>
    <div>
        <Nav v-bind:menus="menus"></Nav>
        <h1>ユーザートップページ</h1>
        <Search></Search>
        最新記事2020/1/1更新
        <News></News>
        投稿記事2020/1/1更新
        <Write></Write>
    </div>
</template>

<script>
import Nav from './Nav.vue'
import Search from './parts/SearchField.vue'
import News from './News.vue'

const menus = [
    ['記事管理', 'manage_article'],
    ['グループ管理', 'manage_group'],
    ['アカウント管理', 'manage_account'],
    ['ログアウト', '/'],
];

export default ({
    name: 'UserTop',
    components: {
        'Nav': Nav,
        'Search': Search,
        'News': News,
        'Write': News
    },
    data: function() {
        return {
            menus: menus
        };
    }
});
</script>