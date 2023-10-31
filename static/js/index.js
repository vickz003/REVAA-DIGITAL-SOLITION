const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});



const addLead = document.getElementById('add-lead');
const lastLead = document.getElementById('last-lead-container');
const reportData = document.getElementById('report');
const importData = document.getElementById('import');
const addLeadContainer = document.getElementById('leads-big-container');
const containers = document.querySelectorAll('.leads-container'); // Use querySelectorAll to get all elements with the class

addLead.addEventListener('click', () => {
    lastLead.classList.toggle('container-hidden');
    importData.classList.toggle('container-hidden');
    reportData.classList.toggle('container-hidden');
    addLeadContainer.classList.toggle('container-hidden');
    
    containers.forEach(container => {
        container.classList.toggle('container-hidden');
    });
});


const editbtn = document.getElementById('edit');
const editcontainer = document.getElementById('add-lead');

addLead.addEventListener('click', () => {
    lastlead.classList.toggle('container-hidden');

    for (let i = 0; i < container.length; i++) {
        container[i].classList.toggle('container-hidden');
    }
    addleadcontainer.classList.toggle('container-hidden');
});
