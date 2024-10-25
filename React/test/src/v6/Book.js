import { useOutletContext, useParams } from "react-router-dom"

export  function Book() {
    const {id} = useParams()
    const obj = useOutletContext()
    return    <p>Book {id} {obj.hello}</p>
    
  }
  