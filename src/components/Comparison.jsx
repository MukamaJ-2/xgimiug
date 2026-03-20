import { useEffect, useRef } from 'react';
import { FiCheck } from 'react-icons/fi';
import { trackBuyNowClick } from '../utils/analytics';
import './Comparison.css';

const specs = [
  { name: 'Resolution', mogo4: '1080p', mogo4Pro: '1080p' },
  { name: 'Brightness', mogo4: '450 ISO Lumens', mogo4Pro: '500 ISO Lumens' },
  { name: 'Battery Capacity', mogo4: 'Built-in (Up to 2.5h)', mogo4Pro: 'Built-in (Up to 2.5h)' },
  { name: 'Speakers', mogo4: 'Dual 2x6W Harman/Kardon', mogo4Pro: 'Dual 2x6W Harman/Kardon' },
  { name: 'Intelligent Screen Adaptation', mogo4: 'ISA 2.0', mogo4Pro: 'ISA 2.0' },
  { name: 'Base Stand', mogo4: 'Mini Integrated Stand', mogo4Pro: 'Advanced Integrated Stand' },
  { name: 'Google TV', mogo4: true, mogo4Pro: true },
  { name: 'Netflix Certified', mogo4: true, mogo4Pro: true },
];

const Comparison = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (tableRef.current) observer.observe(tableRef.current);
    
    return () => {
      if (tableRef.current) observer.unobserve(tableRef.current);
    };
  }, []);

  return (
    <section id="compare" className="section comparison">
      <div className="container">
        <div className="section-header fade-up visible">
          <h2 className="h2 text-gradient">Which MoGo 4 is right for you?</h2>
          <p className="subtitle">Compare specifications to find your perfect match.</p>
        </div>

        <div className="table-wrapper fade-up" ref={tableRef}>
          <table className="comparison-table glass">
            <thead>
              <tr>
                <th className="spec-name">Feature</th>
                <th className="product-col">
                   <div className="product-header">
                     <h3>MoGo 4</h3>
                     <span className="price">$499</span>
                     <a href="https://eu.xgimi.com/products/mogo-4" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" onClick={() => trackBuyNowClick('comparison_mogo4')}>Buy Now</a>
                   </div>
                </th>
                <th className="product-col pro-col">
                   <div className="product-header">
                     <h3>MoGo 4 Pro</h3>
                     <span className="price">$599</span>
                     <a href="https://eu.xgimi.com/products/mogo-4-pro" target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-sm" onClick={() => trackBuyNowClick('comparison_mogo4_pro')}>Buy Now</a>
                   </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, index) => (
                <tr key={index}>
                  <td className="spec-name">{spec.name}</td>
                  <td>
                    {typeof spec.mogo4 === 'boolean' ? (
                      spec.mogo4 ? <FiCheck className="check-icon" /> : '-'
                    ) : (
                      spec.mogo4
                    )}
                  </td>
                  <td className="pro-cell">
                    {typeof spec.mogo4Pro === 'boolean' ? (
                      spec.mogo4Pro ? <FiCheck className="check-icon pro-check" /> : '-'
                    ) : (
                      <span className={spec.mogo4 !== spec.mogo4Pro ? 'highlight-spec' : ''}>
                        {spec.mogo4Pro}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
