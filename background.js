import * as THREE from "https://unpkg.com/three@0.145.0/build/three.module.js"

const desc = document.querySelector('#desc')
const canvas = document.querySelector('#mbckg')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d')

let format = window.innerWidth > 700;

function BackgroundSphere(pos, fpos, r, color)
{
    this.bpos = pos
    this.pos = {...this.bpos}
    this.fpos = fpos
    this.r = r
    this.color = color
    this.a = 0

    this.change = (pos, fpos) =>
    {
        this.bpos = pos
        this.fpos = fpos
        this.update(this.a)
    }

    this.update = a => 
    {
        a = a > 1 ? 1 : a < 0 ? 0 : a

        this.a = a

        this.pos.x = a*(this.fpos.x-this.bpos.x)+this.bpos.x
        console.log(this.pos.x)
        this.pos.y = a*(this.fpos.y-this.bpos.y)+this.bpos.y
    }
    
    this.draw = () =>
    {
        c.beginPath()
        c.fillStyle = this.color
        c.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2, true)
        c.fill()
    }
}

let bsphere = new BackgroundSphere({x: 0, y: window.innerHeight/2}, {x: window.innerWidth, y: window.innerHeight/2}, window.innerHeight/2+50, "rgb(10, 10, 10)")

window.addEventListener('resize', () => 
{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    format = window.innerWidth > 700

    bsphere.change({x: 0, y: window.innerHeight/2}, {x:window.innerWidth, y: window.innerHeight/2})
})

window.addEventListener('scroll', () =>{
    let tot = desc.offsetTop - 2*window.innerHeight
    let b = window.scrollY - window.innerHeight
    console.log(b/tot)
    bsphere.update(b/tot)
})

function animate() 
{
    requestAnimationFrame(animate)
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)
    // bsphere.draw()
}

animate()