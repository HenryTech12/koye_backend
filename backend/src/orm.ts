import "reflect-metadata"
import { DataSource } from "typeorm"
import { Art } from "./entities/Art"
import { User } from "./entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL, // Supabase connection string from .env
    synchronize: true, // ⚠️ safe for dev only, use migrations in production
    logging: false,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
    entities: [Art, User],
})
