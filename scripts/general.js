// enabling tooltips on page
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
$(document).ready(function() {
    $("body").tooltip({ selector: '[data-bs-toggle="tooltip"]' });
});
