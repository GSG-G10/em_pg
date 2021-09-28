import logo from './logo.svg';
import './App.css';
import { Pagination } from "antd";
import "./styles.css";
import "antd/dist/antd.css";

function App() {

  const state  = {
    data: [],
    currentPage: 0,
  };

  componentDidMount(){
    fitch(`https://api.unsplash.com/search/collections?page=${this.state.currentPage}&limit=10&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`)
    .then(response => response.json())
    .then(data => {
      this.setState({data: data});
    });
  }

  handleChange = ()=> {
    this.setState({
      current: page
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
