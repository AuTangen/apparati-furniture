import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  const [currentCategory, setCurrentCategory] = useState('All')

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id, name) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
    if(name) {
      setCurrentCategory(name)
    }
    else {
      setCurrentCategory('All')
    }
  };
  // console.log(currentCategory)

  return (

    <div className='category-div'>
      <h2>{currentCategory}</h2>
      <div className='category-list'>
        <button
          className='category-btn'
          onClick={() => {
            handleClick();
          }}
        >
          All
        </button>
        {categories.map((item) => (
          <button
            className='category-btn'
            key={item._id}
            onClick={() => {
              handleClick(item._id, item.name);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>

  );
}

export default CategoryMenu;
