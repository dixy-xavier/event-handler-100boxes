import "./styles.css";

class pane {
  componentID = "";
  template = "";
  handle;

  constructor() {
    this.componentID = "";
  }

  loadTemplate(x) {
    this.template = x.cloneNode(true);
  }

  render() {
    this.template.setAttribute('id', this.componentID);
    return this.template;
  }

  createHandle() {
    this.handle = document.getElementById(this.componentID);
  }

  getHandle() {
    return this.handle;
  }
} //end of class pane

class personViewPane extends pane {
  name = "";

  constructor(id, container) {
    super();
    this.componentID = personViewPane.name + id;
    this.name = "user" + id;
    this.loadTemplate(
      document.getElementById("personViewPane-template").firstElementChild
    ); document.getElementById(container).appendChild(this.render());
    this.createHandle();
    this.addListeners();
    this.validateUI();
  }

  validateUI() {
    this.getHandle().getElementsByClassName("text")[0].innerHTML = this.name;
  }

  showName(id) {
    alert(id);
  }

  addListeners() {
    this.getHandle().addEventListener("click", () =>
      this.showName(this.componentID)
    );
  }
} //end of class personViewPane

var p = [];

for (let i = 0; i < 100; i++) {
  p[i] = new personViewPane(i, "view"); // create objects
}
