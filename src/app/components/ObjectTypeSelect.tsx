import React from 'react'
import ObjectTypeOption from './ObjectTypeOption';

interface ObjectType {
    name: string;
    endpoint: string;
}

const DEFAULT_OBJECT = "films"

const OBJECT_TYPES: ObjectType[] = [
    {
        name: "Films",
        endpoint: "films"
    },
    {
        name: "People",
        endpoint: "people"
    },
    {
        name: "Planets",
        endpoint: "planets"
    },
    {
        name: "Species",
        endpoint: "species"
    },
    {
        name: "Starships",
        endpoint: "starships"
    },
    {
        name: "Vehicles",
        endpoint: "vehicles"
    },
];

const ObjectTypeSelect = () => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Pick what you're looking for</span>
            </label>
            <select className="select select-bordered" defaultValue={DEFAULT_OBJECT}>
                {
                    OBJECT_TYPES.map(
                        (type: ObjectType) => <ObjectTypeOption text={type.name} value={type.name} key={type.endpoint} />
                    )
                }
            </select>
        </div>
    )
}

export default ObjectTypeSelect;
