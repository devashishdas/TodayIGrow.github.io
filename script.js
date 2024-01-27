document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('questionnaireForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        formData.append('submissionDate', new Date().toISOString());

        fetch('/submit-form', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
          .then(data => {
              // Handle response (e.g., show a success message, redirect, etc.)
          }).catch(error => {
              // Handle errors
          });
    });
});
