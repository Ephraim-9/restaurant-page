export default  function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = ''
    const heading = document.createElement('h1')
    heading.textContent = 'Restaurant X'
    content.appendChild(heading)
}