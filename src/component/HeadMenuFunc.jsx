import { Component, Param, OnClickEvent } from "rainbowui-core";
import '../css/headmenu.css';

export default class HeadMenuFunc extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="headmenu_func">
                {this.props.children}
            </div>
        )
    }
};


/**
 * HeadMenuFunc component prop types
 */
HeadMenuFunc.propTypes = $.extend({}, Component.propTypes, {

});

/**
 * Get HeadMenuFunc component default props
 */
HeadMenuFunc.defaultProps = $.extend({}, Component.defaultProps, {

});
