import React, { useState } from 'react';
import CupomService from './services/api';
import { FaBeer } from 'react-icons/fa';



const AddCoupon = () => {
  const [coupon, setCoupon] = useState({ codigo: '', desconto: '', validade: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    CupomService.create(coupon)
      .then(response => {
        // Atualize a lista ou faça outras ações aqui
        console.log(response.data);
        alert('Cupom adicionado com sucesso!');
      })
      .catch(error => {
        console.error("Houve um erro ao adicionar o cupom:", error.response);
        alert('Erro ao adicionar cupom. Tente novamente.');
      });
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Código</label>
          <input
            type="text"
            className="form-control"
            value={coupon.codigo}
            onChange={e => setCoupon({ ...coupon, codigo: e.target.value })}
            placeholder="Código do cupom"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Desconto</label>
          <input
            type="number"
            className="form-control"
            value={coupon.desconto}
            onChange={e => setCoupon({ ...coupon, desconto: e.target.value })}
            placeholder="Desconto"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Validade</label>
          <input
            type="date"
            className="form-control"
            value={coupon.validade}
            onChange={e => setCoupon({ ...coupon, validade: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Adicionar</button>
      </form>
    </div>
  );
}

export default AddCoupon;
