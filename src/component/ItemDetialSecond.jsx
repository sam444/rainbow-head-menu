import { Component, Param, OnClickEvent } from "rainbowui-core";
import '../css/headmenu.css';

export default class ItemDetialSecond extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <dl>
                <dt onClick={this.onClickItem.bind(this)}>
                    {this.getI18n(this.props.value)}
                </dt>
                {this.props.children}
            </dl>
        )
    }

    onClickItem(e) {
        e.preventDefault ? e.preventDefault() : window.event.returnValue == false;
        this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));
    }
};


/**
 * ItemDetialSecond component prop types
 */
ItemDetialSecond.propTypes = $.extend({}, Component.propTypes, {

});

/**
 * Get ItemDetialSecond component default props
 */
ItemDetialSecond.defaultProps = $.extend({}, Component.defaultProps, {

});
