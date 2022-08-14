import { connect } from 'react-redux';
import { Summary } from '../components/Summary';

const mapStateToProps = (state) => {
  const subtotal = state.items.reduce((acc, curr) => {
    return (acc += curr.quantity * curr.price);
  }, 0);

  const tipAmount = subtotal * (state.tipPercentage / 100);

  const total = subtotal + tipAmount;

  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
