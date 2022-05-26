import axios from "axios";
import { useState } from "react";

function App() {

  const [data, setData] = useState("")

    var config = {
      method: "get",
      url: "http://localhost:3000/api",
      headers: {},
    };
  
    axios(config)
      .then(function (response) {
        setData(JSON.stringify(response.data));
      }) 
      .catch(function (error) {
        console.log(error);
      });
  

  return (
  <>
  <p>{data}</p>
  <p>Hello World</p>
  </>
  );
}

export default App;
