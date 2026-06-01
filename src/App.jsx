import React, {useState, useRef} from 'react';
import {
    SurfaceComponent,
    SurfaceProvider,
    SankeyChartComponent,
    ControlsComponent
} from "@visuallyjs/browser-ui-react"
import { EVENT_TAP, getDownstreamVertices, getUpstreamVertices } from "@visuallyjs/browser-ui"
import { SupplyChainNode } from './components/SupplyChainNode';
import renderOptions from "./render-options.js"
import {resolveNodeColor} from "./constants.js";
import SupplyChainPalette from "./SupplyChainPalette.jsx";
import SupplyChainInspector from "./Inspector.jsx";

export default function App({url}) {
    const [data, setData] = useState({ nodes: [], edges: [] });
    const [pivotProperty, setPivotProperty] = useState('');


    const s = useRef(null)
    const viewOptions = {
        nodes: {
            default:{
                jsx:SupplyChainNode
            }
        },
        edges:{
            default:{
                targetMarker:"PlainArrow",
              //  label:"{{transitMode}}",
                events: {
                    [EVENT_TAP]: ({obj, model}) => {
                        model.setSelection(obj)
                    }
                }
            }
        }
    };

    const modelOptions = {
        edgeFactory:(model, type, data, cb) => {
            cb({
                type,
                value:100,
                transitMode:"Air",
                carrier:"FedEx"
            })
        }
    }

    function dump() {
        console.log(JSON.stringify(s.current.getModel().exportData()))
    }

    return (
        <div className="vjs-supply-chain">
            <div className="vjs-supply-chain-toolbar">
                <strong>Supply Chain Analyzer</strong>
                <div className="pivot-controls">
                    <span>Pivot Sankey:</span>
                    <select value={pivotProperty} onChange={(e) => setPivotProperty(e.target.value)}>
                        <option value="">Direct (No Pivot)</option>
                        <option value="transitMode">By Transit Mode</option>
                        <option value="carrier">By Carrier</option>
                    </select>
                </div>
            </div>
            <div className="vjs-supply-chain-canvas">
                <SurfaceProvider>
                    <SupplyChainPalette/>
                    <div className="vjs-supply-chain-view-panel">
                        <SurfaceComponent ref={s} url={url}
                                          modelOptions={modelOptions}
                                          renderOptions={renderOptions}
                                          viewOptions={viewOptions}>
                            <ControlsComponent/>
                        </SurfaceComponent>
                        <SupplyChainInspector/>
                    </div>
                    <div className="vjs-supply-chain-view-panel">
                        {/*<button className="dump-button" onClick={() => dump()}>Dump to console</button>*/}
                        <SankeyChartComponent style={{height:"500px"}} options={{
                            labelProperty:"name",
                            linkColorStrategy:"source",
                            colorGenerator: {
                                generate:(obj) => resolveNodeColor(obj.type)
                            }
                            }} pivot={pivotProperty}/>
                    </div>
                </SurfaceProvider>
            </div>
        </div>
    );
}
