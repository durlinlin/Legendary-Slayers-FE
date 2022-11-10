import { useCallback, useRef } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChevronButton from "./ChevronButton";

import style from "./CharacterInfo.module.css";

// Utility hook used in this page
function useInterval(callback, delay) {
	const savedCallback = useRef();
	const timerId = useRef();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	function tick() {
		savedCallback.current();
	}

	// Set up the interval.
	useEffect(() => {
		if (delay !== null) {
			timerId.current = window.setInterval(tick, delay);
			return () => window.clearInterval(timerId.current);
		}
	}, [delay]);
}

// quick img util to preload images
function imagePreloader(imgSrcArr) {
	imgSrcArr.forEach((imgUrl) => (new Image().src = imgUrl));
}

const CHAMPION_DATA_API_URL =
	"https://legendary-slayers-be-production.up.railway.app/champions/name";

const SKIN_ROTATE_TIME = 7.5 * 1000; // 5 seconds

function CharacterInfo() {
	const { champion_name: championName } = useParams();

	const [champion, setChampion] = useState();

	// State for the index of the currently selected skin object with shape
	const [skinNum, setSkinNum] = useState(0);

	const fetchChampData = useCallback(async () => {
		const data = await fetch(`${CHAMPION_DATA_API_URL}/${championName}`);
		const championData = await data.json();

		setChampion(championData[0]);

		imagePreloader(championData[0].skins.map((skinObj) => skinObj.image));
	}, [championName]);

	const rotateSelectedSkin = () => {
		// Early-exit if we haven't fetched champion data yet
		if (champion == null) return;
		const totalSkinsCount = champion.skins.length;
		setSkinNum((skinNum + 1) % totalSkinsCount);
	};

	useInterval(rotateSelectedSkin, SKIN_ROTATE_TIME);

	const handleClickLeft = () => {
		const totalSkinsCount = champion.skins.length;
		if (skinNum - 1 < 0) {
			setSkinNum(totalSkinsCount - 1);
		} else {
			setSkinNum((skinNum - 1) % totalSkinsCount);
		}
	};

	const handleClickRight = () => {
		const totalSkinsCount = champion.skins.length;
		setSkinNum((skinNum + 1) % totalSkinsCount);
	};

	useEffect(() => {
		// On mount first fetch the champion data
		fetchChampData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// NOTE: What do you want to display while the champion data is still loading? On slow internet connections this could take some time
	if (champion == null) return;

	const currentChampImage = champion.skins[skinNum].image;
	const currentChampName =
		skinNum === 0 ? championName : champion.skins[skinNum].name;
	const styles = {
		"--champ-splash-url": `url(${currentChampImage})`,
	};

	return (
		<div className={style.main} style={styles}>
			<section className={style.champSplashContainer}>
				<ChevronButton
					dir="left"
					className={style.chevronButtonLeft}
					onClick={handleClickLeft}
				/>
				<img
					src={currentChampImage}
					className={style.champSplash}
					alt={`Champion splash for ${championName}`}
				/>
				<ChevronButton
					dir="right"
					className={style.chevronButtonRight}
					onClick={handleClickRight}
				/>
			</section>

			<section className={style.descriptionContainer}>
				<span className={style.title}>{champion.title}</span>
				<strong className={style.name}>{currentChampName}</strong>
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
			</section>
		</div>
	);
}

export default CharacterInfo;
