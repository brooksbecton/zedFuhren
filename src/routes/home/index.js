import { h, Component } from 'preact';
import Icon from 'preact-material-components/Icon';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';

import {
	goHome,
	goToCredits,
	goToMain,
	goToTelsa
} from './../../lib/redirects';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Welcome</h1>

				<p>
					Zed Fuhren is a guide for Call of Duty: WW2 Zombies mode. It contains
					detailed information about what the goals are and how to acheive them.{' '}
				</p>
				<div class={style.mainContainer}>
					<div class={style.squareContainer}>
						<div class={style.square} onClick={() => goHome()}>
							<div class={style.squareHelper}>
								<Icon>home</Icon>
								<span> Home</span>
							</div>
						</div>
						<div class={style.square} onClick={() => goToMain()}>
							<div class={style.squareHelper}>
								<Icon>extension</Icon>
								<span> Main Quest</span>
							</div>
						</div>
						<div class={style.square} onClick={() => goToTelsa()}>
							<div class={style.squareHelper}>
								<Icon>flash_on</Icon>
								<span> Telsa Guns</span>
							</div>
						</div>
						<div class={style.square} onClick={() => goToCredits()}>
							<div class={style.squareHelper}>
								<Icon>mood</Icon>
								<span> Credits</span>
							</div>
						</div>
					</div>
					<div class={style.twitterContainer}>
						<a
							class="twitter-timeline"
							href="https://twitter.com/CoDZOfficial?ref_src=twsrc%5Etfw"
						>
							Tweets by CoDZOfficial
						</a>{' '}
						<script
							async
							src="https://platform.twitter.com/widgets.js"
							charset="utf-8"
						/>
					</div>
				</div>
			</div>
		);
	}
}
