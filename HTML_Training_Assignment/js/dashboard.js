var sidebar = document.getElementById("sidebar")
var main = document.getElementById("main-content")



var flag=1
function togglesidebar()
{
   
    if(flag == 1)
    {
        sidebar.style.display = "none";
        main.style.width ="100%"
        flag=0;
    }
    else
    {
        sidebar.style.display = "flex";
        main.style.width ="83%"
        flag=1;
    }
}


