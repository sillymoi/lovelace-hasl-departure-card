var $398e9ab595e271b6$exports = {};
class $398e9ab595e271b6$var$HASLTestCard extends HTMLElement {
    connectedCallback() {
        var _ua_match;
        const ua = navigator.userAgent;
        var _ua_match_;
        this.innerHTML = `
      <pre style="
        white-space: pre-wrap;
        font-size: 18px;
        padding: 20px;
        color: white;
        background: black;
      ">${ua}

Chrome:
${(_ua_match_ = (_ua_match = ua.match(/Chrome\/([\d.]+)/)) === null || _ua_match === void 0 ? void 0 : _ua_match[1]) !== null && _ua_match_ !== void 0 ? _ua_match_ : "unknown"}

customElements:
${"customElements" in window}

Shadow DOM:
${"attachShadow" in Element.prototype}

Promise:
${"Promise" in window}

Map:
${"Map" in window}

Set:
${"Set" in window}

Symbol:
${"Symbol" in window}

ES modules:
${"noModule" in HTMLScriptElement.prototype}
</pre>
    `;
    }
}
customElements.define("hasl4-departure-card", $398e9ab595e271b6$var$HASLTestCard);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "hasl4-departure-card",
    name: "HASL4 Departure card",
    description: "Show departure times for SL Trafik"
});


export {$398e9ab595e271b6$exports as default};
//# sourceMappingURL=hasl4-departure-card.js.map
