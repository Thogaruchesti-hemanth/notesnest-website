// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            document.getElementById('main-nav').classList.toggle('active');
        });
    }
    
    // FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('active');
        });
    });
    
    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let valid = true;
            const requiredFields = this.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.style.borderColor = '#F44336';
                    
                    // Add error message if not already present
                    if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
                        const errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        errorMsg.style.color = '#F44336';
                        errorMsg.style.fontSize = '0.8rem';
                        errorMsg.style.marginTop = '0.25rem';
                        errorMsg.textContent = 'This field is required';
                        field.parentNode.appendChild(errorMsg);
                    }
                } else {
                    field.style.borderColor = '';
                    
                    // Remove error message if present
                    const errorMsg = field.parentNode.querySelector('.error-message');
                    if (errorMsg) {
                        errorMsg.remove();
                    }
                }
            });
            
            if (!valid) {
                e.preventDefault();
                
                // Show error message
                const messageDiv = this.querySelector('.form-message');
                if (messageDiv) {
                    messageDiv.className = 'form-message error';
                    messageDiv.innerHTML = '<strong>Please fill in all required fields.</strong>';
                    messageDiv.style.display = 'block';
                    messageDiv.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Bug Report Form Submission
    const bugReportForm = document.getElementById('bugReportForm');
    if (bugReportForm) {
        bugReportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const bugTitle = document.getElementById('bug-title').value;
            const bugPriority = document.getElementById('bug-priority').value;
            
            // Simulate form submission
            const messageDiv = document.getElementById('bug-report-message');
            messageDiv.className = 'form-message success';
            messageDiv.innerHTML = `<strong>Thank you!</strong> Your bug report has been submitted. We'll investigate the issue and get back to you if we need more information.`;
            
            // Reset form
            this.reset();
            
            // Scroll to message
            messageDiv.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Feedback Form Submission
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const feedbackType = document.getElementById('feedback-type').value;
            const feedbackTitle = document.getElementById('feedback-title').value;
            
            // Simulate form submission
            const messageDiv = document.getElementById('feedback-message');
            messageDiv.className = 'form-message success';
            messageDiv.innerHTML = `<strong>Thank you for your feedback!</strong> We appreciate you taking the time to help improve NotesNest.`;
            
            // Reset form
            this.reset();
            
            // Scroll to message
            messageDiv.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Set active nav item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});