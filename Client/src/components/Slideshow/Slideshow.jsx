import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Slideshow.module.css";

function Slideshow() {
	const [champion, setChampion] = useState({});
	const { champion_name } = useParams();

	useEffect(() => {
		fetch(
			`https://legendary-slayers-be-production.up.railway.app/champions/name/${champion_name}`,
		)
			.then((res) => res.json())
			.then((res) => setChampion(res[0]));
	}, []);

	return <div className={style.champSkins}></div>;
}

export default Slideshow;
