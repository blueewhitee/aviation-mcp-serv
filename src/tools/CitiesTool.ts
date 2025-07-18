import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface CitiesInput {
  query: string;
}

class CitiesTool extends MCPTool<CitiesInput> {
  name = "cities_tool";
  description = "Tool for Cities endpoints";

  schema = {
    query: {
      type: z.string(),
      description: "Query parameter for cities endpoint",
    },
  };

  async execute(input: CitiesInput) {
    // Implement endpoint logic here
    return { message: "Cities endpoint stub", query: input.query };
  }
}

export default CitiesTool; 