import React, { useState, useEffect } from 'react';
import CupomService from './services/api';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap';


function CouponList() {
  const [cupons, setCupons] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentCupom, setCurrentCupom] = useState(null);


  useEffect(() => {
    CupomService.getAll()  // Mudança aqui
      .then(response => {
        setCupons(response.data);
      })
      .catch(error => {
        console.error("Erro ao carregar cupons:", error);
      });
  }, []);

  function handleDelete(id) {
    CupomService.delete(id).then(response => {
      console.log("deletado", response)
    }).catch(error => {
      console.log("erro", error)
    })
  }
  function handleEdit(id) {
    const cupom = cupons.find(c => c.id === id);
    setCurrentCupom(cupom);
    setShowEditModal(true);
  }
  function handleUp(id, updatedCupom) {
    CupomService.update(id, updatedCupom)
      .then(response => {
        const updatedCupons = cupons.map(cupom => cupom.id = id ? response.data : cupom
        );
        setCupons(updatedCupons);
        console.log("up sucess", response);
      })
      .catch(error => {
        console.log("erro", error);
      });

  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Lista de Cupons</h2>
      <div className="row">
        {cupons.map(cupom => (
          <div key={cupom.id} className="col-md-4">
            <div className="card mb-4">
              <div className="card-header">
                {cupom.codigo}
              </div>
              <div className="card-body">
                <p className="card-text">Desconto: {cupom.desconto}%</p>
                <p className="card-text">Validade: {cupom.validade}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Atualizado em: {new Date(cupom.updated_at).toLocaleDateString()}
                  <button className='btn' onClick={() => handleDelete(cupom.id)}> <FaTrash /></button>
                  <button className='btn' onClick={() => handleEdit(cupom.id)}><FaEdit /></button>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editando Cupom</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="codigo">
              <Form.Label>Código</Form.Label>
              <Form.Control
                type="text"
                value={currentCupom?.codigo || ''}
                onChange={e => setCurrentCupom({ ...currentCupom, codigo: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="desconto">
              <Form.Label>Desconto</Form.Label>
              <Form.Control
                type="text"
                value={currentCupom?.desconto || ''}
                onChange={e => setCurrentCupom({ ...currentCupom, desconto: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Validade:</Form.Label>
              <Form.Control
                type='date'
                value={currentCupom?.validade || ''}
                onChange={e => setCurrentCupom({ ...currentCupom, validade: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => {
            handleUp(currentCupom.id, currentCupom)
            setShowEditModal(false);
          }}>
            Salvar Alterações
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

export default CouponList;