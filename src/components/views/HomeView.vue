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

const checkboxChoises1 = [
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
const selectedCheckboxes1 = ref([])
const setCheckboxChoice = val => (selectedCheckboxes1.value = val)

const checkboxChoises2 = [
    {
        name: 'color-scheme1',
        key: 'light',
        value: {
            prop1: 111111,
            prop2: '111111',
        },
        label: 'Light mode',
    },
    {
        name: 'color-scheme1',
        key: 'auto',
        value: {
            prop1: 222222,
            prop2: '222222',
        },
        label: 'Auto mode',
    },
    {
        name: 'color-scheme1',
        key: 'dark',
        value: {
            prop1: 333333,
            prop2: '333333',
        },
        label: 'Dark mode',
    },
]
const selectedCheckboxes2 = ref([])
</script>

<template>
    <div>
        <div><IconEcosystem /> Home view</div>
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
        <div>
            <BaseInputCheckbox
                v-for="(choise, index) in checkboxChoises1"
                :key="index"
                :name="choise.name"
                :selected="selectedCheckboxes1"
                :value="choise.value"
                @change="setCheckboxChoice">
                <template #label>{{ choise.label }}</template>
            </BaseInputCheckbox>
            <p>Выбранный вариант: {{ selectedCheckboxes1 }}</p>
            <BaseInputCheckbox
                v-for="(choise, index) in checkboxChoises2"
                :key="index"
                v-model:selected="selectedCheckboxes2"
                :name="choise.name"
                :value="choise.value">
                <template #label>{{ choise.label }}</template>
            </BaseInputCheckbox>
            <p>Выбранные варианты: {{ selectedCheckboxes2 }}</p>
        </div>
    </div>
</template>
