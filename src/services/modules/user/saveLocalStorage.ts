export async function saveLocalStorage<T>(data: T, name: string) {
  localStorage.setItem(
    name,
    JSON.stringify({
      ...data,
    }),
  );
}
