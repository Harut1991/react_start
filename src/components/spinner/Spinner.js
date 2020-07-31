import React, {type Node} from 'react';

type Props = {|
    load: boolean,
    children: Node
|};

function Spinner(props: Props) {
    if (props.load) {
        return <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    } else return props.children;

}
export default Spinner;
