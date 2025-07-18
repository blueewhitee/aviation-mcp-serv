import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface CountriesInput {
  query: string;
}

class CountriesTool extends MCPTool<CountriesInput> {
  name = "countries_tool";
  description = "Tool for Countries endpoints";

  schema = {
    query: {
      type: z.string(),
      description: "Query parameter for countries endpoint",
    },
  };

  async execute(input: CountriesInput) {
    // Implement endpoint logic here
    return { message: "Countries endpoint stub", query: input.query };
  }
}

export default CountriesTool; 