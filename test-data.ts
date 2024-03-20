import dotenv from 'dotenv';
dotenv.config();

export const baseUrl = process.env.TEST_BASE_URL;
export const testUser = process.env.TEST_USER;
export const testPass = process.env.TEST_PASS;
