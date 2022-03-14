const expres = require("express");
import React from 'react'

function Outeraddress() {
  const [add, setAdd] = useState({});
  //   fetch("http://localhost:8000/user", {
  //       method: "GET",
  //       headers: { "Content-type": "application/json;charset=UTF-8" },
  //   })
  //   .then((response) => response.json())
  //   .then((json) => setAdd(json))
  //   .catch((err) => console.log(err));
  // console.log(add); 
  const app = use(expres());
  const cors = require("cors");
  app.use(cors()); 
  console.log(cors);
  return (
    <div>Outeraddress</div>
  )
}

export default Outeraddress