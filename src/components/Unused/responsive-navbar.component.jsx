/* eslint-disable react/no-find-dom-node */
import React from 'react';
import PropTypes from 'prop-types';
import { FloatingSelect } from '@opuscapita/react-floating-select';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { debounce } from 'debounce';

import './responsive-navbar.scss';

export default class ResponsiveNavbar extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    showNavItemBorder: PropTypes.bool,
    showNavItemTooltip: PropTypes.bool,
    tooltipDelay: PropTypes.number,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    placeholder: PropTypes.string,
    activeKey: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.number]).isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
      ]).isRequired,
      href: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })).isRequired,
    onSelect: PropTypes.func,
    height: PropTypes.string,
    componentLeft: PropTypes.node,
    componentRight: PropTypes.node,
  }

  static defaultProps = {
    id: 'responsive-navbar',
    className: '',
    onSelect: () => {},
    showNavItemBorder: false,
    showNavItemTooltip: true,
    tooltipDelay: 2000,
    fontSize: 'inherit',
    fontWeight: 'inherit',
    placeholder: 'more...',
    height: '40px',
    componentLeft: null,
    componentRight: null,
  }

  constructor(props) {
    super(props);
    this.itemWidths = []; // store item widths here, they don't change
  }

  state = {
    isSelectVisible: false,
    lastVisibleItemIndex: -2,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('orientationchange', this.refreshLastVisibleItem); // for mobile support
    this.refreshLastVisibleItem();
  }

  componentDidUpdate(prevProps, prevState) {
    // Refresh visible items if values change
    if (
      this.state.isSelectVisible !== prevState.isSelectVisible ||
      this.state.lastVisibleItemIndex !== prevState.lastVisibleItemIndex
    ) {
      this.refreshLastVisibleItem();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('orientationchange', this.refreshLastVisibleItem); // for mobile support
  }

  getLastVisibleItemIndex = () => {
    const navBarWidth = this.navbarContainerRef ? this.navbarContainerRef.offsetWidth : 0;
    const selectWidth = this.selectContainerRef ? this.selectContainerRef.offsetWidth : 0;
    const componentLeftWidth = this.componentLeftContainerRef ? this.componentLeftContainerRef.offsetWidth : 0; // eslint-disable-line
    const componentRightWidth = this.componentRightContainerRef ? this.componentRightContainerRef.offsetWidth : 0; // eslint-disable-line

    let remainingWidth = navBarWidth - selectWidth - componentLeftWidth - componentRightWidth;
    let lastVisible = 0;

    for (let i = 0; i < this.props.list.length; i += 1) {
      remainingWidth -= this.itemWidths[i];
      if (remainingWidth < 0) {
        lastVisible -= 1;
        break;
      }
      lastVisible += 1;
    }

    return lastVisible;
  }

  handleResize = () => debounce(this.refreshLastVisibleItem(), 300);

  refreshLastVisibleItem = () => {
    const lastVisibleItemIndex = this.getLastVisibleItemIndex();
    if (this.state.lastVisibleItemIndex !== lastVisibleItemIndex) {
      this.setState({
        isSelectVisible: this.props.list.length > (lastVisibleItemIndex + 1),
        lastVisibleItemIndex,
      });
    }
  }

  tooltipWrapper = (node, index, tooltipContent) => {
    const tooltip = <Tooltip id="tooltip">{tooltipContent}</Tooltip>;
    return !this.props.showNavItemTooltip ? node :
    <OverlayTrigger placement="bottom" key={index} overlay={tooltip} delayShow={this.props.tooltipDelay}>
      {node}
    </OverlayTrigger>;
  }

  // Handle react-select onChange
  handleOnChange = (value) => {
    this.props.onSelect(value);
  }

  // Handle navbar onClick
  handleOnClick = href => () => {
    this.props.onSelect(href);
  }

  // Render navbar item
  navbarItem = (item, index, className) => {
    const {
      activeKey,
      fontWeight,
      fontSize,
      height,
    } = this.props;

    // resolve activeKeyIndex
    let activeKeyIndex = activeKey;
    if (typeof activeKey === 'object') {
      activeKeyIndex = this.activeItemIndex(activeKey);
    }
    return (
      <button
        className={index === activeKeyIndex ? `${className} selected-border` : `${className}`}
        style={{ fontWeight, fontSize, minHeight: height }}
        id={item.id || `navItem${String(index)}`}
        key={item.id || `navitem${String(index)}`}
        onClick={this.handleOnClick(item.href)}
        ref={(r) => {
          if (r && !this.itemWidths[index]) this.itemWidths[index] = r.offsetWidth;
        }}
      >
        <span className="responsive-navbar-item-text">{item.name}</span>
      </button>
    );
  }

  doLineCount = () => {
    const { list } = this.props;
    return list.some(item => typeof (item.name) !== 'string');
  }

  // Render navbar
  navbar = () => {
    const {
      id,
      className,
      list,
      showNavItemBorder,
      height,
    } = this.props;
    const visibleList = this.state.lastVisibleItemIndex > -2 ?
      list.slice(0, this.state.lastVisibleItemIndex + 1) :
      list;
    const itemClassName = showNavItemBorder ?
      'responsive-navbar-item inactive-border' :
      'responsive-navbar-item no-item-border';
    const items = visibleList.map((item, index) => (
      this.tooltipWrapper(this.navbarItem(item, index, itemClassName), index, item.name)
    ));
    const lineCount = this.doLineCount();
    const navbarStyle = {
      minHeight: height,
    };
    if (height.slice(-2) === 'px' && lineCount) {
      const heightPx = parseInt(height.slice(0, -2), 10);
      navbarStyle.lineHeight = `${(heightPx - 4)}px`;
    }
    return (
      <div
        id={`${id}-container`}
        ref={(r) => { this.navbarContainerRef = r; }}
        className={`responsive-navbar-container ${className}`}
        style={navbarStyle}
      >
        {items}
        {this.combobox()}
        {this.componentLeft()}
        {this.componentRight()}
      </div>
    );
  }

  resolveActiveItemFromOptions = (selectOptions) => {
    const { activeKey } = this.props;
    let activeItem = selectOptions.find(opts => opts.value === activeKey);
    if (!activeItem) {
      activeItem = selectOptions.find(opts => opts.value === activeKey.value);
    }
    return activeItem;
  }

  activeItemIndex = (activeItem) => {
    const { list } = this.props;
    if (!activeItem) return null;
    return list.findIndex(item => item.href === activeItem.value);
  }

  // Render combobox, when all items do not fit
  combobox = () => {
    const {
      id,
      list,
      fontSize,
      fontWeight,
      placeholder,
      showNavItemBorder,
    } = this.props;
    if (!this.state.isSelectVisible) {
      // return null if all nav items are visible
      return null;
    }

    // slice nav items list and show invisible items in the combobox
    const navList = this.state.lastVisibleItemIndex > -2 ?
      list.slice(this.state.lastVisibleItemIndex + 1) : list;
    const selectOptions = navList.map(item => ({
      value: item.href,
      label: item.name,
    }));
    const lineCountNeeded = this.doLineCount();
    const customLineCount = lineCountNeeded ? 'line-count' : '';
    const customBorderClass = lineCountNeeded ? 'selected-border line-count' : 'selected-border';
    const customInactiveBorder = lineCountNeeded ? 'inactive-border line-count' : 'inactive-border';
    const inactiveBorder = showNavItemBorder ? customInactiveBorder : customLineCount;
    // Resolve activeItem
    const activeItem = this.resolveActiveItemFromOptions(selectOptions);
    const activeItemIndex = this.activeItemIndex(activeItem);
    const borderClass = activeItemIndex >= (this.state.lastVisibleItemIndex + 1) ? customBorderClass : inactiveBorder; // eslint-disable-line

    return (
      <div
        id={`${id}-select`}
        className={`responsive-navbar-select ${borderClass}`}
        style={{ fontWeight, fontSize }}
        ref={(r) => { this.selectContainerRef = r; }}
      >
        <FloatingSelect
          name={`${id}-select-component`}
          value={activeItem || ''}
          isClearable={false}
          placeholder={placeholder}
          options={selectOptions}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }

  // Render custom left side component
  componentLeft = () => {
    const { componentLeft } = this.props;
    if (!componentLeft) return null;
    return (
      <div
        className="responsive-navbar-container-left"
        ref={(r) => { this.componentLeftContainerRef = r; }}
      >
        { componentLeft }
      </div>
    );
  }

  // Render custom right side component
  componentRight = () => {
    const { componentRight } = this.props;
    if (!componentRight) return null;
    return (
      <div
        className="responsive-navbar-container-right"
        ref={(r) => { this.componentRightContainerRef = r; }}
      >
        { componentRight }
      </div>
    );
  }

  render() {
    return this.navbar();
  }
}
