/// <reference types="Cypress" />
/* eslint-disable */
context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Login", () => {
    cy.get("button").should("be.disabled");
    cy.get("input")
      .type("Username")
      .should("have.value", "Username");
    cy.get("button").click();
    cy.get(".number").contains("0");
    cy.get(".m-right-10.color-dark").contains("Olá, Username");
  });

  it("Increment", () => {
    cy.get("input").type("Username");
    cy.get("button").click();
    cy.get(".number").contains("0");
    cy.contains("button", "+").click();
    cy.get(".number").contains("1");
  });

  it("Decrement", () => {
    cy.get("input").type("Username");
    cy.get("button").click();
    cy.get(".number").contains("0");
    cy.contains("button", "-").click();
    cy.get(".number").contains("-1");
  });

  it("Logout", () => {
    cy.get("input").type("Username");
    cy.get("button").click();
    cy.get(".m-right-10.color-dark").contains("Olá, Username");
    cy.get(".logout").click();
    cy.get(".m-right-10.color-dark").should("not.exist");
  });
});
