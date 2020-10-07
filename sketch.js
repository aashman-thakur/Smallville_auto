var health=500,money=0
var w1,w2,w3,w4
var mi,hi,ms,hs,plc='hood st.'
var h1,h2,h3,h4,h5
var r1,r2,r3
var p,pm='walk'
var ci1,ci2,ci3,ci4,cg,cf=0,cs=270,c1

function preload(){
 mi=loadImage('cash.png') 
 hi=loadImage('health.png')
 ci1=loadImage('car1.png')
 ci2=loadImage('car2.png')
 ci3=loadImage('car3.png')
 ci4=loadImage('car4.png')
}

function setup(){
    createCanvas(1250,550)
    cg=createGroup()
    ms=createSprite(1000,190,20,20)
    ms.addImage(mi)
    hs=createSprite(1000,145,20,20)
    hs.addImage(hi)
    w1=createSprite(20,height/2,20,height)
    w1.visible=false
    w2=createSprite(475,530,890,20)
    w2.visible=false
    w3=createSprite(930,height/2,20,height)
    w3.visible=false
    w4=createSprite(475,20,950,20)
    w4.visible=false
    h1=createSprite(150,500,50,30)
    h2=createSprite(200,455,30,50)
    h3=createSprite(90,500,50,30)
    h4=createSprite(160,410,50,30)
    h5=createSprite(110,400,30,50)
    r1=createSprite(115,455,125,50)
    r2=createSprite(65,405,50,150)
    r3=createSprite(140,345,200,50)
    c1=createSprite(50,400,20,20)
    c1.addImage(ci3)
    c1.scale=1
    c1.rotation=270
    cg.add(c1)
    p=createSprite(150,480,10,10)
    
}

function draw(){
    background(0)
    setp()
    if(pm==='walk'){
    controls()   
    }
    if(keyDown('o')&&pm==='car'){
        pm='walk'
        p.visible=true
        p.x=c1.x+20
        p.y=c1.y
    }     
    if(p.isTouching(c1)&&pm==='walk'&&keyDown('e')){
        p.visible=false
        pm='car'
        }
        if(pm==='car'){
            c1.setSpeedAndDirection(cf,cs)
            c1.rotation=cs
            if(keyWentDown('w')){
                cf=2
                }
                if(keyWentUp('w')){
                    cf=0
                }
                if(keyWentDown('s')){
                    cf=-2
                    }
                    if(keyWentUp('s')){
                        cf=0
                    }
                if(keyDown('a')){
                cs=cs-3
                }
                if(keyDown('d')){
                cs=cs+3
                }
                c1.bounceOff(h1)
                c1.bounceOff(h2)
                c1.bounceOff(h3)
                c1.bounceOff(h4)
                c1.bounceOff(h5)
                c1.bounceOff(w1)
                c1.bounceOff(w2)
                c1.bounceOff(w3)
                c1.bounceOff(w4)
                
                
            }   
            
    p.shapeColor='white'
    p.bounceOff(h1)
    p.bounceOff(h2)
    p.bounceOff(h3)
    p.bounceOff(h4)
    p.bounceOff(h5)
    p.bounceOff(w1)
    p.bounceOff(w2)
    p.bounceOff(w3)
    p.bounceOff(w4)
    p.bounceOff(h5)
    r1.shapeColor=0
    r2.shapeColor=0
    r3.shapeColor=0
   
    drawSprites()
}

function setp(){
    fill(255)
    textSize(30)
    textFont('georgia')
    text('Smallville Auto',1000,50)
    rect(1000,60,200,5)
    rect(1000,225,200,5)
    text(plc,1000,530)
    text('Stats',1000,100)
    fill('red')
    text(health,1050,150)
    fill('green')
    text(money,1050,200)
    fill(135,206,235)
    rect(5,5,950,540)
    fill('green')
    rect(30,30,890,490)
}

function controls(){
    if(keyDown('up')){
    p.y=p.y-1
    }
    if(keyDown('down')){
    p.y=p.y+1
    }
    if(keyDown('left')){
    p.x=p.x-1
    }
    if(keyDown('right')){
    p.x=p.x+1
    }
}

