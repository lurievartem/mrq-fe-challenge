import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import SymbolCard from '../SymbolCard';
import Loading from '../Loading';
import { fetchAllStocks, selectors } from '@/store/stocksSlice';
type SymbolsGridProps = {
  onSymbolClick: (symbolId: string) => void;
  activeSymbol: string | null;
};

const SymbolsGrid = ({ onSymbolClick, activeSymbol }: SymbolsGridProps) => {
  const stockSymbols = useAppSelector(selectors.selectStockIds);
  const prices = useAppSelector((state) => state.prices);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllStocks());
  }, [dispatch]);

  if (!stockSymbols?.length || !Object.keys(prices).length){
    return <Loading/>;
  }

  return (
    <>
      {stockSymbols.map((id) => (
        <SymbolCard activeSymbol={activeSymbol} price={prices[id]} onClick={onSymbolClick} key={id} id={id} />
      ))}
    </>
  );
};

export default SymbolsGrid;
