import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://lryhsmvbbhfkmakbbpsk.supabase.co";
const SUPABASE_ANON_KEY = import.meta.env.VITE_API_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function createProposal(name, message) {
  const { data, error } = await supabase
    .from("proposals")
    .insert([{ name, message }])
    .select();
  return data ? data[0].id : null;
}

export async function getProposal(id) {
  const { data, error } = await supabase
    .from("proposals")
    .select("*")
    .eq("id", id)
    .single();
  return data;
}
