var ReactDebugMixin = {

  componentWillMount: function () {
    console.group(this.constructor.displayName, ' componentWillMount')
    this.updateCount = 0
  },

  componentDidMount: function () {
    console.groupEnd(this.constructor.displayName + ' componentWillMount', this.props)
    console.groupCollapsed(this.constructor.displayName + ' componentDidMount', this.props)
    console.groupEnd(this.constructor.displayName + ' componentDidMount', this.props)
  },

  componentWillReceiveProps: function (nextProps) {
    console.groupCollapsed(this.constructor.displayName + ' componentWillReceiveProps')
    console.log('nextProps: %O', nextProps)
  },

  componentWillUpdate: function (nextProps, nextState) {
    console.groupCollapsed(this.constructor.displayName + ' componentWillUpdate', nextState)
    console.log('nextProps: %O', nextProps)
    console.log('nextState: %O', nextState)
  },

  componentDidUpdate: function (prevProps, prevState) {
    console.groupEnd(this.constructor.displayName + ' componentWillReceiveProps')
    console.groupEnd(this.constructor.displayName + ' componentWillUpdate')
    console.groupCollapsed(this.constructor.displayName + ' componentDidUpdate', prevState)
    this.updateCount = this.updateCount + 1
    console.log('UpdateCounter: ' + this.updateCount)
    console.log('prevProps: %O', prevProps)
    console.log('prevState: %O', prevState)
    console.groupEnd(this.constructor.displayName + 'componentDidUpdate')
  },

  componentWillUnmount: function () {
    console.groupCollapsed(this.constructor.displayName + ' componentDidUnmount')
    console.log('Total UpdateCounter: ' + this.updateCount)
    console.groupEnd(this.constructor.displayName + ' componentDidUnmount')
  }

}

module.exports = ReactDebugMixin
