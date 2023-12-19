document.addEventListener('DOMContentLoaded', function () {
    navigate('about');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            navigate(sectionId);
        });
    });

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        submitForm();
    });

    function navigate(sectionId) {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove);

        document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add;

        document.querySelectorAll('section').forEach(section => section.style.display = 'none');

        document.getElementById(sectionId).style.display = 'block';
    }

    function submitForm() {
        alert('Form submitted!');
    }
});
