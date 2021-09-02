<template>
    <h1>投稿済み記事一覧</h1>
    <Nav v-bind:menus="menus"></Nav>
    <div>
        グループでフィルタ
        <select name="group">
            <option v-for="group in groups" v-bind:key="group">{{group}}</option>
        </select>
    </div>
    <Published></Published>
    <div>
        <button @click="toUserTop">ユーザートップへ戻る</button>
    </div>
</template>

<script>
const groups = [
    '一般',
    'グループ1',
    'グループ2',
    'グループ3',
];

import Nav from './Nav.vue'
import Published from './PublishedArticle.vue'

const menus = [
    ["新規作成", "newarticle"],
    ["下書き管理", "drafttop"],
    ["アカウント管理", "manage_account"],
    ["ログアウト", "/"],
];

export default ({
    name: 'ManageArticle',
    data: function() {
        return {
            menus: menus,
            groups: groups
        };
    },
    components: {
        'Nav': Nav,
        'Published': Published
    },
    methods: {
        toUserTop: function() {
            this.$router.push('usertop');
        },
        toNewArticle: function() {
            this.$router.push('newarticle');
        }
    }
});
</script>
