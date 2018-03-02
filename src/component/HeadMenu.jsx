import { Component, OnClickEvent, Param } from "rainbowui-core";
import { Util } from 'rainbow-foundation-tools';
import '../css/headmenu.css';
import PropTypes from 'prop-types';

export default class HeadMenu extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        this.handleHover();
    }

    componentDidMount() {
        this.handleHover();
    }

    handleHover() {
        $('.navigation-item').unbind();
        $('.navigation-item').hover(function (e) {
            $(".navigation-item:hover").addClass('nav-up-selected');
            $(".navigation-item:hover > .navigation-item-down").slideDown(100);
            $(".navigation-item:hover").stop(true, true);
        }, function () {
            $(".navigation-item").removeClass('nav-up-selected');
            $(".navigation-item > .navigation-item-down").slideUp(100);
            $(".navigation-item").stop(true, true);
        })
    }

    renderHeaderBody() {
        let returnArray = [];
        this.props.children.forEach((child, index) => {
            if (_.isArray(child)) {
                returnArray = child;
            } else {
                if (child.type.name != "HeadMenuFunc" && child.type.name != "HeadMenuLogo") {
                    returnArray.push(child);
                }
            }
        })
        return returnArray;
    }
    renderDataSource() {
        let returnArray = [];
        for (let id = 0; id < this.props.dataSource.length; id++) {
            debugger
            returnArray.push(
                <li className="navigation-item" data-item={this.props.dataSource[id].value}>
                    <h2 className="navigation-item-up">
                        <a href="#" onClick={this.onClickItem.bind(this, this.props.dataSource[id].param)}>{this.getI18n(this.props.dataSource[id].value)}</a>
                    </h2>
                    <div className="navigation-item-down">
                        <div className="navigation-down-inner">
                            {this.props.dataSource[id].children ? this.getSecondItem(id) : ''}
                        </div>
                    </div>
                </li>)
        }
        return returnArray;
    }
    render() {
        return (
            <div className={Util.parseBool(this.props.headmenuTop) ? 'headmenu headmenu-top' : 'headmenu'}>
                {this.props.children.filter((child, index) => {
                    if (child && child.type) {
                        return child.type.name == "HeadMenuLogo";
                    }
                })}
                <ul className="navigation" >
                    {this.props.useDataSource ? this.renderDataSource() : this.renderHeaderBody()}
                </ul>
                {this.props.children.filter((child, index) => {
                    if (child && child.type) {
                        return child.type.name == "HeadMenuFunc";
                    }
                })}
            </div>
        )
    }

    getSecondItem(id) {
        let returnArray = [];
        for (let sId = 0; sId < this.props.dataSource[id].children.length; sId++) {
            returnArray.push(
                <dl>
                    <dt onClick={this.onClickItem.bind(this, this.props.dataSource[id].children[sId].param)}>
                        {this.getI18n(this.props.dataSource[id].children[sId].value)}
                    </dt>
                    {this.props.dataSource[id].children[sId].children ? this.getThirdItem(id, sId) : ''}
                </dl>
            )
        }
        return returnArray;
    }
    getThirdItem(id, sId) {
        let returnArray = [];
        for (let tId = 0; tId < this.props.dataSource[id].children[sId].children.length; tId++) {
            returnArray.push(
                <dd>
                    <a href={this.props.dataSource[id].children[sId].children[tId].param}
                        onClick={this.onClickItem.bind(this, this.props.dataSource[id].children[sId].children[tId].param)}>
                        {this.getI18n(this.props.dataSource[id].children[sId].children[tId].value)}</a>
                </dd>
            )
        }
        return returnArray;
    }
    onClickItem(param, e) {
        if (param) {
            e.preventDefault ? e.preventDefault() : window.event.returnValue == false;
            event.param = param;
            this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));
        }
    }


};


/**
 * HeadMenu component prop types
 */
HeadMenu.propTypes = $.extend({}, Component.propTypes, {
    headmenuTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    useDataSource: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    dataSource: PropTypes.object,
});

/**
 * Get HeadMenu component default props
 */
HeadMenu.defaultProps = $.extend({}, Component.defaultProps, {
    headmenuTop: true,
    useDataSource: false
});
