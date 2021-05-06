import React from 'react';
import {Message} from 'semantic-ui-react';

const Loading = (props) => {
        if(props.show){
            return(
                <Message
                    warning
                    header='Delay Warning'
                    content='More data may be shown on the graph before the chart is paused'
                />
            );
        }else{
            return(null);
        }
}

export default Loading;