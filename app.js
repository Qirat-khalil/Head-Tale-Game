
let user = +prompt("Enter a number between 0 and 2.")

let num = (Math.round(Math.random()*2))

if (user == num){

document.write(` <div class="main">
          <div class="one animate__animated  animate__flip  animate__bounceInDown">
            <img src="image/360_F_90900196_0OwSAqz9QZ4Fw5WNWySYHmWRVgrOg6dX.jpg" alt="">
         </div>
         
    </div> `)

    document.write(`<div class="butt">
        <button><h1 class="animate__animated animate__bounceInDown" style="text-align: center;">🎉 You Win! Correct number was: " ${num} </h1><button>
     </div>`)

    
}else{

    
document.write(` <div class="main">
       <div class="two animate__animated  animate__heartBeat">
            <img src="image/download.jpeg" alt="">
         </div>
</div> `)

    document.write(`<div class="butt">
       <button><h1 class="animate__animated animate__bounceInDown" style="text-align: center;"> 🤦‍♀️ You Lose! Correct number was: " ${num} </h1><button>
    </div>`)
}

