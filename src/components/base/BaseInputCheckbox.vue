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
        type: [Number, String, Boolean, Array, Object],
        default: null,
    },
    checked: {
        type: Boolean,
        default: false,
    },
})

const computedId = computed(() => props.id || getRandomId())
const computedName = computed(() => props.name || null)

const emit = defineEmits(['update:selected', 'change'])
const onChange = event => {
    const { checked } = event.target
    emit('update:selected', props.value, checked)
    emit('change', props.value, checked)
}

// const onChange = event => {
//     console.log(event)
//     let selectedValues = []

//     if (event.target.checked) selectedValues = [...props.selected, props.value]
//     else selectedValues = props.selected.filter(item => item !== props.value)

//     emit('update:selected', selectedValues)
//     emit('change', selectedValues)
// }
</script>

<template>
    <div class="base-input-checkbox">
        <input
            :id="computedId"
            type="checkbox"
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
