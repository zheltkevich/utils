<script setup></script>

<template>
    <button class="base-button">
        <span
            v-if="$slots.prepend"
            class="base-button__slot base-button__slot--prepend">
            <slot name="prepend" />
        </span>
        <span
            v-if="$slots.default"
            class="base-button__slot base-button__slot--default">
            <slot>Button</slot>
        </span>
        <span
            v-if="$slots.append"
            class="base-button__slot base-button__slot--append">
            <slot name="append" />
        </span>
    </button>
</template>
