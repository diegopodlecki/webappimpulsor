import { Request, Response } from 'express';
import { supabase } from '../services/supabaseClient';

export const createLead = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  const { data, error } = await supabase
    .from('leads')
    .insert([{ name, email, message }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json(data);
};
