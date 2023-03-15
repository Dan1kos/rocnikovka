const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let jump = false;
let speed = 5;

class Ball {//ctverec
    constructor() {
        this.x = 0;
        this.y = 0;
        this.velocity = 2;
        this.width = 60;
        this.height = 60;
    };
    draw() {//vykresleni
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    update() {//aktualizuje
        this.draw();
        this.y += this.velocity;
        player.velocity += 1;
        jump = false;
        platforms.forEach((platform, i) => {//kolize
            if ((player.x + player.width >= platform.x && player.x <= platform.x + platform.width)) {
                if (player.y + player.height + player.velocity >= platform.y ) {
                    jump = true;
                    player.velocity = 0;
                }

                if (player.y + player.height - 5 > platform.y && !( player.y > platform.y + platform.height)) {
                    dead = 1;
                }


            }


            if (!(player.y + player.height + player.velocity <= canvas.height - floor.height)) {
                player.velocity = 0;
                jump = true;
            }

            if (dead == 1) {
                ctx.font = "100px Arial";
                ctx.fillText("Ty nulo!!", canvas.width / 2, canvas.height / 2 - 100);
                if(player.width>6){
                player.width--;
                player.x++;
            }
            else{
                player.y++;
            }
            }
            
            else if (player.x >= 100) {
                platform.x -= speed  ;  //pohyb v pravo

            }
            else {

                player.x += speed

            }




        });
    }
}


class Platform {//co asi
    constructor(x, y, w, h) {
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    draw() {

        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}





let dead = 0;


const player = new Ball();//ctverec za ktereho se hraje
const floor = new Platform(0,canvas.height - 70,canvas.width,70);
const platforms = [new Platform(speed*100, canvas.height - 120, 300, 100),
                    new Platform(speed*100 + 200, canvas.height - 160, 300, 100),
                    new Platform(speed*100 + 600, canvas.height - 160,50, 160 - canvas.height * (-1)),
                    new Platform(speed*100 + 750, canvas.height - 200,50, 200 - canvas.height * (-1)),
                    new Platform(speed*100 + 900, canvas.height - 240,50, 240 - canvas.height * (-1)),
                    new Platform(speed*100 + 1050, canvas.height - 280,50, 280 - canvas.height * (-1)),
                    new Platform(speed*100 + 1200, canvas.height - 280,500, 280 - canvas.height * (-1)),
                    new Platform(speed*100 + 1750, canvas.height - 240,50, 240 - canvas.height * (-1)),
                    new Platform(speed*100 + 1900, canvas.height - 200,50, 200 - canvas.height * (-1)),
                    new Platform(speed*100 + 2050, canvas.height - 160,50,160 - canvas.height * (-1)),
                    new Platform(speed*100 + 2300, canvas.height - 120,50, 120 - canvas.height * (-1)),
                    new Platform(speed*100 + 2600, canvas.height - 120,500, 120 - canvas.height * (-1)),
                    new Platform(speed*100 + 3300, canvas.height - 145,1000, 10),


                
                ];

function animate() { //vykresluje ctverec
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    platforms.forEach((platforms) => {
        ctx.fillStyle = "red";
        platforms.draw();
    });
    ctx.fillStyle = "black";
    floor.draw();
    player.update();
}

animate();

addEventListener('keydown', ({ keyCode }) => {// skok
    if (keyCode == 32 && jump) { // aby se jen skocilo (nefunguje skok ve vzduchu jsem god
        if (dead) {
            window.location.reload();
        }
        else {
            player.velocity -= 15;
            jump = false;
        }

    }


})



