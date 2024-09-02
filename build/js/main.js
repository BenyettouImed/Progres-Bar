document.addEventListener('DOMContentLoaded', () =>{
    const progress = document.getElementById('progress');
    const start = document.getElementById('start');
    const progressPercentage = document.getElementById('progressPercentage');
    
    
    
    const start2 = document.getElementById('start2');
    const progress2 = document.getElementById('progress2');
    const progressPercentage2 = document.getElementById('progressPercentage2');

    start.addEventListener('click', (event) =>{
        let i = 10;
        let followProgress = setInterval(() =>{

            progress.style.background = `conic-gradient(#e91e63 10deg, #673ab7 ${i}deg, white 0deg)`;
            progressPercentage.textContent = parseInt(i*100/360);
            if (i >=360){
                clearInterval(followProgress);
            }
            i += 5;
        }, 20)


    })

    start2.addEventListener('click', () =>{
        let i = 10;
        let followProgress = setInterval(() =>{
            progress2.style.width = `${i}%`;
            progressPercentage2.textContent = i;
            if (i>=100){
                clearInterval(followProgress);
            }
            i++;
        },20)
    })
})


