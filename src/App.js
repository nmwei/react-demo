import React, {useCallback, useRef, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroller';

// const App = () => {
//     const [items, setItems] = useState([]);
//
//     const fetchItems = async (page) => {
//         setTimeout(() => {
//             setItems(items => {
//                 const newItems = [...items];
//                 for (let i = (page - 1) * 100; i < page * 100; i++) {
//                     newItems.push(i);
//                 }
//                 return newItems;
//             })
//         }, 500)
//     }
//
//     const scrollParent = useRef(null);
//
//     return (
//         <div style={{height: "600px", overflow: "auto"}} ref={scrollParent}>
//             <div>
//                 <InfiniteScroll
//                     loadMore={fetchItems}
//                     hasMore={items.length < 500}
//                     loader={<div key="loader" className="loader">Loading ...</div>}
//                     useWindow={false}
//                     getScrollParent={() => scrollParent.current}
//                 >
//                     <ul>
//                         {items.map(item => (
//                             <li style={{width: "300px"}} key={item}>
//                                 {item}
//                             </li>
//                         ))}
//                     </ul>
//                 </InfiniteScroll>
//             </div>
//         </div>
//     );
// };



const App = () => {
    const [items, setItems] = useState([]);

    const scrollParent = useRef(null);

    const fetchItems = async () => {
        setTimeout(() => {
            setItems(items => {
                const newItems = [...items];
                for (let i = items.length; i < items.length + 100; i++) {
                    newItems.push(i);
                }
                return newItems;
            })
        }, 500)
    }

    const loader = (
        <div key="loader" className="loader">
            Loading ...
        </div>
    );

    return (
        <div style={{height: "700px", overflow: "auto"}} ref={scrollParent}>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <div style={{width: "300px"}}>1</div>
                <div style={{width: "300px"}}>2</div>
                <div style={{width: "300px"}}>3</div>
                <div style={{width: "300px"}}>4</div>
                <div style={{width: "300px"}}>5</div>
                <div style={{width: "300px"}}>6</div>
            </div>
            <h1>无限滚动</h1>
            <div>
                <InfiniteScroll
                    loadMore={fetchItems}
                    hasMore={items.length < 500}
                    loader={loader}
                    useWindow={false}
                    getScrollParent={() => scrollParent.current}
                    //element={'ul'}
                >
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        {items.map(item => (
                            <div style={{width: "300px"}} key={item}>
                                {item}
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default App;
