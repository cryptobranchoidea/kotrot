export const createServerLink = (url: string): string => process.env.SERVER_URL + url;
export const createClientLink = (url: string): string => process.env.CLIENT_URL + url;
