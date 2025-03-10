// Import images 
import dropdownIconWhite from '/assets/dropdown-Icon-White.png';
import dropdownIconBlack from '/assets/dropdown-Icon-Black.png';

console.log(dropdownIconWhite)
//DOM elements
const menuItems = document.querySelectorAll('.navbar-Menu .menu-Items .menu-Item-Text');
const serviceIcon = document.getElementById('service-Icon');
const dropdown = document.getElementById('dropdown-Menu');
const services = document.getElementById('services');
const dropdownMain = document.getElementById('dropdownId');
const hamburgerBtn = document.getElementById('hamburger-Btn');
const navbar = document.getElementById('navbar-MenuId');


// Visibility flags
let isViewingDropdown = false;
let isViewingHamburger = false;

// Deselect all menu items
const deselectAllItems = () => {
    menuItems.forEach(item => item.classList.remove('selected'));
};

// Update Icon
const updateServiceIcon = (itemId) => {
    if (window.innerWidth >= 480) {
        const iconSrc = itemId === 'services' ? dropdownIconWhite : dropdownIconBlack;
        serviceIcon.src = iconSrc;
    }
};

// Toggle dropdown visibility
const toggleDropdown = () => {
    if (isViewingDropdown) {
        dropdownMain.style.height = "35px";
        dropdown.style.display = "none";
        serviceIcon.style.transform = "rotate(0deg)";
    } else {
        dropdownMain.style.height = "auto";
        dropdown.style.display = "block";
        serviceIcon.style.transform = "rotate(270deg)";
    }
    isViewingDropdown = !isViewingDropdown;
};

// Handle menu item click 
const handleMenuItemClick = (event) => {
    //Deselect others, select clicked item, and update dropdown if necessary
    const item = event.currentTarget;
    deselectAllItems();
    item.classList.add('selected');

    const itemId = item.id;

    if (window.innerWidth >= 480) {
        updateServiceIcon(itemId);
    } else if (itemId === 'services') {
        toggleDropdown();
    }
};

// Event listeners
menuItems.forEach(item => item.addEventListener('click', handleMenuItemClick));
dropdown.addEventListener('click', () => {
    if (window.innerWidth >= 480) {
        deselectAllItems();
        services.classList.add('selected');
        serviceIcon.src = 'assets/dropdown-Icon-White.png';
    }
});

hamburgerBtn.addEventListener('click', () => {
    navbar.style.display = isViewingHamburger ? "none" : "flex";
    isViewingHamburger = !isViewingHamburger;
});
