export const clickOutside = {
    mounted(el, binding) {
        const handleClickOutside = event => {
            const clickOusideBindedEl = !el.contains(event.target) && el !== event.target
            const isObject = typeof binding.value === 'object'

            if (isObject && 'excludedEl' in binding.value && 'handler' in binding.value) {
                const { excludedEl } = binding.value
                const clickOutsideExcludedEl = excludedEl ? !excludedEl.contains(event.target) : false

                if (clickOusideBindedEl && clickOutsideExcludedEl) binding.value.handler()
            } else {
                if (clickOusideBindedEl) binding.value()
            }
        }

        el._clickOutside = handleClickOutside
        document.addEventListener('click', el._clickOutside)
    },

    unmounted(el) {
        document.removeEventListener('click', el._clickOutside)
        delete el._clickOutside
    },
}

export default clickOutside
