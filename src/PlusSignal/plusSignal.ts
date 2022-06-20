import plusSignal from "bundle-text:./plusSignal.html"

export class PlusSignal extends HTMLElement {
    private _root = this.attachShadow({ mode: "closed" })

    constructor() {
        super()
        // this._root = this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this._root.innerHTML = plusSignal
        const name = this.textContent
        this._root.querySelector(".name").textContent = name    

        const signalContainer = this._root.querySelector(".signal-container")
        signalContainer.addEventListener("click", ev => {
            const customizedEvent = new MouseEvent("containerclick", )
            this._root.host.dispatchEvent(customizedEvent)
        })
    }

}

customElements.define("e-plus-signal", PlusSignal)
