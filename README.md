# aviation-mcp-serv

A Model Context Protocol (MCP) server built with [mcp-framework](https://github.com/QuantGeekDev/mcp-framework).

---

## Quick Start

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start the server
npm start
```

---

## Project Structure

```
aviation-mcp-serv/
├── src/
│   ├── tools/                # MCP Tools
│   │   ├── AirlinesTool.ts
│   │   ├── AirplanesTool.ts
│   │   ├── AirportsTool.ts
│   │   ├── AviationTaxTool.ts
│   │   ├── AviationTool.ts
│   │   ├── CitiesTool.ts
│   │   ├── CountriesTool.ts
│   │   ├── ExampleTool.ts
│   │   ├── FlightsTool.ts
│   │   ├── RoutesTool.ts
│   │   ├── TaxesTool.ts
│   │   └── utils/
│   └── index.ts              # Server entry point
│   └── utils/
│       └── AviationAPIClient.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Environment Variables

Create a `.env` file in the project root with the following:

```
AVIATIONSTACK_API_KEY=your_api_key_here
```

This is required for tools that access the AviationStack API.

---

## Tool Development

All tools extend the `MCPTool` class. Here’s an example based on your real `ExampleTool.ts`:

```typescript
import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ExampleInput {
  message: string;
}

class ExampleTool extends MCPTool<ExampleInput> {
  name = "example_tool";
  description = "An example tool that processes messages";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: ExampleInput) {
    return `Processed: ${input.message}`;
  }
}

export default ExampleTool;
```

Most tools follow this pattern, with their own input schema and logic.

---

## Building and Testing

1. Make changes to your tools in `src/tools/`.
2. Run `npm run build` to compile.
3. Start the server with `npm start`. All tools in `src/tools/` are auto-loaded.


**Tools included:**  
AirlinesTool, AirplanesTool, AirportsTool, AviationTaxTool, AviationTool, CitiesTool, CountriesTool, ExampleTool, FlightsTool, RoutesTool, TaxesTool
