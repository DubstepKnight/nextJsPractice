import fetch from 'isomorphic-unfetch'
export default (req, res) => {
  fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        res.json(data)
      })
}
