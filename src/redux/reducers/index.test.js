import { books } from './index'
import {ADD_BOOK, DELETE_BOOK} from '../actions'

it('adds a book', () => {
  expect(books(undefined, {"type": ADD_BOOK, "title": "Something Wicked This Way Comes", "id": 1})).toEqual(
      [{"title": "Something Wicked This Way Comes", "id": 1}]);

  expect(books([{"title": "Something Wicked This Way Comes", "id": 1}], {"type": ADD_BOOK, "title": "Trucking Through Time", "id": 2})).toEqual(
    [{"title": "Something Wicked This Way Comes", "id": 1}, {"title": "Trucking Through Time", "id": 2}]);
});

it('deletes a book', () => {
    expect(books([{"title": "Something Wicked This Way Comes", "id": 1}], {"type": DELETE_BOOK, "id": 1})).toEqual(
        []
    );

    expect(books([{"title": "Something Wicked This Way Comes", "id": 1}], {"type": DELETE_BOOK, "id": 2})).toEqual(
        [{"title": "Something Wicked This Way Comes", "id": 1}]
    );
});