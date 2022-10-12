import './Pager.css';
import { createPages } from '../../utils/index.js';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePage } from '../../Redux/Actions/index.js';


function Pager({products}) {
    const productsByPage = 15;
    const pages = createPages(products.length, productsByPage);
    const numberPages = Object.keys(pages);

    const dispatch = useDispatch();
    const [statePages, setStatePages] = useState({
        activePage: '1',
        minLimit: 1,
        maxLimit: 15
    });
    
    useEffect(() => {
        dispatch(changePage([statePages.minLimit, statePages.maxLimit]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [statePages])

    function selectPage(event){
        const selectedPage = event.target.value;
        
        setStatePages({
            ...statePages,
            activePage: selectedPage,
            minLimit: pages[selectedPage][0],
            maxLimit: pages[selectedPage][1]
        })
    }
    
    return (
        <div className="pager">
            <p className="pager-title">{`Productos ${statePages.minLimit + 1} al ${statePages.maxLimit} de ${products.length}`}</p>
            {numberPages.map(page => {
                return <button className={statePages.activePage === page ? 'page-active' : 'pager-number-page'} 
                    value={page} 
                    onClick={selectPage}>{page}
                </button>
            })}
        </div>
    );
}

export default Pager;