var no = 4;
var Cnt = 0;

for(let i = 2;i < no;i++)
{
    if(no % i == 0)
    {
       Cnt++;
       break;
    }
}
if(Cnt > 0)
{
    console.log("Given Number Is Not Prime!!!");
}
else
{
    console.log("Given Number Is Prime!!!");
}