import React, { useEffect, useRef } from "react"

class Particle {
	constructor(effect) {
		this.effect = effect
		this.x = Math.floor(Math.random() * this.effect.width)
		this.y = Math.floor(Math.random() * this.effect.height)
		this.speedX
		this.speedY
		this.speedModifier = Math.floor(Math.random() * 5 + 1)
		this.history = [{ x: this.x, y: this.y }]
		this.maxLength = Math.floor(Math.random() * 200 + 10)
		this.angle = 0
		this.timer = this.maxLength * 2
		this.colors = [
			"#4c026b",
			"#730d9e",
			"#9622c7",
			"#b44ae0",
			"#cd72f2",
			"white",
		]
		this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
	}
	draw(context) {
		context.beginPath()
		context.moveTo(this.history[0].x, this.history[0].y)
		for (let i = 0; i < this.history.length; i++) {
			context.lineTo(this.history[i].x, this.history[i].y)
		}
		context.strokeStyle = this.color
		context.stroke()
	}
	update() {
		this.timer--
		if (this.timer >= 1) {
			let x = Math.floor(this.x / this.effect.cellSize)
			let y = Math.floor(this.y / this.effect.cellSize)
			let index = y * this.effect.cols + x
			this.angle = this.effect.flowField[index]

			this.speedX = Math.cos(this.angle)
			this.speedY = Math.sin(this.angle)
			this.x += this.speedX * this.speedModifier
			this.y += this.speedY * this.speedModifier

			this.history.push({ x: this.x, y: this.y })
			if (this.history.length > this.maxLength) {
				this.history.shift()
			}
		} else if (this.history.length > 1) {
			this.history.shift()
		} else {
			this.reset()
		}
	}
	reset() {
		this.x = Math.floor(Math.random() * this.effect.width)
		this.y = Math.floor(Math.random() * this.effect.height)
		this.history = [{ x: this.x, y: this.y }]
		this.timer = this.maxLength * 2
	}
}

class Effect {
	constructor(canvas) {
		this.canvas = canvas
		this.width = this.canvas.width
		this.height = this.canvas.height
		this.particles = []
		this.numberOfParticles = 1500
		this.cellSize = 5
		this.rows
		this.cols
		this.flowField = []
		this.curve = 6
		this.zoom = 0.01
		this.debug = false
		this.init()
	}
	init() {
		// create flow field
		this.rows = Math.floor(this.height / this.cellSize)
		this.cols = Math.floor(this.width / this.cellSize)
		this.flowField = []
		for (let y = 0; y < this.rows; y++) {
			for (let x = 0; x < this.cols; x++) {
				let angle =
					(Math.sin(x * this.zoom) + Math.cos(y * this.zoom)) *
					this.curve
				this.flowField.push(angle)
			}
		}

		// create particles
		this.particles = []
		for (let i = 0; i < this.numberOfParticles; i++) {
			this.particles.push(new Particle(this))
		}
	}
	drawGrid(context) {
		context.save()
		context.strokeStyle = "white"
		context.lineWidth = 0.3
		for (let c = 0; c < this.cols; c++) {
			context.beginPath()
			context.moveTo(this.cellSize * c, 0)
			context.lineTo(this.cellSize * c, this.height)
			context.stroke()
		}
		for (let r = 0; r < this.rows; r++) {
			context.beginPath()
			context.moveTo(0, this.cellSize * r)
			context.lineTo(this.width, this.cellSize * r)
			context.stroke()
		}
		context.restore()
	}
	// resize(width, height) {
	// 	this.canvas.width = width
	// 	this.canvas.height = height
	// 	this.width = this.canvas.width
	// 	this.height = this.canvas.height
	// 	this.init()
	// }
	render(context) {
		if (this.debug) this.drawGrid(context)
		this.particles.forEach((particle) => {
			particle.draw(context)
			particle.update()
		})
	}
}

const AnimationCanvas = () => {
	const canvas = useRef(null)
	const effect = useRef(null)

	useEffect(() => {
		const ctx = canvas.current.getContext("2d")
		canvas.current.style.width = "100%"
		canvas.current.style.height = "100%"
		canvas.current.width = canvas.current.offsetWidth
		canvas.current.height = canvas.current.offsetHeight

		// canvas settings
		ctx.fillStyle = "white"
		ctx.strokeStyle = "white"
		ctx.lineWidth = 1

		effect.current = new Effect(canvas.current)

		function animate() {
			ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
			effect.current.render(ctx)
			requestAnimationFrame(animate)
		}
		animate()
	}, [canvas, effect])

	return (
		<div className="h-screen w-screen">
			<canvas ref={canvas}></canvas>
		</div>
	)
}

export default AnimationCanvas