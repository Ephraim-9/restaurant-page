export default  function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''
    
    const heading = document.createElement('h1')
    heading.textContent = 'Menu X'

    content.appendChild(heading)
    const about = document.createElement('div')
    about.id = 'about'
    content.appendChild(about)

    const aboutH3 = document.createElement('h3')
    aboutH3.textContent = 'About'
    about.appendChild(aboutH3)

    const para = document.createElement('p')
    para.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate laudantium velit? Laboriosam optio adipisci, reprehenderit fugit eveniet velit voluptatum animi voluptates inventore hic fugiat illo quis unde saepe quod'
    about.appendChild(para)

}