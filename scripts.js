//CRIAÇÃO DE BOTÕES DE REDIRECIONAMENTO DE CLIQUE//
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

let buttonsAdded = false; // Flag para controlar se os botões foram adicionados >>> quando o site era acessado ele redirecionava ao login, por ler a página duas vezes ele duplicava a lista que dependia da leitura da página para aparecer.

document.addEventListener('DOMContentLoaded', function() {
    const siteList = document.getElementById('site-list');

    sites.forEach(site => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = site.name;
        button.addEventListener('click', () => {
        showAdditionalButtons(site.name, [
            { name: 'Site', url: site.url }, //CRIAÇÃO DE BOTÕES CENTRAIS E REFERENCIAÇÃO DE URL
            { name: 'Backoffice', url: site.bko },
            { name: 'Site Demo', url: site.demo },
            { name: 'Backoffice Demo', url: site.bkodemo }
        ]);
        buttonsAdded = true; // Atualiza a flag para indicar que os botões foram adicionados
    });
            //BOTÕES EXIBIDOS NA LATERAL//
            li.appendChild(button);
            siteList.appendChild(li);
        });
    });

        //CAPTURA DE EVENTO-CLIQUE E REDIRECIONAMENTO AO LINK DE REFERÊNCIA//
    btn.addEventListener('click', () => {
            window.open(button.url, '_blank');
    })





