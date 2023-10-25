class Component {
    render() {
        console.log("render from Component")
    }
}

// let component = new Component();
// component.render();

class App extends Component {
    render() {
        console.log("render from App")
    }
}
let app = new App();
app.render();



