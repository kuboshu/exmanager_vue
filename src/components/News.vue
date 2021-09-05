<template>
    <div>
        <div v-for="article in disp_articles" v-bind:key="article" v-on:click="toViewPage">
            {{article}}
        </div>
        <button v-on:click="previousPage">前</button>
        {{page+1}} / {{n_page+1}}
        <button v-on:click="nextPage">次</button>
    </div>
</template>

<script>
const articles = [
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
    'サンプル記事11',
    'サンプル記事12',
    'サンプル記事13',
    'サンプル記事14',
    'サンプル記事15',
    'サンプル記事16',
    'サンプル記事17',
    'サンプル記事18',
    'サンプル記事19',
    'サンプル記事20',
    'サンプル記事21',
    'サンプル記事22',
    'サンプル記事23',
    'サンプル記事24',
    'サンプル記事25',
    'サンプル記事26',
    'サンプル記事27',
    'サンプル記事28',
    'サンプル記事29',
    'サンプル記事30',
    'サンプル記事31',
    'サンプル記事32',
    'サンプル記事33',
    'サンプル記事34',
    'サンプル記事35',
    'サンプル記事36',
    'サンプル記事37',
    'サンプル記事38',
    'サンプル記事39'
];

const page_size = 10;
const n_articles = articles.length;
const n_page =  Math.floor(n_articles / page_size);

export default ({
    name: 'News',
    data: function() {
        return {
            articles: articles,
            page: 0,
            size: page_size,
            n_articles: articles.length,
            n_page: n_page,
            disp_articles: articles.slice(0, page_size),
            valid_previous: false,
            valid_next: (n_page > 1) 
        };
    },
    methods: {
        nextPage: function() {
            if (this.valid_next) {
                this.valid_previous = true;
                this.page = this.page + 1;
                this.disp_articles = this.articles.slice(this.size * this.page, this.size * this.page + this.size);
                if (this.page == this.n_page) {
                    this.valid_next = false;
                }
            }
        },

        previousPage: function() {
            if (this.valid_previous) {
                this.valid_next = true;
                this.page = this.page - 1;
                this.disp_articles = this.articles.slice(this.size * this.page, this.size * this.page + this.size);
                if (this.page == 0) {
                    this.valid_previous = false;
                }
            }
        },

        toViewPage: function() {
            this.$router.push("view");
        }
    }
});
</script>