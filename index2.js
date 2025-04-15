
  function toggleToRegister() {
    document.getElementById('login-section').classList.remove('active');
    document.getElementById('register-section').classList.add('active');
  }
  
  function toggleToLogin() {
    document.getElementById('register-section').classList.remove('active');
    document.getElementById('login-section').classList.add('active');
  }
  
  function registerUser() {
    const username = document.getElementById('reg-username').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value.trim();
  
    if (username && email && password) {
      let users = JSON.parse(localStorage.getItem('users')) || [];
  
      const exists = users.some(user => user.email === email);
      if (exists) {
        alert("Email already registered. Try logging in.");
        toggleToLogin();
      } else {
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert("Registered successfully! Please log in.");
        toggleToLogin();
      }
    } else {
      alert("Please fill in all fields.");
    }
  }
  
  function loginUser() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
  
    const usersJSON = localStorage.getItem('users');
    const users = usersJSON ? JSON.parse(usersJSON) : [];
  
    console.log("Stored users:", users);
  
    const user = users.find(u => u.email === email && u.password === password);
  
    if (user) {
      alert(`Welcome back, ${user.username}`);
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = "index.html";
    } else {
      alert("User not found. Redirecting to registration.");
      toggleToRegister();
    }
  }
  
  
  