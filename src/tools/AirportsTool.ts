import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface AirportsInput {
  query: string;
}

class AirportsTool extends MCPTool<AirportsInput> {
  name = "airports_tool";
  description = "Tool for Airports endpoints";

  schema = {
    query: {
      type: z.string(),
      description: "Query parameter for airports endpoint",
    },
  };

  async execute(input: AirportsInput) {
    // Implement endpoint logic here
    return { message: "Airports endpoint stub", query: input.query };
  }
}

export default AirportsTool; 