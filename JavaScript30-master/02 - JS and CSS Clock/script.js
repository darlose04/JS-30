function setDate() {
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');

  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  console.log(seconds);
  console.log(minutes);
}

setInterval(setDate, 1000);