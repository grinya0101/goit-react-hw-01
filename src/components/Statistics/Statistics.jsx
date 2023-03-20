import PropTypes from 'prop-types';
import {StatisticsWrap, Title, StatList, ItemWrapper, Label, Percentage} from './Statistics.staled'

export const Statistics = ({ title, data  }) => {
    
    return (
        <StatisticsWrap className="">

        {title && (<Title className="title">{title}</Title>)}
     
       <StatList className="">
       {data.map(({id, label, percentage}) => (
         <ItemWrapper key={id} className=""><Label className="">{label}</Label>
         <Percentage percentage={percentage} >{percentage}</Percentage></ItemWrapper>
       ))}
       </StatList>
     </StatisticsWrap>
  );
}


Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        })
    )
}