let celcius= document.querySelector('.celcius-js');
let fahrenheit= document.querySelector('.fahrenheit-js');
let button=document.querySelector('button');
let body=document.querySelector('body');
let celciusTofahrenheit=((c)=>{
  fahrenheit.value=(c*(9/5)+32).toFixed(2)+' F';

})
let fahrenheitTocelcius=((f)=>{
  celcius.value=((f-32)*5/9).toFixed(2)+' C';

})
button.addEventListener('click',()=>{
  if(fahrenheit.value==='' && celcius.value!==''){
celciusTofahrenheit(Number(celcius.value))
  }else if(celcius.value==='' && fahrenheit.value!==''){
    fahrenheitTocelcius(Number(fahrenheit.value))
  }
})
let reset=document.querySelector('.reset');
reset.addEventListener('click',()=>{
  celcius.value='';
  fahrenheit.value='';
})
celcius.addEventListener('keypress',(Event)=>{
  if(Event.key==='Enter'){
      if(fahrenheit.value==='' && celcius.value!==''){
celciusTofahrenheit(Number(celcius.value))
  }else if(celcius.value==='' && fahrenheit.value!==''){
    fahrenheitTocelcius(Number(fahrenheit.value))
  }
   }
})

fahrenheit.addEventListener('keypress',(Event)=>{
   if(Event.key==='Enter'){
        if(fahrenheit.value==='' && celcius.value!==''){
celciusTofahrenheit(Number(celcius.value))
  }else if(celcius.value==='' && fahrenheit.value!==''){
    fahrenheitTocelcius(Number(fahrenheit.value))
  }
   }
})
body.addEventListener('keypress',(Event)=>{
  if(Event.key==='r' || Event.key==='R'){
     celcius.value='';
  fahrenheit.value='';
  }
})
 


