import React, { useContext } from "react";
import { ApiContext } from "../../../../Context/ApiContext";
import * as C from "./style";

const MAX_ITEMS = 5;
let MAX_LEFT = (MAX_ITEMS - 1) / 2;
let MAX_RIGHT = (MAX_ITEMS + 1) / 2;

export default function Pagination() {
  const { offSet, LIMIT, Total } = useContext(ApiContext);
  const [offset, setOffset] = offSet;
  const limit = LIMIT;
  const total = Total;

  //se o offset não for zero divido pelo limit, se for zero to na pagina 1
  const current = offset ? offset / limit + 1 : 1;
  //arredonda a quantidade de paginas pra cima
  const pages = Math.ceil((total / limit) - 1);
  //primeiro botão da paginação (sem resultado negativo)
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(
    Math.max(current - MAX_LEFT, 1),
    maxFirst
  );


  function PageChange(page) {
    setOffset((page - 1) * limit);
    
  }


  return (
    <C.pagination>
      <li>
        <C.prevAndNextButton
          onClick={() => {
            PageChange(current - 1);
          }}
          disabled={current === 1}
        >
          <img src="./images/prev.png" alt="prevButton" />
        </C.prevAndNextButton>
      </li>

      {/* Cria o array baseado na quantitdade de paginas */}
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <C.paginationButtons
              focusColor={page === current ? "#D53B47" : null}
              onClick={() => {
                PageChange(page);
              }}
            >
              {page}
            </C.paginationButtons>
          </li>
        ))}

      <li>
        <C.prevAndNextButton
          onClick={() => {
            PageChange(current + 1);
          }}
          disabled={current === pages}
        >
          <img src="./images/next.png" alt="nextButton" />
        </C.prevAndNextButton>
      </li>
    </C.pagination>
  );
}
