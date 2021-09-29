import './App.css';
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from 'react';

function App() {

  const [page, setPage] = useState("");
  const [data, setData] = useState([]);
  const api = `https://api.unsplash.com/search/collections?page=${page}&limit=10&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`

  useEffect(()=>{
    fetch(api)
    .then(response=> response.json())
    .then(result=> setData(result.results))
  }, [api]);

  return (
    <div className="App">
      <header className="App-header">
        {data.map(item => {
          return (<img class = "img-item" alt = "img" src = {item.preview_photos[0].urls.raw}/>)
        })}

        <Pagination current= {page} onChange= {setPage} total= {10} />
      </header>
    </div>
  );
}

export default App;
