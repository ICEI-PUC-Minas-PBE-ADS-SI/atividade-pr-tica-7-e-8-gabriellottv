const noticias = [
    {
        id: 1,
        titulo: "Novo parque urbano é inaugurado no centro da cidade",
        resumo: "Um novo espaço de lazer e convivência foi inaugurado no centro da cidade, oferecendo diversas opções de recreação para a população.",
        imagem: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        autor: "Maria Silva",
        data: "08/04/2024",
        categoria: "Urbanismo",
        conteudo: `O novo parque urbano, localizado no centro da cidade, foi inaugurado na manhã desta segunda-feira (08/04). 
        O espaço conta com uma área de 50.000 metros quadrados e oferece diversas opções de lazer para a população.
        
        Entre as atrações do parque estão:
        - Pista de caminhada de 2km
        - Área de playground para crianças
        - Quadras poliesportivas
        - Anfiteatro ao ar livre
        - Área para piquenique
        
        O projeto foi desenvolvido em parceria com a prefeitura e empresas privadas, com investimento total de R$ 5 milhões.
        A expectativa é que o parque receba cerca de 10 mil visitantes por semana.`
    },
    {
        id: 2,
        titulo: "Escola municipal recebe prêmio de inovação em educação",
        resumo: "A Escola Municipal João da Silva foi reconhecida por seu projeto inovador de ensino que integra tecnologia e sustentabilidade.",
        imagem: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        autor: "João Santos",
        data: "07/04/2024",
        categoria: "Educação",
        conteudo: `A Escola Municipal João da Silva recebeu na última sexta-feira (07/04) o prêmio "Inovação em Educação 2024" 
        por seu projeto que integra tecnologia e sustentabilidade no processo de ensino.
        
        O projeto premiado, chamado "Educação Verde Digital", foi desenvolvido pelos professores da escola e envolve:
        - Uso de tablets com conteúdo digital interativo
        - Horta escolar com sistema de irrigação automatizado
        - Coleta e reciclagem de materiais eletrônicos
        - Aulas de programação básica para alunos do ensino fundamental
        
        A premiação inclui um valor de R$ 50 mil para investimentos na escola e uma viagem para os professores conhecerem 
        experiências educacionais inovadoras em outros países.`
    },
    {
        id: 3,
        titulo: "Feira de artesanato atrai turistas e movimenta economia local",
        resumo: "A tradicional feira de artesanato da cidade registrou recorde de visitantes e vendas em sua última edição.",
        imagem: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        autor: "Ana Costa",
        data: "06/04/2024",
        categoria: "Economia",
        conteudo: `A 25ª edição da Feira de Artesanato da cidade superou todas as expectativas, registrando um público 
        de mais de 50 mil visitantes durante os três dias de evento.
        
        Destaques da feira:
        - 200 expositores de artesanato
        - R$ 1,5 milhão em vendas
        - Shows culturais gratuitos
        - Oficinas de artesanato para crianças
        
        O evento, que aconteceu na praça central, contou com a participação de artesãos de toda a região e atraiu 
        turistas de várias cidades vizinhas. A próxima edição está prevista para o mês de agosto.`
    }
];

function criarCardNoticia(noticia) {
    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <article class="card h-100">
                <img src="${noticia.imagem}" class="card-img-top" alt="${noticia.titulo}">
                <div class="card-body">
                    <h2 class="card-title h5">${noticia.titulo}</h2>
                    <p class="card-text">${noticia.resumo}</p>
                    <p class="card-text"><small class="text-muted">Por ${noticia.autor} - ${noticia.data} - ${noticia.categoria}</small></p>
                    <a href="detalhes.html?id=${noticia.id}" class="btn btn-primary">Ler mais</a>
                </div>
            </article>
        </div>
    `;
}

function exibirDetalhesNoticia(noticia) {
    return `
        <div class="card">
            <img src="${noticia.imagem}" class="card-img-top" alt="${noticia.titulo}">
            <div class="card-body">
                <h1 class="card-title">${noticia.titulo}</h1>
                <div class="meta text-muted mb-3">
                    <p>Por ${noticia.autor} - ${noticia.data} - ${noticia.categoria}</p>
                </div>
                <div class="conteudo">
                    ${noticia.conteudo.split('\n').map(paragrafo => `<p>${paragrafo}</p>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function obterParametroUrl(parametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
}

document.addEventListener('DOMContentLoaded', () => {
    const noticiasContainer = document.getElementById('noticias-container');
    const noticiaDetalhes = document.getElementById('noticia-detalhes');

    if (noticiasContainer) {
        noticiasContainer.innerHTML = noticias.map(noticia => criarCardNoticia(noticia)).join('');
    } else if (noticiaDetalhes) {
        const idNoticia = parseInt(obterParametroUrl('id'));
        const noticia = noticias.find(n => n.id === idNoticia);
        
        if (noticia) {
            noticiaDetalhes.innerHTML = exibirDetalhesNoticia(noticia);
        } else {
            noticiaDetalhes.innerHTML = '<p>Notícia não encontrada.</p>';
        }
    }
});
