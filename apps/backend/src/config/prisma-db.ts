import { PrismaClient } from '@prisma/client'
import logger from './logger'

class DatabaseService {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient({
      log: ['info', 'warn', 'error'],
    })
  }

  get client(): PrismaClient {
    return this.prisma
  }

  async connect(): Promise<void> {
    try {
      logger.info('🌱 Connecting to PostgreSQL...')

      await this.prisma.$connect()

      logger.info('✅ Database connected')
    } catch (error) {
      logger.error(error, '❌ Failed to connect to database')
      process.exit(1)
    }
  }

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect()
    logger.info('🔌 Database disconnected')
  }
}

export const database = new DatabaseService()