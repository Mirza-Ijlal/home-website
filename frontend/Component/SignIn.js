"use client"

import React, { useState, useEffect } from "react";




function SellItemForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // to track the item being edited

  useEffect(() => {
    // Retrieve stored items from local storage when the component mounts
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever the items state changes
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Update an existing item
      items[editIndex] = {
        title,
        description,
        price,
        location,
        name,
        email,
        phone,
      };
      setEditIndex(null);
    } else {
      // Add a new item
      const newItem = {
        title,
        description,
        price,
        location,
        name,
        email,
        phone,
      };
      setItems([...items, newItem]);
    }

    setTitle("");
    setDescription("");
    setPrice("");
    setLocation("");
    setName("");
    setEmail("");
    setPhone("");
  };

  const handleEdit = (index) => {
    // Populate the form with data from the item being edited
    const itemToEdit = items[index];
    setTitle(itemToEdit.title);
    setDescription(itemToEdit.description);
    setPrice(itemToEdit.price);
    setLocation(itemToEdit.location);
    setName(itemToEdit.name);
    setEmail(itemToEdit.email);
    setPhone(itemToEdit.phone);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    // Remove an item by its index
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    setEditIndex(null); // Reset the editIndex
  };

  return (
    <div className="sell-item-form">
      <h2>Sell Your Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label>Price (in $):</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <h3>Contact Information:</h3>
        <div className="form-section">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type="submit">{editIndex !== null ? "Edit" : "Submit"}</button>
      </form>

      <div className="items-list">
        <h2>Items for Sale</h2>
        {items.map((item, index) => (
          <div className="item" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Location: {item.location}</p>
            <p>Contact: {item.name}, {item.email}, {item.phone}</p>
            <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SellItemForm;
