import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import champsJson from "../../champs.json";

function CharacterInfo() {
  const [champion, setChampion] = useState({});
  const { champion_name } = useParams();

  useEffect(() => {
    console.log(champion_name);
    // api call to individual champion
  }, [champion_name]);

  return <div>CharacterInfo</div>;
}

export default CharacterInfo;
