export const fetchContacts = () => {
  return fetch('https://randomuser.me/api/?results=16')
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
}
