import { Request, Response } from 'express';
import { supabase } from '../services/supabaseClient';

export const crearProspecto = async (req: Request, res: Response) => {
  const { nombre, email, mensaje } = req.body;

  const { data, error } = await supabase
    .from('prospectos')
    .insert([{ nombre, email, mensaje }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json(data);
};
