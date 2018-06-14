import Engine from './Engine/Engine';
import MainMenu from './Scenes/MainMenu';

let e = new Engine();
let m = new MainMenu();

e.LoadScene(m);
e.Render();