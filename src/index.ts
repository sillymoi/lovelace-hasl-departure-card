import { HASLDepartureCard } from "./DepartureCard"

declare global {
    interface Window {
        customCards: Array<Object>
    }
}
customElements.define('hasl4o-departure-card', HASLDepartureCard)

window.customCards = window.customCards || []
window.customCards.push({
    type: "hasl4o-departure-card",
    name: "HASL4o Departure card",
    description: "Show departure times for SL Trafik",
})
