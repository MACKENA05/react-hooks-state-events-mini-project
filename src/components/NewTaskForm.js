import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Only add task if both text and category are selected
    if (text && selectedCategory) {
      const newTask = { text, category: selectedCategory };
      onTaskFormSubmit(newTask);

      // Clear the form fields after submit
      setText('');
      setSelectedCategory('');
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleTextChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">-- Select a category --</option>
          {categories
            .filter((category) => category !== "All")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
