<template>
    <div>
        <button @click="toggleModal">Open Modal</button>
        <div v-if="disp_modal" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
            <div class="relative mx-auto w-auto max-w-2xl">
                <div class="bg-white w-full rounded shadow-2xl flex flex-col">
                    <div class="text-2xl font-bold">Hello From Modal</div>
                    <span>hoge hoge hoge 
                    hoge hoge hoge 
                    hoge hoge hoge 
                    hoge hoge hoge 
                    hoge hoge hoge 
                    hoge hoge hoge 
                    hoge hoge hoge 
                    hoge hoge hoge 
                    hoge hoge hoge 
                    hoge hoge hoge 
                    hoge hoge hoge</span>
                    <button class="rounded bg-green-500 text-white px-6 mt-1 py-2 w-1/4 m-auto mb-5" @click="toggleModal">Close</button>
                </div>
            </div>
        </div>
        <div v-if="disp_modal" class="absolute inset-0 z-40 opacity-25 bg-black"></div>
    </div>
</template>

<script>
export default ({
    name: 'DiscardConfirmationModal',
    data: function() {
        return {
            disp_modal: false
        };
    },
    methods: {
        toggleModal: function() {
            this.disp_modal = !this.disp_modal;
        }
    }
});
</script>