const particlesConfig = {
	fpsLimit: 60,
	particles: {
		number: {
			value: 500,
			density: {
				enable: true,
				area: 800
			}
		},
		color: {
			value: ["#ffffff", "#aaaaaa", "#888888"] // More shades for depth
		},
		shape: {
			type: "circle"
		},
		opacity: {
			value: 1,
			animation: {
				enable: true,
				speed: 0.5,
				min: 0.1,
				sync: false
			}
		},
		size: {
			value: 2,
			random: {
				enable: true,
				minimumValue: 1
			}
		},
		move: {
			enable: true,
			speed: 1,
			direction: "none",
			random: false,
			straight: false,
			outModes: {
				default: "out"
			},
			attract: {
				enable: true,
				rotateX: 1000,
				rotateY: 2000
			},
			trail: {
				enable: true,
				length: 15, // Increased for smoother vortex effect
				fillColor: "#111"
			},
			warp: true
		}
	},
	interactivity: {
		detectsOn: "canvas",
		events: {
			onclick: {
				enable: false
			},
			resize: true
		}
	},
	detectRetina: true,
	absorbers: [
		{
			orbits: true,
			destroy: false, // Doesn't vanish, simulates constant pull
			opacity: 1,
			color: "#000",
			size: {
				value: 50,
				limit: 0,
				random: false,
				density: 200
			},
			position: {
				x: 50,
				y: 50
			},
			outline: {
				color: "#FF4500", // A glow-like effect
				width: 10,
				rotate: {
					value: 45,
					animation: {
						enable: true,
						speed: 10, // Faster swirl effect
						sync: false
					}
				}
			}
		}
	],
	background: {
		color: "#111"
	}
};

export default particlesConfig;
