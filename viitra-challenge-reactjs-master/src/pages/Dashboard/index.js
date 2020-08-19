import React, { useState, useLayoutEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';

import { FoodsContainer } from './styles';

const Dashboard = () => {
  let nextId = 0;
  const [foods, setFoods] = useState([]);
  const [editingFood, setEditingFood] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useLayoutEffect(() => {
    async function fetchItems() {
      const currentFoods = await api.get('/foods');
      setFoods(currentFoods.data);
      getNextId(currentFoods.data);
    }

    fetchItems();
  }, []);

  function getNextId(foods) {
    nextId = Math.max(...foods.map(food => food.id)) + 1;
  }

  function checkFoods() {
    return foods !== undefined && foods.length > 0;
  }

  async function handleAddFood(food) {
    try {
      const newFood = {
        ...food,
        id: nextId,
      };
      let res = await api.post('/foods', newFood);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateFood(food) {
    // TODO UPDATE A FOOD PLATE ON THE API
    await api.put('/foods/' + food.id, food);
  }

  async function handleDeleteFood(id) {
    // TODO DELETE A FOOD PLATE FROM THE API
    await api.delete('/foods/' + id);
  }

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal() {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditFood(food) {
    setEditModalOpen(true);
    setEditingFood(food);
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {checkFoods() ? (
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))
        ) : (
          <h2> carregando... </h2>
        )}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
