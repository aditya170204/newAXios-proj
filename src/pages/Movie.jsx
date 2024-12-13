// import axios from "axios";                    //no need to import axios here
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "../component/UI/card";
import { getMovie } from "../services/getService";

export const Movie = () => {
  const [data, setData] = useState([]);
  // const API =
  //   "http://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";     //we dont need this bcz api is being handled in getService
  const getMovieData = async () => {
    try {
      const res = await getMovie();
      console.log(res.data.Search, "sahi chal rha");
      setData(res.data.Search);
    } catch (error) {
      console.log(error, "error agyaa kya");
      console.log(error.message, "error message");
      console.log(error.response.status, "error status");
      console.log(error.ersponse.data, "error data");
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <ul className="containerGrid--fourCols">
      {data.map((curElm) => {
        return <Card key={curElm.imdbID} movieData={curElm} />;
      })}
    </ul>
  );
};
