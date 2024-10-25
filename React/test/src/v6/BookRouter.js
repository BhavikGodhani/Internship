import { Routes,Route } from "react-router-dom";
import { BookList } from "./Content"
import {Book} from "./Book"
import { NewBook } from './NewBook';
import { BookLayout } from "./BookLayout";

export  function BookRouter() {
  return (
    <>
    <Routes>
     <Route element={<BookLayout />}>
     <Route index element={<BookList/>} />
      <Route path=":id" element={<Book />} />
      <Route path="new" element={<NewBook />} />
      </Route>
        </Routes>
    </>
  )
}
