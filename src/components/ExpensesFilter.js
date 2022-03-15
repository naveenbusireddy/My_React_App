import React from "react";
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const dropDownChangeHandler = (dropDownList) =>
    {
        console.log(dropDownList.target.value);
        props.onChangeFilter(dropDownList.target.value);
    };

    return (
        <div className="expenses_filter">
            <div className="expenses-filter__control">
                <label className="expenses-filter label">Filter By Year</label>
                <select onChange={dropDownChangeHandler} value={props.Selected}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>

                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;