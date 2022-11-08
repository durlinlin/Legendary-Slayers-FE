import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Slideshow.module.css";
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from "pure-react-carousel";

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

	useEffect(() => {
		const getPosts = async () => setChampion(await database.get("recipes"));
		getPosts();
	}, []);

	return (
		<div id="topTenContainer">
			<CarouselProvider
				naturalSlideWidth={100}
				naturalSlideHeight={125}
				totalSlides={champion.length}>
				<Slider>
					{champion.map((post) => (
						<Slide>{post.title}</Slide>
					))}
				</Slider>
				<ButtonBack>Back</ButtonBack>
				<ButtonNext>Next</ButtonNext>
			</CarouselProvider>
		</div>
	);
}

// const [champion, setChampion] = useState({});
// const { champion_name } = useParams();

// useEffect(() => {
// 	fetch(
// 		`https://legendary-slayers-be-production.up.railway.app/champions/name/${champion_name}`,
// 	)
// 		.then((res) => res.json())
// 		.then((res) => setChampion(res[0]));
// }, []);
// console.log(champion);
// return (
// <div className={style.champSkins}>
// 	<Slideshow>
// 		{champion_name.map((champion) => (
// 			<div key={champion}>
// 				<h2>{champion.skins}</h2>
// 				{/* <div>{article.description}</div> */}
// 			</div>
// 		))}
// 	</Slideshow>
// </div>
// );

export default Slideshow;
