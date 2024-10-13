
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

$("#bt1").mouseover(function ()
{
    $("#bt1").css(
        {
             "background-color":"white","color":"black","border":"solid black 1px"
        }
   );
});
$("#bt1").mouseout(function()
{
    $("#bt1").css(
        {
            "background-color":"rgb(8, 2, 75)","color":"white","border":"1px solid rgb(8, 2, 75)"
        }
    );
});