import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface AviationTaxInput {
  query: string;
}

class AviationTaxTool extends MCPTool<AviationTaxInput> {
  name = "aviation_tax_tool";
  description = "Tool for Aviation Tax endpoints";

  schema = {
    query: {
      type: z.string(),
      description: "Query parameter for aviation tax endpoint",
    },
  };

  async execute(input: AviationTaxInput) {
    // Implement endpoint logic here
    return { message: "Aviation Tax endpoint stub", query: input.query };
  }
}

export default AviationTaxTool; 