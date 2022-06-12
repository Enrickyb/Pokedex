import React, {useContext} from 'react'
import { ApiContext } from "../../../Context/ApiContext";
const MAX_ITEMS = 5
const MAX_LEFT = (MAX_ITEMS - 1) / 2

export default function Pagination() {
    const [url] = useContext(ApiContext);
    

  return (
    <div>

    </div>
  )
}
