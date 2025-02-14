import { type FunctionComponent, type MutableRefObject, useRef, useEffect } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface MountainsProps {
	containterRef: MutableRefObject<any>;
}

interface Mountain2Props {
	stats: Array<{ data: string; object: string }>;
}

export const Mountains: FunctionComponent = () => {
	let contentWrapperRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: contentWrapperRef,
		offset: ['start start', 'end start'],
	});

	const springyScrollProg = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

	const sky = useTransform(springyScrollProg, [0, 1], ['0%', '20%']);
	const header = useTransform(springyScrollProg, [0, 1], ['0%', '80%']);
	const l2 = useTransform(springyScrollProg, [0, 1], ['0%', '50%']);
	const l3 = useTransform(springyScrollProg, [0, 1], ['0%', '32%']);
	const l4 = useTransform(springyScrollProg, [0, 1], ['0%', '30%']);
	const l5 = useTransform(springyScrollProg, [0, 1], ['0%', '20%']);

	const opacity = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
	return (
		<section ref={contentWrapperRef} className="h-screen min-h-[800px] relative">
			<motion.div className="h-screen min-h-[800px] sky-gradient absolute w-full will-change-transform"></motion.div>
			<motion.div
				style={{ y: l3 }}
				className="absolute w-full overflow-x-hidden will-change-transfor h-screen min-h-[800px]"
			>
				<div className="cloud-scroll-bg will-change-transform h-screen min-h-[800px]"></div>
			</motion.div>
			{/* <motion.div
				style={{ y: header }}
				className="w-full flex md:flex-row flex-col justify-center absolute items-center pt-[calc(100vh/6)] will-change-transform mt-[4rem] z-20"
			>
				<div className="md:h-[175px] md:w-[175px] w-[100px] h-[100px] relative">
					<Image src="https://static.rowdyhacks.org/img/logos/rh_landing.svg" layout="fill"></Image>
				</div>
				<div className="ml-[5px]">
					<h1 className="md:text-8xl text-5xl font-black font-sans text-white mb-4">RowdyHacks</h1>
					<h2
						className={
							'md:text-4xl text-3xl font-black font-permanent-marker italic text-white text-center'
						}
					>
						Into The Unknown
					</h2>
				</div>
			</motion.div> */}
			<motion.div
				style={{ y: l2 }}
				className="w-full h-full absolute overflow-x-hidden flex justify-center items-end will-change-transform"
			>
				<img
					src="https://static.rowdyhacks.org/img/landscape/p/layer_2.png"
					className="min-w-[3000px] object-cover border-b-[#2d112b] border-b-4"
				></img>
			</motion.div>
			<motion.div
				style={{ y: l3 }}
				className="w-full h-full absolute overflow-x-hidden flex justify-center items-end will-change-transform"
			>
				<img
					src="https://static.rowdyhacks.org/img/landscape/p/layer_3.png"
					className="min-w-[3000px] object-cover border-b-[#2d112b] border-b-4"
				></img>
			</motion.div>
			<motion.div
				style={{ y: l3 }}
				className="!absolute flex flex-col items-center justify-evenly w-screen h-screen min-h-[800px] pb-[5vh]"
			>
				<div className="flex items-end h-[calc(45vh-2rem)]">
					<div className="flex md:flex-row flex-col justify-center items-center">
						<div className="md:h-[175px] md:w-[175px] w-[100px] h-[100px] relative">
							<Image
								src="https://static.rowdyhacks.org/img/logos/rh_landing.svg"
								layout="fill"
							></Image>
						</div>
						<div className="ml-[5px]">
							<h1 className="md:text-8xl text-5xl font-black font-sans text-white mb-4">
								RowdyHacks
							</h1>
							<h2
								className={
									'md:text-4xl text-3xl font-black font-permanent-marker italic text-white text-center'
								}
							>
								Into The Unknown
							</h2>
						</div>
					</div>
				</div>
				<div className="h-[calc(55vh-2rem)] flex items- justify-center mt-[-100px] md:mt-[-20px]">
					<div className='bg-[url("https://static.rowdyhacks.org/img/landscape/BlimpSketch.png")] bg-contain h-[300px] w-[400px] bg-center bg-no-repeat flex items-center justify-center text-2xl font-permanent-marker blimpFloat z-20 max-w-screen overflow-x-hidden'>
						<div className="bg-rh-deep-purple rounded border-rh-sunset border-dashed border-2 translate-y-[-15px] p-2 text-rh-sunset">
							<h1 className="text-center">
								March
								<br />
								<span className="text-3xl">25th - 26th</span>
							</h1>
						</div>
					</div>
				</div>
			</motion.div>
			<motion.div
				style={{ y: l4 }}
				className="w-full h-full absolute overflow-x-hidden flex justify-center items-end will-change-transform"
			>
				<img
					src="https://static.rowdyhacks.org/img/landscape/p/layer_4.png"
					className="min-w-[3000px] object-cover border-b-[#2d112b] border-b-4"
				></img>
			</motion.div>
			<motion.div
				style={{ y: l5 }}
				className={
					'w-full h-full absolute overflow-x-hidden flex justify-center items-end will-change-transform'
				}
			>
				<img
					src="https://static.rowdyhacks.org/img/landscape/p/layer_5.png"
					className={'min-w-[3000px] object-cover border-b-[#2d112b] border-b-4'}
				></img>
			</motion.div>
			<div className="w-full h-full absolute overflow-x-hidden flex justify-center items-end bottom-0">
				<img
					src="https://static.rowdyhacks.org/img/landscape/p/layer_6.png"
					className={'min-w-[3000px] object-cover border-b-[#2d112b] border-b-4'}
				></img>
			</div>
		</section>
	);
};

export const MountainCaves: FunctionComponent<Mountain2Props> = ({ stats }) => {
	return (
		<section className="min-h-screen bg-[#2d112b] relative z-5 px-2 pt-[50px]" id="about">
			<div className="w-full relative hover:scale-125 ease-in-out duration-150">
				<Link href={'/dashboard'}>
					<div className="relative max-w-[475px] mx-auto mb-10">
						<div className="absolute z-[5] h-[64px] w-full max-w-[500px] hover:cursor-pointer bg-rh-sunset mx-auto flex items-center justify-center register-clip">
							<h2 className="md:text-5xl text-3xl font-sans font-black italic text-center text-rh-deep-purple">
								DASHBOARD &#x25BA;
							</h2>
						</div>
						<div className="translate-y-2 absolute h-[64px] w-full max-w-[500px] hover:cursor-pointer bg-red-500 mx-auto flex items-center justify-center register-clip"></div>
					</div>
				</Link>
			</div>
			<div className="w-full grid md:grid-cols-2 grid-cols-1 max-w-[1000px] mx-auto pt-[125px]">
				<div className="max-h-[280px] flex flex-col justify-center px-[5px]">
					<h3 className="font-black font-permanent-marker text-white text-4xl mb-[10px] text-center md:text-left">
						About Us
					</h3>
					<p className="font-sans text-white text-lg font-bold text-center md:text-left">
						RowdyHacks is a free, weekend-long, overnight hackathon hosted at UTSA! Students can
						join us to network, code, collaborate, and compete. We welcome hackers from all
						disciplines, backgrounds, & technical levels!
					</p>
				</div>
				<div className="flex items-center justify-center max-h-[280px] pt-[100px] md:pt-0">
					<Image
						src={'https://static.rowdyhacks.org/img/logos/rh_sunset.svg'}
						width={175}
						height={175}
					></Image>
					<div className="h-[175px] ml-[10px] flex flex-col justify-center text-3xl font-sans text-rh-sunset font-black">
						<h1 className="w-full">LET'S</h1>

						<h1 className="w-full">GET</h1>

						<h1 className="w-full font-permanent-marker tracking-wider">ROWDY</h1>
					</div>
				</div>
			</div>
			<div className="w-full grid md:grid-cols-2 grid-cols-1 max-w-[1000px] mx-auto pt-[100px]">
				<div className="flex items-center justify-center relative min-h-[190px]">
					<Image
						src={'https://static.rowdyhacks.org/img/landing/people/people-04.png'}
						layout={'fill'}
						objectFit={'contain'}
						className="mx-auto h-[190px]"
					></Image>
				</div>
				<div className="max-h-[280px] flex flex-col justify-center px-[5px]">
					<h3 className="font-black font-permanent-marker text-white text-4xl mb-[10px] text-center md:text-left mt-[100px] md:mt-0">
						Who Can Attend?
					</h3>
					<p className="font-sans text-white text-lg font-bold text-center md:text-left">
						We're excited to welcome hackers from all disciplines, backgrounds, & technical levels!
						Whether you can't count the number of apps you've built, or you have never written a
						line of code before, RowdyHacks has something for everyone!
					</p>
				</div>
			</div>
			<div className="w-full flex items-center justify-evenly flex-wrap max-w-[1000px] mx-auto mt-[100px] min-h-[200px] border-[#ff583d] border-2 rounded">
				{(() => {
					let els = [];
					for (const stat of stats) {
						els.push(
							<div className="flex flex-col justify-center items-center">
								<h1 className="text-9xl font-poppins font-black text-[#ff583d]">{stat.data}</h1>
								<p className="font-bold text-xl text-white mt-[-15px] font-permanent-marker">
									{stat.object}
								</p>
							</div>,
						);
					}
					return els;
				})()}
			</div>
		</section>
	);
};
