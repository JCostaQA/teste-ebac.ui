/// <reference types="cypress"/>

context ('funcionalidade Login', ()=> {

    it('Deve fazer login com sucesso' , () => {
        cy.visit('http://masterbrasilseries.arenavirtual.net/')
        cy.get('.login-area > .btn').click()
        cy.get('[name="login"]').type('Doninho x99x')
        cy.get('[name="password"]').type('Dd29012001')
        cy.get('.btn-primary').click()

        cy.get('thead > tr > .text-center').should('contain', 'Gol')

       // cy.get('[href="#negociacoes"] > .sub-nav-icon').click()
        // cy.get('#negociacoes > :nth-child(1) > a').click()
        //cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .form-control').type('dybala')
        //cy.get('.col-xs-12 > .btn-accent-inverter').click()
       //cy.get('.caret').click()
        //cy.get('[style="top: 848.85px; left: 737.062px; position: absolute; display: block;"] > :nth-child(1) > a').click() 
    })

   it("Deve exibir uma mensagem de errro ao inserir usuario ou senha inválidos" , () => {
    cy.visit('http://masterbrasilseries.arenavirtual.net/')
        cy.get('.login-area > .btn').click()
        cy.get('[name="login"]').type('Doninho x99x')
        cy.get('[name="password"]').type('Dd29012000')
        cy.get('.btn-primary').click()

   })
})