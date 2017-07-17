const url="https://demo0789878.mockable.io/phimmoi/getall"
export default function getPhim(){
  return fetch(url)
  .then(response =>Promise.all([response,response.json()]))
} 