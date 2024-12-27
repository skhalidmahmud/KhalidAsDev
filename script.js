function toggleDayNightMode() {
    const body = document.body;
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = '#808080';
        body.style.color = '#fff';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = '#000';
    }
}