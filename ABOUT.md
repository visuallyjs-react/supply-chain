# Supply Chain Analyzer Implementation

This document describes how the Supply Chain Analyzer is implemented using `@visuallyjs/browser-ui-react` and `@visuallyjs/browser-ui`.

## Components

The application combines a network topology view with a Sankey diagram to analyze supply chain flows, using these components from `@visuallyjs/browser-ui-react`:

### Supply Chain Network
- **`SurfaceProvider`**: Provides context for both the network surface and the Sankey chart.
- **`SurfaceComponent`**: Renders the supply chain network (Suppliers, Warehouses, Retailers, etc.).
- **`ControlsComponent`**: Standard zoom and pan controls for the network view.
- **`SupplyChainPalette`**: A custom palette for adding new nodes to the supply chain.
- **`SupplyChainInspector`**: A custom inspector for editing node and edge properties (e.g., transit mode, carrier, values).

### Flow Analysis
- **`SankeyChartComponent`**: Renders a Sankey diagram that visualizes the flow of goods through the supply chain.

## Implementation Details

- **Integrated Model**: Both the `SurfaceComponent` and the `SankeyChartComponent` share the same underlying data model, allowing the Sankey chart to automatically update as the network structure or edge values change.
- **JSX Rendering**: Network nodes are rendered using the custom `SupplyChainNode` JSX component.
- **Dynamic Pivoting**: The Sankey chart supports dynamic pivoting (e.g., "By Transit Mode" or "By Carrier") to re-group the flow data for different analytical perspectives.

## Configuration Options

- **`renderOptions`**: Defines the layout and appearance of the supply chain network.
- **`viewOptions`**: Maps supply chain node types to the `SupplyChainNode` component and configures edge interaction events.
- **`modelOptions`**: Includes an `edgeFactory` to set default properties for new connections.

## CSS Integration
- **VisuallyJS Core**: The core styles are included in `src/index.css` via `@import "@visuallyjs/browser-ui/css/visuallyjs.css";`.
- **App Styles**: Custom styles for the dual-panel layout and the supply chain elements are imported from `supply-chain.css`.
