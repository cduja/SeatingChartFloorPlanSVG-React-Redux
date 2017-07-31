export function getTables() {
  return fetch('https://damp-garden-61269.herokuapp.com')
    .then(res => res.json());
}
