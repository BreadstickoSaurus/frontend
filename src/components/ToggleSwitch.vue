<template>
    <button name="toggle" id="toggle" @click="onToggle" :class="{'on': modelValue}">
        <div id="ball"></div>
    </button>
</template>
<script>
export default {
    name: 'ToggleSwitch',
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        onToggle(e) {
            this.$emit('update:modelValue', !this.modelValue);
        }
    }
}
</script>
<style scoped>
#toggle {
    border-radius: 1em;
    padding: .3em;
    width: 2.6em;
    background-color: var(--color-background-soft);
}
#toggle:focus {
    outline: none;
}
#ball {
    width: 1em;
    height: 1em;
    border-radius: 1em;
    background-color: var(--color-text);
    margin-left: 0;
    transition: margin-left .1s ease-in-out;
}
.on #ball{
    margin-left: 1em;
}
#toggle.on {
    background-color: var(--color-background-mute);
}
</style>