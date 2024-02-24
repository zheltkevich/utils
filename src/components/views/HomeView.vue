<script setup>
import { ref } from 'vue'
import IconEcosystem from '@icons/IconEcosystem.vue'
import BaseInputRadio from '@base/BaseInputRadio.vue'
import BaseInputCheckbox from '@base/BaseInputCheckbox.vue'

const selectedRadio1 = ref('dark')
const radioChoises1 = [
    {
        name: 'color-scheme1',
        key: 'light',
        value: 'light',
        label: 'Light mode',
    },
    {
        name: 'color-scheme1',
        key: 'auto',
        value: 'auto',
        label: 'Auto mode',
    },
    {
        name: 'color-scheme1',
        key: 'dark',
        value: 'dark',
        label: 'Dark mode',
    },
]
const setRadioChoice = val => (selectedRadio1.value = val)

const selectedRadio2 = ref('auto')
const radioChoises2 = [
    {
        name: 'color-scheme2',
        key: 'light',
        value: 'light',
        label: 'Light mode',
    },
    {
        name: 'color-scheme2',
        key: 'auto',
        value: 'auto',
        label: 'Auto mode',
    },
    {
        name: 'color-scheme2',
        key: 'dark',
        value: 'dark',
        label: 'Dark mode',
    },
]

const checkboxes = ref([
    {
        name: 'color-scheme1',
        value: {
            title: 'light',
            payload: 1111,
        },
        label: 'Light mode',
    },
    {
        name: 'color-scheme1',
        value: {
            title: 'auto',
            payload: 2222,
        },
        label: 'Auto mode',
    },
    {
        name: 'color-scheme1',
        value: {
            title: 'dark',
            payload: 3333,
        },
        label: 'Dark mode',
    },
])
const selectedCheckboxes1 = ref([])
const updateSelected = (value, checked) => {
    if (checked) selectedCheckboxes1.value = [...selectedCheckboxes1.value, value]
    else selectedCheckboxes1.value = selectedCheckboxes1.value.filter(item => item !== value)
}
</script>

<template>
    <div>
        <div><IconEcosystem /> Home view</div>

        <div>
            <BaseInputCheckbox
                v-for="(item, index) in checkboxes"
                :key="index"
                group="test-checkbox"
                :value="item.value"
                :items="checkboxes"
                :checked="checkedIndex"
                @change="updateSelected">
                <template #label>{{ item.label }} </template>
            </BaseInputCheckbox>
            <p>Выбранный вариант: {{ selectedCheckboxes1 }}</p>
        </div>
        <div>
            <BaseInputRadio
                v-for="(choise, index) in radioChoises1"
                :key="index"
                :name="choise.name"
                :value="choise.value"
                :selected="choise.value"
                @change="setRadioChoice">
                <template #label>{{ choise.label }}</template>
            </BaseInputRadio>
            <p>Выбранный вариант: {{ selectedRadio1 }}</p>
            <BaseInputRadio
                v-for="(choise, index) in radioChoises2"
                :key="index"
                v-model:selected="selectedRadio2"
                :name="choise.name"
                :value="choise.value">
                <template #label>{{ choise.label }}</template>
            </BaseInputRadio>
            <p>Выбранный вариант: {{ selectedRadio2 }}</p>
        </div>
    </div>
</template>
