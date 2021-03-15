import React,{component} from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => <div>
    <h1>this is parent component</h1>
    <ChildComponent name="vinay"/>
    <ChildComponent name="vivan"/>

</div>

export default ParentComponent;