import { Node, Edge} from "@visuallyjs/browser-ui"

import { InspectorComponent } from "@visuallyjs/browser-ui-react"

export default function SupplyChainInspector() {

    return <InspectorComponent className="vjs-supply-chain-inspector">

        {(current) => <>

            { current?.objectType === Node.objectType && <>
                <label>Name:</label>
                <input type="text" vjs-att="name" placeholder="name"/>
            </>}

            { current?.objectType === Edge.objectType && <>
                <label>Value</label>
                <input type="text" vjs-att="value" vjs-datatype="integer"/>
                <label>Transit Mode</label>
                <select vjs-att="transitMode">
                    <option value="Air">Air</option>
                    <option value="Sea">Sea</option>
                    <option value="Road">Road</option>
                </select>
                <label>Carrier</label>
                <select vjs-att="carrier">
                    <option value="Maersk">Maersk</option>
                    <option value="DHL">DHL</option>
                    <option value="FedEx">FedEx</option>
                    <option value="UPS">UPS</option>
                    <option value="DBCargo">DBCargo</option>
                    <option value="Emirates">Emirates</option>
                </select>
            </>}

        </>}

        </InspectorComponent>

}
