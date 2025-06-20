// Aguarda o conteúdo do HTML ser totalmente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function () {
    
    // Seleciona todos os elementos de navegação necessários
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');
    const logoLink = document.querySelector('.nav-link-logo');
    
    // Seleciona todas as seções de conteúdo da página
    const pageSections = document.querySelectorAll('.page-section');
    
    // Seleciona os elementos do menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    /**
     * Função para mostrar uma página (seção) específica e esconder as outras.
     * @param {string} pageId - O ID da seção a ser exibida.
     */
    const showPage = (pageId) => {
        // Esconde todas as seções
        pageSections.forEach(section => {
            section.style.display = 'none';
        });

        // Mostra a seção alvo
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.style.display = 'block';
        }

        // Atualiza o estilo do link ativo no menu de desktop
        document.querySelectorAll('#desktop-nav .nav-link').forEach(link => {
            link.classList.remove('active');
            // Adiciona a classe 'active' se o href do link corresponder à página exibida
            if (link.getAttribute('href') === `#${pageId}`) {
                link.classList.add('active');
            }
        });

        // Fecha o menu mobile após um clique, para melhorar a experiência do usuário
        mobileMenu.classList.add('hidden');
    };

    /**
     * Adiciona os eventos de clique aos links de navegação.
     * @param {NodeList} links - Uma lista de elementos de link.
     */
    const setupNavEvents = (links) => {
        links.forEach(link => {
            // Ignora links externos (como WhatsApp) para não interferir na navegação da página
            if (link.getAttribute('target') === '_blank') return;
            
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Previne o comportamento padrão de navegar para a âncora
                const pageId = link.getAttribute('href').substring(1); // Obtém o ID da página do href (ex: 'home')
                showPage(pageId);
                window.scrollTo(0, 0); // Rola a janela para o topo ao trocar de página
            });
        });
    };

    // Configura os eventos para os links do menu desktop e mobile
    setupNavEvents(navLinks);
    setupNavEvents(mobileNavLinks);
    
    // Adiciona evento de clique no logo para sempre levar à página inicial
    logoLink.addEventListener('click', (event) => {
        event.preventDefault();
        showPage('home');
        window.scrollTo(0, 0);
    });

    // Lógica para abrir/fechar o menu mobile
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});