document.addEventListener("DOMContentLoaded", () => {
    fetch('./assets/json/doctors.json')
        .then(response => response.json()) 
        .then(data => {
            const doctorsContainer = document.getElementById('doctors-container');
            const departmentSelect = document.getElementById('departmentSelect');
  
            let doctortHTML = '';
  
            data.forEach(doctor => {
              doctortHTML += `
                <div class="col-md-4 col-sm-6 col-xs-12 doc" data-department="${doctor.department}">
                    <div class="team-member">
                        <img src="${doctor.img}" alt="doctor" class="img-responsive">
                        <div class="contents text-center">
                            <h4>${doctor.name}</h4>
                            <p>${doctor.department}</p>

                            <div class="d-flex flex-column row-gap-1">
                                <a href="./doctor-detail.html" class="btn-main">read more</a>
                                <a href="./doctor-appointment.html" class="btn-main">appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            });
  
            doctorsContainer.innerHTML = doctortHTML;
  
            departmentSelect.addEventListener('change', () => {
                const selectedDepartment = departmentSelect.value;
  
                const doctortItems = document.querySelectorAll('.col-md-4');
  
                doctortItems.forEach(item => {
                    const itemDepartment = item.getAttribute('data-department');
  
                    if (selectedDepartment === 'All' || selectedDepartment === itemDepartment) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        })
        .catch(error => console.error('JSON yoxdur:', error));
  });