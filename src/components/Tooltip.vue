<template>
    <div class="tooltip" :style="cssProps">
        <slot></slot>
        <span class="tooltiptext">
            <slot name="tooltip">Tooltip text</slot>
        </span>
    </div>
</template>
<script>
export default {
    name: 'Tooltip',
    props: {
        tooltipWidth: {
            type: Number,
            required: false,
            default: 20
        }
    },
    computed: {
        cssProps() {
            return {
                '--tooltip-width': this.tooltipWidth + "em",
                '--tooltip-possition': "-" + this.tooltipWidth/2 + "em",
            }
        }
    }
}
</script>
<style scoped>
/* copied from: https://www.w3schools.com/css/css_tooltip.asp */
.tooltip {
    position: relative;
    display: inline-block;
}
.tooltip .tooltiptext {
    visibility: hidden;
    width: var(--tooltip-width);
    background-color: var(--color-background-mute);
    color: var(--color-text);
    text-align: center;
    border-radius: 6px;
    padding: 10px 5px;
    position: absolute;
    z-index: 1;
    top: 150%;
    left: 50%;
    margin-left: var(--tooltip-possition);
}
.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent var(--color-background-mute) transparent;
}
.tooltip:hover .tooltiptext {
    visibility: visible;
}
</style>