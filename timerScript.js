
const dager= document.getElementById("days")
const timer= document.getElementById("hours")
const minutter= document.getElementById("min")
const sekunder= document.getElementById("sec")
                                                                // kode for timeren på siden, foreløpig ikke ferdig, pga tid for neste res er ikke riktig.
    function updateCountdown(targetDate) {

  function calculateTimeDifference() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.querySelector('.youtube-link').textContent = 'SE RACET LIVE!';
        document.querySelector('.youtube-link').href = "https://www.youtube.com/@NSRC/live";

        document.getElementById('timer-div').remove();




      clearInterval(interval);
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor(((difference % (1000 * 60)) / 1000)*10)/10;

    //const formattedSeconds = seconds.toFixed(1);

    dager.innerHTML = "<b>"+days+"</b>" + "<br>" + "dager"
    timer.innerHTML = "<b>"+hours+"</b>" + "<br>" + " timer"
    minutter.innerHTML = "<b>"+minutes+"</b>" + "<br>" + " minutter"
    sekunder.innerHTML = "    "+"<b>"+seconds+"</b>" + "<br>" + " sekunder"

    //textField.textContent = `${days} dager, ${hours} timer, ${minutes} minutter, ${seconds} sekunder`;
  }

  calculateTimeDifference();
  const interval = setInterval(calculateTimeDifference, 10);
}

const targetDate = new Date("2026-06-09T20:30:00");
updateCountdown(targetDate);