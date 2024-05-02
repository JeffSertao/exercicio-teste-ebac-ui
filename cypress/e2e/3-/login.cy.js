///<reference types="cypress"/>

 describe('Funcionalidade: login', () => {
   
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer o login com sucesso', () => {
       
        cy.get('#username').type('ebacteste@teste.com')
        cy.get('#password').type('1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, ebacteste (não é ebacteste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao digitar usuário inválido', () => {
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao digitar uma senha inválida', () => {
        cy.get('#username').type('ebacteste@teste.com')
        cy.get('#password').type('1235')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
        
    });

 })