export function createUniqueId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
