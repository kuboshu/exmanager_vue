<template>
    <div>
        <div class="body">
            <input type="text" v-model="body">
        </div>
        <div class="render" v-html="render"></div>
    </div>
</template>

<script>
import marked from 'marked'

export default ({
    name: 'ArticleEditor',
    data: function() {
        return {
            body: ''
        };
    },
    computed: {
        render: function() {
            return marked(this.body);
        }
    }
});
</script>