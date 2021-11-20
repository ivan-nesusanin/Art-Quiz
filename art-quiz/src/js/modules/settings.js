import settingsPage from '../../components/settings.html';

export class Settings {
  constructor() {}

  async render() {
    return settingsPage;
  }

  async after_render() {}
}
