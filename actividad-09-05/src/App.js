import "./App.css";
import Noticia from "./components/Noticia";

function App(props) {
  let count = props.count;
  let listNoticias = [];
  for (let i = 0; i < count; i++) {
    listNoticias.push(<Noticia />);
  }

  return (
    <div className="App container">
      <div className="card-group">
        <div className="row">{listNoticias}</div>
      </div>
    </div>
  );
}

export default App;
