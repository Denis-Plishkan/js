class Menu {
    constructor(elem) {
      elem.onclick = this.onClick.bind(this); 
    }

    save() {
      alert('сохраняю');
    }

    load() {
      alert('загружаю');
    }

    search() {
      alert('ищу');
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    }
  }

  new Menu(menu);




  document.addEventListener('click', function(e) {

    if (e.target.dataset.counter != undefined) { 
      e.target.value++;
    }

  });