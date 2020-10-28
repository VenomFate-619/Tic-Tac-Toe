var flag=[0,0,0,0,0,0,0,0,0];
var length=flag.length;
var  index=0,cli=0,count=0
var col=document.querySelectorAll(".col");
var res=document.getElementsByClassName("res")[0];
enable();
function enable()
{
    for(let i=0;i<col.length;i++)
{
    col[i].addEventListener("click",p1);
}
}
function disabled()
{
    for(let i=0;i<col.length;i++)
    {
        col[i].removeEventListener("click",p1);
    }
}
function reset()
{
    setTimeout(()=>
    {
        for(let i=0;i<col.length;i++)
        {
            col[i].innerHTML=""
        }
        res.innerHTML=""
        flag=[0,0,0,0,0,0,0,0,0];
        index=0,cli=0,count=0
        enable()

    },2000)
}

function p1(e)

{
   if(flag[this.id]==1)
   {
       this.stopimmediatepropagation();
   }
    if(flag[this.id]==0)
    {
        col[this.id].innerHTML="&#x2717"
        flag[this.id]=1;
        pos=this.id
    }
    if(win()==true)
    {
        res.innerHTML="player 1 wins"
        disabled()
        reset()

    }
    else if(count==9)
    {
        res.innerHTML="tie"
        disabled()
        reset()
       
    }
    else
    comp()
   
    // console.log(col[e.target.id])
}
//disabkled
function comp()
{
   
    setTimeout( () =>{
        disabled();
        let ran=Math.floor(Math.random() * 9);
    while(flag[ran]==1)
    {
        ran=Math.floor(Math.random() * 9);
    }
    col[ran].innerHTML="&#x2713"
    flag[ran]=1;
    pos=ran
    if(win()==true)
    {
        res.innerHTML="comp wins"
        reset()
        return;
       
    }
    enable();
    },500)
    
    

}
function win()
{
    let i;
    count+=1
     
    //rows
    for(i=0;i<=6;i+=3)
    {
        if(col[i].innerHTML!=="" && col[i+1].innerHTML && col[i+2]!=="")
        {
            if( col[i].innerHTML==col[i+1].innerHTML && col[i].innerHTML==col[i+2].innerHTML && col[i+1].innerHTML==col[i+2].innerHTML )
            {
                return true;
            }
        }
       
    }
    //col
    for(i=0;i<=2;i++)
    {
        if(col[i].innerHTML!=="" && col[i+3].innerHTML && col[i+6]!=="")
        {
            if(  col[i].innerHTML==col[i+3].innerHTML && col[i].innerHTML==col[i+6].innerHTML && col[i+3].innerHTML==col[i+6].innerHTML)
            {
                return true;
            }
        }

       
    }
     
    if( (col[0].innerHTML!=="" && col[4].innerHTML!=="" && col[8].innerHTML!=="" ) || ( col[2].innerHTML!=="" &&              col[4].innerHTML!=="" &&  col[6].innerHTML!==""))
    {
        if( (col[0].innerHTML==col[4].innerHTML && col[0].innerHTML==col[8].innerHTML && col[4].innerHTML==col[8].innerHTML) || ( col[2].innerHTML==col[4] .innerHTML&& col[2].innerHTML==col[6].innerHTML && col[4].innerHTML==col[6].innerHTML))
        {
            return true;
        }
    }
    
  
   

  return false;
}
