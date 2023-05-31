import React, { useState } from 'react'
import './style.scss'

const KatalogPage = () => {
  // Define the initial state and filter options
  const [filter, setFilter] = useState('all') // 'all' indicates no filter applied
  const filterOptions = [
    { value: 'bath', label: 'Бомбочки для ванны' },
    { value: 'soap', label: 'Мыло' },
    { value: 'face', label: 'Маска для лица' },
    { value: 'body', label: 'Масло для тела' },
    { value: 'powder', label: 'Пудра' },
    { value: 'cream', label: 'Крем для лица' },
    { value: 'all', label: 'Показать все' },
  ]

  // Define the product data
  const products = [
    {
      id: 1,
      image: '/images/t1.png',
      name: 'Sun',
      price: '90pуб',
      description: 'бомбочка для ванны',
      size: '20g',
      category: 'bath',
    },
    {
      id: 2,
      image: '/images/t2.png',
      name: 'Levender',
      price: '290pуб',
      description: 'мыло ручной работы',
      size: '50g',
      category: 'soap',
    },
    {
      id: 3,
      image: '/images/t3.png',
      name: 'Lotos',
      price: '890pуб',
      description: 'маска для лица',
      size: '50ml',
      category: 'face',
    },
    {
      id: 4,
      image: '/images/t4.png',
      name: 'Coconut',
      price: '990pуб',
      description: 'масло для тела',
      size: '300ml',
      category: 'body',
    },
    {
      id: 5,
      image: '/images/t5.png',
      name: 'Clean',
      price: '490pуб',
      description: 'маска для лица',
      size: '100g',
      category: 'face',
    },
    {
      id: 6,
      image: '/images/t6.png',
      name: 'Violet',
      price: '890pуб',
      description: 'крем для лица',
      size: '50ml',
      category: 'face',
    },
    {
      id: 7,
      image: '/images/t7.png',
      name: 'Paradise',
      price: '590pуб',
      description: 'минеральная пудра',
      size: '15g',
      category: 'powder',
    },
    {
      id: 8,
      image: '/images/t8.png',
      name: 'Milk',
      price: '790pуб',
      description: 'масло для тела',
      size: '150ml',
      category: 'body',
    },
    {
      id: 9,
      image: '/images/t9.png',
      name: '690pуб',
      price: '90pуб',
      description: 'минеральная пудра',
      size: '20g',
      category: 'powder',
    },
    {
      id: 10,
      image: '/images/t10.png',
      name: 'Rose',
      price: '890pуб',
      description: 'крем для лица',
      size: '50ml',
      category: 'cream',
    },
    {
      id: 11,
      image: '/images/t11.png',
      name: 'High',
      price: '990pуб',
      description: 'крем для лица',
      size: '50ml',
      category: 'cream',
    },
    {
      id: 12,
      image: '/images/t12.png',
      name: 'Earth',
      price: '890pуб',
      description: 'бомбочка для ванны',
      size: '20g',
      category: 'bath',
    },
  ]

  const filteredProducts =
    filter === 'all'
      ? products
      : products.filter(product => product.category === filter)

  return (
    <div className="katalog">
      <div className="kataloss_header">
        <div className="filter-buttons">
          {filterOptions.map(option => (
            <button
              key={option.value}
              className={`filter-button ${
                filter === option.value ? 'active' : ''
              }`}
              onClick={() => setFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="tovars">
          {filteredProducts.map(product => (
            <div key={product.id} className="tovar">
              <img
                className={`t${product.id}`}
                src={product.image}
                alt={product.name}
              />
              <table>
                <tr>
                  <th>{product.name}</th>
                  <th>{product.price}</th>
                </tr>
                <tr>
                  <td>{product.description}</td>
                  <td>{product.size}</td>
                </tr>
              </table>
              <div>
                <button className="Podrob">Подробнее</button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <img className="PrisoedFon1" src="/images/60.png" alt="PrisoedFon1" />
          <div className="Pr11">Присоединяйтесь к нам</div>
          <div className="Pr111">
            Подпишитесь на наш аккаунт @marooncare<br></br> и узнавайте о
            новиках и акциях первыми
          </div>
        </div>
      </div>
    </div>
  )
}

export default KatalogPage
