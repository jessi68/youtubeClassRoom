import { getVideos } from "../../../src/js/api/youtubeApi"

describe('유튜브 동영상 검색 관련 기능들', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://127.0.0.1:5500/')
    })

    
    it('무드등 검색했을때 무드등 영상이 잘 나타난다. ', () => {
      let searchedVideos;
      getVideos("무드등").then(async (result) => {
         searchedVideos = result;
         cy.get(searchedVideos).should('be.gt', 0);
         
      });
     

    })
 

  })