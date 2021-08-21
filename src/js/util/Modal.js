import Component from "../components/base/component.js";
import { Search } from "../components/Youtube/Search/Search.js";
import isScrollAtBottom from "./scroll.js";

export class Modal {
    constructor({className, innerClassName}) {
        this.$modal = document.querySelector(className);
        this.$modalInner = document.querySelector(innerClassName);
        this.$search = new Search(this.$modalInner);
        this.$modal.addEventListener("scroll", this.onModalScrolled);
    }
  
    onShow = () => {
      this.$modal.classList.add("open");  
    }

    onClose = () => {
        this.$modal.classList.remove("open");

    };

    onModalScrolled = (event) => {
      event.preventDefault();
      if(isScrollAtBottom(event.target)) {
        this.$search.search();
      }
     
    }

}

{/* <div class="modal">
<div class="modal-inner p-8">
  <button class="modal-close">
    <svg viewbox="0 0 40 40">
      <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
    </svg>
  </button>
  <header>
    <h2 class="text-center">🔎 유튜브 검색</h2>
  </header>
  <form class="d-flex">
    <input type="text" class="w-100 mr-2 pl-2" placeholder="검색" id="search-input" />
    <button type="button" class="btn bg-cyan-500" id="open-search-modal">검색</button>
  </form>
  <section class="mt-2">
    <span class="text-gray-700">최근 검색어: </span>
    <a class="chip">메이커준</a>
    <a class="chip">우아한테크코스</a>
    <a class="chip">우아한형제들</a>
  </section>
  <section>
    <div class="d-flex justify-end text-gray-700">
      저장된 영상 갯수: 0개
    </div>
  </section>
</div>
</div> */}