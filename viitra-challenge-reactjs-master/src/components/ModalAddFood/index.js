import React, { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

const ModalAddFood = ({ isOpen, setIsOpen, handleAddFood }) => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    let newFood = {
      id: '',
      name: '',
      description: '',
      price: '',
      available: true,
      image: '',
      quantity: '',
      timeToCook: '',
      ...data,
    };
    handleAddFood(newFood);
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
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
        <button>
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
