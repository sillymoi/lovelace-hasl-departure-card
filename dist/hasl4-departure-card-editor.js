import {_ as $d7rxi$_} from "@swc/helpers/_/_ts_decorate";
import {html as $d7rxi$html, LitElement as $d7rxi$LitElement} from "lit";
import {property as $d7rxi$property, state as $d7rxi$state, customElement as $d7rxi$customElement} from "lit/decorators";


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
  var parcelRequire = $parcel$global["parcelRequire55a1"];
var parcelRegister = parcelRequire.register;
parcelRegister("3lTG7", function(module, exports) {

$parcel$export(module.exports, "HASLDepartureCardEditor", () => $3192a706339a2f39$export$8d2c87e174389bfd);




var $1hybL = parcelRequire("1hybL");
class $3192a706339a2f39$export$8d2c87e174389bfd extends (0, $d7rxi$LitElement) {
    setConfig(config) {
        var _config_entities;
        this._config = config;
        this._schema = this.getSchema((0, $1hybL.translateTo)((0, $1hybL.getLanguage)()));
        // Migrate to multiple entities
        if (config.entity && !((_config_entities = config.entities) === null || _config_entities === void 0 ? void 0 : _config_entities.length)) {
            const { entity: entity, ...rest } = config;
            this._dispatchConfigChangedEvent({
                ...rest,
                entities: [
                    config.entity
                ]
            });
        }
    }
    _valueChanged(ev) {
        ev.stopPropagation();
        this._dispatchConfigChangedEvent(ev.detail.value);
    }
    _dispatchConfigChangedEvent(newConfig) {
        const event = new Event("config-changed", {
            bubbles: true,
            composed: true
        });
        event.detail = {
            config: newConfig
        };
        this.dispatchEvent(event);
    }
    render() {
        const lang = (0, $1hybL.getLanguage)();
        const _ = (0, $1hybL.translateTo)(lang);
        return (0, $d7rxi$html)`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema || []}
        .computeLabel=${(item, data)=>_(`editor_${item.name}`) || item.label || item.name}
        @value-changed=${this._valueChanged}>
      </ha-form>
    `;
    }
    constructor(...args){
        super(...args);
        this.getSchema = (_)=>{
            var _this__config_entities, _this__config;
            const haveMultipleEntities = ((_this__config = this._config) === null || _this__config === void 0 ? void 0 : (_this__config_entities = _this__config.entities) === null || _this__config_entities === void 0 ? void 0 : _this__config_entities.length) > 1;
            return [
                {
                    name: "title",
                    selector: {
                        text: {}
                    }
                },
                // { name: "language", selector: { select: { mode: 'dropdown', options: languages } } },
                {
                    name: "",
                    type: "expandable",
                    icon: "mdi:database",
                    title: _("editor_entities"),
                    schema: [
                        {
                            name: "show_entity_name",
                            type: "boolean",
                            disabled: haveMultipleEntities
                        },
                        {
                            name: "entities",
                            selector: {
                                entity: {
                                    multiple: true,
                                    filter: [
                                        {
                                            domain: "sensor",
                                            integration: "hasl3"
                                        },
                                        {
                                            domain: "sensor",
                                            integration: "london_tfl"
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    name: "",
                    type: "expandable",
                    icon: "mdi:clock",
                    title: _("editor_departures"),
                    schema: [
                        {
                            name: "show_departures",
                            type: "boolean"
                        },
                        {
                            name: "show_header",
                            type: "boolean"
                        },
                        {
                            name: "direction",
                            selector: {
                                select: {
                                    options: [
                                        {
                                            value: 0,
                                            label: _(`editor_direction_all`)
                                        },
                                        {
                                            value: 1,
                                            label: _(`editor_direction_left`)
                                        },
                                        {
                                            value: 2,
                                            label: _(`editor_direction_right`)
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            name: "show_icon",
                            type: "boolean"
                        },
                        {
                            name: "hide_line_number",
                            type: "boolean"
                        },
                        {
                            name: "show_time_always",
                            type: "boolean"
                        },
                        {
                            name: "max_departures",
                            selector: {
                                number: {
                                    mode: "box",
                                    min: 1,
                                    max: 10
                                }
                            }
                        },
                        {
                            name: "",
                            type: "grid",
                            schema: [
                                {
                                    name: "hide_departed",
                                    type: "boolean"
                                },
                                {
                                    name: "show_departed_offeset",
                                    selector: {
                                        number: {
                                            mode: "box",
                                            min: 0,
                                            max: 30
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "show_updated",
                    type: "boolean",
                    disabled: haveMultipleEntities
                }
            ];
        };
    }
}
(0, $d7rxi$_)([
    (0, $d7rxi$property)({
        attribute: false
    })
], $3192a706339a2f39$export$8d2c87e174389bfd.prototype, "hass", void 0);
(0, $d7rxi$_)([
    (0, $d7rxi$state)()
], $3192a706339a2f39$export$8d2c87e174389bfd.prototype, "_config", void 0);
(0, $d7rxi$_)([
    (0, $d7rxi$state)()
], $3192a706339a2f39$export$8d2c87e174389bfd.prototype, "_schema", void 0);
$3192a706339a2f39$export$8d2c87e174389bfd = (0, $d7rxi$_)([
    (0, $d7rxi$customElement)("hasl4-departure-card-editor")
], $3192a706339a2f39$export$8d2c87e174389bfd);

});


//# sourceMappingURL=hasl4-departure-card-editor.js.map
