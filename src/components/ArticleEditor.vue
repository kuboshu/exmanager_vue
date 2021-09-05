<template>
    <div>
        <div v-if="mode" class="body">
            <textarea rows="20" cols="100" type="text" v-model="body"></textarea>
        </div>
        <div v-else class="render" v-html="render"></div>
        <div class="switch" @click="chmode">編集 | プレビュー</div>
    </div>
</template>

<script>
import marked from 'marked'

export default ({
    name: 'ArticleEditor',
    data: function() {
        return {
            body: '',
            mode: true // trueだと「編集」モード
        };
    },
    computed: {
        render: function() {
            return marked(this.body);
        }
    },
    methods: {
        chmode: function() {
            this.mode = !this.mode
        }
    }
});
</script>