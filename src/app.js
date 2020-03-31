import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue ({
    el: '#app',
    data: {
      items: [
        {name: "Shopping", priority: "high"}
      ],
      newItem: "",
      priority: "",
    },
    methods: {
      saveNewItem: function () {
        this.items.push(
          {name: this.newItem, priority: this.priority}
        )
      }
    }
  });
});