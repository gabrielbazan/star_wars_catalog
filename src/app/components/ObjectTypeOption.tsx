import React from 'react'

const ObjectTypeOption = ({ text, value }: { text: string, value: string }) => {
    return <option value={value} key={value}>{text}</option>;
}

export default ObjectTypeOption;
