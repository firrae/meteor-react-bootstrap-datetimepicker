DateTimePicker = new React.createClass({
  componentDidMount() {
    $(".form_datetime").datetimepicker({
      format: this.props.dateFormat,
      showMeridian: this.props.showMeridian,
      autoclose: true,
      todayBtn: true
    });
  },

  render() {
    return(
      <div className="input-group date form_datetime" startDate={this.props.startDate}>
        <input size="16" type="text" value="" className="form-control" />
        <span className="input-group-addon"><i className="fa fa-times"></i></span>
        <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
      </div>
    );
  }
});
