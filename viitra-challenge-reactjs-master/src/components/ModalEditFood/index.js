import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

const ModalEditFood = ({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood,
}) => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    // EDIT A FOOD PLATE AND CLOSE THE MODAL
    let newFood = {
      id: editingFood.id,
      name: '',
      description: '',
      price: '',
      available: '',
      image: '',
      quantity: '',
      timeToCook: '',
      ...data,
    };
    handleUpdateFood(newFood);
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input
          inputLabel="Imagem"
          name="image"
          placeholder="Cole o link aqui"
        />
        <Input inputLabel="Nome" name="name" placeholder="Ex: Moda Italiana" />
        <Input inputLabel="Preço" name="price" placeholder="Ex: 19.90" />
        <Input inputLabel="Quantidade" name="quantity" placeholder="Ex: 4" />
        <Input
          inputLabel="Tempo para Cozinhar"
          name="timeToCook"
          placeholder="Ex: 14min"
        />
        <Input
          inputLabel="Descrição"
          name="description"
          placeholder="Descrição"
        />
        <button type="submit">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
