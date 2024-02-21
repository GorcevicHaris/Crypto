import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Proba() {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get(
        `https://api.apilayer.com/fixer/latest?access_key=x14214WPmKujKLhTceHuS6rUvZqsI7Q3`
      )
      .then((result) => setData(result.data))
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return <div>Proba</div>;
}
