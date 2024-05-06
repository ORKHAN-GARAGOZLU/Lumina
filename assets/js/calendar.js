// document.addEventListener("DOMContentLoaded", function () {
//   let currentDate = new Date();
//   let currentWeek = getWeekNumber(currentDate);
//   let currentYear = currentDate.getFullYear();

//   const weekElement = document.getElementById("week");
//   const currentWeekElement = document.getElementById("currentWeek");

//   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   function updateCalendar() {
//     updateWeek();
//     updateCurrentWeek();
//   }

//   function updateWeek() {
//     weekElement.innerHTML = "";

//     for (let i = 0; i < 7; i++) {
//       const dayElement = document.createElement("div");
//       dayElement.classList.add("day");

//       const dayDate = new Date(currentYear, 0, 1 + (currentWeek - 1) * 7 + i);
//       const dayOfMonth = dayDate.getDate();

//       if (dayDate < currentDate) {
//         dayElement.classList.add("past");
//       }

//       if (dayDate.toDateString() === currentDate.toDateString()) {
//         dayElement.classList.add("today");
//       }

//       if (dayDate.getDay() === 0) {
//         dayElement.classList.add("sunday");
//       } else if (dayDate.getDay() === 6) {
//         dayElement.classList.add("saturday");
//       }

//       dayElement.innerHTML = `
//         <div class="day-of-week">${daysOfWeek[dayDate.getDay()]}</div>
//         <div class="day-of-month">${dayOfMonth}</div>
//         <ul>
//           <li class="appointment-time">09:00</li>
//           <li class="appointment-time">10:00</li>
//           <li class="appointment-time">11:00</li>
//           <li class="appointment-time">12:00</li>
//           <li class="appointment-time">13:00</li>
//           <li class="appointment-time">14:00</li>
//           <li class="appointment-time">15:00</li>
//           <li class="appointment-time">16:00</li>
//           <li class="appointment-time">17:00</li>
//           <li class="appointment-time">18:00</li>
//         </ul>
//       `;

//       dayElement.querySelectorAll("li").forEach(function (liElement) {
//         liElement.addEventListener("click", function () {
//           alert(`salam`);
//         });
//       });
      
//       if (dayElement.classList.contains("sunday") || dayElement.classList.contains("saturday")) {
//         dayElement.style.pointerEvents = "none";
//       }

//       weekElement.appendChild(dayElement);
//     }
//   }

//   function updateCurrentWeek() {
//     currentWeekElement.textContent = `Week ${currentWeek} - ${currentYear}`;
//   }

//   function getWeekNumber(date) {
//     const d = new Date(date);
//     d.setHours(0, 0, 0, 0);
//     d.setDate(d.getDate() + 4 - (d.getDay() || 7));
//     const yearStart = new Date(d.getFullYear(), 0, 1);
//     const weekNumber = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
//     return weekNumber;
//   }

//   updateCalendar();

//   document.getElementById("prev").addEventListener("click", function () {
//     currentWeek--;
//     if (currentWeek < 1) {
//       currentWeek = 52;
//       currentYear--;
//     }
//     updateCalendar();
//   });

//   document.getElementById("next").addEventListener("click", function () {
//     currentWeek++;
//     if (currentWeek > 52) {
//       currentWeek = 1;
//       currentYear++;
//     }
//     updateCalendar();
//   });
// });
