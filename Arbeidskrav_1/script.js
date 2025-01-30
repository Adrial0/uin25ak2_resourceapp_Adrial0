document.addEventListener('DOMContentLoaded', () => {
    const categoryNav = document.getElementById('category-nav');
    const resourceList = document.getElementById('resource-list');

    function toggleButton(button) {
        const buttons = document.querySelectorAll('nav button');
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }

    const categories = [...new Set(resources.map(resource => resource.category))];

    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.addEventListener('click', () => {
            filterResources(category); 
            toggleButton(button); 
        });
        categoryNav.appendChild(button);
    });

    function filterResources(category) {
        const filteredResources = resources.filter(resource => resource.category === category);
        displayResources(filteredResources, category);
    }

    function displayResources(resources, category) {
        resourceList.innerHTML = ''; 
        const section = document.createElement('section');
        section.className = 'resource-item';
        section.innerHTML = `<h2>${category}</h2>`; 

        resources.forEach(resource => {
            section.innerHTML += `<p>${resource.text}</p>`; 
            const ul = document.createElement('ul'); 
            resource.sources.forEach(source => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${source.url}" target="_blank">${source.title}</a>`; 
                ul.appendChild(li);
            });
            section.appendChild(ul); 
        });

        resourceList.appendChild(section); 
    }

    filterResources('HTML');
    const defaultButton = document.querySelector('nav button'); 
    if (defaultButton) {
        toggleButton(defaultButton); 
    }
});