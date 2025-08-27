/// <reference types="cypress"/>
//var faker = require('faker');
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('deve completar o pré cadastro com sucesso', () => {

        let nomefaker = faker.person.firstName()
        let sobrenomefaker = faker.person.lastName()
        let emailfaker = faker.internet.email(nomefaker+sobrenomefaker)


        cy.get('[name="email"]').type(emailfaker)
        cy.get('.register > :nth-child(2) > [name="password"]').type('teste123')
        cy.get('[name="register"]').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('[name="account_first_name"]').type(nomefaker)
        cy.get('[name="account_last_name"]').type(sobrenomefaker)
        cy.get('[name="save_account_details"]').click()


    });


});