/// <reference types="cypress"/>

describe("Login", () => {
    beforeEach(() => {
        cy.viewport("iphone-xr")
        cy.visit("https://automationpratice.com.br/login")
    })

    it("Successful login", () => {
        cy.get("#user").type("edu@qazando.com")
        cy.get("#password").type("123456")
        cy.get("#btnLogin").click()
        cy.get(".swal2-title").should("be.visible")
        cy.get(".swal2-title").should("have.text", "Login realizado")
    });

    it("Invalid email", () => {
        cy.get("#user").type("eduqazando.com")
        cy.get("#password").type("123456")
        cy.get("#btnLogin").click()
        cy.get(".invalid_input").should("be.visible")
        cy.get(".invalid_input").should("have.text", "E-mail inválido.")
    });

    it("Invalid password", () => {
        cy.get("#user").type("edu@qazando.com")
        cy.get("#password").type("1")
        cy.get("#btnLogin").click()
        cy.get(".invalid_input").should("be.visible")
        cy.get(".invalid_input").should("have.text", "Senha inválida.")
    });
});