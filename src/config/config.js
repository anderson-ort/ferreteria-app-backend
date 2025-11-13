import dotenv from 'dotenv'

dotenv.config()


const {
    MONGO_URI,
    SUPABASE_URL,
    SUPABASE_API_KEY,
    DATABASE,
    PORT,
    HOST
} = process.env


export const config = {
    SUPABASE_URL,
    SUPABASE_API_KEY,
    DATABASE,
    MONGO_URI,
    PORT,
    HOST
}