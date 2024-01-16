var sidebar = document.getElementById("sidebar");
var main = document.getElementById("main-content");

var flag = 1;
function togglesidebar() {
  if (screen.width > 911) {
    if (flag == 1) {
      sidebar.style.display = "none";
      main.style.width = "100%";
      flag = 0;
    } else {
      sidebar.style.display = "flex";
      main.style.width = "83%";
      flag = 1;
    }
  }

  else
  {
    if (flag == 1) {
        sidebar.style.display = "none";
        main.style.width = "100%";
        flag = 0;
      } else {
        sidebar.style.display = "flex";
        main.style.width = "100%";
        flag = 1;
      }
  }
}
