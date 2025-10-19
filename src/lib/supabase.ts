import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContentSection {
  id: string;
  topic_id: string;
  heading: string;
  content: string;
  syntax_example: string | null;
  explanation: string | null;
  order_index: number;
  created_at: string;
}

export interface Topic {
  id: string;
  unit_id: string;
  title: string;
  order_index: number;
  created_at: string;
  content_sections?: ContentSection[];
}

export interface Unit {
  id: string;
  unit_number: string;
  title: string;
  duration: string;
  order_index: number;
  created_at: string;
  topics?: Topic[];
}
