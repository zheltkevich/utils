export default class SchemeSwitcher {
    static #schemes = [
        {
            id: 'auto',
            name: 'Auto',
        },
        {
            id: 'light',
            name: 'Light',
            curtainColor: '#dfe8ec',
        },
        {
            id: 'dark',
            name: 'Dark',
            curtainColor: '#171a1c',
        },
    ]

    static meta = document.querySelector('meta[name="theme-color"]')
    static prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    static currentScheme

    static init() {
        this.prefersDarkScheme.onchange = this.#deviceSchemeUpdateHandler.bind(this)
        this.#updateCurrentScheme()
        this.#saveScheme()
        this.#setRootAttributes()
    }

    static update(schemeId) {
        this.currentScheme = schemeId
        this.#saveScheme()
        this.#setRootAttributes()
    }

    static getSchemes() {
        return this.#schemes
    }

    static getCurrentScheme() {
        return localStorage.getItem('color-scheme')
    }

    static #saveScheme() {
        localStorage.setItem('color-scheme', this.currentScheme)
    }

    static #updateCurrentScheme() {
        // Раскоментировать по готовности темной темы
        // this.currentScheme = localStorage.getItem('color-scheme') || 'auto'
        this.currentScheme = 'light'
    }

    static #deviceSchemeUpdateHandler() {
        this.#setRootAttributes()
    }

    static #setRootAttributes() {
        const html = document.firstElementChild

        if (this.meta) this.#updateCurtainColor()

        if (this.currentScheme === 'auto') {
            this.prefersDarkScheme.matches ? html.setAttribute('color-scheme', 'dark') : html.setAttribute('color-scheme', 'light')
        } else {
            html.setAttribute('color-scheme', this.currentScheme)
        }
    }

    static #updateCurtainColor() {
        const currentScheme = this.#schemes.find(item => item.id === this.currentScheme)
        const ligthScheme = this.#schemes.find(item => item.id === 'light')
        const darkScheme = this.#schemes.find(item => item.id === 'dark')

        if (this.currentScheme === 'auto') {
            this.prefersDarkScheme.matches
                ? this.meta.setAttribute('content', darkScheme.curtainColor)
                : this.meta.setAttribute('content', ligthScheme.curtainColor)
        } else {
            this.meta.setAttribute('content', currentScheme.curtainColor)
        }
    }
}
