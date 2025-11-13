describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should show login and register buttons for unauthenticated users", () => {
    cy.get("button").contains("Войти").should("be.visible")
    cy.get("button").contains("Регистрация").should("be.visible")
  })

  it("should login with demo admin credentials", () => {
    cy.get("button").contains("Войти").click()
    cy.get("button").contains("Администратор").click()

    // Check if user menu is visible with admin role
    cy.contains("button", "Администратор").should("be.visible")
  })

  it("should login with demo buyer credentials", () => {
    cy.get("button").contains("Войти").click()
    cy.get("button").contains("Покупатель").click()

    // Check if user menu is visible with buyer role
    cy.contains("button", "Покупатель").should("be.visible")
  })

  it("should not show admin panel link for buyers", () => {
    cy.loginAsBuyer()
  
    // Подождём, пока появится кнопка профиля
    cy.contains("button", "Покупатель", { timeout: 10000 }).should("be.visible")
  
    // Явно получим её заново и кликнем
    cy.contains("button", "Покупатель").then(($btn) => {
      cy.wrap($btn).click({ force: true }) // force — на случай, если есть перекрытие
    })
  
    // Проверим, что ссылка на админку не появилась
    cy.contains("a", "Админ панель").should("not.exist")
  })
  
  
})
