import dotenv from "dotenv";
import app from "./app";
import logger from "./config/logger";
import { database } from './config/prisma-db'

dotenv.config()

const PORT = Number(process.env.PORT) || 3001

async function bootstrap() {
  await database.connect()

  app.listen(PORT, () => {
    logger.info(`🚀 Server running on http://localhost:${PORT}`)
  })
}

bootstrap()