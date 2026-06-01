import {PaletteComponent} from '@visuallyjs/browser-ui-react';
import {NODE_TYPES, resolveNodeType} from "./constants.js";

/**
 * Component supporting dragging new elements onto the canvas.
 */
export default function SupplyChainPalette() {

    function dataGenerator (el) {
        const type = el.getAttribute("data-vjs-type")
        const nodeType = resolveNodeType(type)
        return {
            type,
            name:nodeType.label
        }
    }

    return <PaletteComponent className="vjs-supply-chain-palette" dataGenerator={dataGenerator}>
        {NODE_TYPES.map(nt => <div data-vjs-type={nt.type} title="Drag to add new" className="vjs-supply-chain-palette-item" key={nt.type} style={{ '--node-color': nt.color }}>
            <div className="vjs-supply-chain-item-header">{nt.type.toUpperCase()}</div>
        </div>)}
    </PaletteComponent>
}

