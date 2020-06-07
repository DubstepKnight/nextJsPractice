import axios from 'axios';
import useSWR from 'swr';

export default function Home({ movies }) {
  const { data: todos, error } = useSWR("https://jsonplaceholder.typicode.com/todos", fetcher)
  console.log(error, todos);
  return (
    <div className="container">
      
    </div>
  )
}


 function fetcher(URL){
   console.log("running the fetcher ...");
  console.log(URL);
  return new Promise(async (resolve, reject) => {
    try{
      const {data} = await axios.get(URL);
      console.log("fetcher", data);
      resolve({ data })

    }
    catch(error){
      console.log("fetcher", error);
      reject({ error })

    }
  });
}

// export async function getServerSideProps(){
//   try{
//     const { API_URL } = process.env;
//     const todosURL = `${API_URL}/todos`;
//     console.log(todosURL)
//     const res = await axios.get(todosURL);
//     console.log(res);
//     // const data = await res.json();

//     // return {
//     //   props:{
//     //     todos: data
//     //   }
//     // }
//   }
//   catch(err){
//     console.error(err)
//   }
// }