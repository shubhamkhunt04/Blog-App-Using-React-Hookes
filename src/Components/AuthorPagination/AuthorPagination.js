import React, { useState, useEffect } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const AuthorPagination = ({
  showPerPage,
  onPaginationChange,
  totalAuthors,
}) => {
  const [counter, setCounter] = useState(1);
  // const [noOfButton] = useState(
  //   Math.ceil(totalAuthors / showPerPage)
  // );

  let noOfButton =  Math.ceil(totalAuthors / showPerPage)

  useEffect(() => {
    const total = showPerPage * counter;
    const starting = total - showPerPage;
    const ending = total;
    onPaginationChange(starting, ending);
    // console.log("Pagination", starting, ending);
  }, [counter]);

  const onBttonClick = (type) => {
    if (type === "prev") {
      counter === 1 ? setCounter(1) : setCounter(counter - 1);
    } else if (type === "next") {
      noOfButton === counter ? setCounter(counter) : setCounter(counter + 1);
    }

    // type==="prev"&&counter===1?setCounter(1):setCounter(counter-1);
    // type=="next"&& counter===(Math.ceil(totalAuthors/showPerPage))?setCounter(counter):setCounter(counter+1);

    // let page = (Math.ceil(totalAuthors/showPerPage));
    // console.log(page);
    // console.log(type);
    // switch (type) {
    //   case "prev":
    //     counter===1?setCounter(1):setCounter(counter-1);
    //     break;
    //   case "next":
    //     counter===page?setCounter(counter):setCounter(counter+1);
    //   default:
    //     setCounter(counter);
    // }
  };

  // console.log("noOfButton", noOfButton);
  let numberOfButton = [];
  for (let i = 0; i < noOfButton; i++) {
    numberOfButton.push(i + 1);
  }
  // console.log(numberOfButton);

  return (
    <div className="d-flex justify-content-center my-5">
      <Pagination size="sm">
        <PaginationItem>
          <PaginationLink onClick={() => onBttonClick("prev")}>
            Prev
          </PaginationLink>
        </PaginationItem>
        {numberOfButton.map((temp, index) => {
          return (
            <div key={index}>
              <PaginationItem
                className={index + 1 === counter ? "active" : null}
              >
                <PaginationLink onClick={() => setCounter(index + 1)}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            </div>
          );
        })}
        <PaginationItem>
          <PaginationLink onClick={() => onBttonClick("next")}>
            Next
          </PaginationLink>
        </PaginationItem>
      </Pagination>{" "}
    </div>
  );
};

export default AuthorPagination;

// For Simple Previous and Next Button

{
  /* <button className="btn btn-primary" onClick={() => onBttonClick("prev")}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={() => onBttonClick("next")}>
        Next
      </button> */
}
