//ser initial value
let count = 0;
//select the value buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
//console.log(btns)
btns.forEach((btn) =>{
    //console.log(btn)
    btn.addEventListener('click', (e)=>{
       //console.log(e.currentTarget.classList)
       const styles = e.currentTarget.classList
       if(styles.contains('decrease')){
        count --;
       }else if(styles.contains('increase')){
        count ++;
       }else if(styles.contains("random")){
        count = Math.floor(Math.random()*100)-50;
       }else if (styles.contains('decrease-five')){
        count += -5;
       }else if (styles.contains('increase-five')){
        count += 5;
       }
       else{
        count = 0;
       }
       //resets
       //style feedback for my variable
       if (count > 0){
        value.style.color = 'green'
       }
       if (count<0){
        value.style.color = "red"
       }
       if(count ==0){
        value.style.color = 'black'
       }
       //
       value.textContent = count
    })
})