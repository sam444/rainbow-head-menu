import { Component, Param, OnClickEvent } from "rainbowui-core";
import '../css/headmenu.css';

export default class ItemDetialThird extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <dd>
                <a href="###" onClick={this.onClickItem.bind(this)}>{this.getI18n(this.props.value)}</a>
            </dd>
        )
    }

    onClickItem(e) {
        e.preventDefault ? e.preventDefault() : window.event.returnValue == false;
        this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));
    }
};


/**
 * ItemDetialThird component prop types
 */
ItemDetialThird.propTypes = $.extend({}, Component.propTypes, {

});

/**
 * Get ItemDetialThird component default props
 */
ItemDetialThird.defaultProps = $.extend({}, Component.defaultProps, {

});
