import './App.scss';
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [theme, setTheme] = useState(true);


  const changeTheme =  () => {
    setTheme(!theme)
    
  }



  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://cybernet.az/demo.php");
      setData(await response.clone().json());
      setFilter(await response.json());
      console.log(filter);


    };

    getProducts();
  }, []);

  return (
    <div>
      <button onClick={changeTheme} >
        Change theme</button>


      {filter.map((DataItem) => {
        return (
          <div className='boxDark'>
            <div>Title:{DataItem.title}</div>
            <div>Style:{DataItem.style}</div>
            <div>Price:{DataItem.price}</div>
            <div>Description:{DataItem.description}</div>
            <div>Free shippng:{DataItem.isFreeShipping}</div>
            <button>Add</button>
            <hr></hr>

          </div>
        );
      })}

    </div>
  );
}

export default App;
