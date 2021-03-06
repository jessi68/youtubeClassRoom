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
    <h2 class="text-center">π μ νλΈ κ²μ</h2>
  </header>
  <form class="d-flex">
    <input type="text" class="w-100 mr-2 pl-2" placeholder="κ²μ" id="search-input" />
    <button type="button" class="btn bg-cyan-500" id="open-search-modal">κ²μ</button>
  </form>
  <section class="mt-2">
    <span class="text-gray-700">μ΅κ·Ό κ²μμ΄: </span>
    <a class="chip">λ©μ΄μ»€μ€</a>
    <a class="chip">μ°μννν¬μ½μ€</a>
    <a class="chip">μ°μννμ λ€</a>
  </section>
  <section>
    <div class="d-flex justify-end text-gray-700">
      μ μ₯λ μμ κ°―μ: 0κ°
    </div>
  </section>
</div>
</div> */}