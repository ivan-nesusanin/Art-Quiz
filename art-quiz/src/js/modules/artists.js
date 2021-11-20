import artistsPage from '../../components/artists.html';

export class Artists {
  constructor() {}

  async render() {
    return artistsPage;
  }

  async after_render() {}
}