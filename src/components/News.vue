<template>
    <div>
        <ul>
            <li v-for="article in articles" v-bind:key="article">{{article}}</li>
        </ul>
    </div>
</template>

<script>
export default ({
    name: 'News',
    data: function() {
        return {
            articles: [
                'データベースの設計方法',
                'プログラミング勉強法のコツ',
                '今流行りの機械学習とは!?',
                'Webサービスの設計手順',
                'DXってなんなん？',
                'Rustってどうなん？',
                'なんでもAIと呼ぶのはやめましょう!!',
                '統計学基礎入門',
                'バックエンドに必要な知識',
                'サンプル記事1',
                'サンプル記事2',
                'サンプル記事3',
                'サンプル記事4',
                'サンプル記事5',
                'サンプル記事6',
                'サンプル記事7',
                'サンプル記事8',
                'サンプル記事9',
                'サンプル記事10',
            ]
        };
    }
});
</script>