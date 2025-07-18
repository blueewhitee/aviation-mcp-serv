import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface AirplanesInput {
  query: string;
}

class AirplanesTool extends MCPTool<AirplanesInput> {
  name = "airplanes_tool";
  description = "Tool for Airplanes endpoints";

  schema = {
    query: {
      type: z.string(),
      description: "Query parameter for airplanes endpoint",
    },
  };

  async execute(input: AirplanesInput) {
    // Implement endpoint logic here
    return { message: "Airplanes endpoint stub", query: input.query };
  }
}

export default AirplanesTool; 