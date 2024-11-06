<template>
    <div class="modal" v-if="visible">
        <div class="modal-content">
            <span class="close"  @click="close"><i class="nf nf-fa-close"></i></span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    emits: ['close'],
    props: {
        visible: {
            type: Boolean,
            required: true
        },
    },
    created() {
        window.addEventListener('keydown', (e) => {
            if (e.key == 'Escape') {
                this.close();
            }
        })
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
}
</script>

<style scoped>
.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background-color: var(--color-background);
    padding: 1em;
    width: 40em;
    max-width: calc(100% - 2em);
    margin: 1em;
}

.close {
    color: var(--color-text);
    float: right;
    font-size: 1.2em;
    width: 1.2em;
    height: 1.2em;
    line-height: 1.2em;
}

.close:hover, .close:focus {
    color: var(--color-border-hover);
    text-decoration: none;
    cursor: pointer;
}
</style>
