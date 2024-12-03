document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const successMessage = document.querySelector('.successMessage');
    const formAlerts = document.querySelectorAll('.formAlert');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const queryType = document.querySelector('input[name="queryType"]:checked');
        const message = document.getElementById('messageBox').value.trim();
        const consent = document.getElementById('consent').checked;

        let isValid = true;

        // Validation: First Name
        if (!firstName) {
            showError(0, true);
            isValid = false;
        } else {
            showError(0, false);
        }

        // Validation: Last Name
        if (!lastName) {
            showError(1, true);
            isValid = false;
        } else {
            showError(1, false);
        }

        // Validation: Email
        if (!isValidEmail(email)) {
            showError(2, true);
            isValid = false;
        } else {
            showError(2, false);
        }

        // Validation: Query Type
        if (!queryType) {
            showError(3, true);
            isValid = false;
        } else {
            showError(3, false);
        }

        // Validation: Message
        if (!message) {
            showError(4, true);
            isValid = false;
        } else {
            showError(4, false);
        }

        // Validation: Consent
        if (!consent) {
            showError(5, true);
            isValid = false;
        } else {
            showError(5, false);
        }

        // If Valid, Show Success
        if (isValid) {
            successMessage.classList.add('active');
            form.reset();
        }
    });

    // Function to Show/Hide Error
    function showError(index, show) {
        if (show) {
            formAlerts[index].style.display = 'block';
        } else {
            formAlerts[index].style.display = 'none';
        }
    }

    // Email Validation Function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
