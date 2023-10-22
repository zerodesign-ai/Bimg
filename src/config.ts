import "dotenv/config";

interface Config {
  tempDir?: string;
}

const config: Config = {
  tempDir: process.env.TEMP_DIR || "/tmp",
};

export default config;
