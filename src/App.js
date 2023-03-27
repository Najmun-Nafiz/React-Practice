import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Data from './data.json';

function App() {
  let items = [];
  // for (let i = 0; i < Data.length; i++){
  //   items.push(<First name={Data[i].name} village={Data[i].village} />);
  // }

  //To set maping...
  // items = Data.map((item, index) => <First key={index} name={item.name} village={item.village} />);

  return <div>
    {/* {items} */}
    {/* <Second /> */}
    <Third/>
  </div>;
}

export default App;
