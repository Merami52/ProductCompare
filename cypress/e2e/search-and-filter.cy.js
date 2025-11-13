describe("Search and Filter", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should search for products", () => {
    cy.get('input[placeholder="Поиск товаров..."]').type("iPhone")

    // Check if search results are filtered
    cy.get("h3").should("contain", "iPhone")
    cy.get("p").should("contain", "Найдено")
  })

  it("should filter by category", () => {
    cy.contains("button", "Все категории").click({ force: true })
    cy.get('div[role="option"]').contains("Смартфоны").click()

    cy.get("p").should("contain", "Найдено")
  })

  it("should filter by brand", () => {
    cy.contains("button", "Все бренды").click({ force: true })
    cy.get('div[role="option"]').contains("Apple").click()

    cy.get("p").should("contain", "Apple")
  })

  it("should clear all filters", () => {
    cy.contains("button", "Все категории").click({ force: true })
    cy.get('div[role="option"]').contains("Смартфоны").click()

    cy.contains("button", "Очистить").click({ force: true })

    cy.contains("button", "Все категории").should("be.visible")
  })

  it("should toggle between grid and list view", () => {
    cy.contains("button", "Список").click({ force: true })
    cy.contains("button", "Сетка").click({ force: true })
  })

  it("should show no results for non-existent search", () => {
    cy.get('input[placeholder="Поиск товаров..."]').type("NonExistentProduct")

    cy.get("p").should("contain", "Найдено 0 товаров")
  })
})
