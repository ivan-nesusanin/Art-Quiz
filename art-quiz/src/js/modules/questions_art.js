import questionsArtPage from '../../components/questions_art.html';

export class QuestionsArt {
  constructor() {}

  async render() {
    return questionsArtPage;
  }

  async after_render() {}
}