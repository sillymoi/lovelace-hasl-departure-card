
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
parcelRegister("62UXc", function(module, exports) {

$parcel$export(module.exports, "HASLDepartureCardEditor", function () { return $8933bf2cbd0479e1$export$8d2c87e174389bfd; });

var $9tTrf = parcelRequire("9tTrf");

var $58hVP = parcelRequire("58hVP");

var $1WJcw = parcelRequire("1WJcw");

var $8ZoOn = parcelRequire("8ZoOn");
let $8933bf2cbd0479e1$var$_ = (t)=>t, $8933bf2cbd0479e1$var$t;
class $8933bf2cbd0479e1$export$8d2c87e174389bfd extends (0, $58hVP.LitElement) {
    setConfig(config) {
        var _config_entities;
        this._config = config;
        this._schema = this.getSchema((0, $8ZoOn.translateTo)((0, $8ZoOn.getLanguage)()));
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
        const lang = (0, $8ZoOn.getLanguage)();
        const _1 = (0, $8ZoOn.translateTo)(lang);
        return (0, $58hVP.html)($8933bf2cbd0479e1$var$t || ($8933bf2cbd0479e1$var$t = $8933bf2cbd0479e1$var$_`
      <ha-form
        .hass=${0}
        .data=${0}
        .schema=${0}
        .computeLabel=${0}
        @value-changed=${0}>
      </ha-form>
    `), this.hass, this._config, this._schema || [], (item, data)=>_1(`editor_${item.name}`) || item.label || item.name, this._valueChanged);
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
(0, $9tTrf.__decorate)([
    (0, $1WJcw.property)({
        attribute: false
    })
], $8933bf2cbd0479e1$export$8d2c87e174389bfd.prototype, "hass", void 0);
(0, $9tTrf.__decorate)([
    (0, $1WJcw.state)()
], $8933bf2cbd0479e1$export$8d2c87e174389bfd.prototype, "_config", void 0);
(0, $9tTrf.__decorate)([
    (0, $1WJcw.state)()
], $8933bf2cbd0479e1$export$8d2c87e174389bfd.prototype, "_schema", void 0);
$8933bf2cbd0479e1$export$8d2c87e174389bfd = (0, $9tTrf.__decorate)([
    (0, $1WJcw.customElement)("hasl4-departure-card-editor")
], $8933bf2cbd0479e1$export$8d2c87e174389bfd);

});


//# sourceMappingURL=hasl4-departure-card-editor.js.map
