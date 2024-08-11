import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyCard from '../../components/card/cards';

function ACompany() {
  const params = useParams();
  const [Detailes, setDetailes] = useState({});

  useEffect(() => {
    axios
      .get(`https://retoolapi.dev/GEatlr/data/${params.id}`)
      .then((res) => {
        setDetailes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return (
    <>
      <h1>Company Detailes</h1>
      <MyCard
        name={Detailes.name}
        logo={Detailes.logo}
        about={Detailes.about}
        location={Detailes.location}
        size={Detailes.size}
        width={"60rem"}
      />
    </>
  );
}

export default ACompany;
