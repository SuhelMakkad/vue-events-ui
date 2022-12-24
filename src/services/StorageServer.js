export const getStoredValue = (key = "") => localStorage.getItem(key);

export const getStoredJSON = (key = "") => JSON.parse(getStoredValue(key));

export const setJSON = (key, value) => localStorage.setItem(key, JSON.stringify(value));
