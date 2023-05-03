import {useEffect, useRef, useState} from 'react';
import React from 'react';

function Timer() {
	useEffect(() => {
		const timer = setInterval(() => {
			document.title = `Now:${new Date().getTime()}`;
		}, 100);
		return () => {
			console.log('end of effect');
			clearInterval(timer);
		};
	});
	return <p>Playing</p>;
}

export default function TimerControl() {
	const counter = useRef(1);
	const [playing, setPlaying] = useState(false);
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log('effect');
	}, []); // 의존성배열 뒷부분에 의해 useEffect가 실행됨.

	const handleClick = () => {
		counter.current += 1;
		setPlaying(!playing);
	};

	return (
		<div>
			<div>{counter.current}</div>
			{playing ? (
				<Timer/>
			) : (<p>stop</p>)
			}
			<div>{count}</div>
			<button type='button' onClick={handleClick}>Toggle</button>
			<button type='button' onClick={() => {
				setCount(count + 1);
			}}>increase</button>
		</div>
	);
}
