import { useState } from "react";
import StockElements from "./assets/StockElements";
import SearchFilter from "./assets/SearchFilter";
import StockView from "./assets/StockView";
function App() {
  const [viewStock, setViewStock] = useState(false);
  const [currentStock, setCurrentStock] = useState({});

  const handleCurrentStock = (props) => {
    // console.log(props);
    setCurrentStock({
      name: props.name,
      id: props.id,
      rise: props.rise,
      price: props.price,
      companyName: props.companyName
    });
  };
  let message = viewStock ? " > Stock " : "";

  const startView = () => {
    setViewStock(true);
  };
  const stopView = () => {
    setViewStock(false);
  };
  return (
    <div className="App">
      <h2 className="heading" onClick={stopView}>
        IPO {message}{" "}
      </h2>
      <div className="appDiv">
        {!viewStock && (
          <StockElements
            startView={startView}
            stopView={stopView}
            handleCurrentStock={handleCurrentStock}
          />
        )}
        {!viewStock && <SearchFilter />}
        {viewStock && <StockView stock={currentStock} stopView={stopView} />}
      </div>
    </div>
  );
}

export default App;
