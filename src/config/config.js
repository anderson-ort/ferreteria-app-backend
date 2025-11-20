import dotenv from 'dotenv'

dotenv.config()


const {
    MONGO_URI,
    SUPABASE_URL,
    SUPABASE_API_KEY,
    DATABASE
} = process.env

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || "0.0.0.0"

export const config = {
    SUPABASE_URL,
    SUPABASE_API_KEY,
    DATABASE,
    MONGO_URI,
    PORT,
    HOST
}
