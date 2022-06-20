import modalCoin from "bundle-text:./modalCoin.html"

export class ModalCoin extends HTMLElement {
    private _root = this.attachShadow({
        mode: "closed"
    })

    constructor() {
        super()
        // this._root = this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this._root.innerHTML = modalCoin
        const modal = this._root
            const btnClose = modal.querySelector(".btn-close-modal")
            btnClose.addEventListener("click", evt => {
                const customizedEvent = new MouseEvent("btncloseclick", evt)
                this._root.host.dispatchEvent(customizedEvent)
            })            
    }

}

customElements.define("e-modal-coin", ModalCoin)