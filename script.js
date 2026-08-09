const START_DATE = new Date("2025-02-14T00:10:00");

function updateCounter() {
  const now = new Date();

  // Relationship duration
  let difference = now - START_DATE;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );
  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");


  // Next monthsary
  let nextMonthsary = new Date(
    now.getFullYear(),
    now.getMonth(),
    START_DATE.getDate(),
    START_DATE.getHours(),
    START_DATE.getMinutes(),
    START_DATE.getSeconds()
  );

  // If this month's monthsary has already passed,
  // use next month
  if (nextMonthsary <= now) {
    nextMonthsary.setMonth(nextMonthsary.getMonth() + 1);
  }

  let monthDifference = nextMonthsary - now;

  const monthDays = Math.floor(
    monthDifference / (1000 * 60 * 60 * 24)
  );
  const monthHours = Math.floor(
    (monthDifference / (1000 * 60 * 60)) % 24
  );
  const monthMinutes = Math.floor(
    (monthDifference / (1000 * 60)) % 60
  );
  const monthSeconds = Math.floor(
    (monthDifference / 1000) % 60
  );

  document.getElementById("monthDays").textContent = monthDays;
  document.getElementById("monthHours").textContent = String(monthHours).padStart(2, "0");
  document.getElementById("monthMinutes").textContent = String(monthMinutes).padStart(2, "0");
  document.getElementById("monthSeconds").textContent = String(monthSeconds).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 1000);