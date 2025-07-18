import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface AirlinesInput {
  query: string;
}

class AirlinesTool extends MCPTool<AirlinesInput> {
  name = "airlines_tool";
  description = "Tool for Airlines endpoints";

  schema = {
    query: {
      type: z.string(),
      description: "Query parameter for airlines endpoint",
    },
  };

  async execute(input: AirlinesInput) {
    // Implement endpoint logic here
    return { message: "Airlines endpoint stub", query: input.query };
  }
}

export default AirlinesTool; 