// Custom command for login
Cypress.Commands.add("loginAsAdmin", () => {
  cy.visit("/")
  cy.get("button").contains("Войти").click()
  cy.get("button").contains("Администратор").click()
  cy.contains("button", "Администратор").should("be.visible")
})

Cypress.Commands.add("loginAsBuyer", () => {
  cy.visit("/")
  cy.get("button").contains("Войти").click()
  cy.get("button").contains("Покупатель").click()
  cy.contains("button", "Покупатель").should("be.visible")
})

// Custom command for adding product to comparison
Cypress.Commands.add("addProductToComparison", (productIndex = 0) => {
  cy.get('[data-testid="product-card"]')
    .eq(productIndex)
    .within(() => {
      cy.get("button").contains("Сравнить").click()
    })
})

// Custom command for clearing comparison
Cypress.Commands.add("clearComparison", () => {
  cy.get("button").contains("Очистить все").click()
})
