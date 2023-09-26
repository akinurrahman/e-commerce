import React, { useContext } from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { FilterContext } from "../context/FilterContext";
const Sort = () => {
  const {
    grid_view,
    setGridView,
    setListView,
    filter_products,
    handleSorting,
    selected_value,
  } = useContext(FilterContext);
  return (
    <Wrapper className="sort-section">
      {/* 1st column */}
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={grid_view ? "sort-btn" : "active sort-btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>
      {/* 2nd column */}
      <div className="products-data">
        <p>{`${filter_products.length} Product Available`}</p>
      </div>
      {/* 3rd column */}
      <div className="sort-section">
        <form action="">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            className="sort-selection--style"
            id="sort"
            value={selected_value}
            onChange={handleSorting}
          >
            <option value="">Sort By</option>
            <option value="Lowest To Highest">Price--Low to High</option>
            <option value="Highest To Lowest">Price--High to Low</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-section .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }

  @media (max-width: 770px) {
    .sorting-list--grid {
      display: none;
    }
  }
`;

export default Sort;
