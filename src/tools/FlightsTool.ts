import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface FlightsInput {
  message: string;
}

class FlightsTool extends MCPTool<FlightsInput> {
  name = "flights";
  description = "Tool for Flights endpoints";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: FlightsInput) {
    return `Processed: ${input.message}`;
  }
}

export default FlightsTool;
