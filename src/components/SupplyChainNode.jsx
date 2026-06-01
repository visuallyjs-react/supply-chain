import React from 'react';
import {resolveNodeColor} from "../constants.js";

export function SupplyChainNode ({ data, model, obj }) {
    const color = resolveNodeColor(data.type)

    return (
        <div style={{ "--node-color":color }} data-vjs-target="true" className="vjs-supply-chain-node">
            <div className="vjs-supply-chain-node-type">{data.type.toUpperCase()}</div>
            <div style={{ fontSize: '14px' }}>{data.name || data.label}</div>
            <div
                className="vjs-connect"
                data-vjs-source="true"
            />
        </div>
    );
};
