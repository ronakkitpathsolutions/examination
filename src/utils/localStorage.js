export const getDataFromLocal = key => localStorage.getItem(key)
export const updateDataFromLocal = (key, value) => localStorage.setItem(key, value)
export const removeDataFromLocal = (key) => localStorage.removeItem(key)
export const clearLocalStorage = () => localStorage.clear()