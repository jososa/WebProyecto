import { animalFilterPipe } from './animal-filter.pipe';

describe('animalFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new animalFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
