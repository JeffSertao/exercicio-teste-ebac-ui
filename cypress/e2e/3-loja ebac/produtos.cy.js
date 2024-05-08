///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
       produtosPage.buscarProdutoLista('Abominable Hoodie')
        
        cy.get('#tab-title-description > a').should('exist')
        
    });
    it.only('Deve buscar um produto com sucesso', () => {
        let produto='Aero Daily Fitness Tee'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });
    it('Deve visitar a pagina do produto', () => {
        
    });
    it('Deve adicionar produto ao carrinho', () => {
        
    });
});