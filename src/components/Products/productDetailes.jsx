import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyCard from '../../components/card/cards';

function ACompany() {
  const params = useParams();
  const [Detailes, setDetailes] = useState({});
  console.log('ACompany',params)
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=aceb067a920ac17155823a50c94ed9d5`)
      .then((res) => {
        console.log(res.data);
        setDetailes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);
console.log("NAME", Detailes?.belongs_to_collection?.name)
  return (
    <>
      
      <MyCard
        name={Detailes?.belongs_to_collection?.name}
        // logo={Detailes.logo}
        logo={`https://image.tmdb.org/t/p/w500${Detailes.poster_path}`} // Use 'poster_path' for movie posters

        about={Detailes?.overview}
        location={"mmmmmmm"}
        size={Detailes.size}
        width={"30rem"}
      />
    </>
  );
}

export default ACompany;
