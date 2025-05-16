    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const password = form.password.value;

      if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
      }

      if (password.length < 8) {
        alert('Password should be at least 8 characters.');
        return;
      }

      alert('Registration successful!');
      form.reset();
    });