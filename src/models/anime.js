import { Record } from 'immutable';

const AnimeRecord = Record({
  id: null,
  type: 'anime',
  slug: '',
  title: '', // canonicalTitle
  synopsis: '',
  averageRating: 0,
  posterImage: '',
});

export default AnimeRecord;