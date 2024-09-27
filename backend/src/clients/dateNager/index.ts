/* ------------- External ----------- */
import axios from 'axios';
import { config } from 'dotenv';

config();

export const dateNagerClient = axios.create({
  baseURL: process.env.DATE_NAGER_API_URL,
});
