import { Component, Param, OnClickEvent } from "rainbowui-core";
import '../css/headmenu.css';
import PropTypes from 'prop-types';

export default class HeadMenuItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.logo != null && this.props.logo != undefined) {
            return (
                <li className="navigation-item" data-item={this.props.value} >
                    <img className="navigation-item-up" src={this.props.logo} />
                    <span className="">{this.props.logoText}</span>
                </li>
            )
        } else {
            return (
                <li className="navigation-item" data-item={this.props.value}>
                    <h2 className="navigation-item-up">
                        <a href="#" onClick={this.onClickItem.bind(this)}>{this.getI18n(this.props.value)}</a>
                    </h2>
                    <div className="navigation-item-down">
                        <div className="navigation-down-inner">
                            {this.props.children}
                        </div>
                    </div>
                </li>
            )
        }

    }

    onClickItem(e) {
        e.preventDefault ? e.preventDefault() : window.event.returnValue == false;
        this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));
    }

};


/**
 * HeadMenuItem component prop types
 */
HeadMenuItem.propTypes = $.extend({}, Component.propTypes, {
    onClick: PropTypes.func
});

/**
 * Get HeadMenuItem component default props
 */
HeadMenuItem.defaultProps = $.extend({}, Component.defaultProps, {

});
