///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

 describe('Funcionalidade: login', () => {
   
    beforeEach(() => {
        cy.visit('minha-conta')
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

    it('Deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, ebacteste (não é ebacteste? Sair)')
        
    });

    it('Deve fazer login com sucesso - usando Fixture', () => {
        cy.fixture('perfil').then(dados =>{
            cy.get('#username').type(dados.usuario, {log:false})
            cy.get('#password').type(dados.senha, { log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, ebacteste (não é ebacteste? Sair)')   
        })
        
    });

    it.only('Deve fazer o login com sucesso - usando Comandos de customizados', () => {
        cy.login('ebacteste@teste.com','1234')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, ebacteste (não é ebacteste? Sair)')
    });

    

 })