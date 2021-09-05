<template>
    <div>
        <Nav v-bind:menus="menus"></Nav>
        <h1>新規作成</h1>
        <div>
            <input type="text" placeholder="タイトル">
        </div>
        <div>
            <input type="text" placeholder="#タグ1 #タグ2 ...">
        </div>
        <ArticleEditor></ArticleEditor>
        <div>
            公開グループ：
            <select name="group">
                <option v-for="group in groups" v-bind:key="group">{{group}}</option>
            </select>
        </div>
        <DragAndDrop></DragAndDrop>
        <div>
            <span @click="discard">破棄</span>
            ・
            <span @click="publish">投稿</span>
            ・
            <span @click="save">一時保存</span>
        </div>
    </div>
</template>

<script>
import Nav from './Nav.vue'
import DragAndDrop from './DragAndDrop.vue'
import ArticleEditor from './ArticleEditor.vue'

const groups = [
    '全体',
    'グループ1',
    'グループ2',
    'グループ3'
];

const menus = [
    ['ログアウト', '/'],
    ['アカウント管理', 'manage_account']
]

export default ({
    name: 'NewArticle',
    data: function() {
        return {
            menus: menus,
            groups: groups,
        };
    },
    components: {
        'Nav':Nav,
        'DragAndDrop': DragAndDrop,
        'ArticleEditor': ArticleEditor
    },
    methods: {
        discard: function() {
            this.$router.push('manage_article');
        },
        publish: function() {
            // 作成内容を確認画面に渡す準備
            this.$router.push('confirmpublish');
        },
        save: function() {
            // 作成内容を保存する処理
            this.$router.push('drafttop');
        }
    }
});
</script>