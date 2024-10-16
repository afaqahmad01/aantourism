import React from "react";
import "./style.css";

const Header = () => {
	return (
		<header className="header">
			<img src="/logo.png" alt="Quad bike" className="logo" />

			<nav>
				<ul>
					<li>Top Selling</li>
					<li>Activities</li>
					<li>Burj Khalifa</li>
					<li>Desert Safari</li>
					<li className="line"></li>
					<li>Login</li>
					<li>
						{/* First SVG */}
						<svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M3.83333 1.55469L1 5.33247V18.5547C1 19.0557 1.19901 19.5361 1.55324 19.8903C1.90748 20.2446 2.38792 20.4436 2.88889 20.4436H16.1111C16.6121 20.4436 17.0925 20.2446 17.4468 19.8903C17.801 19.5361 18 19.0557 18 18.5547V5.33247L15.1667 1.55469H3.83333Z"
								stroke="white"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path d="M1 5.33203H18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path
								d="M13.2778 9.10938C13.2778 10.1113 12.8798 11.0722 12.1713 11.7807C11.4628 12.4891 10.5019 12.8872 9.50001 12.8872C8.49808 12.8872 7.53719 12.4891 6.82871 11.7807C6.12024 11.0722 5.72223 10.1113 5.72223 9.10938"
								stroke="white"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						{/* Second SVG */}
					</li>
					<li>
						<svg
							width="22"
							height="22"
							viewBox="0 0 22 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<rect width="22" height="22" fill="url(#pattern0_3426_2)" />
							<defs>
								<pattern id="pattern0_3426_2" patternContentUnits="objectBoundingBox" width="1" height="1">
									<use xlinkHref="#image0_3426_2" transform="scale(0.0166667)" />
								</pattern>
								<image
									id="image0_3426_2"
									width="60"
									height="60"
									xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJ0lEQVR4nO2av05UQRSHR4IYoVBUKMBHwE7U3l4ao40FJAQoCQUE1BIs6FT0BSDR6BbKc2iiIZFoYQCXxCBEMFlZNX7mhJEsZ2fXuzBz73X3fsltlt35nZOZe+b8wZiMjIyMjAYBaAKuAFNADlgCtoAf9tmynz0HJoHL8hvzvwGcB+4Ba9SO/GYG6DZpBzgLPAKKHJ1dYA44Y9IIcBPYwD+y5g2TFoBmu6uV+ArMA4NAL9ABHLdPh/1M/rYAbFdZ56FoJe3sSWCxgoHvgH75To3rDQDLFdZ8Wct6IXZ20WFUARg9ym7YtcfsWpoXiew08NhhzCfgokcNOe55h84DXxq1BCjNa6DLeEbWtGtrrvvWqnb1bDh2tiugpgS390rzM9AeSnMfR0Qu+DzGlQB6HO/0/TgyqF0lOhpU9KD+baX9PeTJMjZd1FdPbBETaHMEsemQhcCaEusPIlbdjmFlw0qQgoO9qkdnULEnAUArsKNs6Q0hNKlE5r2LRLflibJlIoRITokMeheJbsuQsuVZCJGl4Mcoui3SKCjlbQiRTSVyzrtIdFs6lS0bIUSKSqTFu0h0W04oW3YbzeFiox3pzTiC1iXvIofPCd402rWUiyPxWPAuEt2Wp8qW8Tjuvu2EUkspIL7FkVo2OYqHAe9C/7ZjRNmwChwLJTajxJYTKA/XlQ1TIQW7HQ2AsWCC5fp3lbZUTadDi84p0UIceTVwwdHimU2qiZePoYn3wVH4nwqleQCZ9VCOtFI7TBhnXymt38BV31pVsbMejbRSe4zfY6x3NkyiEXEcIrMeTcF2F9uOGI3vVBi1CD9lGGDihr3hl8x6XORtw621xn7ViOPqSZXTzTLrqWLYju1BDdlsTd7JFvt02s+GbbqoM6jSdzZnnUzeaUFmPXb84ZuVvwHKzrRS5XS7jD8cyclhkJMxq6+e1DldMvGbtrtTK6u2MquYQaXS6ZKCQ2a8E9JKle6i7ZwU7b8tfZHi3b6f4/a7kQqB1DodQ9zQTv8Cbpl6hczpfbKdrjuqBLI+02BOr5p6hnKn1029A/QBH20icy1pezIyMjIyzCH4AxUl9/P/AIVoAAAAAElFTkSuQmCC"
								/>
							</defs>
						</svg>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
