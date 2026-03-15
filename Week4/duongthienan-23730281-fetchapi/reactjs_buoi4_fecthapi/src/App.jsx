import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  var url = "https://jsonplaceholder.typicode.com/users";


  // Bai 1

  // useEffect(()=>{
  //   var fetchdata = fetch(url);
  //   var res = fetchdata.then((respone)=>{
  //   return respone.json();
  // }).then((data)=>{
  //   setData(data);
  //   console.log(data)});
  // }, [])


  // Bai 2
    useEffect(()=>{
    
      async function fetchdata() {
        try {
        var res = await fetch(url);
        
        console.log(res);
        if(!res.ok){
          throw new Error('Error Networking')
        }
        
        var data = await res.json();
        console.log(data);
        setData(data);

        } catch (err) {
          console.log('No excuses!')

          setError(err.message);
        } finally {
          setTimeout(()=>{
          setLoading(false);
        },1000)
        }
        
      }

      fetchdata()
  }, [])

  // Bai 3
  

  return (
    <>
    {/* Bai 1 */}
      {/* {
        (data.map((item)=>{
          return <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>

        }))
      } */}

    {/* Bai 2 */}
      {
        loading?(<p>Loading...</p>):(error===null?(
          (data.map((item)=>{
          return <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>

        }))
        ):(<p>Eror Networking .....</p>))
      }
    </>
  )
}

export default App
