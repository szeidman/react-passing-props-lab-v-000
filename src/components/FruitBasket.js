import React  from 'react';

const FruitBasket = props => {
  return (
    <div className="fruit-basket">
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
