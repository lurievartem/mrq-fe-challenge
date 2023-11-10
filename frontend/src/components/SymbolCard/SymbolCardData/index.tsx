import { memo } from 'react';
import './symbolCardData.css';
import { ReactComponent as IndustryLogo } from '@/assets/industry.svg';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { getTruncPrice } from '../../../utils/truncPrice';

type SymbolCardDataProps = {
  companyName: string;
  industry: string;
  marketCap: number;
};

const SymbolCardData = ({ companyName, industry, marketCap }: SymbolCardDataProps) => {
  return (
    <div className='symbolCardData'>
      <div className='symbolCardDataRow'>
        <CompanyIcon /> <div className='symbolCardDataRowText'>{companyName}</div>
      </div>
      <div className='symbolCardDataRow'>
        <IndustryLogo /> <div className='symbolCardDataRowText'>{industry}</div>
      </div>
      <div className='symbolCardDataRow'>
        <MarketCapIcon /> <div className='symbolCardDataRowText'>{getTruncPrice(marketCap)}</div>
      </div>
    </div>
  );
};
export default memo(SymbolCardData);
