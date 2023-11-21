import React, { Component } from 'react';

class RandomNumberGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generatedNumbers: [],
      quantity: 1, // Defina um valor padrão, como 1
    };
  }

  handleQuantityChange = (event) => {
    this.setState({ quantity: parseInt(event.target.value, 10) || 1 });
  };

  generateRandomNumbers = () => {
    const { quantity, generatedNumbers } = this.state;
    const newRandomNumbers = [];

    while (newRandomNumbers.length < quantity) {
      const newRandomNumber = Math.floor(Math.random() * 60) + 1;

      if (!generatedNumbers.includes(newRandomNumber)) {
        newRandomNumbers.push(newRandomNumber);
      }
    }

    // Atualiza o estado com os novos números gerados e adiciona à lista de números gerados
    this.setState((prevState) => ({
      generatedNumbers: [...prevState.generatedNumbers, ...newRandomNumbers],
    }));
  };

  render() {
    const { generatedNumbers } = this.state;

    return (
      <div>
        <h2>Números Aleatórios:</h2>
        <p>{generatedNumbers.join(', ')}</p>
        <div>
          <label>
            Quantidade de Números:
            <input
              type="number"
              value={this.state.quantity}
              onChange={this.handleQuantityChange}
            />
          </label>
        </div>
        <button onClick={this.generateRandomNumbers}>Gerar Números Aleatórios</button>
      </div>
    );
  }
}

export default RandomNumberGenerator;


