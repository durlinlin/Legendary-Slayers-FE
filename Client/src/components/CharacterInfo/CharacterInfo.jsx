import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import champsJson from "../../champs.json";

function CharacterInfo() {
	const [champion, setChampion] = useState({});
	const { champion_name } = useParams();

	useEffect(() => {
		console.log(champion_name);
		fetch(`http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion/${champion_name}.json
    `);
	}, [champion_name]);

	return <div>CharacterInfo</div>;
}

export default CharacterInfo;
