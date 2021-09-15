import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  }

  onSubmit(formVals) {
    console.log(formVals);
  }

  render() {
    return (
      <form
        className='ui form'
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errs = {};
  if (!formValues.title) {
    errs.title = 'Title can not be blank';
  }
  if (!formValues.description) {
    errs.description = 'Description can not be blank';
  }
  return errs;
};

export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);
