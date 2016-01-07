DateTimePicker = new React.createClass({
  getDefaultProps() {
    return {
      showMeridian: false,
      autoclose: true,
      todayBtn: true
    }
  },

  componentDidMount() {
    $(".form_datetime").datetimepicker({
      format: this.props.dateFormat,
      showMeridian: this.props.showMeridian,
      autoclose: this.props.autoclose,
      todayBtn: this.props.todayBtn
    });
  },

  render() {
    return(
      <div className="input-group date form_datetime" startDate={this.props.startDate} {...this.props.divOther}>
        <input size="16" type="text" value="" className="form-control" id="datePicker" {...this.props.inputOther} />
        <span className="input-group-addon"><i className="fa fa-times"></i></span>
        <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
      </div>
    );
  }
});
