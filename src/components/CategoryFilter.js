import React, {useState} from "react";

function CategoryFilter({tasks,categories,setTasks}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [AllFilteredTasks, setAllFilteredTasks] = useState(tasks)
 

  function handleCategorySelect(category) {
    if (category === "All") {
      setTasks(AllFilteredTasks);
    } else {
      const filteredTasks = AllFilteredTasks.filter(task => task.category === category);
      setTasks(filteredTasks);
    }
    setSelectedCategory(category);
  
    // console.log(`selected category ${category}`); // Log the category directly
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
          <button
            key={category}
            className={category === selectedCategory ? 'selected' : ''}
            onClick={() => handleCategorySelect(category)}>{category} </button>
       
      ))}
    </div>
  );
}

export default CategoryFilter;
