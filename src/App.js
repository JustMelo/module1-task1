import './App.css';
import ShopItemFunc from './components/ShopItemFunc.js';
import { itemData } from './mock/data/ItemData.js';

function App() {

  return (

    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={itemData} />
    </div>
  </div>
  );
}

export default App;
