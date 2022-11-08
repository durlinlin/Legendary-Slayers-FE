import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./CharacterInfo.module.css";
// import champsJson from "../../champs.json";

function CharacterInfo() {
	// const [champion, setChampion] = useState({});
	const { champion_name } = useParams();

	useEffect(() => {
		// console.log(champion_name);
		fetch(`http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion/${champion_name}.json
    `);
	}, [champion_name]);

	return (
		<div className={style.main}>
			<div className={style.backgroundSplash}>
				<img
					src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion_name}_0.jpg`}
					className={style.backgroundImg}
					alt=""
				/>
			</div>
			<div className={style.splashImg}>
				<img
					src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion_name}_0.jpg`}
					id={style.champSplash}
					alt=""
				/>
			</div>
			<div className={style.descWrapper}>
				<div className={style.content}></div>
			</div>
			<div className={style.innerSection}></div>
		</div>
	);
}

export default CharacterInfo;
