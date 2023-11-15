function navigateTo(section) {
    const contentDiv = document.getElementById('content');
    switch (section) {
        case 'home':
            contentDiv.innerHTML = '<h2>Welcome to the Home Page!</h2><p>This is the home content.</p>';
            break;
        case 'about':
            contentDiv.innerHTML = '<h2>About Us</h2><p>This is the about content.</p>';
            break;
        default:
            contentDiv.innerHTML = '<h2>Page Not Found</h2><p>Sorry, the requested page does not exist.</p>';
            break;
    }
}
