import { createClient } from "@supabase/supabase-js";

const db = createClient(
  process.env.NEXT_PUBLIC__SUPABASE_URL,
  process.env.NEXT_PUBLIC__SUPABASE_KEY,
);

export default db;
