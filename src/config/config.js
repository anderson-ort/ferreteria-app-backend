import dotenv from 'dotenv'

dotenv.config()


const {
    MONGO_URI,
    SUPABASE_URL,
    SUPABASE_API_KEY,
    DATABASE,
    HOST
} = process.env

PORT = process.env.PORT || 3000

export const config = {
    SUPABASE_URL,
    SUPABASE_API_KEY,
    DATABASE,
    MONGO_URI,
    PORT,
    HOST
}
