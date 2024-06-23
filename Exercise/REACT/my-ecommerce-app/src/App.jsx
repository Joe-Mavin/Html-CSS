import React, { useState } from 'react';
import FilterComponent from './components/filter.component';
import ProductListComponent from './components/productList.component';

const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
  { id: 2, name: 'Shirt', category: 'Clothing', price: 50 },
  { id: 3, name: 'Book', category: 'Books', price: 20 },
  {id:4, name: 'Novel', category: 'Books',price: 25},
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div>
      <FilterComponent
        searchTerm={searchTerm}
        selectedCategories={selectedCategories}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ProductListComponent products={filteredProducts} />
    </div>
  );
}

export default App;

