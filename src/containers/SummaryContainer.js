import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import {
  selectSubtotal,
  selectTipAmount,
  selectTotal
} from '../store/items/selectors';

const mapStateToProps = (state) => ({
  subtotal: selectSubtotal(state),
  tipAmount: selectTipAmount(state),
  total: selectTotal(state)
});

export const SummaryContainer = connect(mapStateToProps)(Summary);
