import React from 'react'
import ObjectTypeSelect from './ObjectTypeSelect';
import SearchBox from './SearchBox';



const Catalog = () => {
    return (
        <div className="flex flex-row items-end">
            <div className="basis-1/4 pr-5"><ObjectTypeSelect /></div>
            <div className="basis-3/4 pl-5"><SearchBox /></div>
        </div>
    )
}

export default Catalog;
