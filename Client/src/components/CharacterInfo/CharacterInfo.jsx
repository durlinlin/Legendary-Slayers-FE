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

	if (champion.tags == null) return;
	// console.log(champion.tags);
	// console.log(champion.tags.join(`, `));
	return (
		<div className={style.main}>
			<div className={style.content}>
				<span className={style.title}>{champion.title}</span>
				<strong className={style.name}>{champion.name}</strong>
				<div className={style.champInfo}>
					<div className={style.contentFrame}></div>
					<div className={style.roles}>
						<div className={style.tags}>{champion.tags.join(` | `)}</div>
					</div>
					<div className={style.infoDivider}></div>
					<div className={style.desc}>
						<p className={style.lore}>{champion.lore}</p>
					</div>
				</div>
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
				<section className={style.abilities}>
					<div className={style.abilitiesWrapper}>
						<div className={style.abilitiesContent}>
							<div className={style.abilitiesInner}>
								<div className={style.abilitiesSelector}>
									<div className={style.abilitiesWrapperInner}>
										<div className={style.abilitiesOptions}>
											<h2 className={style.abilityTitle}>Abilities</h2>
											<div className={style.abilityInfo}>
												<ol className={style.abilityInfoList}>
													<li className={style.abilityInfoItems}>
														<h6 className={style.abilityType}></h6>
														<h5 className={style.abilityName}></h5>
														<p className={style.abilityDescription}></p>
													</li>
												</ol>
											</div>
										</div>
									</div>
								</div>
								<div className={style.videoSelector}>
									<div className={style.videoContainer}></div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <button className={style.abilities}>
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
				</button> */}
			</div>
		</div>
	);
}

export default CharacterInfo;
