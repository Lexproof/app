export async function getOffers() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/offers`);
  if (!data.ok) {
    throw new Error('Failed to fetch offers');
  }
  return await data.json();
}
