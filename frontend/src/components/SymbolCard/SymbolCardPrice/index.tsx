import { memo } from 'react';
import './symbolCardPrice.css';
import { getTruncPrice } from '../../../utils/truncPrice';

type SymbolCardPriceProps = {
  price: number;
};

const SymbolCardPrice = ({ price }: SymbolCardPriceProps) => {
  return (
    <div className='symbolCardPriceRow'>
      <div className='symbolCardPriceText'>Price:</div>
      <div className='symbolCardPriceValue'>{getTruncPrice(price)}</div>
    </div>
  );
};
export default memo(SymbolCardPrice);
