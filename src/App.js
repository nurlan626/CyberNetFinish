import './App.scss';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const [data, setData] = useState([]);
  const [searchWord, setSearchWord] = useState([]);
  const [theme, setTheme] = useState(true);
  const [filtetredData, setfiltetredData] = useState([]);

  const changeTheme = () => {
    setTheme(!theme)
  }

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://cybernet.az/demo.php");
      setData(await response.json());
      setfiltetredData(data);
    };
    getProducts();

  }, []);

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);

  const addCash = (price) => {
    dispatch({ type: "ADD_CASH", payload: price });
    console.log(price)
  }
  const filterHandler = (event) => {
    setSearchWord(event.target.value)
    console.log(searchWord);




  }
  return (
    <div className='container'>
      <button onClick={changeTheme} >
        Change theme</button>
      <div>
        <h1>{cash}</h1>
      </div>
      <input type='text' onChange={(event) => { filterHandler(event) }} />

      <div className='products'>
        {data.filter((val) => {
          if (searchWord == 0) {
            return val
          } else if (val.title.toLowerCase().includes(searchWord.toLowerCase())) {
            return val
          }
        }).map((DataItem) => {
          return (
            <div className={theme ? "boxLight" : "boxDark"} key={DataItem.id}>
              <h3>Title:{DataItem.title}</h3>
              <div>Style:{DataItem.style}</div>
              <div>Price:{DataItem.price}</div>
              <div>Description:{DataItem.description}</div>
              <div>Free shippng:{DataItem.isFreeShipping}</div>
              <button onClick={() => addCash(DataItem.price)}>+</button>

              <hr></hr>
            </div>
          );
        })}



      </div>




    </div>
  );
}

export default App;
