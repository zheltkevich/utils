<script setup>
import { computed } from 'vue'
import { getRandomId } from '@helpers/helpers.js'

const props = defineProps({
    id: {
        type: String,
        default: '',
    },
    name: {
        type: String,
        default: '',
    },
    value: {
        type: [Number, String],
        default: null,
    },
    selected: {
        type: [Number, String],
        default: null,
    },
})

const computedId = computed(() => props.id || getRandomId())
const computedName = computed(() => props.name || null)
const checked = computed(() => props.selected === props.value)

const emit = defineEmits(['update:selected', 'change'])
const onChange = () => {
    emit('update:selected', props.value)
    emit('change', props.value)
}
</script>

<template>
    <div class="base-input-radio">
        <input
            :id="computedId"
            type="radio"
            :name="computedName"
            :value="value"
            :checked="checked"
            @change="onChange" />
        <label
            v-if="$slots.label"
            :for="computedId">
            <slot name="label" />
        </label>
    </div>
</template>
