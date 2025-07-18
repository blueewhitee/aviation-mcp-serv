import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface AviationInput {
  message: string;
}

class AviationTool extends MCPTool<AviationInput> {
  name = "aviation";
  description = "Aviation tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: AviationInput) {
    return `Processed: ${input.message}`;
  }
}

export default AviationTool;