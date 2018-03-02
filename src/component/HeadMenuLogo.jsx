import { Component } from "rainbowui-core";
import { Util } from 'rainbow-foundation-tools';
import '../css/headmenu.css';
import PropTypes from 'prop-types';

export default class HeadMenuLogo extends Component {

    render() {
        return (
            <div className="headmenu_logo">
                {this.props.logo ? <img src={this.props.logo} /> : <noScript />}
                {this.props.logoContent ? this.props.logoContent : <noScript />}
                <span>{this.props.logoText}</span>
            </div>
        )
    }
};


/**
 * HeadMenuLogo component prop types
 */
HeadMenuLogo.propTypes = $.extend({}, Component.propTypes, {
    logoContent: PropTypes.func
});

/**
 * Get HeadMenuLogo component default props
 */
HeadMenuLogo.defaultProps = $.extend({}, Component.defaultProps, {

});
