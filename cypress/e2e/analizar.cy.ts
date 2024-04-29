describe("Análisis de la página", () => {
  beforeEach(() => {
    cy.visit("/");
    // Verifica que el input esté presente y establece el valor
    cy.get('[data-testid="cypress-input-test"]').type(
      "https://not-accesibiliy-page.vercel.app"
    );
    cy.get("[type=submit]").click();
  });

  it("Prueba del resultado. Es accesible o no?", () => {
    // Verifica si existe el componente que muestra el resultado.
    cy.get('[data-testid="cypress-resume"').should("exist");
    // Valida si contiene la cantidad de errores esperados, según el texto
    cy.contains("Se cumplieron 33 criterios de un mínimo de 30");
    cy.contains("Accesible");
  });

  it("Prueba listado de errores", () => {
    // Verifica si existe el componente del listado de errores
    cy.get('[data-testid="cypress-issues"').should("exist");
    // Comprobacion de los errores esperados
    cy.contains("WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2");
    cy.contains("WCAG2AA.Principle1.Guideline1_1.1_1_1.H37");
    cy.contains("WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.InputText.Name");
    cy.contains("WCAG2AA.Principle1.Guideline1_3.1_3_1.F68");
    cy.contains("WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail");
  });
});
