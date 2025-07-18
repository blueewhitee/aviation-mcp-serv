import { MCPServer } from "mcp-framework";
import * as dotenv from "dotenv";

// Configure dotenv silently to avoid stdout pollution
dotenv.config({ debug: false });

const server = new MCPServer({
  name: "aviation-mcp-serv",
  version: "0.0.1"
});

server.start().catch((error) => {
  // Log errors to stderr, not stdout
  console.error("Server error:", error);
  process.exit(1);
});