async function fetchProfileData() {
  const response = await fetch('./data/profile.json', { cache: 'no-store' })
  return await response.json()
}
