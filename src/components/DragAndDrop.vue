<template>
    <div>
        <div class="drop_area"
        @dragenter="enter"
        @dragleave="leave"
        @dragover.prevent
        @drop.prevent="drop"
        >
            ファイルアップロード
        </div>
        <div class="uploaded_files">
            <ul>
                <li v-for="file in files" v-bind:key="file">{{file.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default ({
    name: 'DragAndDrop',
    data: function() {
        return {
            is_enter: false,
            files: []
        };
    },
    methods: {
        enter: function() {
            this.is_enter = true;
        },
        leave: function() {
            this.is_enter = false;
        },
        drop: function(event) {
            this.files = this.files.concat([...event.dataTransfer.files])
            this.is_enter = false;
        }
    }
});
</script>