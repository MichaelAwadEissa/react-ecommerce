import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyCard from '../../components/card/singlecard';

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
        
        size={Detailes?.size}
        vote_average={Detailes?.vote_average}
        vote_count={Detailes?.vote_count}
        genres={Detailes?.genres}
        duration={Detailes?.runtime}
        languages={Detailes?.spoken_languages?.english_name}
        production_company_logo={`https://image.tmdb.org/t/p/w500${Detailes?.production_companies?.[0]?.logo_path}
`}
        width={"30rem"}
      />
    </>
  );
}

export default ACompany;
