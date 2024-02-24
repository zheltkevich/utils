import { reactive } from 'vue'

const intersect = () => {
    const data = reactive({
        element: null,
        binding: {},
    })

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) data.binding.value(true)
                else data.binding.value(false)
            })
        },
        {
            rootMargin: '80px',
        }
    )

    const updateData = (el, binding) => {
        data.element = el
        data.binding = binding
    }
    const setupObserver = () => {
        if (data.element) observer.observe(data.element)
        else observer.unobserve(data.element)
    }

    const mounted = (el, binding) => {
        updateData(el, binding)
        setupObserver(el)
    }
    const updated = (el, binding) => {
        updateData(el, binding)
        setupObserver(el)
    }

    const unmounted = () => observer.disconnect()

    return {
        mounted,
        updated,
        unmounted,
    }
}

export default intersect()
