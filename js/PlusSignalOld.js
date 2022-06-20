// class PlusSignal extends HTMLElement {
//     constructor() {
//         super()

//         this.build()
//     }

//     connectedCallback() {
//         // console.log(this.shadowRoot)
//         const name = this.textContent
//         return name
//     }

//     build() {
//         const shadow = this.attachShadow({ mode: "open" })

//         shadow.appendChild(this.styles())

//         const plusSignal = this.createPlusSignal()

//         shadow.appendChild(plusSignal)
//     }

//     createVerticalDiv() {
//         const verticalDiv = document.createElement("div")
//         verticalDiv.classList.add("vertical-div")
//         return verticalDiv
//     }
//     createHorizontalDiv() {
//         const horizontalDiv = document.createElement("div")
//         horizontalDiv.classList.add("horizontal-div")
//         return horizontalDiv
//     }

//     createPlusSignal() {
//         const mainContainer = document.createElement("div")
//         const signalContainer = document.createElement("div")
//         mainContainer.classList.add("main-container")
//         signalContainer.classList.add("signal-container")
//         mainContainer.textContent = this.connectedCallback()
//         signalContainer.appendChild(this.createHorizontalDiv())
//         signalContainer.appendChild(this.createVerticalDiv())
//         mainContainer.appendChild(signalContainer)
//         return mainContainer
//     }

//     styles() {
//         const style = document.createElement("style")
//         style.textContent = `
//         .vertical-div {
//             background-color: white;
//             height: 20px;
//             width: 3px;
//             position: absolute;
//         }

//         .horizontal-div {
//             background-color: white;
//             height: 20px;
//             width: 3px;
//             transform: rotate(90deg);
//             position: absolute;
//         }

//         .main-container {
//             position: relative;
//             max-width: 30rem;
//             font-size: 2.6rem;
//         }
        
//         .signal-container {
//             position: absolute;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             right: 0;
//             top: -.9rem;
//             cursor: pointer;
//             background-color: black;
//             padding: 2rem;
//             border-radius: 50%;
//             transition: all .3s;
//         }

//         .signal-container:hover {
//             background-color: #000b;
//             transform: scale(1.08);
//         }
//         `
//         return style
//     }

// }

// customElements.define("plus-signal", PlusSignal)