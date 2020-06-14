import axios from 'axios';
import Card from 'components/Card'
import useRequest from "../libs/useRequest"

export default function Home() {
  const { data } = useRequest({
    url: '/api/hello'
  });
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Nah bruh</h1>
      <div>
        {data
          ? data.map(({ title, id }) => (
              <p key={id}>
                {title}
              </p>
            ))
          : 'loading...'}
      </div>
    </div>
  )
}

