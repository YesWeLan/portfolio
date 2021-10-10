const balls = [];
/* Sets the number of balls to generate */
const numBalls = 40;
/* Sets the colors chosen randomly for the balls */
const colors = ["#0dcaf0", "#0dcaf093", "#fff"];

$(document).ready(backgroundBalls);

function backgroundBalls()
{
    for (let i = 0; i < numBalls; i++) {
        /* Create a new ball element and set its style */
        let ball = document.createElement("div");  
        ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 100)}%`;
        ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = `${Math.random()}em`;
        ball.style.height = ball.style.width;  
        ball.style.position = 'absolute';
        ball.style.borderRadius = "100%";
        //ball.style.zIndex = 2;
        ball.style.opacity = 0.5;    
        balls.push(ball);
        document.body.append(ball);
        
    }
    
    balls.forEach((el, index) => {
        /* Generate random position values that will be used to move the balls around */
        let pos = { 
            x: Math.random() * (index % 2 === 0 ? -2 : 2),
            y: Math.random() * 1
        };
        
        /* 
        ** Move each ball on their X and Y axis with the random values generated previously 
        ** and have it alternate and iterate ifinetely
        */
        let animation = el.animate(
            [
                { transform: "translate(0, 0)" },
                { transform: `translate(${pos.x}rem, ${pos.y}rem)` }
            ],
            {
                duration: (Math.random() + 1) * 2500, // random duration
                direction: "alternate",
                iterations: Infinity,
                easing: "ease-in-out",
                fill: "both"   
            }
        );
    });
}

/* HANDLES MOUSE EFFECT - REMOVE IF UNWANTED */
/* Lightens ball color on close hover */
document.onmousemove = handleMouseMove;
function handleMouseMove(event) {    
    var cursorX = event.clientX;
    var cursorY = event.clientY;
    
    balls.forEach((ball, index) => {                
        var ballCoord = ball.getBoundingClientRect();
        var xDistance = cursorX - ballCoord.left;
        var yDistance = cursorY - ballCoord.top;
        var minDistance = 30;
        
        /* Check if cursor is close enough to the ball */
        if ((xDistance >= -minDistance && xDistance <= minDistance)
            && (yDistance >= -minDistance && yDistance <= minDistance)) {            
            ball.style.background = shadeRGBColor(ball.style.backgroundColor, 0.1);  
        }      
    });    
}

function shadeRGBColor(color, percent) {
    var f=color.split(","),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
    return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
}