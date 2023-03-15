import PropTypes from 'prop-types';

export const Statistics = ({ title, data  }) => {
    
    return (
        <section className="">

        {title && (<h2 className="title">{title}</h2>)}
     
       <ul className="">
       {data.map(({id, label, percentage}) => (
         <li key={id} className=""><span className="">{label}</span>
         <span className="">{percentage}</span></li>
       ))}
       </ul>
     </section>
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