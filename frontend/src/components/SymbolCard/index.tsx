import { useCallback, useEffect, useState } from 'react';
import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import SymbolCardData from '@/components/SymbolCard/SymbolCardData';
import SymbolCardPrice from '@/components/SymbolCard/SymbolCardPrice';
import usePreviousValue from '@/hooks/usePreviousValue';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
  activeSymbol: string | null;
};

const SymbolCard = ({ id, onClick, price, activeSymbol }: SymbolCardProps) => {
  const [priceClass, setPriceClass] = useState('');
  const { trend, industry, companyName, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );
  const previousPrice = usePreviousValue(price);

  const handleOnClick = useCallback(() => {
    onClick(id);
  }, [id]);

  useEffect(() => {
    if (previousPrice && price !== previousPrice) {
      const priceChangesClass = price > previousPrice ? 'symbolCard__priceUp' : 'symbolCard__priceDown';
      const shakeChangesClass = price * 1.25 >= previousPrice || price * 0.75 <= previousPrice ? 'symbolCard__shake' : '';
      setPriceClass(`${priceChangesClass} ${shakeChangesClass}`);
    }

    const interval = setInterval(() => {
      setPriceClass('');
    }, 1500);

    return () => clearInterval(interval);
  }, [price]);

  const isActive = !activeSymbol ? '' : (activeSymbol === id ? 'symbolCard__active' : 'symbolCard__unactive');

  return (
    <div onClick={handleOnClick} className={`symbolCard ${isActive} ${priceClass}`}>
      <div className={`symbolCardId ${trend ? 'symbolCardId__' + trend.toLowerCase() : ''}`}>
        {id}
      </div>
      <div className='symbolCardView'>
        <SymbolCardPrice price={price} />
        <SymbolCardData industry={industry} companyName={companyName} marketCap={marketCap} />
      </div>
    </div>
  );
};
export default SymbolCard;
