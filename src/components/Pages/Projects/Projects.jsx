import './projects.css';
import { useState, useRef} from 'react';
import ArrowRightLogo from './Logos/ArrowRight';

const Projects = ()=>{
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']; // Add more items as needed
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const wrapperRef = useRef(null);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="project list-container" name="pojects">
            <button onClick={handlePrevPage} disabled={currentPage === 0}>&lt; Prev</button>
            <div className="horizontal-list">
                <div
                    ref={wrapperRef}
                    className="list-items-wrapper"
                >
                    {visibleItems.map((item, index) => (
                        <div key={index} className="list-item">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="arrow-container">
                <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
                    <ArrowRightLogo/>
                </button>
            </div>
        </div>
    )
}
export default Projects