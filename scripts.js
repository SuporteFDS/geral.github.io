//BOTÕES DE REDIRECIONAMENTO//
function showAdditionalButtons(title, buttons) {
    const additionalButtonsContainer = document.getElementById('additional-buttons');
    additionalButtonsContainer.innerHTML = ''; // Limpa os botões anteriores

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    titleElement.style.textAlign = 'center';
    additionalButtonsContainer.appendChild(titleElement);

    buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.textContent = button.name;
        btn.style.width = '100%';
        btn.addEventListener('click', () => {
            window.open(button.url, '_blank');
        });
        additionalButtonsContainer.appendChild(btn);
    });

    additionalButtonsContainer.style.display = 'block'; // Exibe o container de botões
}

    //EXIBIÇÃO DE BOTÕES CENTRAIS//
    document.addEventListener('DOMContentLoaded', function() {
        const siteList = document.getElementById('site-list');

        sites.forEach(site => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = site.name;
            button.addEventListener('click', () => {
    showAdditionalButtons(site.name, [
        { name: 'Site', url: site.url },
        { name: 'Backoffice', url: site.bko },
        { name: 'Site Demo', url: site.demo },
        { name: 'Backoffice Demo', url: site.bkodemo }
    ]);
});
            //BOTÕES EXIBIDOS NA LATERAL//
            li.appendChild(button);
            siteList.appendChild(li);
        });
    });


    btn.addEventListener('click', () => {
            window.open(button.url, '_blank');
    })


    document.addEventListener('DOMContentLoaded', function() {
        const menus = document.querySelectorAll('.menu');
        const conteudos = document.querySelectorAll('.conteudo');

        menus.forEach(menu => {
            menu.addEventListener('click', function() {
                const menuSelecionado = this.getAttribute('data-menu');
                conteudos.forEach(conteudo => {
                    if (conteudo.id === menuSelecionado) {
                        conteudo.classList.add('active');
                    } else {
                        conteudo.classList.remove('active');
                    }
                });
            });
        });
    });
