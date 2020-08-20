import React, { useRef } from 'react';
import * as Yup from 'yup';
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

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string().min(42).required(),
        price: Yup.string()
          .matches(/\d+\.\d\d/)
          .required(),
        image: Yup.string().url().required(),
        quantity: Yup.number().positive().required(),
        timeToCook: Yup.string()
          .matches(/^\d+min\b|^\d+h\b/)
          .required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      let newFood = {
        id: editingFood.id,
        name: '',
        description: '',
        price: '',
        available: editingFood.available,
        image: '',
        quantity: '',
        timeToCook: '',
        ...data,
      };
      handleUpdateFood(newFood);
      setIsOpen(false);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <div className="form-container">
          <Input
            inputLabel="Imagem"
            name="image"
            placeholder="Cole o link aqui"
          />
          <Input
            inputLabel="Nome"
            name="name"
            placeholder="Ex: Moda Italiana"
          />
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
        </div>
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
