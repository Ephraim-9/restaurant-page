export default  function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = ''
    const heading = document.createElement('h1')
    heading.textContent = 'Contact X'
    content.appendChild(heading)
}