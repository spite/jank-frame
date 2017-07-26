function inject () {

	const obj = document.createElement('div');
	Object.assign(obj.style, {
		pointerEvents: 'none',
		position: 'fixed',
		height: 0,
		left: 0,
		right: 0,
		bottom: 0,
		borderLeft: '5px solid blue',
		borderRight: '5px solid blue',
		display: 'block'
	});
	document.body.appendChild(obj);

	let frameTime = ( 1000 / 60 );

	function updateFrame (ts) {

		const p = ts >= 0 ? 1 - ts / frameTime : 1;
		obj.style.borderColor = ts >= 0 ? p <= .75 ? 'green' : 'orange' : 'red';
		obj.style.height = `${ p * window.innerHeight }px`;

	}

	function checkIdleBack(ts) {

		updateFrame( ts.didTimeout ? -1 : ts.timeRemaining() );

	}

	function update(ts) {

		requestAnimationFrame( update );
		requestIdleCallback( checkIdleBack, { timeout: frameTime } );

	}

	requestAnimationFrame( update );

}

var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.textContent = inject.toString() + ';inject()';
document.body.appendChild( script );


