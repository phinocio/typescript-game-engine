import Engine from './Engine/Engine';
import MainMenu from './Scenes/MainMenu';

const e = new Engine();
const m = new MainMenu();

e.loadScene(m);
e.gameLoop();
