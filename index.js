function updateTime() {
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDate = chicagoElement.querySelector(".date");
  let chicagoTimeElement = chicagoElement.querySelector(".time");
  let chicagoTime = moment().tz("America/Chicago");
  chicagoDate.innerHTML = chicagoTime.format("MMMM Do yyyy");
  chicagoTimeElement.innerHTML = chicagoTime.format(
    "h:m:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDate = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDate.innerHTML = parisTime.format("MMMM Do yyyy");
  parisTimeElement.innerHTML = parisTime.format("h:m:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
