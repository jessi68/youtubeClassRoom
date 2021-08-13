// 검색 시 엔터키를 눌렀을 때와 마우스로 검색 버튼을 눌렀을 때 검색 동작이 이루어진다.

describe('유튜브 동영상 검색 관련 기능들', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://127.0.0.1:5500/')
    })

    search = (target) => {
        cy.get('[id="searchInput"]').type(target);
    }
  
    it('엔터키를 눌렀을 때 검색 동작이 이루어진다.', () => {
     
    })

  })
  