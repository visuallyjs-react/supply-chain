export const NODE_TYPES = [
    { type: "factory", label: "Factory", color: "#3a84cc" },
    { type: "supplier", label: "Supplier", color: "#34495e" },
    { type: "port-of-entry", label: "Port Of Entry", color: "#2980b9" },
    { type: "farm", label: "Farm", color: "#27ae60" },
    { type: "distribution-center", label: "Distribution Center", color: "#8e44ad" },
    { type: "warehouse", label: "Warehouse", color: "#e67e22" },
    { type: "cross-dock", label: "Cross Dock", color: "#d35400" },
    { type: "fulfillment-center", label: "Fulfillment Center", color: "#c0392b" },
    { type: "retail-store", label: "Retail Store", color: "#16a085" },
    { type: "customer-region", label: "Customer Region", color: "#7f8c8d" },
    { type: "wholesale-client", label: "Wholesale Client", color: "#2c3e50" },
    { type: "virtual-hub", label: "Virtual Hub", color: "#ccc" }
];

export function resolveNodeType(type) {
    return NODE_TYPES.find(t => t.type === type)
}

const DEFAULT_COLOR = "#445566"

export function resolveNodeColor(type) {
    return resolveNodeType(type)?.color || DEFAULT_COLOR
}
