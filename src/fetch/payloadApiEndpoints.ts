
const API_PREFIX_PAYLOAD = '/api/';
const PAYLOAD = process.env.NEXT_PUBLIC_CLIENT_URL + API_PREFIX_PAYLOAD;

// API METHODS URLS

// получение статичных данных на разных языках
export const LANGUAGE= PAYLOAD + `globals/language`;

