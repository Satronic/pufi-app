import './Pager.css';
import { createPages } from '../../utils/index.js';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../Redux/Actions/index.js';


function Pager({products}) {
    
    const dispatch = useDispatch();
    const valuePages = useSelector(state => state.pages);
    console.log(valuePages);

    const [statePages, setStatePages] = useState({
        activePage: '1',
        minLimit: 0,
        maxLimit: 15
    });
    
    const productsByPage = 15;
    const pages = createPages(products.length, productsByPage);
    const numberPages = Object.keys(pages);

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
            <p className="pager-title">{`Productos ${valuePages[0] + 1} al ${valuePages[1]} de ${products.length}`}</p>
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