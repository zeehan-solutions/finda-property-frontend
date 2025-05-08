document.addEventListener('DOMContentLoaded', function() {
    // Close dropdown when clicking outside (but ignore buttons)
    document.addEventListener('click', function(e) {
        const isDropdownHeader = e.target.closest('.dclick'); // Dropdown title
        const isDropdownContent = e.target.closest('.dclick_content'); // Dropdown options
        const isButton = e.target.closest('button'); // Any button on page

        // Close only if clicked outside dropdown AND not on a button
        if (!isDropdownHeader && !isDropdownContent && !isButton) {
            document.querySelectorAll('.dclick_content').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
});