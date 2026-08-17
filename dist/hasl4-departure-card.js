import {_ as $kQRd2$_} from "@swc/helpers/_/_ts_decorate";
import {html as $kQRd2$html, nothing as $kQRd2$nothing, LitElement as $kQRd2$LitElement, css as $kQRd2$css} from "lit";
import {state as $kQRd2$state, property as $kQRd2$property} from "lit/decorators.js";


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire55a1"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire55a1"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("1hybL", function(module, exports) {

$parcel$export(module.exports, "getLanguage", () => $a00349ed199e109f$export$64783e31db14f0ba);
$parcel$export(module.exports, "translateTo", () => $a00349ed199e109f$export$df5de7d5c552d075);
const $a00349ed199e109f$var$defaultLang = `en-US`;
const $a00349ed199e109f$var$defaultTranslation = {
    entity_missing: "Entity data missing",
    line: "Line",
    destination: "Destination",
    departure: "Departure",
    min: "min",
    last_updated: "Last updated",
    now: "Now",
    // configuration translations
    editor_show_name: "Show card name",
    editor_entities: "Entities",
    editor_departures: "Departures",
    editor_title: "Card name",
    editor_show_entity_name: "Show entity name",
    editor_show_departures: "Show departures",
    editor_show_header: "Show departure header",
    editor_show_icon: "Show transport icon",
    editor_show_transport_icon: "Show transport icon",
    editor_max_departures: "Maximum departures to show",
    editor_hide_departed: "Hide already departed",
    editor_show_departed_offeset: "... but show departed number of minutes ago",
    editor_show_time_always: "Always show departure time in HH:MM form",
    editor_hide_line_number: "Hide line number",
    editor_show_updated: `Show 'Last Updated'`,
    editor_direction: `Direction filter`,
    editor_direction_all: `All`,
    editor_direction_left: `Left`,
    editor_direction_right: `Right`,
    language: "Language"
};
const $a00349ed199e109f$export$150b732325d14d04 = {
    [$a00349ed199e109f$var$defaultLang]: $a00349ed199e109f$var$defaultTranslation,
    "sv-SE": {
        entity_missing: "Ingen data hittades",
        line: "Linje",
        destination: "Till",
        departure: "Avresa",
        min: "min",
        last_updated: "Senast uppdaterad",
        now: "Nu",
        editor_show_name: "Visa kortnamn",
        editor_entities: "Enheter",
        editor_departures: "Avg\xe5ngar",
        editor_title: "Kortnamn",
        editor_show_entity_name: "Visa enhetsnamn",
        editor_show_departures: "Visa avg\xe5ngar",
        editor_show_header: "Visa avg\xe5ngshuvud",
        editor_show_icon: "Visa transportikon",
        editor_show_transport_icon: "Visa transportikon",
        editor_max_departures: "Max antal avg\xe5ngar",
        editor_hide_departed: "D\xf6lj redan avg\xe5ngna",
        editor_show_departed_offeset: "... men visa avg\xe5ngna f\xf6r antal minuter sedan",
        editor_show_time_always: "Visa alltid avg\xe5ngstid i HH:MM-form",
        editor_hide_line_number: "D\xf6lj linjenummer",
        editor_show_updated: `Visa 'Senast uppdaterad'`,
        editor_direction: `Riktning filter`,
        editor_direction_all: `Alla`,
        editor_direction_left: `V\xe4nster`,
        editor_direction_right: `H\xf6ger`,
        language: "Spr\xe5k"
    },
    "fr-FR": {
        entity_missing: "Aucune info trouv&eacute;e",
        line: "Ligne",
        destination: "Terminus",
        departure: "D&eacute;part",
        min: "min",
        last_updated: "Mis \xe0 jour",
        now: "Maintenant",
        editor_show_name: "Afficher le nom de la carte",
        editor_entities: "Entit\xe9s",
        editor_departures: "D\xe9parts",
        editor_title: "Nom de la carte",
        editor_show_entity_name: "Afficher le nom de l'entit\xe9",
        editor_show_departures: "Afficher les d\xe9parts",
        editor_show_header: "Afficher l'ent\xeate des d\xe9parts",
        editor_show_icon: "Afficher l'ic\xf4ne de transport",
        editor_show_transport_icon: "Afficher l'ic\xf4ne de transport",
        editor_max_departures: "Nombre maximum de d\xe9parts",
        editor_hide_departed: "Masquer les d\xe9parts pass\xe9s",
        editor_show_departed_offeset: "... mais montrer les d\xe9parts depuis le nombre de minutes",
        editor_show_time_always: "Toujours afficher l'heure de d\xe9part en HH:MM",
        editor_hide_line_number: "Masquer le num\xe9ro de ligne",
        editor_show_updated: `Afficher 'Mis \xe0 jour'`,
        editor_direction: `Filtre de direction`,
        editor_direction_all: `Tous`,
        editor_direction_left: `Gauche`,
        editor_direction_right: `Droite`,
        language: "Langue"
    }
};
const $a00349ed199e109f$export$d0d68bb9ed2c643d = Object.keys($a00349ed199e109f$export$150b732325d14d04);
const $a00349ed199e109f$export$625550452a3fa3ec = (key, lang)=>{
    var _translations_lang;
    var _translations_lang_key;
    return (_translations_lang_key = (_translations_lang = $a00349ed199e109f$export$150b732325d14d04[lang]) === null || _translations_lang === void 0 ? void 0 : _translations_lang[key]) !== null && _translations_lang_key !== void 0 ? _translations_lang_key : $a00349ed199e109f$var$defaultTranslation[key];
};
const $a00349ed199e109f$export$64783e31db14f0ba = (configLang)=>{
    var _ref;
    return (_ref = configLang !== null && configLang !== void 0 ? configLang : navigator.language) !== null && _ref !== void 0 ? _ref : $a00349ed199e109f$var$defaultLang;
};
const $a00349ed199e109f$export$df5de7d5c552d075 = (lang)=>(key)=>$a00349ed199e109f$export$625550452a3fa3ec(key, lang);

});

parcelRegister("8Tbm1", function(module, exports) {
module.exports = import("./hasl4-departure-card-editor.js").then(()=>parcelRequire("3lTG7"));

});




var $7898aa7771233389$export$6d07abd9f0bba447;
(function(TransportType) {
    TransportType["METRO"] = "METRO";
    TransportType["BUS"] = "BUS";
    TransportType["TRAM"] = "TRAM";
    TransportType["TRAIN"] = "TRAIN";
    TransportType["SHIP"] = "SHIP";
    TransportType["FERRY"] = "FETTRY";
    TransportType["TAXI"] = "TAXI";
})($7898aa7771233389$export$6d07abd9f0bba447 || ($7898aa7771233389$export$6d07abd9f0bba447 = {}));



var $1hybL = parcelRequire("1hybL");
const $09e3f52f7061d6ff$export$c2f8e0cc249a8d8f = {
    title: "",
    entities: [],
    show_entity_name: true,
    show_header: true,
    show_icon: true,
    show_departures: true,
    direction: 0,
    max_departures: 5,
    hide_departed: true,
    show_departed_offeset: 5,
    show_updated: true,
    tap_action: "info"
};



const $22f2d6904e3922f5$var$lineColorsStyles = (0, $kQRd2$css)`
    .line-icon {
        border-radius: 3px;
        padding: 3px 3px 0 3px;
        color: #fff;
        min-width: 22px;
        height: 22px;
        font-weight: 500;
        display: inline-block;
        text-align: center;
        text-shadow: 1px 1px 2px var(--outline-color);
    }

    .bus {
        border: 1px solid var(--outline-color);
        color: var(--primary-text-color);
    }

    .red {
        background-color: #d71d24;
    }
    .blue {
        background-color: #0089ca;
    }
    .green {
        background-color: #179d4d;
    }

    .train {
        background-color: #ec619f;
    }

    .tram {
        background-color: #985141;
    }

    .tram_7 {
        background-color: #878a83;
    }

    .tram_12 {
        background-color: #778da7;
    }

    .tram_21 {
        background-color: #b76020;
    }

    .tram_22 {
        background-color: #d77d00;
    }
    `;
const $22f2d6904e3922f5$var$departureEntityStyles = (0, $kQRd2$css)`
    .card-header .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .departures > :first-child {
        margin-top: 0;
    }

    .departure.departed {
        color: var(--secondary-text-color);
    }

    .departure.departed > .main {
        text-decoration: line-through;
    }

    .row {
        margin-top: 8px;

        display: flex;
        justify-content: space-between;
    }

    .col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
    }

    .col.icon {
        flex-basis: 40px;
    }

    .row.name {
        height: 40px;
        padding-left: 8px;
        font-weight: 400;
        font-size: large;
        align-items: center;
        justify-content: center;
    }
    .row.header {
        height: 40px;
        font-size: medium;
        font-weight: 400;
        font-family: var(--paper-font-headline_-_font-family);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
        opacity: var(--dark-primary-opacity);
    }

    .main {
        flex: 2;
    }

    .transport-icon {
        width: 40px;
        height: 40px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .warning {
        color: var(--warning-color);
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .warning-message {
        color: var(--warning-color);
        font-size: smaller;
        text-decoration: unset;
    }

    .mr1 {
        margin-right: 8px;
    }

    .updated {
        padding-left: 16px;
        padding-top: 8px;
        font-size: smaller;
    }

    .center { text-align: center; }
    .left { text-align: left; }
    .right { text-align: right; }

    ha-icon {
        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
        width: 24px;
        height: 24px;
        color: var(--paper-item-icon-color);
    }
`;
var $22f2d6904e3922f5$export$2e2bcd8739ae039 = [
    $22f2d6904e3922f5$var$departureEntityStyles,
    $22f2d6904e3922f5$var$lineColorsStyles
];


const $adcf031a3f30aca5$var$diffMinutes = (from, to)=>{
    const diffMinutes = Math.ceil((from.getTime() - to.getTime()) / 1000 / 60);
    return diffMinutes;
};

class $adcf031a3f30aca5$export$7ded24e6705f9c64 extends (0, $kQRd2$LitElement) {
    setConfig(config) {
        this.config = {
            ...(0, $09e3f52f7061d6ff$export$c2f8e0cc249a8d8f),
            ...config
        };
    }
    getCardSize() {
        const singleEntitityExtras = (this.isManyEntitiesSet() ? ()=>0 : ()=>{
            const [_, attrs] = this.getFirstEntity();
            if (!attrs) return 0;
            return this.config.show_entity_name && attrs.friendly_name ? 1 : 0;
        })();
        const deps = this.getDepartures();
        const size = [
            !!this.config.title ? 1 : 0,
            singleEntitityExtras,
            !!this.config.show_header ? 1 : 0,
            (deps === null || deps === void 0 ? void 0 : deps.length) || 0
        ].reduce((sum, entity)=>sum += entity ? entity : 0, 0);
        return Math.max(size, 1);
    }
    getLayoutOptions() {
        return {
            grid_min_columns: 3,
            grid_min_rows: 2
        };
    }
    // configuration card is loaded in async manner
    static async getConfigElement() {
        return await (parcelRequire("8Tbm1")).then(()=>document.createElement("hasl4-departure-card-editor"));
    }
    static getStubConfig() {
        return {
            ...(0, $09e3f52f7061d6ff$export$c2f8e0cc249a8d8f)
        };
    }
    render() {
        var _this_config, _this_config1, _this_config2;
        if (!this.config) return (0, $kQRd2$html)`<ha-card><div class="card-content">No config...</div></ha-card>`;
        if (!this.hass) return (0, $kQRd2$html)`<ha-card><div class="card-content">No hass...</div></ha-card>`;
        // return html`
        //     <div style="position: fixed; top: 0; left: 0; z-index: 99999; background: red; color: white; font-size: 40px;">
        //     VISIBLE TEST
        //     </div>
        // `
        const lang = (0, $1hybL.getLanguage)((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.language);
        const _ = (0, $1hybL.translateTo)(lang);
        const departures = ((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.show_departures) ? ()=>{
            const data = this.renderDepartures();
            return data === (0, $kQRd2$nothing) ? (0, $kQRd2$html)`<span>${_(`entity_missing`)}</span>` : data;
        } : ()=>(0, $kQRd2$nothing);
        const renderLastUpdated = this.isManyEntitiesSet() ? ()=>(0, $kQRd2$nothing) : ()=>{
            var _this_config;
            const [data, __] = this.getFirstEntity();
            if (!data) return 0, $kQRd2$nothing;
            return ((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.show_updated) && data.last_updated ? (0, $kQRd2$html)`
                            <div class="updated right">
                                ${_("last_updated")}
                                ${new Date(data.last_updated).toLocaleTimeString(lang)}
                            </div>` : (0, $kQRd2$nothing);
        };
        return (0, $kQRd2$html)`
            <ha-card @click="${this.clickHandler()}">
                ${((_this_config2 = this.config) === null || _this_config2 === void 0 ? void 0 : _this_config2.title) ? (0, $kQRd2$html)`<h1 class="card-header"><div class="name">${this.config.title}</div></h1>` : (0, $kQRd2$nothing)}
                <div class="card-content">
                    ${departures()}
                    ${renderLastUpdated()}
                </div>
            </ha-card>
        `;
    }
    getFirstEntity() {
        var _this_config_entities, _this_config, _this_config1, _this_hass;
        const data = (_this_hass = this.hass) === null || _this_hass === void 0 ? void 0 : _this_hass.states[((_this_config = this.config) === null || _this_config === void 0 ? void 0 : (_this_config_entities = _this_config.entities) === null || _this_config_entities === void 0 ? void 0 : _this_config_entities[0]) || ((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.entity)];
        const attrs = data === null || data === void 0 ? void 0 : data.attributes;
        if (data && attrs && $adcf031a3f30aca5$var$isDepartureAttrs(attrs)) return [
            data,
            attrs
        ];
        return [
            undefined,
            undefined
        ];
    }
    getDeparturesFor(attrs) {
        var _attrs_departures, _this_config;
        if (!attrs) return [];
        const now = new Date();
        return (((_attrs_departures = attrs.departures) === null || _attrs_departures === void 0 ? void 0 : _attrs_departures.filter((d)=>{
            var _this_config, _this_config1;
            if (((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.direction) === 0) return true;
            return d.direction_code === ((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.direction);
        })// filter by departure time
        .filter((d)=>{
            var _this_config, _this_config1;
            if (!((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.hide_departed)) return true;
            const diff = $adcf031a3f30aca5$var$diffMinutes(new Date(d.expected), now);
            return diff + ((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.show_departed_offeset) >= 0;
        })) || []).slice(0, (_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.max_departures);
    }
    getDeparturesCombined(entities) {
        var _this_config;
        const now = new Date();
        return entities// filter invalid entities
        .filter((entity)=>{
            var _this_hass;
            if (!!entity === false) return false;
            const data = (_this_hass = this.hass) === null || _this_hass === void 0 ? void 0 : _this_hass.states[entity];
            if (data === undefined) return false;
            if (!$adcf031a3f30aca5$var$isDepartureAttrs(data.attributes)) return false;
            return true;
        })// map entity name to departures and gather all together
        .map((entity)=>{
            var _this_hass;
            const state = (_this_hass = this.hass) === null || _this_hass === void 0 ? void 0 : _this_hass.states[entity];
            if ($adcf031a3f30aca5$var$isDepartureAttrs(state.attributes)) return state.attributes;
        }).reduce((acc, attrs)=>acc.concat(attrs.departures || []), [])// filter by departure time
        .filter((d)=>{
            var _this_config, _this_config1;
            if (!((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.hide_departed)) return true;
            const diff = $adcf031a3f30aca5$var$diffMinutes(new Date(d.expected), now);
            return diff + ((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.show_departed_offeset) >= 0;
        })// filter direction
        .filter((d)=>{
            var _this_config, _this_config1;
            if (((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.direction) === 0) return true;
            return d.direction_code === ((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.direction);
        })// sort by expected departure time
        .sort((a, b)=>new Date(a.expected).getTime() - new Date(b.expected).getTime())// limit to max departures
        .slice(0, (_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.max_departures);
    }
    getDepartures() {
        var _this_config;
        if (this.isManyEntitiesSet()) return this.getDeparturesCombined(((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.entities) || []);
        const [_, attrs] = this.getFirstEntity();
        if (!attrs) return undefined;
        return this.getDeparturesFor(attrs);
    }
    lineIconClass(type, line, group) {
        let cls = "";
        switch(type){
            case (0, $7898aa7771233389$export$6d07abd9f0bba447).BUS:
                cls = `bus bus_${line}`;
                cls = group === "bl\xe5buss" ? `${cls} blue` : cls;
                break;
            case (0, $7898aa7771233389$export$6d07abd9f0bba447).METRO:
                cls = `metro metro_${line}`;
                switch(line){
                    case "10":
                    case "11":
                        cls = `${cls} blue`;
                        break;
                    case "13":
                    case "14":
                        cls = `${cls} red`;
                        break;
                    default:
                        cls = `${cls} green`;
                }
                break;
            case (0, $7898aa7771233389$export$6d07abd9f0bba447).TRAM:
                cls = `tram tram_${line}`;
                break;
            case (0, $7898aa7771233389$export$6d07abd9f0bba447).TRAIN:
                cls = `train train_${line}`;
                break;
        }
        return cls;
    }
    _serviceCall(domain, service, data) {
        this.hass.callService(domain, service, data);
    }
    _showAttributes(el, type, detail, options) {
        const event = new Event(type, {
            bubbles: Boolean(options === null || options === void 0 ? void 0 : options.bubbles),
            cancelable: Boolean(options === null || options === void 0 ? void 0 : options.cancelable),
            composed: Boolean(options === null || options === void 0 ? void 0 : options.composed) || true
        });
        event.detail = detail || {};
        el.dispatchEvent(event);
        return event;
    }
    constructor(...args){
        super(...args);
        this.isManyEntitiesSet = ()=>{
            var _this_config_entities, _this_config;
            return ((_this_config = this.config) === null || _this_config === void 0 ? void 0 : (_this_config_entities = _this_config.entities) === null || _this_config_entities === void 0 ? void 0 : _this_config_entities.length) > 1;
        };
        this.renderDepartures = ()=>{
            var _this_config, _this_config1, _this_config2;
            const renderEntityName = ()=>{
                const [_, attrs] = this.getFirstEntity();
                if (!attrs) return 0, $kQRd2$nothing;
                return this.config.show_entity_name && attrs.friendly_name ? (0, $kQRd2$html)`<div class="row name">${attrs.friendly_name}</div` : (0, $kQRd2$nothing);
            };
            const now = new Date();
            const lang = (0, $1hybL.getLanguage)((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.language);
            const _ = (0, $1hybL.translateTo)(lang);
            const departures = this.getDepartures();
            if (!departures) return 0, $kQRd2$nothing;
            const isMany = this.isManyEntitiesSet();
            const destinationRegex = ((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.regex) ? {
                search: new RegExp(this.config.regex.search),
                replace: this.config.regex.replace
            } : undefined;
            return (0, $kQRd2$html)`
            <div class="departures">
                ${isMany ? "" : renderEntityName()}
                ${this.config.show_header ? (0, $kQRd2$html)`
                    <div class="row header">
                        ${((_this_config2 = this.config) === null || _this_config2 === void 0 ? void 0 : _this_config2.show_icon) ? (0, $kQRd2$html)`<div class="col icon"></div>` : (0, $kQRd2$nothing)}
                        <div class="col main left">${_("line")}</div>
                        <div class="col right">${_("departure")}</div>
                    </div>` : (0, $kQRd2$nothing)}

                ${departures.map((dep)=>{
                var _dep_deviations, _dep_deviations_sort, _dep_deviations1, _this_config, _this_config1, _this_config2;
                const expectedAt = new Date(dep.expected);
                const diff = $adcf031a3f30aca5$var$diffMinutes(expectedAt, now);
                const isAtThePlatform = diff === 0;
                const isDeparted = diff < 0;
                const hasDeviations = (((_dep_deviations = dep.deviations) === null || _dep_deviations === void 0 ? void 0 : _dep_deviations.length) || 0) > 0;
                const mostImportantDeviation = (_dep_deviations1 = dep.deviations) === null || _dep_deviations1 === void 0 ? void 0 : (_dep_deviations_sort = _dep_deviations1.sort((a, b)=>b.importance_level - a.importance_level)) === null || _dep_deviations_sort === void 0 ? void 0 : _dep_deviations_sort[0];
                const departureTime = ((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.show_time_always) ? expectedAt.toLocaleTimeString(lang, {
                    hour: "numeric",
                    minute: "numeric"
                }) : (()=>{
                    return isAtThePlatform ? _("now") : (0, $kQRd2$html)`<ha-relative-time .hass=${this.hass} .datetime=${expectedAt}></ha-relative-time>`;
                })();
                const icon = {
                    [(0, $7898aa7771233389$export$6d07abd9f0bba447).METRO]: "mdi:subway",
                    [(0, $7898aa7771233389$export$6d07abd9f0bba447).BUS]: "mdi:bus",
                    [(0, $7898aa7771233389$export$6d07abd9f0bba447).TRAM]: "mdi:tram",
                    [(0, $7898aa7771233389$export$6d07abd9f0bba447).TRAIN]: "mdi:train",
                    [(0, $7898aa7771233389$export$6d07abd9f0bba447).SHIP]: "mdi:ship",
                    [(0, $7898aa7771233389$export$6d07abd9f0bba447).FERRY]: "mdi:ferry",
                    [(0, $7898aa7771233389$export$6d07abd9f0bba447).TAXI]: "mdi:taxi"
                }[dep.line.transport_mode] || "mdi:train";
                const lineIconClass = this.lineIconClass(dep.line.transport_mode, dep.line.designation, dep.line.group_of_lines);
                // if destinationRegex is set, use it to extract the part of the destination to show
                const destination = (()=>{
                    if (!destinationRegex) return dep.destination;
                    const { search: search, replace: replace } = destinationRegex;
                    return dep.destination.replace(search, replace);
                })();
                return (0, $kQRd2$html)`
                    <div class="row departure fade-in ${isDeparted ? "departed" : ""}">
                        ${((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.show_icon) ? (0, $kQRd2$html)`
                            <div class="col icon">
                                <ha-icon class="transport-icon" icon="${icon}"/>
                            </div>
                        ` : (0, $kQRd2$nothing)}
                        ${((_this_config2 = this.config) === null || _this_config2 === void 0 ? void 0 : _this_config2.hide_line_number) ? (0, $kQRd2$nothing) : (0, $kQRd2$html)`
                            <div class="col icon">
                                <span class="line-icon mr1 ${lineIconClass}">${dep.line.designation}</span>
                                ${hasDeviations ? (0, $kQRd2$html)`<ha-icon class="warning" icon="mdi:alert"/>` : (0, $kQRd2$nothing)}
                            </div>
                        `}
                        <div class="col main left">
                            ${destination}
                            ${hasDeviations ? (0, $kQRd2$html)`<span class="warning-message">${mostImportantDeviation.message}</span>` : (0, $kQRd2$nothing)}
                        </div>
                        <div class="col right">
                            <span class="leaves-in">${departureTime}</span>
                        </div>
                    </div>`;
            })}
            </div>
        `;
        };
        this.clickHandler = (entity)=>(e)=>{
                var _this_config;
                const action = (_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.click_action;
                if (action === undefined) return;
                if (action == "info" && entity) {
                    e.preventDefault();
                    this._showAttributes(this, "hass-more-info", {
                        entityId: entity
                    });
                    return;
                } else if ($adcf031a3f30aca5$var$isEntityInfoAction(action)) {
                    e.preventDefault();
                    this._showAttributes(this, "hass-more-info", {
                        entityId: action.entityId
                    });
                    return;
                } else if ($adcf031a3f30aca5$var$isServiceCallAction(action)) {
                    e.preventDefault();
                    this._serviceCall(action.domain, action.service, action.data);
                    return;
                }
            };
    }
}
$adcf031a3f30aca5$export$7ded24e6705f9c64.styles = (0, $22f2d6904e3922f5$export$2e2bcd8739ae039);
(0, $kQRd2$_)([
    (0, $kQRd2$state)()
], $adcf031a3f30aca5$export$7ded24e6705f9c64.prototype, "config", void 0);
(0, $kQRd2$_)([
    (0, $kQRd2$property)({
        attribute: false
    })
], $adcf031a3f30aca5$export$7ded24e6705f9c64.prototype, "hass", void 0);
const $adcf031a3f30aca5$var$isEntityInfoAction = (a)=>a.entityId !== undefined;
const $adcf031a3f30aca5$var$isServiceCallAction = (a)=>a.service !== undefined;
function $adcf031a3f30aca5$var$isDepartureAttrs(item) {
    return item.departures !== undefined;
}


customElements.define("hasl4-departure-card", (0, $adcf031a3f30aca5$export$7ded24e6705f9c64));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "hasl4-departure-card",
    name: "HASL4 Departure card",
    description: "Show departure times for SL Trafik"
});


//# sourceMappingURL=hasl4-departure-card.js.map
