import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import CarouselCard from "@/components/Personalized/CarouselCard";
import MultipleItems from "@/components/Personalized/InfiniteCarousel/InfiniteCarouser";
import pompaImg from "../assets/img/FDFG.png";
import { Hero, Mission } from "@/components/MainPage";
import MainWrapper from "@/components/layout/MainWrapper";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<main className={styles.main}></main>
			<MainWrapper>
				<Hero></Hero>
				<Mission></Mission>
			</MainWrapper>
		</>
	);
}
