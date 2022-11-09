import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./CharacterInfo.module.css";
import Slideshow from "../Slideshow/Slideshow";

function CharacterInfo() {
	const [champion, setChampion] = useState({});
	const { champion_name } = useParams();

	useEffect(() => {
		fetch(
			`https://legendary-slayers-be-production.up.railway.app/champions/name/${champion_name}`,
		)
			.then((res) => res.json())
			.then((res) => setChampion(res[0]));
	}, []);

	return (
		<div className={style.main}>
			<div className={style.content}>
				<span className={style.title}>{champion.title}</span>
				<strong className={style.name}>{champion.name}</strong>
				<div className={style.roles}></div>
				<div className={style.description}></div>
			</div>
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
				<div className={style.info}></div>
				<div className={style.optionsList}>
					<h2 className={style.abilitiesTitle}></h2>
					<button className={style.abilities}>
						<span className={style.ability1}>
							<span className={style.abilityIcon1}></span>
							<span className={style.abilityIcon1Border}></span>
						</span>
						<span className={style.optionLine}></span>
						<span className={style.optionBullet}>
							::before
							<span className={style.selectBullet}></span>
							::after
						</span>
					</button>
					<button className={style.abilities}>
						<span className={style.ability2}>
							<span className={style.abilityIcon2}></span>
							<span className={style.abilityIcon2Border}></span>
						</span>
						<span className={style.optionLine}></span>
						<span className={style.optionBullet}>
							::before
							<span className={style.selectBullet}></span>
							::after
						</span>
					</button>
					<button className={style.abilities}>
						<span className={style.ability3}>
							<span className={style.abilityIcon3}></span>
							<span className={style.abilityIcon3Border}></span>
						</span>
						<span className={style.optionLine}></span>
						<span className={style.optionBullet}>
							::before
							<span className={style.selectBullet}></span>
							::after
						</span>
					</button>
					<button className={style.abilities}>
						<span className={style.ability4}>
							<span className={style.abilityIcon4}></span>
							<span className={style.abilityIcon4Border}></span>
						</span>
						<span className={style.optionLine}></span>
						<span className={style.optionBullet}>
							::before
							<span className={style.selectBullet}></span>
							::after
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default CharacterInfo;
