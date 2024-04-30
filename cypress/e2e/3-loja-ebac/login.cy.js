///<reference types="cypress"/>

 describe('Funcionalidade: login', () => {
   
    it('Deve fazer o login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('ebacteste@teste.com')
        cy.get('#password').type('1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, ebacteste (não é ebacteste? Sair)')
    })

 })